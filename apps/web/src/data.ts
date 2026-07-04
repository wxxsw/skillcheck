export type Grade = "A" | "B" | "C" | "D";
export type Language = "en" | "zh";
export type LocalizedText = Record<Language, string>;

export type CategoryId =
  | "workflow"
  | "engineering"
  | "design"
  | "research"
  | "knowledge"
  | "marketing"
  | "media"
  | "science"
  | "security"
  | "product"
  | "marketplace"
  | "context"
  | "frontend"
  | "directory";

export interface SkillEntry {
  id: string;
  name: string;
  repo: string;
  url: string;
  stars: string;
  category: CategoryId;
  summary: LocalizedText;
  signal: LocalizedText;
  platforms: string[];
  score: number;
  safety: Grade;
  docs: Grade;
  portability: Grade;
  badges: LocalizedText[];
  risks: LocalizedText[];
}

export interface SkillInsight {
  intent: LocalizedText;
  strengths: LocalizedText[];
  watchouts: LocalizedText[];
}

export const categoryLabels: Record<CategoryId, LocalizedText> = {
  workflow: { en: "Workflow", zh: "工作流" },
  engineering: { en: "Engineering", zh: "工程" },
  design: { en: "Design", zh: "设计" },
  research: { en: "Research", zh: "研究" },
  knowledge: { en: "Knowledge", zh: "知识管理" },
  marketing: { en: "Marketing", zh: "增长营销" },
  media: { en: "Media", zh: "媒体创作" },
  science: { en: "Science", zh: "科学研究" },
  security: { en: "Security", zh: "安全" },
  product: { en: "Product", zh: "产品" },
  marketplace: { en: "Marketplace", zh: "技能市场" },
  context: { en: "Context", zh: "上下文" },
  frontend: { en: "Frontend", zh: "前端" },
  directory: { en: "Directory", zh: "目录" }
};

export const categoryDescriptions: Record<CategoryId, LocalizedText> = {
  workflow: { en: "Planning, specs, and long-running agent work.", zh: "计划、规格和长任务工作流。" },
  engineering: { en: "Coding, repo context, and engineering playbooks.", zh: "编码、仓库上下文和工程手册。" },
  design: { en: "UI quality, taste, and frontend polish.", zh: "UI 质量、设计品味和前端打磨。" },
  research: { en: "Fresh information, sources, and research tools.", zh: "近期信息、来源和研究工具。" },
  knowledge: { en: "Notes, vaults, and local knowledge workflows.", zh: "笔记、知识库和本地知识工作流。" },
  marketing: { en: "SEO, copy, analytics, and growth work.", zh: "SEO、文案、分析和增长工作。" },
  media: { en: "Video, assets, and creative pipelines.", zh: "视频、素材和创作管线。" },
  science: { en: "Scientific research and evidence-heavy domains.", zh: "科学研究和高证据要求领域。" },
  security: { en: "Security workflows with dual-use risk.", zh: "带双用途风险的安全工作流。" },
  product: { en: "PM templates, discovery, strategy, and GTM.", zh: "产品模板、发现、战略和 GTM。" },
  marketplace: { en: "Large packs, installers, and mixed skill libraries.", zh: "大型包、安装器和混合技能库。" },
  context: { en: "Memory, routing, hooks, and context control.", zh: "记忆、路由、hooks 和上下文控制。" },
  frontend: { en: "Frontend libraries, examples, and UI implementation.", zh: "前端库、示例和 UI 实现。" },
  directory: { en: "Discovery lists and multi-platform indexes.", zh: "发现列表和多平台索引。" }
};

