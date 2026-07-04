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
