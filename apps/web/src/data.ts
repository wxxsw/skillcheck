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
  | "automation"
  | "memory"
  | "testing"
  | "mobile"
  | "infra"
  | "writing"
  | "office"
  | "data";

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
  marketplace: { en: "Skill Packs", zh: "技能包" },
  context: { en: "Context", zh: "上下文" },
  frontend: { en: "Frontend", zh: "前端" },
  automation: { en: "Automation", zh: "自动化" },
  memory: { en: "Memory", zh: "记忆" },
  testing: { en: "Testing", zh: "测试" },
  mobile: { en: "Mobile", zh: "移动端" },
  infra: { en: "Infrastructure", zh: "基础设施" },
  writing: { en: "Writing", zh: "写作" },
  office: { en: "Office", zh: "办公" },
  data: { en: "Data", zh: "数据" }
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
  marketplace: { en: "Large multi-skill packs and mixed workflow libraries.", zh: "大型多技能包和混合工作流库。" },
  context: { en: "Memory, routing, hooks, and context control.", zh: "记忆、路由、hooks 和上下文控制。" },
  frontend: { en: "Frontend libraries, examples, and UI implementation.", zh: "前端库、示例和 UI 实现。" },
  automation: { en: "Agent actions, handoffs, syncing, and workflow automation.", zh: "Agent 动作、接管、同步和工作流自动化。" },
  memory: { en: "Long-term memory, session recall, and knowledge graphs.", zh: "长期记忆、会话召回和知识图谱。" },
  testing: { en: "QA, web quality, test automation, and CI evidence.", zh: "QA、网页质量、测试自动化和 CI 证据。" },
  mobile: { en: "iOS, Swift, Android, and mobile app implementation.", zh: "iOS、Swift、Android 和移动应用实现。" },
  infra: { en: "Cloud, DevOps, IaC, and production operations.", zh: "云、DevOps、IaC 和生产运维。" },
  writing: { en: "Articles, stories, publishing, and editorial workflows.", zh: "文章、故事、发布和编辑工作流。" },
  office: { en: "Docs, CMS, messaging, workplace, and business systems.", zh: "文档、CMS、消息、工作场景和业务系统。" },
  data: { en: "Analysis, finance, metrics, and structured data work.", zh: "分析、金融、指标和结构化数据工作。" }
};

