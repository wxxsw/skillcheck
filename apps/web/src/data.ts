export type Grade = "A" | "B" | "C" | "D";

export interface SkillEntry {
  id: string;
  name: string;
  repo: string;
  url: string;
  category: string;
  summary: string;
  platforms: string[];
  score: number;
  safety: Grade;
  docs: Grade;
  portability: Grade;
  badges: string[];
  risks: string[];
}

export const skills: SkillEntry[] = [
  {
    id: "awesome-agent-skills",
    name: "Awesome Agent Skills",
    repo: "VoltAgent/awesome-agent-skills",
    url: "https://github.com/VoltAgent/awesome-agent-skills",
    category: "Directory",
    summary: "Large multi-agent skill directory with broad platform coverage.",
    platforms: ["Claude", "Codex", "Cursor", "Gemini"],
    score: 88,
    safety: "A",
    docs: "A",
    portability: "A",
    badges: ["Curated list", "Multi-platform", "No execution detected"],
    risks: ["Quality varies across linked projects"]
  },
  {
    id: "awesome-claude-skills",
    name: "Awesome Claude Skills",
    repo: "ComposioHQ/awesome-claude-skills",
    url: "https://github.com/ComposioHQ/awesome-claude-skills",
    category: "Directory",
    summary: "Claude-focused skill index with strong discovery value.",
    platforms: ["Claude"],
    score: 82,
    safety: "A",
    docs: "A",
    portability: "C",
    badges: ["Claude first", "Directory", "No execution detected"],
    risks: ["Narrow platform focus"]
  },
  {
    id: "agent-skills",
    name: "Agent Skills",
    repo: "addyosmani/agent-skills",
    url: "https://github.com/addyosmani/agent-skills",
    category: "Engineering",
    summary: "Production-grade engineering skills for coding agents.",
    platforms: ["Claude", "Cursor"],
    score: 86,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: ["Engineering", "Examples", "Review scripts"],
    risks: ["May include executable workflows"]
  },
  {
    id: "awesome-copilot",
    name: "Awesome Copilot",
    repo: "github/awesome-copilot",
    url: "https://github.com/github/awesome-copilot",
    category: "Copilot",
    summary: "Community instructions, agents, skills, and configurations for Copilot.",
    platforms: ["Copilot"],
    score: 84,
    safety: "A",
    docs: "A",
    portability: "C",
    badges: ["Official community", "Instructions", "No execution detected"],
    risks: ["Mostly Copilot-specific"]
  },
  {
    id: "awesome-cursorrules",
    name: "Awesome Cursor Rules",
    repo: "PatrickJS/awesome-cursorrules",
    url: "https://github.com/PatrickJS/awesome-cursorrules",
    category: "Rules",
    summary: "Cursor rules collection for framework-specific coding behavior.",
    platforms: ["Cursor"],
    score: 80,
    safety: "A",
    docs: "B",
    portability: "C",
    badges: ["Cursor rules", "Framework coverage", "No execution detected"],
    risks: ["Rules are not portable skills"]
  },
  {
    id: "pm-skills",
    name: "PM Skills Marketplace",
    repo: "phuryn/pm-skills",
    url: "https://github.com/phuryn/pm-skills",
    category: "Product",
    summary: "Product management skills spanning discovery, strategy, execution, and launch.",
    platforms: ["Claude", "Codex"],
    score: 87,
    safety: "A",
    docs: "A",
    portability: "B",
    badges: ["Domain-specific", "Reusable templates", "No execution detected"],
    risks: ["Some outputs require human validation"]
  },
  {
    id: "scientific-agent-skills",
    name: "Scientific Agent Skills",
    repo: "K-Dense-AI/scientific-agent-skills",
    url: "https://github.com/K-Dense-AI/scientific-agent-skills",
    category: "Science",
    summary: "Research-oriented skills and databases for scientific agent workflows.",
    platforms: ["Claude", "Codex", "Cursor"],
    score: 79,
    safety: "B",
    docs: "B",
    portability: "A",
    badges: ["Research", "Database links", "Network review"],
    risks: ["External sources and claims need verification"]
  },
  {
    id: "power-platform-skills",
    name: "Power Platform Skills",
    repo: "microsoft/power-platform-skills",
    url: "https://github.com/microsoft/power-platform-skills",
    category: "Enterprise",
    summary: "Power Platform development plugins, skills, agents, and commands.",
    platforms: ["Copilot", "Claude"],
    score: 78,
    safety: "B",
    docs: "B",
    portability: "B",
    badges: ["Enterprise", "Commands", "Review credentials"],
    risks: ["May require Microsoft cloud credentials"]
  }
];

export const categories = ["All", ...Array.from(new Set(skills.map((skill) => skill.category)))];
