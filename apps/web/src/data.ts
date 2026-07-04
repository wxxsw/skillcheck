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
      en: "Agentic skills framework and software-development methodology.",
      zh: "把 Agent 技能组织成软件开发方法论的框架。"
    },
    signal: {
      en: "Methodology as skills",
      zh: "把方法论封装成技能"
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
        en: "Review installer behavior and local file changes",
        zh: "需要审查安装器行为和本地文件改动"
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
      en: "Builds a queryable knowledge graph from code, schemas, docs, and media.",
      zh: "从代码、Schema、文档和媒体生成可查询知识图谱。"
    },
    signal: {
      en: "Repo context engine",
      zh: "代码仓库上下文引擎"
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
        en: "Check indexing footprint, parser dependencies, and data retention",
        zh: "检查索引占用、解析器依赖和数据保留方式"
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
      en: "Production-grade engineering skills for coding agents.",
      zh: "面向编程 Agent 的生产级工程技能。"
    },
    signal: {
      en: "Practical engineering playbooks",
      zh: "实用工程手册"
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
        en: "May include executable workflows",
        zh: "可能包含可执行工作流"
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
      en: "A focused skill for improving AI design taste and reducing generic output.",
      zh: "聚焦提升 AI 设计品味，减少模板化输出。"
    },
    signal: {
      en: "Memorable, narrow promise",
      zh: "清晰且容易记住的承诺"
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
        en: "Needs evidence that guidance improves outputs across models",
        zh: "需要证明这些指导能跨模型改善输出"
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
      en: "Recency research across social, prediction, video, HN, and the web.",
      zh: "面向社交、预测市场、视频、HN 和网页的近期信息研究技能。"
    },
    signal: {
      en: "Freshness-aware research",
      zh: "重视时效性的研究"
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
        en: "Check external calls, API keys, rate limits, and citations",
        zh: "检查外部调用、API Key、限流和引用来源"
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
      en: "Teaches agents to use Obsidian CLI and open Markdown/Canvas formats.",
      zh: "教 Agent 使用 Obsidian CLI 以及开放的 Markdown/Canvas 格式。"
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
        en: "Review vault write behavior and permission boundaries",
        zh: "审查知识库写入行为和权限边界"
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
      en: "CRO, copywriting, SEO, analytics, and growth engineering skills.",
      zh: "覆盖 CRO、文案、SEO、分析和增长工程的技能集合。"
    },
    signal: {
      en: "Go-to-market workflows",
      zh: "GTM 增长工作流"
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
        en: "Check analytics/API credentials and source assumptions",
        zh: "检查分析/API 凭证和来源假设"
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
      en: "Agentic video-production system with pipelines, tools, and skills.",
      zh: "包含管线、工具和技能的 Agent 视频制作系统。"
    },
    signal: {
      en: "End-to-end creative pipeline",
      zh: "端到端创作管线"
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
        en: "Review AGPL terms, ffmpeg/assets, paid APIs, and generation costs",
        zh: "审查 AGPL 条款、ffmpeg/素材、付费 API 和生成成本"
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
      en: "Domain evidence matters",
      zh: "领域证据很关键"
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
        en: "Verify database provenance, citations, and domain disclaimers",
        zh: "验证数据库来源、引用和领域免责声明"
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
      en: "Persistent Markdown plans for long-running agent tasks.",
      zh: "为长任务保存持久化 Markdown 计划。"
    },
    signal: {
      en: "Crash-proof planning",
      zh: "不怕中断的计划"
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
        en: "Review plan file scope and deterministic completion gates",
        zh: "审查计划文件范围和可判定的完成标准"
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
      en: "Cybersecurity skill set mapped to MITRE and NIST-style frameworks.",
      zh: "映射到 MITRE/NIST 风格框架的网络安全技能集。"
    },
    signal: {
      en: "Dual-use discipline",
      zh: "双用途风险管理"
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
        en: "Needs safe-lab assumptions and dangerous-command checks",
        zh: "需要安全实验室假设和危险命令检查"
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
      en: "Product management skills spanning discovery, strategy, execution, and launch.",
      zh: "覆盖产品发现、战略、执行和发布的产品管理技能。"
    },
    signal: {
      en: "Structured PM outputs",
      zh: "结构化产品产出"
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
        en: "Some outputs require human validation",
        zh: "部分输出仍需要人工判断"
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
      en: "Broad multi-domain library with agents, commands, scripts, and plugins.",
      zh: "覆盖多领域的技能库，包含 agents、commands、scripts 和 plugins。"
    },
    signal: {
      en: "Marketplace stress test",
      zh: "技能市场压力测试样本"
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
        en: "Check installer behavior, duplicate names, scripts, and per-skill licenses",
        zh: "检查安装器行为、重名技能、脚本和单技能许可"
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
      en: "Context-window optimization with memory, routing, MCP, and hooks.",
      zh: "通过记忆、路由、MCP 和 hooks 优化上下文窗口。"
    },
    signal: {
      en: "Token and memory control",
      zh: "Token 与记忆控制"
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
        en: "Review hook permissions, persistence paths, and sandboxing claims",
        zh: "审查 hook 权限、持久化路径和沙箱声明"
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
      en: "Unofficial NotebookLM API, CLI, and agentic skill surface.",
      zh: "非官方 NotebookLM API、CLI 与 Agent 技能接口。"
    },
    signal: {
      en: "Unofficial API wrapper",
      zh: "非官方 API 封装"
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
        en: "Check account risk, auth handling, and data export behavior",
        zh: "检查账号风险、认证处理和数据导出行为"
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
      en: "Official skills for using GSAP animation patterns and plugins correctly.",
      zh: "官方维护的 GSAP 动画模式与插件使用技能。"
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
        en: "Keep API guidance aligned with GSAP versions",
        zh: "确保 API 指南与 GSAP 版本保持一致"
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
      en: "SEO suite with sub-skills, sub-agents, reports, and optional services.",
      zh: "包含子技能、子 Agent、报告和可选服务的 SEO 套件。"
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
        en: "Review Google/DataForSEO/Firecrawl credentials and source freshness",
        zh: "审查 Google/DataForSEO/Firecrawl 凭证和来源时效性"
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
      en: "Spec-driven development harness for autonomous implementation.",
      zh: "面向自主实现的规格驱动开发工具链。"
    },
    signal: {
      en: "Approved spec to code",
      zh: "从批准规格到代码"
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
        en: "Check whether generated tasks remain tied to approved specs",
        zh: "检查生成任务是否仍绑定到已批准规格"
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
      en: "Anti-slop design skill for Claude Code, Cursor, and Codex.",
      zh: "面向 Claude Code、Cursor 和 Codex 的反模板化设计技能。"
    },
    signal: {
      en: "Taste guardrails",
      zh: "设计品味护栏"
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
        en: "Needs examples to prove design improvement across tasks",
        zh: "需要示例证明能跨任务改善设计结果"
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
      en: "Multi-platform directory for Claude Code, Codex, Gemini CLI, and Cursor.",
      zh: "面向 Claude Code、Codex、Gemini CLI 和 Cursor 的多平台目录。"
    },
    signal: {
      en: "Discovery benchmark",
      zh: "发现体验基准"
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
        en: "Quality varies across linked projects",
        zh: "链接项目质量参差不齐"
      }
    ]
  }
];

export const categories = Array.from(new Set(skills.map((skill) => skill.category)));