const baseSkills: SkillEntry[] = [
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
    name: "PM Skills",
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
      en: "Large skill library",
      zh: "大型技能库"
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
    id: "openai-skills",
    name: "OpenAI Skills",
    repo: "openai/skills",
    url: "https://github.com/openai/skills",
    stars: "23k",
    category: "engineering",
    summary: {
      en: "A Codex skills catalog with concrete SKILL.md packages and curated examples.",
      zh: "包含具体 SKILL.md 包和精选示例的 Codex Skills 目录。"
    },
    signal: {
      en: "Real SKILL.md corpus",
      zh: "真实 SKILL.md 语料"
    },
    platforms: ["Codex"],
    score: 91,
    safety: "A",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Official source", zh: "官方来源" },
      { en: "44 SKILL.md files", zh: "44 个 SKILL.md" },
      { en: "Codex-first", zh: "Codex 优先" }
    ],
    risks: [
      {
        en: "Review curated skill scripts, generated paths, and Codex-specific assumptions",
        zh: "审查精选 Skill 的脚本、生成路径和 Codex 专属假设"
      }
    ]
  },
  {
    id: "anthropic-skills",
    name: "Anthropic Skills",
    repo: "anthropics/skills",
    url: "https://github.com/anthropics/skills",
    stars: "158k",
    category: "marketplace",
    summary: {
      en: "The public example repository for Anthropic's Agent Skills system.",
      zh: "Anthropic 官方 Agent Skills 示例仓库。"
    },
    signal: {
      en: "Official reference examples",
      zh: "官方参考示例"
    },
    platforms: ["Claude"],
    score: 90,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Official source", zh: "官方来源" },
      { en: "Many examples", zh: "示例丰富" },
      { en: "Script review", zh: "脚本审查" }
    ],
    risks: [
      {
        en: "Some examples include scripts, assets, or tool assumptions",
        zh: "部分示例包含脚本、素材或工具假设"
      }
    ]
  },
  {
    id: "agent-skill-creator",
    name: "Agent Skill Creator",
    repo: "FrancyJGLisboa/agent-skill-creator",
    url: "https://github.com/FrancyJGLisboa/agent-skill-creator",
    stars: "1.7k",
    category: "workflow",
    summary: {
      en: "Turns repeatable workflows into reusable agent skills across many clients.",
      zh: "把可重复工作流转成可跨客户端复用的 Agent Skill。"
    },
    signal: {
      en: "Workflow-to-skill",
      zh: "工作流转 Skill"
    },
    platforms: ["Claude", "Codex", "Cursor", "Gemini", "Copilot"],
    score: 83,
    safety: "B",
    docs: "B",
    portability: "A",
    badges: [
      { en: "Single SKILL.md", zh: "单个 SKILL.md" },
      { en: "Skill generation", zh: "Skill 生成" },
      { en: "Multi-platform", zh: "多平台" }
    ],
    risks: [
      {
        en: "Review generated skill quality, source licensing, and platform-specific paths",
        zh: "审查生成 Skill 的质量、来源许可和平台路径"
      }
    ]
  },
  {
    id: "mattpocock-skills",
    name: "Matt Pocock Skills",
    repo: "mattpocock/skills",
    url: "https://github.com/mattpocock/skills",
    stars: "156k",
    category: "engineering",
    summary: {
      en: "Engineering skills focused on common coding-agent failure modes.",
      zh: "聚焦编程 Agent 常见失败模式的工程技能。"
    },
    signal: {
      en: "Practitioner workflow library",
      zh: "实践者工作流库"
    },
    platforms: ["Claude", "Codex"],
    score: 88,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Engineering taste", zh: "工程判断" },
      { en: "Router skill", zh: "路由 Skill" },
      { en: "Low script count", zh: "脚本较少" }
    ],
    risks: [
      {
        en: "Check router freshness and whether local symlinks are used",
        zh: "检查路由是否及时更新，以及是否使用本地符号链接"
      }
    ]
  },
  {
    id: "nature-skills",
    name: "Nature Skills",
    repo: "Yuan1z0825/nature-skills",
    url: "https://github.com/Yuan1z0825/nature-skills",
    stars: "26k",
    category: "science",
    summary: {
      en: "Academic writing and figure skills for Nature-style scientific work.",
      zh: "面向 Nature 风格科研写作和科研绘图的 Skill 包。"
    },
    signal: {
      en: "Academic workflow pack",
      zh: "学术工作流包"
    },
    platforms: ["Codex", "Claude"],
    score: 82,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "15 SKILL.md files", zh: "15 个 SKILL.md" },
      { en: "Academic writing", zh: "学术写作" },
      { en: "Figure workflow", zh: "科研绘图" }
    ],
    risks: [
      {
        en: "Verify citations, journal-style claims, and whether examples fit your field",
        zh: "核验引用、期刊风格主张，以及示例是否适合你的学科"
      }
    ]
  },
  {
    id: "claude-code-best-practice",
    name: "Claude Code Best Practice",
    repo: "shanraisshan/claude-code-best-practice",
    url: "https://github.com/shanraisshan/claude-code-best-practice",
    stars: "62k",
    category: "workflow",
    summary: {
      en: "Agentic engineering practices with concrete skills for browser and presentation work.",
      zh: "Agentic engineering 实践，包含浏览器和演示文稿等具体 Skills。"
    },
    signal: {
      en: "Practice-backed skills",
      zh: "实践型 Skill"
    },
    platforms: ["Claude", "Codex"],
    score: 85,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "9 SKILL.md files", zh: "9 个 SKILL.md" },
      { en: "Agentic engineering", zh: "Agentic 工程" },
      { en: "Examples", zh: "示例" }
    ],
    risks: [
      {
        en: "Separate durable practices from personal Claude Code conventions",
        zh: "区分可复用工程实践和个人 Claude Code 约定"
      }
    ]
  },
  {
    id: "claude-code-java",
    name: "Claude Code Java",
    repo: "decebals/claude-code-java",
    url: "https://github.com/decebals/claude-code-java",
    stars: "671",
    category: "engineering",
    summary: {
      en: "Reusable AI development skills for Java projects and enterprise workflows.",
      zh: "面向 Java 项目和企业开发流程的可复用 AI 开发 Skills。"
    },
    signal: {
      en: "Java development skills",
      zh: "Java 开发 Skill"
    },
    platforms: ["Claude", "Codex"],
    score: 82,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "18 SKILL.md files", zh: "18 个 SKILL.md" },
      { en: "Java focus", zh: "Java 聚焦" },
      { en: "Enterprise workflow", zh: "企业流程" }
    ],
    risks: [
      {
        en: "Check project conventions, framework versions, and generated code review gates",
        zh: "检查项目约定、框架版本和生成代码审查门槛"
      }
    ]
  },
  {
    id: "google-workspace-cli",
    name: "Google Workspace CLI",
    repo: "googleworkspace/cli",
    url: "https://github.com/googleworkspace/cli",
    stars: "29k",
    category: "workflow",
    summary: {
      en: "A Google Workspace command-line tool that includes AI agent skills.",
      zh: "包含 AI Agent Skills 的 Google Workspace 命令行工具。"
    },
    signal: {
      en: "Workspace automation",
      zh: "办公套件自动化"
    },
    platforms: ["Claude", "Codex", "Gemini"],
    score: 72,
    safety: "C",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Official Google", zh: "Google 官方" },
      { en: "Workspace APIs", zh: "Workspace API" },
      { en: "CLI surface", zh: "CLI 接口" }
    ],
    risks: [
      {
        en: "Review OAuth scopes, admin permissions, and write actions",
        zh: "审查 OAuth scope、管理员权限和写操作"
      }
    ]
  },
  {
    id: "skillopt",
    name: "SkillOpt",
    repo: "microsoft/SkillOpt",
    url: "https://github.com/microsoft/SkillOpt",
    stars: "11k",
    category: "research",
    summary: {
      en: "A research system for optimizing reusable natural-language skills.",
      zh: "用于优化可复用自然语言 Skill 的研究系统。"
    },
    signal: {
      en: "Skill optimization research",
      zh: "Skill 优化研究"
    },
    platforms: ["Claude", "Codex", "Gemini"],
    score: 78,
    safety: "B",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Research code", zh: "研究代码" },
      { en: "Validation gates", zh: "验证门槛" },
      { en: "Reusable skill artifacts", zh: "可复用 Skill 产物" }
    ],
    risks: [
      {
        en: "Check training data, evaluation harness, and script execution",
        zh: "检查训练数据、评测流程和脚本执行"
      }
    ]
  },
  {
    id: "ai-research-skills",
    name: "AI Research SKILLs",
    repo: "Orchestra-Research/AI-Research-SKILLs",
    url: "https://github.com/Orchestra-Research/AI-Research-SKILLs",
    stars: "10k",
    category: "research",
    summary: {
      en: "A research and engineering skill library for AI research agents.",
      zh: "面向 AI 研究 Agent 的研究与工程技能库。"
    },
    signal: {
      en: "AI research workflows",
      zh: "AI 研究工作流"
    },
    platforms: ["Claude", "Codex", "Gemini"],
    score: 80,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Research library", zh: "研究库" },
      { en: "Many skills", zh: "Skill 较多" },
      { en: "Benchmark potential", zh: "适合 Benchmark" }
    ],
    risks: [
      {
        en: "Review experiment scripts, compute cost, and citation quality",
        zh: "审查实验脚本、算力成本和引用质量"
      }
    ]
  },
  {
    id: "jeffallan-claude-skills",
    name: "Full-Stack Claude Skills",
    repo: "Jeffallan/claude-skills",
    url: "https://github.com/Jeffallan/claude-skills",
    stars: "10k",
    category: "engineering",
    summary: {
      en: "A full-stack developer skill pack for common implementation work.",
      zh: "面向常见全栈实现工作的开发者 Skill 包。"
    },
    signal: {
      en: "Full-stack coverage",
      zh: "全栈覆盖"
    },
    platforms: ["Claude"],
    score: 83,
    safety: "B",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Developer skills", zh: "开发者技能" },
      { en: "Full-stack", zh: "全栈" },
      { en: "Practical scope", zh: "实用范围" }
    ],
    risks: [
      {
        en: "Check framework freshness, examples, and script helpers",
        zh: "检查框架时效性、示例和辅助脚本"
      }
    ]
  },
  {
    id: "product-manager-skills",
    name: "Product Manager Skills",
    repo: "deanpeters/Product-Manager-Skills",
    url: "https://github.com/deanpeters/Product-Manager-Skills",
    stars: "5.6k",
    category: "product",
    summary: {
      en: "A product-management skills framework built on battle-tested methods.",
      zh: "基于成熟方法论的产品管理 Skills 框架。"
    },
    signal: {
      en: "PM method library",
      zh: "产品方法库"
    },
    platforms: ["Claude", "Codex"],
    score: 86,
    safety: "A",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Product methods", zh: "产品方法" },
      { en: "Low execution risk", zh: "执行风险低" },
      { en: "Structured outputs", zh: "结构化产出" }
    ],
    risks: [
      {
        en: "Watch for generic PM templates without company context",
        zh: "注意缺少公司上下文的通用产品模板"
      }
    ]
  },
  {
    id: "swiftui-agent-skill",
    name: "SwiftUI Agent Skill",
    repo: "twostraws/SwiftUI-Agent-Skill",
    url: "https://github.com/twostraws/SwiftUI-Agent-Skill",
    stars: "4.3k",
    category: "frontend",
    summary: {
      en: "A SwiftUI-focused agent skill for modern Apple app development.",
      zh: "面向现代 Apple 应用开发的 SwiftUI Agent Skill。"
    },
    signal: {
      en: "Specialized platform guidance",
      zh: "专门平台指导"
    },
    platforms: ["Claude", "Codex", "Cursor", "Gemini"],
    score: 90,
    safety: "A",
    docs: "A",
    portability: "A",
    badges: [
      { en: "SwiftUI focus", zh: "SwiftUI 聚焦" },
      { en: "Strong author signal", zh: "作者信号强" },
      { en: "Low execution risk", zh: "执行风险低" }
    ],
    risks: [
      {
        en: "Keep guidance aligned with current SwiftUI and iOS versions",
        zh: "让建议跟当前 SwiftUI 和 iOS 版本保持一致"
      }
    ]
  },
  {
    id: "drawio-skill",
    name: "Draw.io Skill",
    repo: "Agents365-ai/drawio-skill",
    url: "https://github.com/Agents365-ai/drawio-skill",
    stars: "5.1k",
    category: "media",
    summary: {
      en: "Generates draw.io diagrams from natural language and codebase context.",
      zh: "从自然语言和代码库上下文生成 draw.io 图表。"
    },
    signal: {
      en: "Diagram generation",
      zh: "图表生成"
    },
    platforms: ["Claude", "Codex", "Cursor", "Gemini"],
    score: 76,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Diagram export", zh: "图表导出" },
      { en: "Vision self-check", zh: "视觉自检" },
      { en: "Asset library", zh: "素材库" }
    ],
    risks: [
      {
        en: "Review export scripts, generated files, and asset licensing",
        zh: "审查导出脚本、生成文件和素材许可"
      }
    ]
  },
  {
    id: "generative-media-skills",
    name: "Generative Media Skills",
    repo: "SamurAIGPT/Generative-Media-Skills",
    url: "https://github.com/SamurAIGPT/Generative-Media-Skills",
    stars: "3.7k",
    category: "media",
    summary: {
      en: "Multimodal image, video, and audio generation skills for agents.",
      zh: "面向 Agent 的图像、视频和音频生成 Skill 包。"
    },
    signal: {
      en: "Multimodal media creation",
      zh: "多模态媒体创作"
    },
    platforms: ["Claude", "Cursor", "Gemini"],
    score: 69,
    safety: "C",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Image/video/audio", zh: "图像/视频/音频" },
      { en: "External APIs", zh: "外部 API" },
      { en: "Creative workflows", zh: "创作工作流" }
    ],
    risks: [
      {
        en: "Review paid API usage, media rights, and generation cost",
        zh: "审查付费 API、媒体权利和生成成本"
      }
    ]
  },
  {
    id: "browser-act-skills",
    name: "Browser Act Skills",
    repo: "browser-act/skills",
    url: "https://github.com/browser-act/skills",
    stars: "3.6k",
    category: "security",
    summary: {
      en: "Browser automation skills with human handoff and parallel sessions.",
      zh: "带人工接管和平行会话的浏览器自动化 Skills。"
    },
    signal: {
      en: "Browser automation",
      zh: "浏览器自动化"
    },
    platforms: ["Claude", "Codex", "Cursor"],
    score: 66,
    safety: "C",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Browser control", zh: "浏览器控制" },
      { en: "Human handoff", zh: "人工接管" },
      { en: "Parallel sessions", zh: "并行会话" }
    ],
    risks: [
      {
        en: "Anti-bot, account, credential, and external side-effect risk",
        zh: "反爬、账号、凭证和外部副作用风险"
      }
    ]
  },
  {
    id: "flutterguard",
    name: "FlutterGuard",
    repo: "anasfik/FlutterGuard",
    url: "https://github.com/anasfik/FlutterGuard",
    stars: "23",
    category: "mobile",
    summary: {
      en: "A Flutter APK and AAB security skill for agent-assisted mobile app review.",
      zh: "面向 Agent 辅助移动应用审查的 Flutter APK/AAB 安全 Skill。"
    },
    signal: {
      en: "Flutter security review",
      zh: "Flutter 安全审查"
    },
    platforms: ["Claude", "Codex", "OpenClaw"],
    score: 78,
    safety: "C",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Single SKILL.md", zh: "单个 SKILL.md" },
      { en: "Mobile AppSec", zh: "移动 AppSec" },
      { en: "Flutter focus", zh: "Flutter 聚焦" }
    ],
    risks: [
      {
        en: "Keep analysis inside authorized apps and review any reverse-engineering steps",
        zh: "仅分析授权应用，并审查任何逆向分析步骤"
      }
    ]
  },
  {
    id: "agent-rules-books",
    name: "Agent Rules Books",
    repo: "ciembor/agent-rules-books",
    url: "https://github.com/ciembor/agent-rules-books",
    stars: "2.1k",
    category: "engineering",
    summary: {
      en: "Rules and skills distilled from classic software engineering books.",
      zh: "从经典软件工程书籍提炼出的规则和 Skills。"
    },
    signal: {
      en: "Book-backed engineering rules",
      zh: "书籍支持的工程规则"
    },
    platforms: ["Claude", "Codex", "Cursor"],
    score: 89,
    safety: "A",
    docs: "A",
    portability: "A",
    badges: [
      { en: "Book-derived", zh: "来自书籍" },
      { en: "Compact variants", zh: "紧凑版本" },
      { en: "Low execution risk", zh: "执行风险低" }
    ],
    risks: [
      {
        en: "Rules are interpretations, not official publisher material",
        zh: "规则是二次提炼，不是出版社官方材料"
      }
    ]
  },
  {
    id: "design-dna",
    name: "Design DNA",
    repo: "zanwei/design-dna",
    url: "https://github.com/zanwei/design-dna",
    stars: "975",
    category: "design",
    summary: {
      en: "Turns reference UI screenshots and URLs into reusable design DNA.",
      zh: "把参考 UI 截图和 URL 转成可复用的 Design DNA。"
    },
    signal: {
      en: "Reference-driven UI generation",
      zh: "参考驱动 UI 生成"
    },
    platforms: ["Claude", "Codex", "Cursor"],
    score: 78,
    safety: "B",
    docs: "B",
    portability: "B",
    badges: [
      { en: "Visual extraction", zh: "视觉提取" },
      { en: "Design tokens", zh: "设计 Token" },
      { en: "URL input", zh: "URL 输入" }
    ],
    risks: [
      {
        en: "Review screenshot privacy, URL fetching, and asset rights",
        zh: "审查截图隐私、URL 抓取和素材权利"
      }
    ]
  },
  {
    id: "ros2-engineering-skills",
    name: "ROS2 Engineering Skills",
    repo: "dbwls99706/ros2-engineering-skills",
    url: "https://github.com/dbwls99706/ros2-engineering-skills",
    stars: "123",
    category: "engineering",
    summary: {
      en: "A production-grade ROS 2 development skill for robotics agents.",
      zh: "面向机器人 Agent 的生产级 ROS 2 开发 Skill。"
    },
    signal: {
      en: "Robotics engineering",
      zh: "机器人工程"
    },
    platforms: ["Claude", "Codex"],
    score: 79,
    safety: "B",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Single SKILL.md", zh: "单个 SKILL.md" },
      { en: "ROS 2", zh: "ROS 2" },
      { en: "Production guidance", zh: "生产级指导" }
    ],
    risks: [
      {
        en: "Check hardware assumptions, safety constraints, and ROS distribution versions",
        zh: "检查硬件假设、安全约束和 ROS 发行版版本"
      }
    ]
  },
  {
    id: "playwright-skill",
    name: "Playwright Skill",
    repo: "testdino-hq/playwright-skill",
    url: "https://github.com/testdino-hq/playwright-skill",
    stars: "297",
    category: "engineering",
    summary: {
      en: "A focused Playwright best-practices skill for test automation.",
      zh: "聚焦 Playwright 最佳实践的测试自动化 Skill。"
    },
    signal: {
      en: "Testing best practices",
      zh: "测试最佳实践"
    },
    platforms: ["Claude", "Codex", "Cursor"],
    score: 87,
    safety: "A",
    docs: "A",
    portability: "B",
    badges: [
      { en: "Testing focus", zh: "测试聚焦" },
      { en: "Playwright", zh: "Playwright" },
      { en: "Low direct risk", zh: "直接风险低" }
    ],
    risks: [
      {
        en: "Keep examples current with Playwright and project test setup",
        zh: "让示例跟 Playwright 和项目测试配置保持一致"
      }
    ]
  }
];