export const skills: SkillEntry[] = [
  {
    id: "superpowers",
    name: "Superpowers",
    repo: "obra/superpowers",
    url: "https://github.com/obra/superpowers",
    stars: "245k",
    category: "workflow",
    summary: {
      en: "A skill framework for running a repeatable software workflow.",
      zh: "用一套技能跑完整的软件开发流程。"
    },
    signal: {
      en: "Repeatable workflow",
      zh: "可重复的工作流"
    },
    platforms: ["Claude", "Codex", "Cursor", "OpenCode"],
    score: 84,
    safety: "B",
    docs: "A",
    portability: "A",
    badges: [
      { en: "Methodology", zh: "方法论" },
      { en: "Shell review", zh: "Shell 审查" },
      { en: "Multi-platform", zh: "多平台" }
    ],
    risks: [
      {
        en: "Check what the installer changes on your machine",
        zh: "先看安装器会改哪些本地文件"
      }
    ]
  },
  {
    id: "graphify",
    name: "Graphify",
    repo: "Graphify-Labs/graphify",
    url: "https://github.com/Graphify-Labs/graphify",
    stars: "77k",
    category: "engineering",
    summary: {
      en: "Turns a repo into a graph you can search and ask questions about.",
      zh: "把仓库变成可搜索、可提问的知识图谱。"
    },
    signal: {
      en: "Repo context",
      zh: "仓库上下文"
    },
    platforms: ["Claude", "Codex", "Cursor", "Gemini", "OpenCode"],
    score: 81,
    safety: "B",
    docs: "A",
    portability: "A",
    badges: [
      { en: "Knowledge graph", zh: "知识图谱" },
      { en: "Local index", zh: "本地索引" },
      { en: "Dependency review", zh: "依赖审查" }
    ],
    risks: [
      {
        en: "Review index size, parser dependencies, and where data is kept",
        zh: "检查索引大小、解析器依赖和数据保存位置"
      }
    ]
  },
  {
    id: "agent-skills",
    name: "Agent Skills",
    repo: "addyosmani/agent-skills",
    url: "https://github.com/addyosmani/agent-skills",
    stars: "68k",
    category: "engineering",
    summary: {
      en: "Practical coding-agent skills for everyday engineering work.",
      zh: "适合日常工程工作的编程 Agent 技能。"
    },
    signal: {
      en: "Engineering playbooks",
      zh: "工程手册"
    },
    platforms: ["Claude", "Cursor"],
    score: 86,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Engineering", zh: "工程" },
      { en: "Examples", zh: "示例" },
      { en: "Review scripts", zh: "脚本审查" }
    ],
    risks: [
      {
        en: "Review any scripts before running them",
        zh: "运行前先审查脚本"
      }
    ]
  },
  {
    id: "taste-skill",
    name: "Taste Skill",
    repo: "Leonxlnx/taste-skill",
    url: "https://github.com/Leonxlnx/taste-skill",
    stars: "55k",
    category: "design",
    summary: {
      en: "A design-taste guide that helps agents avoid generic UI output.",
      zh: "帮助 Agent 少做模板化 UI，多一点设计判断。"
    },
    signal: {
      en: "Clear design promise",
      zh: "清楚的设计承诺"
    },
    platforms: ["Claude", "Codex"],
    score: 83,
    safety: "B",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Frontend", zh: "前端" },
      { en: "Taste rules", zh: "品味规则" },
      { en: "Example quality", zh: "示例质量" }
    ],
    risks: [
      {
        en: "Needs examples that prove the design advice works",
        zh: "需要示例证明设计建议真的有效"
      }
    ]
  },
  {
    id: "last30days-skill",
    name: "Last 30 Days Skill",
    repo: "mvanhorn/last30days-skill",
    url: "https://github.com/mvanhorn/last30days-skill",
    stars: "48k",
    category: "research",
    summary: {
      en: "Researches what changed recently across social sites and the web.",
      zh: "追踪社交平台和网页上的近期变化。"
    },
    signal: {
      en: "Recent-source research",
      zh: "近期来源研究"
    },
    platforms: ["Claude", "OpenClaw"],
    score: 76,
    safety: "B",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Web sources", zh: "网页来源" },
      { en: "API review", zh: "API 审查" },
      { en: "Attribution", zh: "来源标注" }
    ],
    risks: [
      {
        en: "Check API keys, rate limits, and source citations",
        zh: "检查 API Key、限流和引用来源"
      }
    ]
  },
  {
    id: "obsidian-skills",
    name: "Obsidian Skills",
    repo: "kepano/obsidian-skills",
    url: "https://github.com/kepano/obsidian-skills",
    stars: "39k",
    category: "knowledge",
    summary: {
      en: "Helps agents work with Obsidian vaults and open note formats.",
      zh: "帮助 Agent 处理 Obsidian 知识库和开放笔记格式。"
    },
    signal: {
      en: "Local knowledge workflows",
      zh: "本地知识库工作流"
    },
    platforms: ["Claude", "Codex", "OpenCode"],
    score: 88,
    safety: "A",
    docs: "B",
    portability: "A",
    badges: [
      { en: "Markdown", zh: "Markdown" },
      { en: "Local files", zh: "本地文件" },
      { en: "Vault review", zh: "知识库审查" }
    ],
    risks: [
      {
        en: "Check when it writes to your vault",
        zh: "确认它什么时候会写入你的知识库"
      }
    ]
  },
  {
    id: "marketing-skills",
    name: "Marketing Skills",
    repo: "coreyhaines31/marketingskills",
    url: "https://github.com/coreyhaines31/marketingskills",
    stars: "36k",
    category: "marketing",
    summary: {
      en: "Marketing skills for CRO, copy, SEO, analytics, and growth work.",
      zh: "覆盖转化优化、文案、SEO、分析和增长的营销技能。"
    },
    signal: {
      en: "Marketing workflows",
      zh: "营销工作流"
    },
    platforms: ["Claude", "Codex"],
    score: 82,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Growth", zh: "增长" },
      { en: "Analytics", zh: "分析" },
      { en: "Credential review", zh: "凭证审查" }
    ],
    risks: [
      {
        en: "Check analytics credentials and data-source assumptions",
        zh: "检查分析工具凭证和数据来源假设"
      }
    ]
  },
  {
    id: "openmontage",
    name: "OpenMontage",
    repo: "calesthio/OpenMontage",
    url: "https://github.com/calesthio/OpenMontage",
    stars: "32k",
    category: "media",
    summary: {
      en: "A video-production system built from agent pipelines, tools, and skills.",
      zh: "用 Agent 管线、工具和技能搭起来的视频制作系统。"
    },
    signal: {
      en: "Creative pipeline",
      zh: "创作管线"
    },
    platforms: ["Claude", "Cursor", "Copilot"],
    score: 70,
    safety: "C",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Media APIs", zh: "媒体 API" },
      { en: "Heavy deps", zh: "重依赖" },
      { en: "License review", zh: "许可审查" }
    ],
    risks: [
      {
        en: "Review license terms, media tools, paid APIs, and generation cost",
        zh: "审查许可证、媒体工具、付费 API 和生成成本"
      }
    ]
  },
  {
    id: "scientific-agent-skills",
    name: "Scientific Agent Skills",
    repo: "K-Dense-AI/scientific-agent-skills",
    url: "https://github.com/K-Dense-AI/scientific-agent-skills",
    stars: "30k",
    category: "science",
    summary: {
      en: "Research skills for biology, chemistry, medicine, and drug discovery.",
      zh: "面向生物、化学、医学和药物发现的研究技能。"
    },
    signal: {
      en: "Evidence-heavy domain",
      zh: "证据要求高"
    },
    platforms: ["Claude", "Codex", "Cursor"],
    score: 79,
    safety: "B",
    docs: "B",
    portability: "A",
    badges: [
      { en: "Research", zh: "研究" },
      { en: "Database links", zh: "数据库链接" },
      { en: "Citation review", zh: "引用审查" }
    ],
    risks: [
      {
        en: "Verify databases, citations, and domain disclaimers",
        zh: "核对数据库来源、引用和领域免责声明"
      }
    ]
  },
  {
    id: "planning-with-files",
    name: "Planning With Files",
    repo: "OthmanAdi/planning-with-files",
    url: "https://github.com/OthmanAdi/planning-with-files",
    stars: "24k",
    category: "workflow",
    summary: {
      en: "Keeps long agent tasks on track with Markdown plan files.",
      zh: "用 Markdown 计划文件管理长任务。"
    },
    signal: {
      en: "Plans survive context loss",
      zh: "计划不怕上下文丢失"
    },
    platforms: ["Claude", "Codex", "Cursor", "OpenCode"],
    score: 85,
    safety: "B",
    docs: "A",
    portability: "A",
    badges: [
      { en: "File writes", zh: "文件写入" },
      { en: "Long-running", zh: "长任务" },
      { en: "Completion gates", zh: "完成门槛" }
    ],
    risks: [
      {
        en: "Check where plan files are written",
        zh: "确认计划文件会写到哪里"
      }
    ]
  },
  {
    id: "cybersecurity-skills",
    name: "Cybersecurity Skills",
    repo: "mukul975/Anthropic-Cybersecurity-Skills",
    url: "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
    stars: "24k",
    category: "security",
    summary: {
      en: "Cybersecurity skills organized around MITRE and NIST-style frameworks.",
      zh: "按 MITRE/NIST 风格框架组织的网络安全技能。"
    },
    signal: {
      en: "Dual-use review",
      zh: "双用途审查"
    },
    platforms: ["Claude", "Codex", "Cursor", "Copilot", "Gemini"],
    score: 68,
    safety: "C",
    docs: "A",
    portability: "A",
    badges: [
      { en: "Dual-use", zh: "双用途" },
      { en: "Framework mapped", zh: "框架映射" },
      { en: "Authorization review", zh: "授权审查" }
    ],
    risks: [
      {
        en: "Needs clear lab-only rules and dangerous-command checks",
        zh: "需要明确实验环境规则和危险命令检查"
      }
    ]
  },
  {
    id: "pm-skills",
    name: "PM Skills Marketplace",
    repo: "phuryn/pm-skills",
    url: "https://github.com/phuryn/pm-skills",
    stars: "22k",
    category: "product",
    summary: {
      en: "Product skills for discovery, strategy, execution, launch, and growth.",
      zh: "覆盖发现、战略、执行、发布和增长的产品技能。"
    },
    signal: {
      en: "Structured PM work",
      zh: "结构化产品工作"
    },
    platforms: ["Claude", "Codex"],
    score: 87,
    safety: "A",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Domain-specific", zh: "领域专用" },
      { en: "Reusable templates", zh: "可复用模板" },
      { en: "No execution detected", zh: "未发现执行行为" }
    ],
    risks: [
      {
        en: "Use the outputs as drafts, not final decisions",
        zh: "把输出当草稿，不要直接当最终决策"
      }
    ]
  },
  {
    id: "claude-skills",
    name: "Claude Skills",
    repo: "alirezarezvani/claude-skills",
    url: "https://github.com/alirezarezvani/claude-skills",
    stars: "19k",
    category: "marketplace",
    summary: {
      en: "A large skill library that mixes agents, commands, scripts, and plugins.",
      zh: "大型技能库，混合了 agents、commands、scripts 和 plugins。"
    },
    signal: {
      en: "Marketplace-scale library",
      zh: "市场级技能库"
    },
    platforms: ["Claude", "Codex", "Cursor", "Gemini"],
    score: 72,
    safety: "C",
    docs: "B",
    portability: "A",
    badges: [
      { en: "Installer", zh: "安装器" },
      { en: "Scripts", zh: "脚本" },
      { en: "License review", zh: "许可审查" }
    ],
    risks: [
      {
        en: "Check installers, scripts, naming conflicts, and licenses",
        zh: "检查安装器、脚本、重名冲突和许可证"
      }
    ]
  },
  {
    id: "context-mode",
    name: "Context Mode",
    repo: "mksglu/context-mode",
    url: "https://github.com/mksglu/context-mode",
    stars: "18k",
    category: "context",
    summary: {
      en: "Helps agents manage context with memory, routing, MCP, and hooks.",
      zh: "用记忆、路由、MCP 和 hooks 帮 Agent 管理上下文。"
    },
    signal: {
      en: "Context control",
      zh: "上下文控制"
    },
    platforms: ["Claude", "Codex", "Cursor", "Copilot", "OpenCode"],
    score: 74,
    safety: "B",
    docs: "B",
    portability: "A",
    badges: [
      { en: "Hooks", zh: "Hooks" },
      { en: "MCP", zh: "MCP" },
      { en: "Persistence", zh: "持久化" }
    ],
    risks: [
      {
        en: "Review hook permissions and saved memory locations",
        zh: "审查 hook 权限和记忆保存位置"
      }
    ]
  },
  {
    id: "notebooklm-py",
    name: "NotebookLM Py",
    repo: "teng-lin/notebooklm-py",
    url: "https://github.com/teng-lin/notebooklm-py",
    stars: "17k",
    category: "research",
    summary: {
      en: "An unofficial NotebookLM API and CLI that agents can use.",
      zh: "给 Agent 使用的非官方 NotebookLM API 和 CLI。"
    },
    signal: {
      en: "Unofficial API",
      zh: "非官方 API"
    },
    platforms: ["Claude", "Codex", "OpenClaw"],
    score: 71,
    safety: "C",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Unofficial API", zh: "非官方 API" },
      { en: "Auth review", zh: "认证审查" },
      { en: "CLI", zh: "CLI" }
    ],
    risks: [
      {
        en: "Check account risk, auth handling, and data export",
        zh: "检查账号风险、认证处理和数据导出"
      }
    ]
  },
  {
    id: "gsap-skills",
    name: "GSAP Skills",
    repo: "greensock/gsap-skills",
    url: "https://github.com/greensock/gsap-skills",
    stars: "10k",
    category: "frontend",
    summary: {
      en: "Official GSAP skills for animation patterns and plugin usage.",
      zh: "官方 GSAP 技能，覆盖动画模式和插件用法。"
    },
    signal: {
      en: "Vendor-authored skill",
      zh: "厂商官方技能"
    },
    platforms: ["Claude", "Cursor", "Codex"],
    score: 91,
    safety: "A",
    docs: "A",
    portability: "A",
    badges: [
      { en: "Official", zh: "官方" },
      { en: "Frontend", zh: "前端" },
      { en: "Examples", zh: "示例" }
    ],
    risks: [
      {
        en: "Keep examples aligned with current GSAP versions",
        zh: "让示例跟当前 GSAP 版本保持一致"
      }
    ]
  },
  {
    id: "claude-seo",
    name: "Claude SEO",
    repo: "AgriciDaniel/claude-seo",
    url: "https://github.com/AgriciDaniel/claude-seo",
    stars: "10k",
    category: "marketing",
    summary: {
      en: "An SEO toolkit with sub-skills, reports, and optional services.",
      zh: "包含子技能、报告和可选服务的 SEO 工具包。"
    },
    signal: {
      en: "SEO operating system",
      zh: "SEO 操作系统"
    },
    platforms: ["Claude"],
    score: 73,
    safety: "C",
    docs: "B",
    portability: "C",
    badges: [
      { en: "SEO", zh: "SEO" },
      { en: "Paid APIs", zh: "付费 API" },
      { en: "Reports", zh: "报告" }
    ],
    risks: [
      {
        en: "Review search-tool credentials and source freshness",
        zh: "审查搜索工具凭证和来源时效性"
      }
    ]
  },
  {
    id: "cc-sdd",
    name: "CC SDD",
    repo: "gotalab/cc-sdd",
    url: "https://github.com/gotalab/cc-sdd",
    stars: "3.5k",
    category: "workflow",
    summary: {
      en: "A spec-driven workflow for turning approved plans into code.",
      zh: "把已批准计划转成代码的规格驱动工作流。"
    },
    signal: {
      en: "Spec to code",
      zh: "规格到代码"
    },
    platforms: ["Claude", "Codex", "Cursor", "Copilot", "Gemini", "OpenCode"],
    score: 84,
    safety: "B",
    docs: "A",
    portability: "A",
    badges: [
      { en: "SDD", zh: "SDD" },
      { en: "Traceability", zh: "可追溯" },
      { en: "Multi-platform", zh: "多平台" }
    ],
    risks: [
      {
        en: "Check that generated tasks still match the approved spec",
        zh: "检查生成任务是否仍符合已批准规格"
      }
    ]
  },
  {
    id: "hallmark",
    name: "Hallmark",
    repo: "Nutlope/hallmark",
    url: "https://github.com/Nutlope/hallmark",
    stars: "3.5k",
    category: "design",
    summary: {
      en: "A design-quality skill for avoiding generic AI-built interfaces.",
      zh: "帮助避免模板化 AI 界面的设计质量技能。"
    },
    signal: {
      en: "Design guardrails",
      zh: "设计护栏"
    },
    platforms: ["Claude", "Codex", "Cursor"],
    score: 89,
    safety: "A",
    docs: "B",
    portability: "A",
    badges: [
      { en: "Design", zh: "设计" },
      { en: "No exec", zh: "无执行" },
      { en: "Portable", zh: "可迁移" }
    ],
    risks: [
      {
        en: "Needs before-and-after examples",
        zh: "需要前后对比示例"
      }
    ]
  },
  {
    id: "awesome-agent-skills",
    name: "Awesome Agent Skills",
    repo: "VoltAgent/awesome-agent-skills",
    url: "https://github.com/VoltAgent/awesome-agent-skills",
    stars: "27k",
    category: "directory",
    summary: {
      en: "A directory of skills for Claude Code, Codex, Gemini CLI, and Cursor.",
      zh: "面向 Claude Code、Codex、Gemini CLI 和 Cursor 的技能目录。"
    },
    signal: {
      en: "Discovery baseline",
      zh: "发现基线"
    },
    platforms: ["Claude", "Codex", "Cursor", "Gemini"],
    score: 88,
    safety: "A",
    docs: "A",
    portability: "A",
    badges: [
      { en: "Curated list", zh: "精选列表" },
      { en: "Multi-platform", zh: "多平台" },
      { en: "No execution detected", zh: "未发现执行行为" }
    ],
    risks: [
      {
        en: "Linked projects still need their own review",
        zh: "链接项目仍然需要单独审查"
      }
    ]
  }
];

