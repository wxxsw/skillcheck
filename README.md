# SkillCheck

[English](README.md) | [中文](README.zh-CN.md)

[![CI](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml)
[![Pages](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-171915.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/reviewed_skills-20-e8f15a.svg)](#curated-skill-analysis)

Safety-scored, evidence-backed agent skills.

SkillCheck is not another giant list of agent skills. It is a quality layer for the agent-skills ecosystem: scan a skill repo, explain the risks, and show whether it is safe, documented, portable, and worth installing.

> Like `npm audit`, but for AI agent skills.

**Live gallery:** https://wxxsw.github.io/skillcheck/

## TL;DR

| Use SkillCheck to | Status |
| --- | --- |
| Browse a curated 20-skill gallery | MVP in `apps/web` |
| Switch the gallery between English and Chinese | Live in `apps/web` |
| Scan local or public GitHub skill repos | MVP in `packages/cli` |
| Explain safety, docs, and portability risks | MVP in `packages/core` |
| Host the HTML gallery on GitHub Pages | Live via the `gh-pages` branch |

The HTML gallery is hosted at:

```txt
https://wxxsw.github.io/skillcheck/
```

## Why star this repo

- It tracks the emerging `SKILL.md` ecosystem before it hardens into package-manager chaos.
- It turns "awesome list" discovery into install-time trust metadata.
- It gives skill authors a concrete quality bar: docs, safety, portability, examples, and evidence.
- It starts with 20 real high-signal repos instead of placeholder data.
- It is small enough to fork, extend, and turn into a badge/API later.

## Why this exists

Agent skills are becoming the new package ecosystem for coding agents. A skill can be a simple Markdown instruction, but it can also pull dependencies, run scripts, read files, patch code, call remote APIs, or ask for credentials.

Most directories answer: "What exists?"

SkillCheck answers:

- Should I install this?
- What can it do on my machine?
- Does it work outside one agent client?
- Is there evidence that it improves outcomes?

## What makes it different

Most skill directories optimize for volume. SkillCheck optimizes for reviewability.

| Instead of | SkillCheck focuses on |
| --- | --- |
| More links | Fewer, inspected entries |
| Stars only | Safety, docs, portability, and evidence |
| Platform-specific claims | Cross-agent compatibility signals |
| Trusting install scripts | Calling out command execution, hooks, APIs, and credentials |
| Static curation | A path toward reproducible scans, badges, and benchmarks |

## Curated skill analysis

This project started by reviewing 20 high-signal agent skill repositories. Stars are approximate GitHub counts checked on 2026-07-04. This is not an endorsement list; it is the initial corpus used to shape what SkillCheck should score and what the gallery now displays.

### Methodology and workflow skills

| Repo | Stars | What makes it interesting | What SkillCheck should inspect |
| --- | ---: | --- | --- |
| [obra/superpowers](https://github.com/obra/superpowers) | 245k | Treats skills as a software-development methodology, not one-off prompts. | Shell scripts, installer behavior, local file changes, and whether the methodology is portable. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 68k | Production-oriented engineering skills from a recognizable practitioner. | Whether each skill has examples, concrete triggers, and safe execution boundaries. |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 24k | Uses durable Markdown plans to survive context loss and long-running tasks. | File write scope, plan-location defaults, and whether completion gates are deterministic. |
| [gotalab/cc-sdd](https://github.com/gotalab/cc-sdd) | 3.5k | Brings spec-driven development into agent workflows across many clients. | Whether generated tasks remain traceable to approved specs and whether it assumes one agent runtime. |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | 18k | Optimizes context windows with memory, routing, MCP, and hooks. | Hooks, sandboxing claims, persistence locations, and cross-platform configuration risk. |

### Engineering and context skills

| Repo | Stars | What makes it interesting | What SkillCheck should inspect |
| --- | ---: | --- | --- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 77k | Turns repos, schemas, docs, and media into a queryable code knowledge graph. | Tree-sitter/parsing dependencies, local indexing footprint, network usage, and data retention. |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 55k | Narrow, memorable promise: improve AI design taste and reduce generic output. | Whether guidance is concrete enough to test, and whether examples prove better outputs. |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | 3.5k | Focused anti-slop design skill for Claude Code, Cursor, and Codex. | Scope clarity, portability, and whether it avoids vague aesthetic rules. |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | 10k | Official vendor skills for a specific frontend animation library. | Version alignment, API references, example coverage, and whether claims come from official docs. |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | 39k | Teaches agents to work with Obsidian's open formats and CLI. | Vault write behavior, Markdown/JSON Canvas handling, and permission boundaries. |

### Domain skill packs

| Repo | Stars | What makes it interesting | What SkillCheck should inspect |
| --- | ---: | --- | --- |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 48k | Research skill built around recency across Reddit, X, YouTube, HN, Polymarket, and web sources. | External calls, API keys, source attribution, rate limits, and freshness claims. |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 36k | Marketing, CRO, copywriting, SEO, analytics, and growth workflows in one pack. | Whether outputs are templates or executable workflows, plus analytics/API credential handling. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 32k | Video-production system with pipelines, tools, and hundreds of agent skills. | Heavy dependencies, media-generation APIs, license compatibility, and local/remote asset handling. |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 30k | Scientific skill library spanning biology, chemistry, medicine, and drug discovery. | Citation requirements, database provenance, domain disclaimers, and benchmark evidence. |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 24k | Large cybersecurity skill set mapped to MITRE/NIST-style frameworks. | Dual-use risk, dangerous command patterns, authorization language, and safe-lab assumptions. |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | 22k | Product-management skills from discovery through GTM and growth. | Template quality, output structure, and whether skills name the inputs they require. |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 10k | SEO skill suite with sub-skills, sub-agents, reporting, and optional external services. | Google/DataForSEO/Firecrawl credentials, report generation, and source freshness. |
| [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) | 17k | Unofficial NotebookLM API plus CLI and agentic skill surface. | Unofficial API fragility, auth handling, account risk, and data export behavior. |

### Directories, marketplaces, and installers

| Repo | Stars | What makes it interesting | What SkillCheck should inspect |
| --- | ---: | --- | --- |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 19k | Broad multi-domain library with agents, commands, scripts, and plugins. | Installer behavior, duplicate skill names, script execution, and per-skill license clarity. |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 27k | Broad multi-platform directory for Claude Code, Codex, Gemini CLI, Cursor, and more. | Platform compatibility evidence, curation rules, and whether it distinguishes skills from apps. |

### Patterns from the review

- The best skill repos package a repeatable workflow, not just a clever prompt.
- Domain packs need provenance checks: citations, source freshness, data licenses, and clear disclaimers.
- Risk rises sharply when a skill includes installers, hooks, MCP servers, browser automation, cloud APIs, or credentials.
- Multi-platform support is becoming a real differentiator, but many repos claim compatibility without tests.
- The missing layer is not discovery. It is trust metadata: safety, portability, maintenance, examples, and evidence.

## What is included

- A Vite/React directory site in `apps/web`
- A Node CLI in `packages/cli`
- A reusable scoring engine in `packages/core`
- 20 seeded skill entries in `data/skills.json`
- Scoring method docs in `docs/scoring.md`
- GitHub Actions for CI and GitHub Pages

## Quick start

```bash
npm install
npm run build
npm run dev
```

Scan the example skill:

```bash
npm run scan -- examples/simple-skill
```

Scan a public GitHub repo:

```bash
npm run scan -- owner/repo
npm run scan -- https://github.com/owner/repo -- --json
```

## GitHub Pages

The web app is static and can be hosted on GitHub Pages.

This repository publishes through the `gh-pages` branch:

1. Push to `main`.
2. The `Pages` workflow builds `apps/web/dist`.
3. The workflow force-pushes the static output to `gh-pages`.
4. GitHub Pages serves the `gh-pages` branch.

For a fresh fork, open Settings -> Pages and choose "Deploy from a branch", then select `gh-pages` and `/`.

The Pages workflow sets `SKILLCHECK_BASE=/skillcheck/` so Vite emits asset URLs that work under the repository subpath.

## Example output

```txt
SkillCheck report
================================================================
Target           ./react-testing-skill
Score            86/100
Safety           B
Docs             A
Portability      A
Summary          Promising skill with a few documentation or safety gaps.

Findings
----------------------------------------------------------------
! Potential command execution (-18)
  Detected patterns such as exec, spawn, subprocess, eval, chmod, or rm -rf.
* Contains executable scripts (-8)
  This skill includes script files. Review them before installation.
```

## Scoring dimensions

- Safety: command execution, network access, secrets, file writes, and helper scripts
- Documentation: canonical `SKILL.md`, frontmatter, trigger description, README, examples, and license
- Portability: Claude, Codex, Cursor, Gemini, Copilot, and OpenCode support signals
- Evidence: manual review notes today, reproducible benchmark traces later

Read the details in [docs/scoring.md](docs/scoring.md).

## Roadmap

- Add a GitHub Action that comments on pull requests adding new skills
- Add a badge endpoint for `SkillCheck: A / 92`
- Add reproducible before/after benchmarks for the top 50 skills
- Add semantic search by "what I want my agent to do"
- Add a curated unsafe-pattern corpus for better static checks

## Project status

This is an MVP. The scanner is intentionally conservative and static. A warning does not mean a skill is malicious; it means humans should review that behavior before installing it into an agent runtime.

## License

MIT