interface AdditionalSkillRow {
  id: string;
  name: string;
  repo: string;
  stars: string;
  category: CategoryId;
  score: number;
  safety: Grade;
  docs: Grade;
  portability: Grade;
  platforms: string[];
  summary: LocalizedText;
  signal: LocalizedText;
  intent: LocalizedText;
  strengths: LocalizedText[];
  watchouts: LocalizedText[];
}

const additionalSkillRows = parseAdditionalSkillRows(`
claude-mem|Claude Mem|thedotmack/claude-mem|86k|memory|74|B|B|A|Claude,Codex,Gemini,Copilot,OpenCode|Persistent context and compressed session memory for agent workflows.~为 Agent 工作流提供持久上下文和压缩会话记忆。|Persistent agent memory~持久 Agent 记忆|Carry project memory across sessions and agent clients~跨会话和 Agent 客户端保留项目记忆|Long-term memory~长期记忆;Multi-agent support~多 Agent 支持;Session compression~会话压缩|Memory privacy~记忆隐私;Injection risk~注入风险;Storage location~存储位置
open-design|Open Design|nexu-io/open-design|75k|design|76|B|A|A|Claude,Codex,Cursor,Gemini,OpenCode,Qwen|A local-first design workspace where coding agents create real design files.~本地优先的设计工作台，让编码 Agent 生成真实设计文件。|Agentic design workspace~Agentic 设计工作台|Turn agent output into prototypes, slides, images, and exportable design assets~把 Agent 输出转成原型、幻灯片、图片和可导出设计资产|Local-first~本地优先;Rich export formats~导出格式丰富;Design workspace~设计工作台|BYOK secrets~自带 Key 凭证;File exports~文件导出;Desktop install~桌面安装
ponytail|Ponytail|DietrichGebert/ponytail|73k|engineering|84|A|B|B|Claude,Codex|A coding-agent skill set that pushes agents toward smaller, simpler engineering choices.~推动编码 Agent 选择更小、更简单工程方案的技能集。|Senior-dev engineering taste~资深工程判断|Reduce over-engineering in coding-agent output~减少编码 Agent 输出里的过度工程化|Simplicity bias~偏向简单;Engineering judgment~工程判断;Low execution risk~执行风险低|Subjective taste~品味主观;Project fit~项目适配;Example evidence~示例证据
understand-anything|Understand Anything|Egonex-AI/Understand-Anything|71k|knowledge|79|B|A|A|Claude,Codex,Cursor,Copilot,Gemini,OpenCode|Turns code into interactive knowledge graphs for exploration and Q&A.~把代码转成可探索、可问答的交互式知识图谱。|Interactive code graphs~交互式代码图谱|Explore large codebases visually and conversationally~用可视化和对话方式探索大型代码库|Graph exploration~图谱探索;Codebase Q&A~代码库问答;Multi-agent support~多 Agent 支持|Index privacy~索引隐私;Parser dependencies~解析器依赖;Large repo cost~大仓库成本
oh-my-openagent|Oh My OpenAgent|code-yeongyu/oh-my-openagent|65k|workflow|73|B|B|B|Codex,OpenCode,Claude|A coding-agent harness and workflow pack for complex codebases.~面向复杂代码库的编码 Agent harness 和工作流包。|Agent harness workflow~Agent harness 工作流|Run more controlled agent work on complex repositories~在复杂仓库中运行更可控的 Agent 工作|Complex-codebase focus~复杂代码库聚焦;Workflow harness~工作流 harness;Token discipline~Token 纪律|Harness permissions~Harness 权限;Local commands~本地命令;Config complexity~配置复杂度
swift-ios-skills|Swift iOS Skills|dpearson2699/swift-ios-skills|831|mobile|90|A|A|B|Claude,Codex,Cursor|Agent Skills for iOS 26 plus Swift 6.3, SwiftUI, and modern Apple frameworks.~面向 iOS 26+、Swift 6.3、SwiftUI 和现代 Apple 框架的 Agent Skills。|Broad iOS skill pack~完整 iOS Skill 包|Guide agents across SwiftUI, networking, accessibility, widgets, StoreKit, and Apple APIs~引导 Agent 处理 SwiftUI、网络、无障碍、Widget、StoreKit 和 Apple API|84 SKILL.md files~84 个 SKILL.md;Modern Apple APIs~现代 Apple API;Mobile-specific~移动端专用|SDK version drift~SDK 版本变化;Target OS fit~目标系统适配;Generated code review~生成代码审查
aris-research-skills|ARIS Research Skills|wanshuiyin/Auto-claude-code-research-in-sleep|13k|research|73|C|B|B|Claude,Codex,OpenClaw|Lightweight Markdown skills for autonomous ML research loops, idea discovery, and experiments.~面向自主机器学习研究循环、想法发现和实验的轻量 Markdown Skills。|Autonomous research loops~自主研究循环|Coordinate cross-model review, experiment planning, and result analysis for ML research~协调跨模型审查、实验规划和机器学习研究结果分析|181 SKILL.md files~181 个 SKILL.md;ML research~机器学习研究;Markdown-only~Markdown-only|Compute cost~算力成本;Experiment safety~实验安全;Result verification~结果核验
robotics-agent-skills|Robotics Agent Skills|arpitg1304/robotics-agent-skills|308|engineering|80|B|A|B|Claude,Codex|A robotics skill pack for ROS, Dockerized development, perception, testing, and security.~面向 ROS、Docker 开发、感知、测试和安全的机器人 Skill 包。|Robotics development pack~机器人开发包|Help agents write production-grade robotics software across ROS, testing, and deployment workflows~帮助 Agent 编写跨 ROS、测试和部署流程的生产级机器人软件|Multiple SKILL.md files~多个 SKILL.md;ROS workflows~ROS 工作流;Robotics testing~机器人测试|Hardware safety~硬件安全;Simulation mismatch~仿真差异;Command review~命令审查
prompt-master|Prompt Master|nidhinjs/prompt-master|10k|writing|82|A|B|A|Claude|A single Claude skill for writing higher-precision prompts with retained context.~用于编写更高精度提示词并保留上下文的单一 Claude Skill。|Prompt craft skill~提示词打磨 Skill|Turn fuzzy intent into clearer prompts for other AI tools and workflows~把模糊意图转成更清楚的 AI 工具提示词和工作流输入|Single SKILL.md~单个 SKILL.md;Low direct risk~直接风险低;Prompt precision~提示词精度|Subjective quality~质量主观;Prompt overfitting~提示词过拟合;No execution checks~无执行校验
nanoclaw|NanoClaw|nanocoai/nanoclaw|30k|automation|68|C|B|B|Claude,Codex|A containerized lightweight agent runtime with messaging integrations and memory.~带消息集成和记忆的容器化轻量 Agent runtime。|Containerized agent automation~容器化 Agent 自动化|Run agent workflows connected to messaging apps~运行连接消息应用的 Agent 工作流|Container isolation~容器隔离;Messaging integrations~消息集成;Scheduled jobs~定时任务|External messages~外部消息;Account tokens~账号 Token;Container permissions~容器权限
cognee|Cognee|topoteretes/cognee|27k|memory|76|B|A|B|Claude,Codex,Cursor|Open-source memory infrastructure for agents using self-hosted knowledge graphs.~使用自托管知识图谱的开源 Agent 记忆基础设施。|Self-hosted agent memory~自托管 Agent 记忆|Give agents persistent long-term knowledge across sessions~让 Agent 跨会话拥有长期知识|Knowledge graph~知识图谱;Self-hosted~自托管;Persistent memory~持久记忆|PII retention~PII 保留;Database setup~数据库配置;Retrieval quality~检索质量
baoyu-skills|Baoyu Skills|JimLiu/baoyu-skills|23k|marketplace|82|B|B|B|Claude,Codex|A Chinese-language skill collection with broad productivity and coding coverage.~覆盖生产力与编程场景的中文 Skill 集合。|Chinese skill collection~中文 Skill 集合|Find Chinese-first skill patterns and workflows~寻找中文优先的 Skill 模式和工作流|Chinese-first~中文优先;Broad workflows~工作流广;Community signal~社区信号|Per-skill quality~单技能质量;License clarity~许可清晰度;Install assumptions~安装假设
skill-seekers|Skill Seekers|yusufkaraaslan/Skill_Seekers|14k|automation|78|B|B|B|Claude|Converts docs, repositories, and PDFs into Claude AI skills with conflict detection.~把文档、仓库和 PDF 转成 Claude AI Skills，并检测冲突。|Skill generation pipeline~Skill 生成管线|Generate skills from existing documentation sources~从已有文档来源生成 Skill|Doc-to-skill~文档转 Skill;Conflict detection~冲突检测;PDF support~PDF 支持|Generated quality~生成质量;Source licensing~来源许可;PDF privacy~PDF 隐私
memu|memU|NevaMind-AI/memU|14k|memory|75|B|B|B|Claude,Codex|Personal memory for agents with retrieval and self-evolving skill behavior.~带检索和自进化 Skill 行为的 Agent 个人记忆。|Self-evolving memory~自进化记忆|Let agents retrieve and refine personal memory over time~让 Agent 随时间检索和改进个人记忆|Fast retrieval~快速检索;Self-evolving skills~自进化 Skill;Cost reduction~成本降低|Memory leakage~记忆泄露;Forgetting policy~遗忘策略;User consent~用户同意
continuous-claude-v3|Continuous Claude v3|parcadei/Continuous-Claude-v3|3.9k|context|72|C|B|B|Claude|Context-management skills, hooks, ledgers, handoffs, and agent orchestration for Claude Code.~面向 Claude Code 的上下文管理 Skills、hooks、ledger、handoff 和 Agent 编排。|Hooked context system~Hook 上下文系统|Maintain task state through ledgers, handoffs, isolated context, and MCP execution patterns~通过 ledger、handoff、隔离上下文和 MCP 执行模式维持任务状态|160 SKILL.md files~160 个 SKILL.md;Handoffs~交接;Context isolation~上下文隔离|Hook permissions~Hook 权限;State correctness~状态正确性;Claude lock-in~Claude 锁定
open-code-review|Open Code Review|alibaba/open-code-review|9.9k|engineering|71|C|A|B|Claude,Codex,Gemini|A hybrid deterministic and LLM-agent code review tool from Alibaba.~阿里开源的确定性流水线与 LLM Agent 混合代码审查工具。|Agentic code review~Agentic 代码审查|Run stricter code review with rules and LLM assistance~用规则和 LLM 辅助运行更严格的代码审查|Battle-tested~规模验证;Line comments~行级评论;Security rules~安全规则|Repo access~仓库访问;CI secrets~CI 密钥;False positives~误报
claude-obsidian|Claude Obsidian|AgriciDaniel/claude-obsidian|8.7k|knowledge|77|B|B|B|Claude,Codex|A self-organizing AI second brain for Obsidian and Claude Code.~面向 Obsidian 和 Claude Code 的自组织 AI 第二大脑。|Obsidian knowledge agent~Obsidian 知识 Agent|Organize sources into a linked Markdown knowledge base~把来源整理成互相链接的 Markdown 知识库|Markdown ownership~Markdown 所有权;Auto-linking~自动链接;PKM workflow~PKM 工作流|Vault writes~知识库写入;Source ingestion~来源导入;Link quality~链接质量
html-anything|HTML Anything|nexu-io/html-anything|7.5k|media|70|C|B|A|Claude,Codex,Cursor,Gemini,Copilot,OpenCode,Qwen,Aider|An agentic HTML editor for prototypes, decks, reports, posters, and social formats.~面向原型、幻灯片、报告、海报和社媒格式的 Agentic HTML 编辑器。|Agentic publishing surfaces~Agentic 发布界面|Ship polished HTML artifacts from agent workflows~通过 Agent 工作流发布精美 HTML 产物|Many surfaces~多种版式;Sandboxed preview~沙箱预览;Export options~导出选项|Publish actions~发布动作;HTML injection~HTML 注入;Local file writes~本地写文件
refly|Refly|refly-ai/refly|7.4k|automation|73|B|B|A|Claude,Codex,Cursor|An open-source builder for agent skills, workflows, APIs, and bots.~用于构建 Agent Skills、工作流、API 和机器人的开源平台。|Skill builder platform~Skill 构建平台|Build reusable skills and workflow bots from product ideas~从产品想法构建可复用 Skill 和工作流机器人|Skill builder~Skill 构建器;API workflows~API 工作流;Bot deployment~机器人部署|External integrations~外部集成;Credential storage~凭证存储;Generated workflow drift~生成工作流漂移
superpowers-zh|Superpowers ZH|jnMetaCode/superpowers-zh|6k|workflow|83|B|A|A|Claude,Codex,Cursor,OpenCode|A Chinese localization and adaptation of the Superpowers skill workflow.~Superpowers 技能工作流的中文本地化与改编。|Chinese workflow adaptation~中文工作流改编|Use Superpowers-style workflows in Chinese teams~让中文团队使用 Superpowers 风格工作流|Chinese docs~中文文档;Workflow method~工作流方法;Multi-platform~多平台|Upstream drift~上游变化;Installer parity~安装器一致性;Translation accuracy~翻译准确性
trailofbits-skills|Trail of Bits Skills|trailofbits/skills|5.9k|security|79|B|A|B|Claude,Codex|Security-focused skills from Trail of Bits for audits and secure engineering.~Trail of Bits 面向审计和安全工程的安全类 Skills。|Security-audit skill pack~安全审计 Skill 包|Bring security review practices into agent-assisted engineering~把安全审查实践带入 Agent 辅助工程|Strong security source~安全来源强;Audit workflows~审计工作流;Secure engineering~安全工程|Dual-use boundaries~双用途边界;Tool assumptions~工具假设;Sensitive code~敏感代码
compass-skills|Compass Skills|dongshuyan/compass-skills|513|workflow|83|B|B|A|Claude,Codex|A personal alignment and task-control skills system for AI agents.~面向 AI Agent 的个性化对齐和任务总控 Skills 系统。|Personal task OS~个人任务操作系统|Clarify tasks, maintain task forests, and hand off sessions with reusable skills~用可复用 Skill 澄清任务、维护任务森林并进行会话交接|4 SKILL.md files~4 个 SKILL.md;Task control~任务控制;Local-first~本地优先|Personal data~个人数据;Overhead risk~流程开销;Memory boundaries~记忆边界
code-review-skill|Code Review Skill|awesome-skills/code-review-skill|1.3k|testing|88|A|A|B|Claude,Codex|A comprehensive modular code-review skill covering 20 plus languages and frameworks.~覆盖 20+ 语言和框架的全面模块化代码审查 Skill。|Structured review skill~结构化审查 Skill|Make agent code review more consistent across React, Vue, Rust, TypeScript, and more~让 Agent 在 React、Vue、Rust、TypeScript 等项目中的代码审查更稳定|Single SKILL.md~单个 SKILL.md;20 plus languages~20+ 语言;Review structure~审查结构|False positives~误报;Framework freshness~框架时效;Human review still needed~仍需人工审查
antfu-skills|Anthony Fu Skills|antfu/skills|5.4k|engineering|88|A|B|B|Claude,Codex|A personal engineering skill collection from Anthony Fu.~Anthony Fu 的个人工程 Skill 集合。|High-signal practitioner skills~高信号实践者 Skill|Borrow experienced frontend and open-source engineering patterns~借鉴成熟前端和开源工程模式|Practitioner signal~实践者信号;Frontend taste~前端判断;Low direct risk~直接风险低|Personal conventions~个人约定;Toolchain fit~工具链适配;Example coverage~示例覆盖
claude-blog|Claude Blog|AgriciDaniel/claude-blog|1.3k|marketing|75|C|A|B|Claude,Codex|A production-grade blog skill suite with 30 sub-skills, agents, templates, and CI gates.~生产级博客 Skill 套件，包含 30 个子 Skill、Agent、模板和 CI 门槛。|Blog delivery contract~博客交付契约|Plan, draft, audit, optimize, and ship blog content with reusable delivery gates~用可复用交付门槛规划、撰写、审计、优化和发布博客内容|30 SKILL.md files~30 个 SKILL.md;Templates~模板;CI gates~CI 门槛|SEO claim checks~SEO 主张核验;Utility scripts~工具脚本;Content originality~内容原创性
product-on-purpose-pm-skills|PM Skills|product-on-purpose/pm-skills|4.8k|product|85|A|A|B|Claude,Codex|A product-management skill set for strategy, discovery, and execution rituals.~面向战略、发现和执行仪式的产品管理 Skill 集。|PM operating rituals~产品运营仪式|Add product discipline to agent-assisted planning~给 Agent 辅助规划加入产品纪律|PM workflows~产品工作流;Structured prompts~结构化提示;Low safety risk~安全风险低|Company context~公司上下文;Template sameness~模板同质化;Decision ownership~决策归属
agentic-seo-skill|Agentic SEO Skill|Bhanunamikaze/Agentic-SEO-Skill|724|marketing|72|C|B|B|Claude,Codex,Antigravity|An SEO analysis skill with sub-skills, specialist agents, and optional utility scripts.~包含子 Skill、专家 Agent 和可选工具脚本的 SEO 分析 Skill。|SEO evidence collectors~SEO 证据采集器|Run SEO audits backed by optional data collectors~运行由可选数据采集器支撑的 SEO 审计|SEO sub-skills~SEO 子 Skill;Specialist agents~专家 Agent;Evidence collectors~证据采集器|Utility scripts~工具脚本;API credentials~API 凭证;Search freshness~搜索时效
deep-research-skills|Deep Research Skills|Weizhena/Deep-Research-skills|1.5k|research|86|B|A|A|Claude,Codex,OpenCode|Structured deep-research skills with human-in-the-loop control for Claude Code, OpenCode, and Codex.~带人工在环控制的结构化深度研究 Skills，支持 Claude Code、OpenCode 和 Codex。|Human-in-loop research~人工在环研究|Run deep research with add-items, field expansion, source review, and controlled synthesis~通过增补条目、字段扩展、来源审查和受控综合执行深度研究|20 SKILL.md files~20 个 SKILL.md;Source review~来源审查;Human gates~人工门槛|Source freshness~来源时效;Citation quality~引用质量;Research scope creep~研究范围膨胀
ok-skills|OK Skills|mxyhi/ok-skills|446|engineering|87|A|A|A|Codex,Claude,Cursor,OpenClaw|Curated coding-agent skills and AGENTS.md playbooks for multiple agents.~面向多个 Agent 的精选编码 Skill 和 AGENTS.md 手册。|Portable coding playbooks~可迁移编码手册|Reuse coding playbooks across SKILL.md-compatible tools~在 SKILL.md 兼容工具间复用编码手册|Portable format~可迁移格式;Coding playbooks~编码手册;AGENTS.md support~支持 AGENTS.md|Rule conflicts~规则冲突;Repo conventions~仓库约定;Maintenance cadence~维护节奏
plinth|Plinth|jabrena/plinth|413|engineering|78|B|A|B|Claude,Codex|An AI-native Java Enterprise development workflow packaged as skills and agents.~把 Java 企业开发工作流包装成 Skills 和 Agents 的 AI-native 项目。|Enterprise Java workflow~企业 Java 工作流|Modernize Java enterprise SDLC with agent workflows~用 Agent 工作流现代化 Java 企业 SDLC|Java focus~Java 聚焦;Human-in-loop~人工在环;Enterprise SDLC~企业 SDLC|MCP servers~MCP 服务器;Enterprise credentials~企业凭证;Workflow complexity~工作流复杂度
smart-ralph|Smart Ralph|tzachbon/smart-ralph|406|workflow|80|B|B|B|Claude|A Claude Code plugin combining spec-driven development and smart compaction.~结合规格驱动开发和智能压缩的 Claude Code 插件。|Spec workflow compaction~规格工作流压缩|Keep spec-driven agent work compact and traceable~让规格驱动 Agent 工作保持紧凑且可追溯|Spec loop~规格循环;Compaction~压缩;Claude plugin~Claude 插件|Plugin install~插件安装;Spec drift~规格漂移;Claude lock-in~Claude 锁定
vexjoy-agent|VexJoy Agent|notque/vexjoy-agent|401|workflow|76|B|B|B|Claude,Codex|A routed agent workflow with review gates, tests, and a learning loop.~带路由、审查门槛、测试和学习循环的 Agent 工作流。|Routed agent workflow~路由式 Agent 工作流|Route plain-English requests to specialist agents with review gates~把自然语言请求路由给专家 Agent 并设置审查门槛|Routing~路由;Review gates~审查门槛;Learning loop~学习循环|Autonomy scope~自主范围;Test reliability~测试可靠性;State persistence~状态持久化
turbo-skills|Turbo Skills|tobihagemann/turbo|365|workflow|84|A|A|A|Claude,Codex|A composable development process for agentic coding harnesses.~面向 agentic coding harness 的可组合开发流程。|Composable dev process~可组合开发流程|Use modular skills to structure coding-agent work~用模块化 Skill 组织编码 Agent 工作|Composable skills~可组合 Skill;Process clarity~流程清楚;Sibling editions~多版本适配|Edition drift~版本差异;Process overhead~流程开销;Harness assumptions~Harness 假设
codex-seo|Codex SEO|AgriciDaniel/codex-seo|362|marketing|71|C|B|B|Codex|A Codex-first SEO suite with workflows, TOML agents, and data integrations.~Codex-first SEO 套件，包含工作流、TOML Agent 和数据集成。|Codex SEO workflows~Codex SEO 工作流|Run structured SEO GEO and AEO work inside Codex~在 Codex 中运行结构化 SEO GEO 和 AEO 工作|Codex-first~Codex 优先;SEO reports~SEO 报告;Data integrations~数据集成|Paid APIs~付费 API;Credential handling~凭证处理;Report accuracy~报告准确性
terrashark|TerraShark|LukasNiessen/terrashark|293|infra|82|B|A|B|Claude,Codex|A Terraform skill for grounding IaC generation in official best practices.~让 Terraform 和 IaC 生成基于官方最佳实践的 Skill。|Terraform hallucination guard~Terraform 幻觉护栏|Reduce Terraform hallucinations in agent-generated infrastructure code~减少 Agent 生成 Terraform 基础设施代码时的幻觉|Terraform focus~Terraform 聚焦;Best-practice grounding~最佳实践锚定;IaC quality~IaC 质量|Cloud credentials~云凭证;Apply safety~Apply 安全;Provider version drift~Provider 版本变化
getspecstory|SpecStory|specstoryai/getspecstory|1.3k|knowledge|76|B|B|B|Claude,Codex,Cursor|Turns agent and IDE histories into reusable skills and shareable context.~把 Agent 和 IDE 历史转成可复用 Skill 与可分享上下文。|History-to-skill workflow~历史转 Skill 工作流|Reuse past coding conversations as future agent skills~把过去的编码对话复用成未来 Agent Skill|Conversation reuse~对话复用;Local-first extensions~本地优先扩展;Issue filing~Issue 创建|History privacy~历史隐私;Cloud sync~云同步;Sensitive logs~敏感日志
babysitter|Babysitter|a5c-ai/babysitter|1.5k|workflow|77|B|B|B|Claude,Codex|A deterministic orchestration system for managing complex agent workforces.~用于管理复杂 Agent workforce 的确定性编排系统。|Agent workforce orchestration~Agent workforce 编排|Coordinate complex multi-agent tasks with deterministic gates~用确定性门槛协调复杂多 Agent 任务|Deterministic orchestration~确定性编排;Complex task support~复杂任务支持;Self-management~自管理|Authority model~权限模型;Task runaway~任务失控;State correctness~状态正确性
claude-office-skills|Claude Office Skills|fivetaku/claude-office-skills|61|office|77|B|A|B|Claude,Codex|Office skills for Excel and PowerPoint workflows including DCF, LBO, data cleaning, and deck refresh.~面向 Excel 和 PowerPoint 的办公 Skills，覆盖 DCF、LBO、数据清洗和 deck refresh。|Office analyst workflows~办公分析工作流|Use agent skills for spreadsheet modeling, analysis, and presentation refresh work~用 Agent Skills 处理电子表格建模、分析和演示文稿更新|Excel skills~Excel Skill;PowerPoint skills~PowerPoint Skill;Financial modeling~财务建模|Sensitive files~敏感文件;Formula accuracy~公式准确性;Not financial advice~非投资建议
pinme|PinMe|glitternetwork/pinme|3.7k|infra|79|B|B|B|Claude,Codex|A frontend deployment workflow with Claude Code skills for auth, email, and LLM-backed publishing.~带 Claude Code Skills 的前端部署工作流，覆盖认证、邮件和 LLM 发布。|Frontend deploy skill~前端部署 Skill|Deploy frontend artifacts and related flows from agent-assisted projects~从 Agent 辅助项目部署前端产物和相关流程|5 SKILL.md files~5 个 SKILL.md;Deployment~部署;Frontend hosting~前端托管|External publish~外部发布;Account credentials~账号凭证;Rollback plan~回滚计划
academic-claude-workflow|Academic Claude Workflow|pedrohcgs/claude-code-my-workflow|1.4k|science|81|B|A|B|Claude,Codex|A ready-to-fork academic workflow with LaTeX, Beamer, R, replication, and review skills.~可 fork 的学术工作流，包含 LaTeX、Beamer、R、复现和审查 Skills。|Academic reproducibility~学术复现工作流|Support papers, slides, R analysis, replication checks, and adversarial academic review~支持论文、幻灯片、R 分析、复现检查和对抗式学术审查|52 SKILL.md files~52 个 SKILL.md;Replication protocol~复现协议;LaTeX and R~LaTeX 和 R|Academic integrity~学术诚信;Data privacy~数据隐私;Field-specific assumptions~学科假设
md2wechat-skill|Markdown to WeChat Skill|geekjourneyx/md2wechat-skill|3.1k|writing|72|C|B|B|Claude,Codex|A Markdown-to-WeChat publishing skill with themes, images, and multi-account support.~Markdown 到微信公众号发布 Skill，支持主题、配图和多账号。|WeChat publishing workflow~微信公众号发布工作流|Format and publish Markdown articles to WeChat~把 Markdown 文章排版并发布到微信|Publishing workflow~发布工作流;Many themes~主题丰富;Batch publish~批量发布|Account credentials~账号凭证;Publishing side effects~发布副作用;Image rights~图片权利
oh-story-claudecode|Oh Story ClaudeCode|worldwonderer/oh-story-claudecode|3.7k|writing|73|B|B|B|Claude|A Chinese fiction-writing skill pack covering research, outlining, drafting, and covers.~中文网文和小说 Skill 包，覆盖扫榜、拆文、写作和封面。|Long-form fiction workflow~长篇小说工作流|Use agents for Chinese web-novel planning and drafting~用 Agent 做中文网文规划和写作|Genre workflow~类型文工作流;Cover pipeline~封面管线;Anti-AI editing~去 AI 味编辑|Copyright style copying~版权和风格模仿;Generated images~生成图片;Platform policy~平台规则
contentstack-agent-skills|Contentstack Agent Skills|contentstack/contentstack-agent-skills|1k|office|76|B|B|B|Claude,Codex|Agent skills for working with Contentstack CMS and digital experience workflows.~用于处理 Contentstack CMS 与数字体验工作流的 Agent Skills。|CMS workflow skills~CMS 工作流 Skill|Let agents assist CMS content and delivery operations~让 Agent 辅助 CMS 内容和交付运营|CMS focus~CMS 聚焦;Enterprise content~企业内容;Workflow automation~工作流自动化|CMS credentials~CMS 凭证;Content publishing~内容发布;Environment targeting~环境目标
claude-to-im-skill|Claude to IM Skill|op7418/Claude-to-IM-skill|950|automation|70|C|B|B|Claude,Codex|A skill for connecting Claude-style agent workflows to instant messaging surfaces.~把 Claude 风格 Agent 工作流连接到即时通讯界面的 Skill。|Messaging bridge~消息桥接|Bridge agent workflows into IM conversations~把 Agent 工作流桥接进即时通讯对话|IM integration~IM 集成;Notification flow~通知流程;Conversation surface~对话界面|Message leakage~消息泄露;Bot tokens~机器人 Token;External sends~外部发送
lev-claude-code-skills|Claude Code Skills|levnikolaevich/claude-code-skills|900|marketplace|80|B|B|B|Claude,Codex|A Claude Code skills collection for coding, docs, and productivity workflows.~面向编码、文档和生产力工作流的 Claude Code Skills 集合。|Claude Code skill pack~Claude Code Skill 包|Borrow reusable Claude Code workflows for everyday work~复用日常工作的 Claude Code 工作流|Reusable workflows~可复用工作流;Coding support~编码支持;Productivity scope~生产力范围|Overlap with larger packs~与大包重叠;Script review~脚本审查;Maintenance cadence~维护节奏
codex-gpt-image|Codex GPT Image Skill|ningzimu/codex-gpt-image|37|media|69|C|B|B|Codex,Claude,OpenClaw|A Codex OAuth based image-generation skill for gpt-image-2 workflows.~基于 Codex OAuth 的 gpt-image-2 图像生成 Skill。|Image generation skill~图像生成 Skill|Generate images from agent workflows without requiring a separate OpenAI API key~在无需单独 OpenAI API Key 的情况下从 Agent 工作流生成图片|Single SKILL.md~单个 SKILL.md;Codex OAuth~Codex OAuth;Image generation~图像生成|OAuth boundaries~OAuth 边界;Generation cost~生成成本;Asset rights~素材权利
gpt-image2-ppt-skills|GPT Image to PPT Skills|JuneYaooo/gpt-image2-ppt-skills|1k|office|70|C|B|B|Claude,OpenClaw|A presentation skill for cloning PPTX visual layouts with gpt-image-2 and bundled styles.~用 gpt-image-2 仿制 PPTX 视觉版式并提供风格包的演示文稿 Skill。|PPT visual cloning~PPT 视觉仿版|Turn reference decks into editable presentation drafts with controlled visual styles~把参考演示文稿转成可编辑的演示草稿和受控视觉风格|Single SKILL.md~单个 SKILL.md;Presentation workflow~演示文稿工作流;Visual styles~视觉风格|Template rights~模板权利;Image model cost~图像模型成本;Brand similarity~品牌相似风险
web-quality-skills|Web Quality Skills|addyosmani/web-quality-skills|1.8k|testing|89|A|A|B|Claude,Codex|Web quality and frontend performance skills from Addy Osmani.~Addy Osmani 的网页质量与前端性能 Skills。|Web quality expertise~网页质量专家经验|Improve agent output for performance, UX, and frontend quality~提升 Agent 输出的性能、UX 和前端质量|Performance focus~性能聚焦;Frontend quality~前端质量;Strong author signal~作者信号强|Metric context~指标上下文;Browser variance~浏览器差异;Project tradeoffs~项目取舍
skill-scanner|Skill Scanner|cisco-ai-defense/skill-scanner|1.9k|security|83|B|A|B|Claude,Codex|A security scanner for agent skills from Cisco AI Defense.~Cisco AI Defense 出品的 Agent Skill 安全扫描器。|Skill security scanning~Skill 安全扫描|Scan skill packages for risky patterns before installation~安装前扫描 Skill 包中的风险模式|Security scanner~安全扫描器;Risk patterns~风险模式;Defense source~防御来源|False negatives~漏报;Scanner permissions~扫描器权限;Policy tuning~策略调优
ctf-skills|CTF Skills|ljagiello/ctf-skills|1.8k|security|64|C|B|B|Claude,Codex|Capture-the-flag skills for security learning and challenge solving.~面向安全学习和 CTF 解题的技能包。|Security learning workflows~安全学习工作流|Use agents for controlled CTF practice and security education~用 Agent 做受控 CTF 练习和安全教育|CTF focus~CTF 聚焦;Learning tasks~学习任务;Structured tactics~结构化技巧|Dual-use risk~双用途风险;Lab boundaries~实验边界;Exploit commands~利用命令
terraform-skill|Terraform Skill|antonbabenko/terraform-skill|1.8k|infra|84|B|A|B|Claude,Codex|Terraform and infrastructure-as-code skill guidance from a recognized Terraform practitioner.~知名 Terraform 实践者提供的 Terraform/IaC Skill 指导。|Terraform practitioner guidance~Terraform 实践者指导|Guide agents toward safer Terraform module and IaC patterns~引导 Agent 采用更安全的 Terraform 模块和 IaC 模式|Terraform expertise~Terraform 专长;Module patterns~模块模式;IaC guidance~IaC 指导|Cloud changes~云变更;State safety~状态安全;Provider drift~Provider 变化
agent-toolkit|Agent Toolkit|softaworks/agent-toolkit|1.7k|engineering|78|B|B|B|Claude,Codex,Cursor|A toolkit for configuring coding agents with reusable rules and skills.~用可复用规则和 Skill 配置编码 Agent 的工具箱。|Coding-agent toolkit~编码 Agent 工具箱|Standardize coding-agent setup across projects~在多个项目中标准化编码 Agent 设置|Setup toolkit~设置工具箱;Reusable rules~可复用规则;Team consistency~团队一致性|Install footprint~安装痕迹;Rule conflicts~规则冲突;Repo mutation~仓库改动
dotnet-skills|.NET Skills|dotnet/skills|1.5k|engineering|90|A|A|B|Claude,Codex,Copilot|Official .NET skills and guidance for agent-assisted development.~官方 .NET Skills 与 Agent 辅助开发指导。|Official .NET guidance~官方 .NET 指导|Improve agent output for .NET applications and libraries~提升 Agent 在 .NET 应用和库中的输出质量|Official source~官方来源;Framework-specific~框架专用;Low direct risk~直接风险低|SDK version drift~SDK 版本变化;Project template fit~项目模板适配;Generated code review~生成代码审查
agent-sprite-forge|Agent Sprite Forge|0x0funky/agent-sprite-forge|1.5k|media|68|C|B|B|Claude,Codex|A skill workflow for generating game sprites and visual assets with agents.~用 Agent 生成游戏精灵和视觉素材的 Skill 工作流。|Game asset generation~游戏素材生成|Generate consistent sprite assets for prototypes and games~为原型和游戏生成一致的精灵素材|Sprite workflow~精灵工作流;Game assets~游戏素材;Creative iteration~创意迭代|Asset rights~素材权利;Model cost~模型成本;Style consistency~风格一致性
cc-skills-golang|Claude Code Skills for Go|samber/cc-skills-golang|1.5k|engineering|88|A|A|B|Claude,Codex|Go-focused Claude Code skills for idiomatic backend development.~面向惯用 Go 后端开发的 Claude Code Skills。|Go engineering skills~Go 工程 Skill|Improve Go code generation, review, and project maintenance~提升 Go 代码生成、审查和项目维护|Go focus~Go 聚焦;Backend patterns~后端模式;Low direct risk~直接风险低|Go version drift~Go 版本变化;Framework assumptions~框架假设;Test coverage~测试覆盖
swift-concurrency-agent-skill|Swift Concurrency Agent Skill|AvdLee/Swift-Concurrency-Agent-Skill|1.5k|mobile|91|A|A|B|Claude,Codex|A Swift Concurrency skill for agents working on modern Apple apps.~面向现代 Apple 应用开发的 Swift Concurrency Agent Skill。|Swift concurrency expertise~Swift 并发专家经验|Help agents write safer async Swift code~帮助 Agent 编写更安全的异步 Swift 代码|Swift concurrency~Swift 并发;Strong author signal~作者信号强;Mobile-specific~移动端专用|API evolution~API 演进;Actor isolation~Actor 隔离;Project target version~项目目标版本
seo-geo-claude-skills|SEO GEO Claude Skills|aaron-he-zhu/seo-geo-claude-skills|1.4k|marketing|73|B|B|B|Claude,Codex|SEO and GEO skills for search, AI answer visibility, and content operations.~面向搜索、AI 答案可见性和内容运营的 SEO/GEO Skills。|SEO/GEO workflows~SEO/GEO 工作流|Plan content for both search engines and generative answer engines~同时面向搜索引擎和生成式答案引擎规划内容|GEO focus~GEO 聚焦;Content workflow~内容工作流;Marketing relevance~营销相关|Search freshness~搜索时效;Tool credentials~工具凭证;Claim verification~主张校验
finance-skills|Finance Skills|himself65/finance-skills|1.4k|data|74|B|B|B|Claude,Codex|Finance-oriented skills for analysis, modeling, and structured financial reasoning.~面向分析、建模和结构化金融推理的 Finance Skills。|Financial analysis workflows~金融分析工作流|Use agents for structured finance and investment-analysis drafts~用 Agent 生成结构化金融与投研分析草稿|Finance focus~金融聚焦;Structured analysis~结构化分析;Data workflows~数据工作流|Not financial advice~非投资建议;Data freshness~数据时效;Source verification~来源核验
claude-workflow-v2|Claude Workflow V2|CloudAI-X/claude-workflow-v2|1.4k|workflow|77|B|B|B|Claude,Codex|A workflow framework for coordinating Claude-style agent tasks and project state.~用于协调 Claude 风格 Agent 任务和项目状态的工作流框架。|Project workflow framework~项目工作流框架|Coordinate agent tasks with durable project workflow state~用持久项目工作流状态协调 Agent 任务|Workflow state~工作流状态;Task coordination~任务协调;Project structure~项目结构|State files~状态文件;Command execution~命令执行;Workflow lock-in~工作流锁定
ai-devkit|AI DevKit|codeaholicguy/ai-devkit|1.2k|engineering|81|B|B|B|Claude,Codex,Cursor|A developer toolkit for AI-assisted coding workflows, rules, and reusable prompts.~面向 AI 辅助编码工作流、规则和可复用提示的开发者工具箱。|AI coding toolkit~AI 编码工具箱|Bootstrap reusable AI coding rules and workflows for projects~为项目快速配置可复用 AI 编码规则和工作流|Developer toolkit~开发者工具箱;Reusable prompts~可复用提示;Project setup~项目设置|Generated config~生成配置;Rule conflicts~规则冲突;Install footprint~安装痕迹
`);

