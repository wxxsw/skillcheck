export type FindingSeverity = "info" | "warn" | "danger";
export type Grade = "A" | "B" | "C" | "D";

export interface SkillFile {
  path: string;
  content: string;
}

export interface SkillEvidence {
  name?: string;
  repository?: string;
  files: SkillFile[];
}

export interface Finding {
  id: string;
  title: string;
  details: string;
  severity: FindingSeverity;
  points: number;
  category: "safety" | "docs" | "portability" | "maintenance";
}

export interface SkillScore {
  score: number;
  safety: Grade;
  docs: Grade;
  portability: Grade;
  badges: string[];
  findings: Finding[];
  summary: string;
}

const SCRIPT_EXTENSIONS = [".sh", ".py", ".js", ".mjs", ".cjs", ".ts", ".tsx", ".rb", ".pl"];
const CODE_EXEC_PATTERNS = [
  /\bchild_process\b/i,
  /\bexec(File)?\s*\(/i,
  /\bspawn\s*\(/i,
  /\beval\s*\(/i,
  /\bos\.system\s*\(/i,
  /\bsubprocess\./i,
  /\brm\s+-rf\b/i,
  /\bchmod\s+\+x\b/i
];
const NETWORK_PATTERNS = [
  /\bfetch\s*\(/i,
  /\baxios\./i,
  /\brequests\./i,
  /\bcurl\s+/i,
  /\bwget\s+/i,
  /\bhttps?:\/\//i
];
const SECRET_PATTERNS = [
  /\bprocess\.env\b/i,
  /\bos\.environ\b/i,
  /\bAPI[_-]?KEY\b/i,
  /\bTOKEN\b/i,
  /\bSECRET\b/i,
  /\bcredential/i
];
const WRITE_PATTERNS = [
  /\bwriteFile(Sync)?\s*\(/i,
  /\bappendFile(Sync)?\s*\(/i,
  /\bfs\.rm\s*\(/i,
  /\bopen\s*\([^)]*["']w/i,
  /\bapply_patch\b/i
];

export function scoreSkill(evidence: SkillEvidence): SkillScore {
  const files = evidence.files;
  const normalized = files.map((file) => ({
    path: file.path.replace(/\\/g, "/"),
    content: file.content
  }));
  const content = normalized.map((file) => file.content).join("\n");
  const paths = normalized.map((file) => file.path.toLowerCase());
  const findings: Finding[] = [];

  const skillFile = normalized.find((file) => /(^|\/)skill\.md$/i.test(file.path));
  const readme = normalized.find((file) => /(^|\/)readme\.md$/i.test(file.path));
  const hasLicense = paths.some((path) => /(^|\/)licen[sc]e(\.|$)/i.test(path));
  const hasExamples = paths.some((path) => path.includes("example") || path.includes("demo")) || /#+\s*examples?/i.test(content);
  const hasTests = paths.some((path) => path.includes("test") || path.includes("spec"));
  const hasScripts = paths.some((path) => SCRIPT_EXTENSIONS.some((ext) => path.endsWith(ext)));
  const mentionsPlatforms = detectPlatforms(content);

  if (!skillFile) {
    findings.push(finding("missing-skill-md", "Missing SKILL.md", "No canonical SKILL.md file was found.", "danger", 22, "docs"));
  } else {
    if (!/^---[\s\S]*?---/.test(skillFile.content.trim())) {
      findings.push(finding("missing-frontmatter", "Missing frontmatter", "SKILL.md should declare name and description in YAML frontmatter.", "warn", 8, "docs"));
    }
    if (!/\bdescription\s*:/i.test(skillFile.content)) {
      findings.push(finding("missing-description", "Missing trigger description", "Skills need a clear description so agents know when to use them.", "warn", 8, "docs"));
    }
    if (!/\bwhen to use\b|##\s*when\b|##\s*usage\b/i.test(skillFile.content)) {
      findings.push(finding("weak-usage-guidance", "Weak usage guidance", "The skill does not clearly explain when it should be used.", "warn", 6, "docs"));
    }
  }

  if (!readme) {
    findings.push(finding("missing-readme", "Missing README", "A README helps humans verify purpose, install steps, and trust signals.", "warn", 6, "docs"));
  }
  if (!hasLicense) {
    findings.push(finding("missing-license", "Missing license", "No license file was detected.", "warn", 6, "maintenance"));
  }
  if (!hasExamples) {
    findings.push(finding("missing-examples", "No examples detected", "No examples, demos, or example section was found.", "warn", 5, "docs"));
  }
  if (hasScripts && !hasTests) {
    findings.push(finding("missing-tests", "No tests detected", "No tests or specs were detected for helper scripts.", "info", 3, "maintenance"));
  }
  if (hasScripts) {
    findings.push(finding("script-files", "Contains executable scripts", "This skill includes script files. Review them before installation.", "warn", 8, "safety"));
  }
  if (matchesAny(content, CODE_EXEC_PATTERNS)) {
    findings.push(finding("code-exec", "Potential command execution", "Detected patterns such as exec, spawn, subprocess, eval, chmod, or rm -rf.", "danger", 18, "safety"));
  }
  if (matchesAny(content, NETWORK_PATTERNS)) {
    findings.push(finding("network-access", "Potential network access", "Detected URLs or network client patterns.", "warn", 8, "safety"));
  }
  if (matchesAny(content, SECRET_PATTERNS)) {
    findings.push(finding("secrets-access", "Mentions secrets or credentials", "Detected environment variables, API keys, tokens, or credentials.", "danger", 14, "safety"));
  }
  if (matchesAny(content, WRITE_PATTERNS)) {
    findings.push(finding("file-writes", "Potential file writes", "Detected file write or patching patterns.", "warn", 7, "safety"));
  }
  if (mentionsPlatforms.length === 0) {
    findings.push(finding("platform-unclear", "Platform support is unclear", "The skill does not mention Claude, Codex, Cursor, Gemini, Copilot, or OpenCode.", "info", 4, "portability"));
  }

  const penalty = findings.reduce((total, item) => total + item.points, 0);
  const score = clamp(100 - penalty, 0, 100);
  const safety = safetyGrade(findings);
  const docs = gradeFromScore(100 - findings.filter((item) => item.category === "docs").reduce((total, item) => total + item.points, 0));
  const portability = mentionsPlatforms.length >= 3 ? "A" : mentionsPlatforms.length === 2 ? "B" : mentionsPlatforms.length === 1 ? "C" : "D";
  const badges = buildBadges(findings, mentionsPlatforms);
  const summary = summarize(score, safety, findings);

  return { score, safety, docs, portability, badges, findings, summary };
}

export function detectPlatforms(content: string): string[] {
  const known = [
    ["Claude", /\bclaude\b/i],
    ["Codex", /\bcodex\b/i],
    ["Cursor", /\bcursor\b/i],
    ["Gemini", /\bgemini\b/i],
    ["Copilot", /\bcopilot\b/i],
    ["OpenCode", /\bopencode\b/i]
  ] as const;
  return known.filter(([, pattern]) => pattern.test(content)).map(([name]) => name);
}

function finding(
  id: string,
  title: string,
  details: string,
  severity: FindingSeverity,
  points: number,
  category: Finding["category"]
): Finding {
  return { id, title, details, severity, points, category };
}

function matchesAny(content: string, patterns: RegExp[]): boolean {
  return patterns.some((pattern) => pattern.test(content));
}

function safetyGrade(findings: Finding[]): Grade {
  const dangerous = findings.filter((item) => item.category === "safety" && item.severity === "danger").length;
  const warnings = findings.filter((item) => item.category === "safety" && item.severity === "warn").length;
  if (dangerous >= 2) return "D";
  if (dangerous === 1) return "C";
  if (warnings >= 2) return "B";
  return "A";
}

function gradeFromScore(score: number): Grade {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  return "D";
}

function buildBadges(findings: Finding[], platforms: string[]): string[] {
  const ids = new Set(findings.map((item) => item.id));
  const badges = platforms.map((platform) => `Works with ${platform}`);
  badges.push(ids.has("code-exec") ? "Runs commands" : "No command exec detected");
  badges.push(ids.has("network-access") ? "Network access" : "No network detected");
  badges.push(ids.has("secrets-access") ? "Secrets review required" : "No secrets detected");
  badges.push(ids.has("file-writes") ? "Writes files" : "No writes detected");
  return badges;
}

function summarize(score: number, safety: Grade, findings: Finding[]): string {
  const dangerCount = findings.filter((item) => item.severity === "danger").length;
  const unclearPlatform = findings.some((item) => item.id === "platform-unclear");
  if (score >= 85 && safety === "A" && !unclearPlatform) return "Clean, portable, and low-risk based on static checks.";
  if (score >= 85 && safety === "A") return "Clean and low-risk based on static checks.";
  if (dangerCount > 0) return "Useful candidate, but review dangerous findings before installing.";
  if (score >= 70) return "Promising skill with a few documentation or safety gaps.";
  return "Needs manual review before recommending to an agent.";
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
