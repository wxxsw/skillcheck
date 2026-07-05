# SkillCheck

[English](README.md) | [中文](README.zh-CN.md)

[![CI](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml)
[![Pages](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-171915.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/reviewed_skills-100-e8f15a.svg)](#已审阅技能样本)

帮你找到值得先看清楚、再安装的 Agent Skill。

SkillCheck 会审阅 Agent Skill 仓库，并把结果整理成一张清楚的评分卡：它做什么、可能碰到什么、看起来能不能跨平台使用，以及把权限交给它之前，人应该先检查哪里。

> 类似 `npm audit`，但面向 AI Agent Skills。

**在线页面：** https://wxxsw.github.io/skillcheck/

## TL;DR

| SkillCheck 可以做什么 | 状态 |
| --- | --- |
| 浏览 100 个已审阅 Agent Skill | `apps/web` 已上线 |
| 按目标分类筛选，并对比好信号/风险标签 | `apps/web` 已上线 |
| 页面自动识别英文/中文，并支持手动切换 | `apps/web` 已上线 |
| 扫描本地或 GitHub 技能仓库 | `packages/cli` MVP |
| 查看安全、文档、可迁移性信号 | `packages/core` MVP |
| 托管 HTML Gallery 到 GitHub Pages | 通过 `gh-pages` 分支上线 |

## 为什么值得 Star

- Agent Skill 正在变得像软件包：复制很容易，信任没那么容易。
- 大多数目录停在“发现”。SkillCheck 关心下一步：安装前到底该看什么？
- 每个条目都有评分、安全等级、分类、好信号、风险提示和平台线索。
- 第一批数据来自 100 个真实仓库，不是占位内容。
- 项目足够小，可以 fork、审查，也可以继续长成 badge、API 或 PR 审查机器人。

## 为什么需要它

一个 Agent Skill 可以只是 Markdown 指令。它也可能安装依赖、运行脚本、读写文件、修改代码、调用 API，甚至要求凭证。

大多数目录回答：“有什么？”

SkillCheck 会追问：

- 我应该安装它吗？
- 它可能接触我机器上的什么东西？
- 它能不能离开单一 Agent 客户端？
- 它的能力有没有证据支撑？

## 它和普通目录有什么不同

| 普通目录常做 | SkillCheck 更关注 |
| --- | --- |
| 收更多链接 | 少而经过审阅的条目 |
| 只看 Star | 安全、文档、可迁移性和证据 |
| 平台兼容口号 | 跨 Agent 兼容信号 |
| 默认信任安装脚本 | 标出命令、hooks、API、凭证和文件写入 |
| 静态收藏 | 逐步走向扫描、badge 和 benchmark |

## 已审阅技能样本

Star 数为 2026-07-04 附近的近似值。

这个列表不是背书，而是 SkillCheck 用来打磨评分维度的第一批样本。纯 awesome-list、链接目录和生态聚合站可以作为调研来源，但不进入主榜。

下面表格只展示代表条目。完整 Top 100 在在线页面和 `data/skills.json`。

### Top 100 筛选原则

这个目录是筛过的，不是为了凑链接。一个仓库能进来，至少要有东西可检查：

- 和 Agent Skill、SKILL.md、agent command 或 agent workflow 明确相关
- Star 高，但必须先确认仓库里有具体 Skill、SKILL.md、命令包或 Agent 工作流
- 有官方、作者、厂商或安全团队来源
- 能补足分类多样性，而不是又一个普通 prompt 集
- 能在用户安装前说清楚具体风险

当前 100 个条目覆盖工程、工作流、产品、营销、研究、科学、安全、记忆、知识管理、设计、前端、测试、移动端、基础设施、媒体、写作、办公自动化和数据/金融。

| Repo | Stars | 为什么有价值 | SkillCheck 重点检查 |
| --- | ---: | --- | --- |
| [obra/superpowers](https://github.com/obra/superpowers) | 245k | 把技能作为软件开发方法论，而不是一次性提示词。 | Shell 脚本、安装器、本地文件改动和方法论可迁移性。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 77k | 把代码、Schema、文档和媒体转成可查询知识图谱。 | 解析器依赖、本地索引占用、网络访问和数据保留。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 68k | 面向真实工程工作的 Agent 技能。 | 示例、触发条件和安全执行边界。 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 55k | 承诺很窄但好记：提升 AI 设计品味。 | 指导是否具体可测试，示例是否证明改善。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 48k | 以“最近 30 天”为核心组织研究源。 | 外部调用、API Key、限流、引用和时效性。 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 39k | 教 Agent 使用 Obsidian 的开放格式和 CLI。 | Vault 写入行为、Markdown/Canvas 处理和权限边界。 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 36k | 覆盖 CRO、文案、SEO、分析和增长。 | 是否只是模板，还是会触发执行；分析/API 凭证处理。 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 32k | 视频制作系统，包含管线、工具和大量 Agent Skills。 | 重依赖、媒体生成 API、许可和素材处理。 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 30k | 覆盖生物、化学、医学和药物发现。 | 引用、数据库来源、领域免责声明和 benchmark 证据。 |
| [openai/skills](https://github.com/openai/skills) | 23k | Codex Skills Catalog，包含具体 SKILL.md 包和精选示例。 | Codex 专属假设、脚本、生成路径和示例可迁移性。 |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 24k | 用持久化 Markdown 计划承接长任务。 | 文件写入范围、计划位置和完成标准。 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 24k | 网络安全技能集，映射到 MITRE/NIST 风格框架。 | 双用途风险、危险命令、授权语言和安全实验室假设。 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | 22k | 产品管理技能，从发现到 GTM。 | 模板质量、产出结构和输入要求。 |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 19k | 大型多领域技能库，包含 agents、commands、scripts 和 plugins。 | 安装器、重名技能、脚本和单技能许可。 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 18k | 通过记忆、路由、MCP 和 hooks 管理上下文。 | hook 权限、沙箱声明、持久化路径和配置风险。 |
| [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) | 17k | 非官方 NotebookLM API、CLI 与技能接口。 | 账号风险、认证处理和数据导出行为。 |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | 10k | 官方 GSAP 动画技能。 | 版本一致性、API 引用、示例覆盖和官方文档来源。 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 10k | SEO 技能套件，包含报告和可选外部服务。 | Google/DataForSEO/Firecrawl 凭证、报告生成和来源时效性。 |
| [gotalab/cc-sdd](https://github.com/gotalab/cc-sdd) | 3.5k | 把规格驱动开发带入 Agent 工作流。 | 生成任务是否可追溯到批准后的规格。 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | 3.5k | 面向 Claude Code、Cursor 和 Codex 的反模板化设计技能。 | 范围清晰度、可迁移性，以及是否有输出改善证据。 |
| [anthropics/skills](https://github.com/anthropics/skills) | 158k | Anthropic 官方 Agent Skills 示例仓库。 | 示例脚本、许可证清晰度和 Claude 优先假设。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 156k | 来自真实编程 Agent 失败模式的工程技能。 | 路由时效、本地符号链接和个人工作流假设。 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | 62k | 从 vibe coding 走向 agentic engineering 的实践型 Skills。 | 哪些是可迁移实践，哪些只是个人 Claude Code 约定。 |
| [Yuan1z0825/nature-skills](https://github.com/Yuan1z0825/nature-skills) | 26k | 面向 Nature 风格科研写作和科研绘图。 | 引用质量、期刊风格主张和学科适配。 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 29k | Google 官方 Workspace 自动化 CLI，包含 Agent Skills。 | OAuth scope、管理员权限、写操作和 API 副作用。 |
| [FrancyJGLisboa/agent-skill-creator](https://github.com/FrancyJGLisboa/agent-skill-creator) | 1.7k | 把可重复工作流转成可复用 Agent Skill。 | 生成 Skill 的质量、来源许可和平台路径。 |
| [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 11k | 优化可复用自然语言 Skill 的研究系统。 | 训练数据、评测流程、脚本和迁移性。 |
| [Orchestra-Research/AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) | 10k | AI 研究和工程 Skill 库。 | 实验脚本、算力成本、引用质量和 benchmark 证据。 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | 13k | 面向自主机器学习研究循环和跨模型审查的 Markdown Skills。 | 算力成本、实验安全和结果核验。 |
| [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills) | 10k | 全栈开发 Skill 包。 | 框架时效、示例、Claude 特定表述和辅助脚本。 |
| [deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills) | 5.6k | 将产品管理方法包装成可复用 Skills。 | 模板具体度、公司上下文要求和决策质量护栏。 |
| [Agents365-ai/drawio-skill](https://github.com/Agents365-ai/drawio-skill) | 5.1k | 从自然语言和代码库上下文生成图表。 | 导出脚本、生成文件、素材许可和图表准确性。 |
| [twostraws/SwiftUI-Agent-Skill](https://github.com/twostraws/SwiftUI-Agent-Skill) | 4.3k | 面向 Apple 应用开发的 SwiftUI 专用 Skill。 | SwiftUI 版本变化、Apple API 变化和项目假设。 |
| [dpearson2699/swift-ios-skills](https://github.com/dpearson2699/swift-ios-skills) | 831 | 覆盖 iOS 26+、Swift、SwiftUI 和 Apple 框架的移动端 Skill 包。 | SDK 版本变化、目标系统适配和生成代码审查。 |
| [SamurAIGPT/Generative-Media-Skills](https://github.com/SamurAIGPT/Generative-Media-Skills) | 3.7k | 图像、视频和音频多模态 Skill 包。 | 付费 API、媒体权利、提示词来源和生成成本。 |
| [browser-act/skills](https://github.com/browser-act/skills) | 3.6k | 带人工接管和平行会话的浏览器自动化 Skills。 | 账号风险、凭证、反爬边界和外部副作用。 |
| [awesome-skills/code-review-skill](https://github.com/awesome-skills/code-review-skill) | 1.3k | 单个模块化代码审查 Skill，覆盖多种语言和框架。 | 误报、框架时效和人工审查门槛。 |
| [decebals/claude-code-java](https://github.com/decebals/claude-code-java) | 671 | 面向 Java 和企业开发流程的 Agent Skills。 | 框架版本、项目约定和生成代码审查。 |
| [anasfik/FlutterGuard](https://github.com/anasfik/FlutterGuard) | 23 | 面向 Flutter APK/AAB 的移动应用安全 Skill。 | 仅限授权应用、逆向分析边界和敏感二进制处理。 |
| [ciembor/agent-rules-books](https://github.com/ciembor/agent-rules-books) | 2.1k | 从经典软件工程书籍提炼出的 Agent 规则。 | 解读质量、版权边界和 benchmark 局限。 |
| [zanwei/design-dna](https://github.com/zanwei/design-dna) | 975 | 从参考 UI 中提取可复用风格方向。 | 截图隐私、URL 抓取、素材权利和可复现性。 |
| [dbwls99706/ros2-engineering-skills](https://github.com/dbwls99706/ros2-engineering-skills) | 123 | 面向机器人 Agent 的生产级 ROS 2 开发 Skill。 | 硬件假设、安全约束和 ROS 发行版版本。 |
| [testdino-hq/playwright-skill](https://github.com/testdino-hq/playwright-skill) | 297 | 聚焦 Playwright 测试最佳实践的 Skill。 | Playwright 版本变化、项目 fixtures、CI 差异和示例覆盖。 |

## 评审中看到的模式

- 好的 skill repo 包装的是可重复工作流，不只是一个聪明 prompt。
- 领域技能需要检查来源：引用、时效性、数据许可和免责声明。
- 一旦涉及安装器、hooks、MCP server、浏览器自动化、云 API 或凭证，审查门槛就会变高。
- 多平台支持有价值，但很多项目还只有兼容性说法，缺少测试。
- 用户安装前需要的是信任信息：安全、可迁移性、维护状态、示例和证据。

## 包含内容

- `apps/web`：Vite/React 目录站点，支持中英文切换
- `packages/cli`：Node CLI
- `packages/core`：可复用评分引擎
- `data/skills.json`：100 个初始技能条目
- `AGENTS.md`：持久项目上下文，供后续新对话读取
- `docs/project-brief.md`：产品目标和愿景
- `docs/curation-standard.md`：收录规范和每周维护流程
- `docs/scoring.md`：评分方法文档
- GitHub Actions：CI 与 GitHub Pages 发布

## 快速开始

```bash
npm install
npm run build
npm run dev
```

扫描示例 skill：

```bash
npm run scan -- examples/simple-skill
```

扫描公开 GitHub 仓库：

```bash
npm run scan -- owner/repo
npm run scan -- https://github.com/owner/repo -- --json
```

## GitHub Pages

Web app 是静态站点，通过 `gh-pages` 分支发布。

1. 推送到 `main`。
2. `Pages` workflow 构建 `apps/web/dist`。
3. workflow 把静态产物 force-push 到 `gh-pages`。
4. GitHub Pages 从 `gh-pages` 分支发布页面。

如果是新的 fork，需要到 Settings -> Pages，选择 "Deploy from a branch"，然后选择 `gh-pages` 和 `/`。

workflow 会设置 `SKILLCHECK_BASE=/skillcheck/`，确保 Vite 生成的资源路径可以在仓库子路径下工作。

## 评分维度

- 安全：命令执行、网络访问、密钥、文件写入和 helper scripts
- 文档：标准 `SKILL.md`、frontmatter、触发描述、README、示例和许可证
- 可迁移性：Claude、Codex、Cursor、Gemini、Copilot 和 OpenCode 支持信号
- 证据：当前是人工评审备注，后续会加入可复现 benchmark traces

详情见 [docs/scoring.md](docs/scoring.md)。

## Roadmap

- 增加 GitHub Action，自动评论新增 skill 的 PR
- 增加 `SkillCheck: A / 92` badge endpoint
- 为 Top 50 skills 增加可复现 before/after benchmark
- 支持按“我想让 Agent 做什么”进行语义搜索
- 建立 unsafe-pattern corpus，提升静态检查能力

## 项目状态

这是 MVP。Scanner 是保守的静态检查器。warning 的意思是“安装前先看这里”，不是“这个 skill 是恶意的”。

## License

MIT