export const skills: SkillEntry[] = [
  ...baseSkills,
  ...additionalSkillRows.map(rowToSkill)
];

export const categories = Array.from(new Set(skills.map((skill) => skill.category)));

const baseSkillInsights: Record<string, SkillInsight> = {
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
  "openai-skills": {
    intent: { en: "Study installable Codex skill patterns", zh: "学习可安装的 Codex Skill 模式" },
    strengths: [
      { en: "Official source", zh: "官方来源" },
      { en: "Concrete SKILL.md files", zh: "具体 SKILL.md 文件" },
      { en: "Curated examples", zh: "精选示例" }
    ],
    watchouts: [
      { en: "Codex-first assumptions", zh: "Codex 优先假设" },
      { en: "Example scripts", zh: "示例脚本" },
      { en: "Generated paths", zh: "生成路径" }
    ]
  },
  "anthropic-skills": {
    intent: { en: "Study official Agent Skills patterns", zh: "学习官方 Agent Skills 模式" },
    strengths: [
      { en: "Official reference", zh: "官方参考" },
      { en: "Example variety", zh: "示例多样" },
      { en: "Canonical format", zh: "格式规范" }
    ],
    watchouts: [
      { en: "Example scripts", zh: "示例脚本" },
      { en: "Claude-first assumptions", zh: "Claude 优先假设" },
      { en: "License clarity", zh: "许可证清晰度" }
    ]
  },
  "agent-skill-creator": {
    intent: { en: "Convert a repeatable workflow into a skill", zh: "把可重复工作流转成 Skill" },
    strengths: [
      { en: "Skill generation", zh: "Skill 生成" },
      { en: "Multi-platform", zh: "多平台" },
      { en: "Single SKILL.md", zh: "单个 SKILL.md" }
    ],
    watchouts: [
      { en: "Generated quality", zh: "生成质量" },
      { en: "Source licensing", zh: "来源许可" },
      { en: "Platform paths", zh: "平台路径" }
    ]
  },
  "mattpocock-skills": {
    intent: { en: "Fix practical coding-agent failure modes", zh: "修正常见编程 Agent 失败模式" },
    strengths: [
      { en: "Practitioner taste", zh: "实践者判断" },
      { en: "Focused engineering", zh: "工程聚焦" },
      { en: "Router discipline", zh: "路由纪律" }
    ],
    watchouts: [
      { en: "Router freshness", zh: "路由时效" },
      { en: "Local symlinks", zh: "本地符号链接" },
      { en: "Personal workflow bias", zh: "个人工作流偏好" }
    ]
  },
  "nature-skills": {
    intent: { en: "Improve academic writing and figure work", zh: "改进学术写作和科研绘图" },
    strengths: [
      { en: "Academic domain", zh: "学术领域" },
      { en: "Figure workflow", zh: "科研绘图" },
      { en: "Multiple SKILL.md files", zh: "多个 SKILL.md 文件" }
    ],
    watchouts: [
      { en: "Citation quality", zh: "引用质量" },
      { en: "Field fit", zh: "学科适配" },
      { en: "Journal-style claims", zh: "期刊风格主张" }
    ]
  },
  "claude-code-best-practice": {
    intent: { en: "Move from vibe coding to agentic engineering", zh: "从 vibe coding 走向 agentic engineering" },
    strengths: [
      { en: "Practice-backed", zh: "实践支持" },
      { en: "Concrete skills", zh: "具体 Skill" },
      { en: "Engineering workflow", zh: "工程工作流" }
    ],
    watchouts: [
      { en: "Personal conventions", zh: "个人约定" },
      { en: "Claude Code fit", zh: "Claude Code 适配" },
      { en: "Process overhead", zh: "流程开销" }
    ]
  },
  "claude-code-java": {
    intent: { en: "Add reusable Java development checks", zh: "加入可复用 Java 开发检查" },
    strengths: [
      { en: "Java focus", zh: "Java 聚焦" },
      { en: "Many skills", zh: "Skill 较多" },
      { en: "Enterprise workflow", zh: "企业流程" }
    ],
    watchouts: [
      { en: "Framework versions", zh: "框架版本" },
      { en: "Project conventions", zh: "项目约定" },
      { en: "Generated code review", zh: "生成代码审查" }
    ]
  },
  "google-workspace-cli": {
    intent: { en: "Automate Google Workspace from agents", zh: "让 Agent 自动化 Google Workspace" },
    strengths: [
      { en: "Official Google", zh: "Google 官方" },
      { en: "Workspace coverage", zh: "办公覆盖广" },
      { en: "CLI automation", zh: "CLI 自动化" }
    ],
    watchouts: [
      { en: "OAuth scopes", zh: "OAuth scope" },
      { en: "Admin permissions", zh: "管理员权限" },
      { en: "Write actions", zh: "写操作" }
    ]
  },
  "skillopt": {
    intent: { en: "Research how reusable skills can be optimized", zh: "研究可复用 Skill 如何优化" },
    strengths: [
      { en: "Research-backed", zh: "研究支持" },
      { en: "Validation gates", zh: "验证门槛" },
      { en: "Skill artifacts", zh: "Skill 产物" }
    ],
    watchouts: [
      { en: "Experiment scripts", zh: "实验脚本" },
      { en: "Training data", zh: "训练数据" },
      { en: "Benchmark transfer", zh: "Benchmark 迁移性" }
    ]
  },
  "ai-research-skills": {
    intent: { en: "Give agents AI research and engineering workflows", zh: "给 Agent 配 AI 研究和工程工作流" },
    strengths: [
      { en: "Research workflow", zh: "研究工作流" },
      { en: "Many skills", zh: "Skill 较多" },
      { en: "Engineering depth", zh: "工程深度" }
    ],
    watchouts: [
      { en: "Compute cost", zh: "算力成本" },
      { en: "Citation quality", zh: "引用质量" },
      { en: "Experiment scripts", zh: "实验脚本" }
    ]
  },
  "jeffallan-claude-skills": {
    intent: { en: "Use broad full-stack development playbooks", zh: "使用广覆盖全栈开发手册" },
    strengths: [
      { en: "Full-stack scope", zh: "全栈范围" },
      { en: "Developer-friendly", zh: "开发者友好" },
      { en: "Practical tasks", zh: "任务实用" }
    ],
    watchouts: [
      { en: "Framework drift", zh: "框架变化" },
      { en: "Example freshness", zh: "示例时效" },
      { en: "Claude-specific wording", zh: "Claude 特定表述" }
    ]
  },
  "product-manager-skills": {
    intent: { en: "Use PM methods without building a PM process from scratch", zh: "复用产品方法而不是从零搭流程" },
    strengths: [
      { en: "Battle-tested methods", zh: "成熟方法" },
      { en: "Structured outputs", zh: "结构化产出" },
      { en: "Low safety risk", zh: "安全风险低" }
    ],
    watchouts: [
      { en: "Generic templates", zh: "通用模板" },
      { en: "Needs company context", zh: "需要公司上下文" },
      { en: "Decision quality", zh: "决策质量" }
    ]
  },
  "swiftui-agent-skill": {
    intent: { en: "Guide agents through modern SwiftUI implementation", zh: "指导 Agent 做现代 SwiftUI 实现" },
    strengths: [
      { en: "SwiftUI focus", zh: "SwiftUI 聚焦" },
      { en: "Strong author signal", zh: "作者信号强" },
      { en: "Cross-agent format", zh: "跨 Agent 格式" }
    ],
    watchouts: [
      { en: "Version drift", zh: "版本变化" },
      { en: "Apple API changes", zh: "Apple API 变化" },
      { en: "Project context", zh: "项目上下文" }
    ]
  },
  "drawio-skill": {
    intent: { en: "Generate architecture and workflow diagrams", zh: "生成架构图和流程图" },
    strengths: [
      { en: "Diagram export", zh: "图表导出" },
      { en: "Vision self-check", zh: "视觉自检" },
      { en: "Codebase diagrams", zh: "代码库图表" }
    ],
    watchouts: [
      { en: "Generated files", zh: "生成文件" },
      { en: "Export scripts", zh: "导出脚本" },
      { en: "Asset licensing", zh: "素材许可" }
    ]
  },
  "generative-media-skills": {
    intent: { en: "Create images, video, and audio through agent workflows", zh: "通过 Agent 工作流生成图像、视频和音频" },
    strengths: [
      { en: "Multimodal", zh: "多模态" },
      { en: "Creative pipeline", zh: "创作管线" },
      { en: "Many media skills", zh: "媒体 Skill 多" }
    ],
    watchouts: [
      { en: "Paid APIs", zh: "付费 API" },
      { en: "Media rights", zh: "媒体权利" },
      { en: "Generation cost", zh: "生成成本" }
    ]
  },
  "browser-act-skills": {
    intent: { en: "Run browser automation with agent assistance", zh: "用 Agent 辅助运行浏览器自动化" },
    strengths: [
      { en: "Browser control", zh: "浏览器控制" },
      { en: "Human handoff", zh: "人工接管" },
      { en: "Parallel sessions", zh: "并行会话" }
    ],
    watchouts: [
      { en: "Account risk", zh: "账号风险" },
      { en: "Credentials", zh: "凭证" },
      { en: "External side effects", zh: "外部副作用" }
    ]
  },
  "flutterguard": {
    intent: { en: "Review Flutter mobile app packages", zh: "审查 Flutter 移动应用包" },
    strengths: [
      { en: "Flutter focus", zh: "Flutter 聚焦" },
      { en: "Mobile AppSec", zh: "移动 AppSec" },
      { en: "Single SKILL.md", zh: "单个 SKILL.md" }
    ],
    watchouts: [
      { en: "Authorized apps only", zh: "仅限授权应用" },
      { en: "Reverse engineering", zh: "逆向分析" },
      { en: "Sensitive binaries", zh: "敏感二进制" }
    ]
  },
  "agent-rules-books": {
    intent: { en: "Apply classic software-engineering book ideas in agent work", zh: "把经典软件工程书思想用于 Agent 工作" },
    strengths: [
      { en: "Book-backed", zh: "书籍支持" },
      { en: "Compact variants", zh: "紧凑版本" },
      { en: "Tool-agnostic", zh: "工具无关" }
    ],
    watchouts: [
      { en: "Interpretive rules", zh: "二次解读规则" },
      { en: "Copyright boundaries", zh: "版权边界" },
      { en: "Not a benchmark", zh: "不是正式 Benchmark" }
    ]
  },
  "design-dna": {
    intent: { en: "Extract reusable style direction from reference UIs", zh: "从参考 UI 提取可复用风格方向" },
    strengths: [
      { en: "Visual tokens", zh: "视觉 Token" },
      { en: "Reference matching", zh: "参考匹配" },
      { en: "UI generation", zh: "UI 生成" }
    ],
    watchouts: [
      { en: "Screenshot privacy", zh: "截图隐私" },
      { en: "URL fetching", zh: "URL 抓取" },
      { en: "Asset rights", zh: "素材权利" }
    ]
  },
  "ros2-engineering-skills": {
    intent: { en: "Improve ROS 2 agent-assisted development", zh: "改进 ROS 2 Agent 辅助开发" },
    strengths: [
      { en: "ROS 2 focus", zh: "ROS 2 聚焦" },
      { en: "Production guidance", zh: "生产级指导" },
      { en: "Single SKILL.md", zh: "单个 SKILL.md" }
    ],
    watchouts: [
      { en: "Hardware assumptions", zh: "硬件假设" },
      { en: "Safety constraints", zh: "安全约束" },
      { en: "ROS version drift", zh: "ROS 版本变化" }
    ]
  },
  "playwright-skill": {
    intent: { en: "Improve Playwright test automation guidance", zh: "提升 Playwright 测试自动化指导" },
    strengths: [
      { en: "Testing focus", zh: "测试聚焦" },
      { en: "Specific tool", zh: "具体工具" },
      { en: "Low direct risk", zh: "直接风险低" }
    ],
    watchouts: [
      { en: "Version drift", zh: "版本变化" },
      { en: "Project fixtures", zh: "项目 fixture" },
      { en: "CI differences", zh: "CI 差异" }
    ]
  }
};

