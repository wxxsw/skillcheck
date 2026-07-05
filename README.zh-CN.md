# SkillCheck

[English](README.md) | [中文](README.zh-CN.md)

[![CI](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml)
[![Pages](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-171915.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/reviewed_skills-100-e8f15a.svg)](#已审阅目录)

帮你找到值得先看清楚、再安装的 Agent Skill。

SkillCheck 会审阅 Agent Skill 仓库，并把结果整理成一张清楚的评分卡：它做什么、可能碰到什么、看起来能不能跨平台使用，以及把权限交给它之前，人应该先检查哪里。

> 类似 `npm audit`，但面向 AI Agent Skills。

**在线页面：** https://gesen.me/skillcheck/

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

## 已审阅目录

Star 数为 2026-07-04 附近的近似值。

这个列表不是背书，而是给安装前想快速判断的人一个可浏览的审阅界面。

在线页面包含完整目录、摘要、分类、评分、平台线索和审阅标签。源数据在 `data/skills.json`。

## 包含内容

- `apps/web`：Vite/React 目录站点，支持中英文切换
- `packages/cli`：Node CLI
- `packages/core`：可复用评分引擎
- `data/skills.json`：100 个初始技能条目
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

## 评分卡

每张 Skill 卡片会给出安全、文档、可迁移性和证据的简明结果。Scanner 是保守的：warning 的意思是“安装前先看这里”，不是“这个 skill 是恶意的”。

本地检查可以直接跑 CLI：

```bash
npm run scan -- owner/repo
```

## Roadmap

- 增加 GitHub Action，自动评论新增 skill 的 PR
- 增加 `SkillCheck: A / 92` badge endpoint
- 为部分 skill 增加可复现 benchmark 证据
- 支持按“我想让 Agent 做什么”进行语义搜索
- 改进对高风险行为的静态检查

## 项目状态

这是 MVP。它的输出适合辅助审查，不等于安全审计。

## License

MIT
