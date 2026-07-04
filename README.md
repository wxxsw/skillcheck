# SkillCheck

Safety-scored, evidence-backed agent skills.

SkillCheck is not another giant list of agent skills. It is a quality layer for the agent-skills ecosystem: scan a skill repo, explain the risks, and show whether it is safe, documented, portable, and worth installing.

## Why this exists

Agent skills are becoming the new package ecosystem for coding agents. A skill can be a simple Markdown instruction, but it can also pull dependencies, run scripts, read files, patch code, call remote APIs, or ask for credentials.

Most directories answer: "What exists?"

SkillCheck answers:

- Should I install this?
- What can it do on my machine?
- Does it work outside one agent client?
- Is there evidence that it improves outcomes?

## What is included

- A Vite/React directory site in `apps/web`
- A Node CLI in `packages/cli`
- A reusable scoring engine in `packages/core`
- Seeded skill entries and scoring method docs
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
