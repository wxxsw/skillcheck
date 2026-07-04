import { Finding, SkillScore } from "@skillcheck/core";

const LABEL_WIDTH = 16;

export function printReport(target: string, result: SkillScore): void {
  const lines: string[] = [];
  lines.push("");
  lines.push("SkillCheck report");
  lines.push("=".repeat(64));
  lines.push(row("Target", target));
  lines.push(row("Score", `${result.score}/100`));
  lines.push(row("Safety", result.safety));
  lines.push(row("Docs", result.docs));
  lines.push(row("Portability", result.portability));
  lines.push(row("Summary", result.summary));
  lines.push("");
  lines.push("Badges");
  lines.push("-".repeat(64));
  for (const badge of result.badges) {
    lines.push(`- ${badge}`);
  }
  lines.push("");
  lines.push("Findings");
  lines.push("-".repeat(64));

  if (result.findings.length === 0) {
    lines.push("No findings. This skill looks clean based on static checks.");
  } else {
    for (const finding of sortFindings(result.findings)) {
      lines.push(`${symbol(finding.severity)} ${finding.title} (-${finding.points})`);
      lines.push(`  ${finding.details}`);
    }
  }

  lines.push("");
  process.stdout.write(`${lines.join("\n")}\n`);
}

function row(label: string, value: string): string {
  return `${label.padEnd(LABEL_WIDTH)} ${value}`;
}

function sortFindings(findings: Finding[]): Finding[] {
  const weight = { danger: 0, warn: 1, info: 2 } satisfies Record<Finding["severity"], number>;
  return [...findings].sort((a, b) => weight[a.severity] - weight[b.severity] || b.points - a.points);
}

function symbol(severity: Finding["severity"]): string {
  if (severity === "danger") return "!";
  if (severity === "warn") return "*";
  return "-";
}
