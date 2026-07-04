import { promises as fs } from "node:fs";
import path from "node:path";
import { SkillEvidence, SkillFile } from "@skillcheck/core";

interface LoadOptions {
  maxFiles: number;
}

const IGNORED_DIRS = new Set([
  ".git",
  ".next",
  ".turbo",
  "coverage",
  "dist",
  "node_modules",
  "vendor"
]);

const TEXT_EXTENSIONS = new Set([
  ".cjs",
  ".css",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".py",
  ".rb",
  ".sh",
  ".toml",
  ".ts",
  ".tsx",
  ".txt",
  ".yaml",
  ".yml"
]);

export async function loadEvidence(target: string, options: LoadOptions): Promise<SkillEvidence> {
  if (await exists(target)) {
    return loadLocalEvidence(target, options);
  }

  if (isGitHubTarget(target)) {
    return loadGitHubEvidence(target, options);
  }

  return loadLocalEvidence(target, options);
}

async function exists(target: string): Promise<boolean> {
  try {
    await fs.stat(path.resolve(target));
    return true;
  } catch {
    return false;
  }
}

async function loadLocalEvidence(target: string, options: LoadOptions): Promise<SkillEvidence> {
  const root = path.resolve(target);
  const stat = await fs.stat(root);
  const files = stat.isDirectory()
    ? await collectLocalFiles(root, root, options.maxFiles)
    : [{ path: path.basename(root), content: await fs.readFile(root, "utf8") }];

  return { name: path.basename(root), repository: root, files };
}

async function collectLocalFiles(root: string, current: string, maxFiles: number): Promise<SkillFile[]> {
  const entries = await fs.readdir(current, { withFileTypes: true });
  const files: SkillFile[] = [];

  for (const entry of entries) {
    if (files.length >= maxFiles) break;
    const absolute = path.join(current, entry.name);
    const relative = path.relative(root, absolute);

    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      files.push(...await collectLocalFiles(root, absolute, maxFiles - files.length));
      continue;
    }

    if (!entry.isFile()) continue;
    if (!shouldReadFile(entry.name)) continue;
    files.push({ path: relative, content: await fs.readFile(absolute, "utf8") });
  }

  return files;
}

async function loadGitHubEvidence(target: string, options: LoadOptions): Promise<SkillEvidence> {
  const parsed = parseGitHubTarget(target);
  const repoResponse = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, {
    headers: { "User-Agent": "skillcheck-cli" }
  });
  if (!repoResponse.ok) {
    throw new Error(`GitHub repo lookup failed: ${repoResponse.status} ${repoResponse.statusText}`);
  }
  const repo = await repoResponse.json() as { default_branch: string; full_name: string };
  const branch = parsed.ref ?? repo.default_branch;
  const treeResponse = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}/git/trees/${branch}?recursive=1`, {
    headers: { "User-Agent": "skillcheck-cli" }
  });
  if (!treeResponse.ok) {
    throw new Error(`GitHub tree lookup failed: ${treeResponse.status} ${treeResponse.statusText}`);
  }

  const tree = await treeResponse.json() as { tree?: Array<{ path: string; type: string; size?: number }> };
  const candidates = (tree.tree ?? [])
    .filter((item) => item.type === "blob")
    .filter((item) => shouldReadFile(item.path))
    .filter((item) => (item.size ?? 0) < 250_000)
    .slice(0, options.maxFiles);

  const files = await Promise.all(candidates.map(async (item) => {
    const rawUrl = `https://raw.githubusercontent.com/${parsed.owner}/${parsed.repo}/${branch}/${item.path}`;
    const response = await fetch(rawUrl, { headers: { "User-Agent": "skillcheck-cli" } });
    if (!response.ok) return undefined;
    return { path: item.path, content: await response.text() };
  }));

  return {
    name: repo.full_name,
    repository: `https://github.com/${repo.full_name}`,
    files: files.filter((file): file is SkillFile => Boolean(file))
  };
}

function shouldReadFile(filePath: string): boolean {
  const normalized = filePath.toLowerCase();
  const base = path.basename(normalized);
  if (base === "license" || base === "readme" || base === "skill.md") return true;
  return TEXT_EXTENSIONS.has(path.extname(normalized));
}

function isGitHubTarget(target: string): boolean {
  return /^https:\/\/github\.com\//i.test(target) || /^[\w.-]+\/[\w.-]+$/.test(target);
}

function parseGitHubTarget(target: string): { owner: string; repo: string; ref?: string } {
  if (/^[\w.-]+\/[\w.-]+$/.test(target)) {
    const [owner, repo] = target.split("/");
    return { owner, repo };
  }

  const url = new URL(target);
  const [, owner, repo, tree, ref] = url.pathname.split("/");
  if (!owner || !repo) throw new Error("Expected a GitHub repository URL.");
  return { owner, repo: repo.replace(/\.git$/, ""), ref: tree === "tree" ? ref : undefined };
}
