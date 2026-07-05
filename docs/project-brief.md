# Project Brief

## One-Line Goal

SkillCheck helps people find AI agent skills that are actually useful and safer to install.

## Why This Exists

Agent skills are becoming a new package ecosystem. A skill may be a simple `SKILL.md` file, but it may also install dependencies, run scripts, patch files, call APIs, operate browsers, publish content, or ask for credentials.

Most directories answer:

> What exists?

SkillCheck answers:

> Should I trust this enough to inspect or install it?

## Vision

SkillCheck should become a lightweight trust layer for agent skills.

The long-term product should help users:

- discover high-quality real skills, not just high-star lists
- understand what a skill can do before installing it
- compare safety, documentation, portability, and evidence
- see risks early: scripts, hooks, MCP servers, credentials, file writes, publishing, browser automation, and external APIs
- browse in English or Chinese without losing meaning
- eventually use reproducible scans, badges, compatibility tests, and benchmarks

## Positioning

SkillCheck is not an awesome list.

It is closer to:

- `npm audit` for agent skills
- a curated trust dashboard for reusable agent workflows
- a review checklist for people before they give an agent more power

## Current Product Surface

- Static gallery: `apps/web`
- Core scoring engine: `packages/core`
- CLI scanner: `packages/cli`
- Seed catalog: `data/skills.json`
- Bilingual README: `README.md` and `README.zh-CN.md`
- Live site: `https://gesen.me/skillcheck/`

## Current Catalog Shape

The catalog target is 100 entries.

The catalog should contain real, inspectable skills or skill packs. Strong entries usually include one or more of:

- concrete `SKILL.md` files
- commands or workflows meant for agent clients
- domain-specific skill packs
- examples, scripts, references, or install steps
- clear maintainer, vendor, author, or security-team signal

The catalog should stay diverse across:

- engineering
- workflow
- product
- marketing
- research
- science
- security
- memory
- knowledge
- design
- frontend
- testing
- mobile
- infrastructure
- media
- writing
- office
- automation
- data and finance

## Product Principles

1. Fewer, better entries.
2. Trust beats traffic.
3. Stars are a signal, not a decision.
4. A skill must be inspectable.
5. Every card should help a user decide what to check next.
6. Risk tags should be plain and actionable.
7. English and Chinese should be equally useful.
8. If the project cannot explain why an entry is included, it should not include it.

## Near-Term Roadmap

- Keep weekly curation small: fewer than 10 changes per pass.
- Improve candidate verification: detect `SKILL.md` count, scripts, license, examples, and platform claims.
- Add a contribution checklist for new skill submissions.
- Add a GitHub Action or CLI mode that can flag awesome-list or directory-only candidates.
- Add reproducible evidence for top entries: install success, task benchmark, compatibility, and runtime trace.
