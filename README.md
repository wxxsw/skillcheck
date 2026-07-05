# SkillCheck

[English](README.md) | [中文](README.zh-CN.md)

[![CI](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/ci.yml)
[![Pages](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml/badge.svg)](https://github.com/wxxsw/skillcheck/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-171915.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/reviewed_skills-100-e8f15a.svg)](#reviewed-catalog)

Find agent skills you can inspect before you install them.

SkillCheck reviews agent skill repositories and turns them into plain scorecards: what the skill does, what it may touch, how portable it looks, and what a human should check before giving it access.

> Like `npm audit`, but for AI agent skills.

**Live gallery:** https://wxxsw.github.io/skillcheck/

## TL;DR

| Use SkillCheck to | Status |
| --- | --- |
| Browse 100 reviewed agent skills | MVP in `apps/web` |
| Filter by goal and compare good/risk tags | Live in `apps/web` |
| Switch the gallery between English and Chinese | Live in `apps/web` |
| Scan local or public GitHub skill repos | MVP in `packages/cli` |
| See safety, docs, and portability signals | MVP in `packages/core` |
| Host the HTML gallery on GitHub Pages | Live via the `gh-pages` branch |

## Why star

- Agent skills are starting to look like packages: easy to copy, harder to trust.
- Most directories stop at discovery. SkillCheck focuses on the next question: what should I inspect before I install this?
- Every entry shows a score, safety grade, category, good signals, risks, and platform hints.
- The first corpus uses 100 real repos, not placeholder rows.
- The codebase is small enough to fork, audit, or grow into a badge/API later.

## Why this exists

An agent skill can be a simple Markdown instruction. It can also install dependencies, run scripts, read files, patch code, call APIs, or ask for credentials.

Most directories answer: "What exists?"

SkillCheck asks:

- Should I install this?
- What could it touch on my machine?
- Does it work outside one agent app?
- Is there proof behind the claims?

## What makes it different

The point is not to collect every link. It is to make the install decision slower in the right places.

| Instead of | SkillCheck focuses on |
| --- | --- |
| More links | Fewer, inspected entries |
| Stars only | Safety, docs, portability, and evidence |
| Platform-specific claims | Cross-agent compatibility signals |
| Trusting install scripts | Calling out commands, hooks, APIs, credentials, and file writes |
| Static curation | Scans, badges, and benchmarks over time |

## Reviewed catalog

This project tracks 100 reviewed agent skill repos. Stars are approximate GitHub counts checked on 2026-07-04.

This is not an endorsement list. It is a browsable review surface for people who want a quick read before they install a skill.

The live gallery includes the full catalog with summaries, categories, scores, platform hints, and review tags. The source data is in `data/skills.json`.

## What is included

- A Vite/React directory site in `apps/web`
- A Node CLI in `packages/cli`
- A reusable scoring engine in `packages/core`
- 100 seeded skill entries in `data/skills.json`
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

## Scorecard

Each skill card gives a compact view of safety, documentation, portability, and evidence. The scanner is intentionally conservative: a warning means "look here before installing," not "this skill is malicious."

For local checks, use the CLI:

```bash
npm run scan -- owner/repo
```

## Roadmap

- Add a GitHub Action that comments on pull requests adding new skills
- Add a badge endpoint for `SkillCheck: A / 92`
- Add reproducible benchmark evidence for selected skills
- Add semantic search by "what I want my agent to do"
- Improve static checks for higher-risk skill behavior

## Project Status

This is an MVP. Treat its output as a review aid, not a security audit.

## License

MIT
