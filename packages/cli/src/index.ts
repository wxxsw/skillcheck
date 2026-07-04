#!/usr/bin/env node
import { scoreSkill } from "@skillcheck/core";
import { loadEvidence } from "./loader.js";
import { printReport } from "./reporter.js";

interface CliOptions {
  json: boolean;
  help: boolean;
  maxFiles: number;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command !== "scan") {
    fail(`Unknown command: ${command}`);
  }

  const { target, options } = parseScanArgs(args.slice(1));
  if (!target || options.help) {
    printHelp();
    return;
  }

  const evidence = await loadEvidence(target, { maxFiles: options.maxFiles });
  const result = scoreSkill(evidence);

  if (options.json) {
    process.stdout.write(JSON.stringify({ target, evidence: { files: evidence.files.length }, result }, null, 2));
    process.stdout.write("\n");
    return;
  }

  printReport(target, result);
}

function parseScanArgs(args: string[]): { target?: string; options: CliOptions } {
  const options: CliOptions = { json: false, help: false, maxFiles: 80 };
  let target: string | undefined;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--json") {
      options.json = true;
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--max-files") {
      const value = args[index + 1];
      if (!value || Number.isNaN(Number(value))) fail("--max-files expects a number");
      options.maxFiles = Number(value);
      index += 1;
    } else if (!target) {
      target = arg;
    } else {
      fail(`Unexpected argument: ${arg}`);
    }
  }

  return { target, options };
}

function printHelp(): void {
  process.stdout.write(`SkillCheck

Usage:
  skillcheck scan <path-or-github-url> [--json] [--max-files 80]

Examples:
  skillcheck scan ./my-skill
  skillcheck scan https://github.com/owner/repo --json

What it checks:
  - Canonical SKILL.md and trigger metadata
  - README, license, examples, and tests
  - Potential command execution, network access, secrets, and file writes
  - Claude, Codex, Cursor, Gemini, Copilot, and OpenCode portability hints
`);
}

function fail(message: string): never {
  process.stderr.write(`skillcheck: ${message}\n`);
  process.exit(1);
  throw new Error(message);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`skillcheck: ${message}\n`);
  process.exit(1);
});