export const skillInsights: Record<string, SkillInsight> = {
  ...baseSkillInsights,
  ...Object.fromEntries(additionalSkillRows.map((row) => [row.id, rowToInsight(row)]))
};

function parseAdditionalSkillRows(raw: string): AdditionalSkillRow[] {
  return raw.trim().split("\n").map((line, index) => {
    const columns = line.split("|");
    if (columns.length !== 15) {
      throw new Error(`Invalid skill row ${index + 1}: expected 15 columns, got ${columns.length}`);
    }

    const [
      id,
      name,
      repo,
      stars,
      category,
      score,
      safety,
      docs,
      portability,
      platforms,
      summary,
      signal,
      intent,
      strengths,
      watchouts
    ] = columns;

    return {
      id,
      name,
      repo,
      stars,
      category: category as CategoryId,
      score: Number(score),
      safety: safety as Grade,
      docs: docs as Grade,
      portability: portability as Grade,
      platforms: platforms.split(","),
      summary: parseLocalizedPair(summary),
      signal: parseLocalizedPair(signal),
      intent: parseLocalizedPair(intent),
      strengths: parseLocalizedList(strengths),
      watchouts: parseLocalizedList(watchouts)
    };
  });
}

function parseLocalizedPair(value: string): LocalizedText {
  const [en, zh] = value.split("~");
  if (!en || !zh) throw new Error(`Invalid localized pair: ${value}`);
  return { en, zh };
}

function parseLocalizedList(value: string): LocalizedText[] {
  return value.split(";").map(parseLocalizedPair);
}

function rowToSkill(row: AdditionalSkillRow): SkillEntry {
  return {
    id: row.id,
    name: row.name,
    repo: row.repo,
    url: `https://github.com/${row.repo}`,
    stars: row.stars,
    category: row.category,
    summary: row.summary,
    signal: row.signal,
    platforms: row.platforms,
    score: row.score,
    safety: row.safety,
    docs: row.docs,
    portability: row.portability,
    badges: row.strengths,
    risks: [
      {
        en: row.watchouts.map((item) => item.en).join(", "),
        zh: row.watchouts.map((item) => item.zh).join("、")
      }
    ]
  };
}

function rowToInsight(row: AdditionalSkillRow): SkillInsight {
  return {
    intent: row.intent,
    strengths: row.strengths,
    watchouts: row.watchouts
  };
}