export const categories = Array.from(new Set(skills.map((skill) => skill.category)));

export const skillInsights: Record<string, SkillInsight> = {
  "superpowers": {
    intent: { en: "Run a stricter software-development workflow", zh: "运行更严格的软件开发流程" },
    strengths: [
      { en: "Repeatable process", zh: "流程可重复" },
      { en: "Multi-platform", zh: "多平台可用" },
      { en: "Strong methodology", zh: "方法论清晰" }
    ],
    watchouts: [
      { en: "Installer behavior", zh: "安装器行为" },
      { en: "Local file changes", zh: "本地文件改动" },
      { en: "Shell scripts", zh: "Shell 脚本" }
    ]
  },
  "graphify": {
    intent: { en: "Ask questions across a large codebase", zh: "对大型代码库做问答" },
    strengths: [
      { en: "Knowledge graph", zh: "知识图谱" },
      { en: "Repo-wide context", zh: "仓库级上下文" },
      { en: "Multi-source parsing", zh: "多来源解析" }
    ],
    watchouts: [
      { en: "Local index size", zh: "本地索引大小" },
      { en: "Parser dependencies", zh: "解析器依赖" },
      { en: "Data retention", zh: "数据保存位置" }
    ]
  },
  "agent-skills": {
    intent: { en: "Improve common coding-agent workflows", zh: "改进常见编程 Agent 工作流" },
    strengths: [
      { en: "Practical playbooks", zh: "实用手册" },
      { en: "Engineering focus", zh: "工程导向" },
      { en: "Clear examples", zh: "示例清楚" }
    ],
    watchouts: [
      { en: "Executable steps", zh: "可执行步骤" },
      { en: "Script review", zh: "脚本审查" }
    ]
  },
  "taste-skill": {
    intent: { en: "Make AI-built UI feel less generic", zh: "让 AI 生成 UI 少一点模板感" },
    strengths: [
      { en: "Narrow promise", zh: "目标很聚焦" },
      { en: "Design taste", zh: "设计品味" },
      { en: "Frontend-friendly", zh: "适合前端" }
    ],
    watchouts: [
      { en: "Needs proof", zh: "需要效果证明" },
      { en: "Subjective guidance", zh: "主观性较强" }
    ]
  },
  "last30days-skill": {
    intent: { en: "Research what changed recently", zh: "研究最近发生了什么" },
    strengths: [
      { en: "Fresh sources", zh: "来源新鲜" },
      { en: "Web research", zh: "网页研究" },
      { en: "Attribution focus", zh: "重视引用" }
    ],
    watchouts: [
      { en: "API keys", zh: "API Key" },
      { en: "Rate limits", zh: "限流" },
      { en: "Citation quality", zh: "引用质量" }
    ]
  },
  "obsidian-skills": {
    intent: { en: "Work with a local Obsidian vault", zh: "处理本地 Obsidian 知识库" },
    strengths: [
      { en: "Open formats", zh: "开放格式" },
      { en: "Local-first", zh: "本地优先" },
      { en: "Markdown-native", zh: "Markdown 原生" }
    ],
    watchouts: [
      { en: "Vault writes", zh: "知识库写入" },
      { en: "Permission scope", zh: "权限范围" }
    ]
  },
  "marketing-skills": {
    intent: { en: "Draft growth, SEO, copy, and analytics work", zh: "生成增长、SEO、文案和分析工作草稿" },
    strengths: [
      { en: "Growth workflows", zh: "增长工作流" },
      { en: "Reusable templates", zh: "可复用模板" },
      { en: "Broad marketing coverage", zh: "营销覆盖广" }
    ],
    watchouts: [
      { en: "Analytics credentials", zh: "分析工具凭证" },
      { en: "Source assumptions", zh: "来源假设" },
      { en: "Human validation", zh: "人工校验" }
    ]
  },
  "openmontage": {
    intent: { en: "Build agent-assisted video workflows", zh: "搭建 Agent 辅助视频工作流" },
    strengths: [
      { en: "Creative pipeline", zh: "创作管线" },
      { en: "Media tooling", zh: "媒体工具" },
      { en: "End-to-end system", zh: "端到端系统" }
    ],
    watchouts: [
      { en: "Heavy dependencies", zh: "重依赖" },
      { en: "Paid APIs", zh: "付费 API" },
      { en: "License terms", zh: "许可证条款" }
    ]
  },
  "scientific-agent-skills": {
    intent: { en: "Support scientific literature and database research", zh: "辅助科学文献和数据库研究" },
    strengths: [
      { en: "Domain-specific", zh: "领域专用" },
      { en: "Citation-aware", zh: "重视引用" },
      { en: "Database links", zh: "数据库链接" }
    ],
    watchouts: [
      { en: "Database provenance", zh: "数据库来源" },
      { en: "Medical disclaimers", zh: "医学免责声明" },
      { en: "Benchmark evidence", zh: "Benchmark 证据" }
    ]
  },
  "planning-with-files": {
    intent: { en: "Keep long tasks alive with plan files", zh: "用计划文件承接长任务" },
    strengths: [
      { en: "Context recovery", zh: "上下文恢复" },
      { en: "Markdown plans", zh: "Markdown 计划" },
      { en: "Completion gates", zh: "完成门槛" }
    ],
    watchouts: [
      { en: "File write scope", zh: "文件写入范围" },
      { en: "Plan location", zh: "计划文件位置" }
    ]
  },
  "cybersecurity-skills": {
    intent: { en: "Structure security analysis in controlled environments", zh: "在受控环境中组织安全分析" },
    strengths: [
      { en: "Framework mapped", zh: "框架映射" },
      { en: "Security coverage", zh: "安全覆盖广" },
      { en: "Authorization language", zh: "授权语言" }
    ],
    watchouts: [
      { en: "Dual-use risk", zh: "双用途风险" },
      { en: "Dangerous commands", zh: "危险命令" },
      { en: "Lab-only rules", zh: "仅限实验环境" }
    ]
  },
  "pm-skills": {
    intent: { en: "Create structured product documents faster", zh: "更快产出结构化产品文档" },
    strengths: [
      { en: "PM templates", zh: "产品模板" },
      { en: "Low execution risk", zh: "执行风险低" },
      { en: "Clear outputs", zh: "输出清晰" }
    ],
    watchouts: [
      { en: "Draft quality", zh: "草稿质量" },
      { en: "Needs PM judgment", zh: "需要产品判断" }
    ]
  },
  "claude-skills": {
    intent: { en: "Explore a large mixed skill marketplace", zh: "浏览大型混合技能市场" },
    strengths: [
      { en: "Large library", zh: "库很大" },
      { en: "Many domains", zh: "领域很多" },
      { en: "Portability signals", zh: "有迁移信号" }
    ],
    watchouts: [
      { en: "Installer review", zh: "安装器审查" },
      { en: "Script execution", zh: "脚本执行" },
      { en: "Per-skill licenses", zh: "单技能许可" }
    ]
  },
  "context-mode": {
    intent: { en: "Control context, memory, routing, and hooks", zh: "控制上下文、记忆、路由和 hooks" },
    strengths: [
      { en: "Context control", zh: "上下文控制" },
      { en: "MCP-aware", zh: "支持 MCP" },
      { en: "Memory workflows", zh: "记忆工作流" }
    ],
    watchouts: [
      { en: "Hook permissions", zh: "Hook 权限" },
      { en: "Persistence paths", zh: "持久化路径" },
      { en: "Sandbox claims", zh: "沙箱声明" }
    ]
  },
  "notebooklm-py": {
    intent: { en: "Use NotebookLM-like workflows from scripts or agents", zh: "通过脚本或 Agent 使用 NotebookLM 类工作流" },
    strengths: [
      { en: "CLI surface", zh: "CLI 接口" },
      { en: "Agent-ready", zh: "Agent 可用" },
      { en: "Research workflow", zh: "研究工作流" }
    ],
    watchouts: [
      { en: "Unofficial API", zh: "非官方 API" },
      { en: "Account risk", zh: "账号风险" },
      { en: "Auth handling", zh: "认证处理" }
    ]
  },
  "gsap-skills": {
    intent: { en: "Use GSAP correctly in frontend animation work", zh: "在前端动画中正确使用 GSAP" },
    strengths: [
      { en: "Official source", zh: "官方来源" },
      { en: "Examples", zh: "示例" },
      { en: "Low safety risk", zh: "安全风险低" }
    ],
    watchouts: [
      { en: "Version drift", zh: "版本变化" },
      { en: "Plugin availability", zh: "插件可用性" }
    ]
  },
  "claude-seo": {
    intent: { en: "Run SEO audits, briefs, and reporting workflows", zh: "执行 SEO 审计、Brief 和报告工作流" },
    strengths: [
      { en: "SEO workflows", zh: "SEO 工作流" },
      { en: "Report output", zh: "报告输出" },
      { en: "Sub-skill structure", zh: "子技能结构" }
    ],
    watchouts: [
      { en: "Paid services", zh: "付费服务" },
      { en: "Search credentials", zh: "搜索凭证" },
      { en: "Freshness checks", zh: "时效性检查" }
    ]
  },
  "cc-sdd": {
    intent: { en: "Turn approved specs into implementation tasks", zh: "把批准后的规格转成实现任务" },
    strengths: [
      { en: "Spec traceability", zh: "规格可追溯" },
      { en: "Multi-platform", zh: "多平台" },
      { en: "Autonomy guardrails", zh: "自主性护栏" }
    ],
    watchouts: [
      { en: "Spec drift", zh: "规格漂移" },
      { en: "Generated task scope", zh: "生成任务范围" }
    ]
  },
  "hallmark": {
    intent: { en: "Improve visual quality in AI-built interfaces", zh: "提升 AI 生成界面的视觉质量" },
    strengths: [
      { en: "Design guardrails", zh: "设计护栏" },
      { en: "No command execution", zh: "无命令执行" },
      { en: "Portable guidance", zh: "指导可迁移" }
    ],
    watchouts: [
      { en: "Needs examples", zh: "需要示例" },
      { en: "Subjective taste", zh: "品味主观" }
    ]
  },
  "awesome-agent-skills": {
    intent: { en: "Discover skills across multiple agent clients", zh: "跨多个 Agent 客户端发现技能" },
    strengths: [
      { en: "Curated list", zh: "精选列表" },
      { en: "Multi-platform", zh: "多平台" },
      { en: "Low direct risk", zh: "直接风险低" }
    ],
    watchouts: [
      { en: "Linked repo quality", zh: "链接仓库质量" },
      { en: "Curation rules", zh: "收录规则" },
      { en: "Skill vs app", zh: "Skill / App 边界" }
    ]
  }
};
