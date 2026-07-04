# SkillCheck

[English](README.md) | [中文](README.zh-CN.md)

[![CI](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml)
[![Pages](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-171915.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/reviewed_skills-20-e8f15a.svg)](#已审阅技能样本)

经过安全评分、有证据支撑的 Agent 技能目录。

SkillCheck 不是另一个巨大的 Awesome List。它更像 Agent Skills 生态的质量层：扫描技能仓库、解释风险，并判断它是否安全、文档清晰、可迁移、值得安装。

> 类似 `npm audit`，但面向 AI Agent Skills。

**在线页面：** https://wxxsw.github.io/skillcheck/

## TL;DR

| SkillCheck 可以做什么 | 状态 |
| --- | --- |
| 浏览 20 个精选 Agent Skill | `apps/web` 已上线 |
| 页面自动识别英文/中文，并支持手动切换 | `apps/web` 已上线 |
| 扫描本地或 GitHub 技能仓库 | `packages/cli` MVP |
| 解释安全、文档、可迁移性风险 | `packages/core` MVP |
| 托管 HTML Gallery 到 GitHub Pages | 通过 `gh-pages` 分支上线 |

## 为什么值得 Star

- 它关注正在形成的 `SKILL.md` 生态，而不是等生态混乱之后再补救。
- 它把“发现项目”推进到“安装前信任判断”。
- 它给技能作者一个具体质量标尺：文档、安全、可迁移性、示例和证据。
- 它从 20 个真实高信号仓库开始，而不是用占位数据撑门面。
- 它足够小，可以继续扩展成 badge、API、PR 审查机器人或技能评分标准。

## 为什么需要它

Agent Skills 正在变成新的“包生态”。一个 skill 可以只是 Markdown 指令，也可能拉依赖、运行脚本、读写文件、修改代码、调用远程 API，甚至要求凭证。

大多数目录回答：“有什么？”

SkillCheck 回答：

- 我应该安装它吗？
- 它会在我的机器上做什么？
- 它能不能跨 Claude、Codex、Cursor、Gemini、Copilot 或 OpenCode 使用？
- 它有没有证据证明真的能改善结果？

## 差异化

| 普通目录常做 | SkillCheck 更关注 |
| --- | --- |
| 收更多链接 | 少而经过审阅的条目 |
| 只看 Star | 安全、文档、可迁移性和证据 |
| 平台兼容口号 | 跨 Agent 兼容信号 |
| 默认信任安装脚本 | 标出命令执行、hooks、API、凭证和文件写入 |
| 静态收藏 | 逐步走向可复现扫描、badge 和 benchmark |

## 已审阅技能样本

Star 数为 2026-07-04 附近的近似值。这个列表不是背书，而是 SkillCheck 用来打磨评分维度和页面展示的第一批样本。

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
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 27k | 多平台 Agent Skills 目录。 | 兼容性证据、收录规则，以及 skill/app 的边界。 |
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

## 评审中看到的模式

- 好的 skill repo 包装的是可重复工作流，而不是一个聪明 prompt。
- 领域技能需要来源检查：引用、时效性、数据许可和免责声明。
- 一旦涉及安装器、hooks、MCP server、浏览器自动化、云 API 或凭证，风险会明显上升。
- 多平台支持正在变成差异化，但很多项目还缺少兼容性测试。
- 真正缺失的不是“发现”，而是信任元数据：安全、可迁移性、维护状态、示例和证据。

## 包含内容

- `apps/web`：Vite/React 目录站点，支持中英文切换
- `packages/cli`：Node CLI
- `packages/core`：可复用评分引擎
- `data/skills.json`：20 个初始技能条目
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

这是 MVP。Scanner 是保守的静态检查器。warning 不代表 skill 恶意，只代表人在安装到 Agent runtime 前应该审查这些行为。

## License

MIT
