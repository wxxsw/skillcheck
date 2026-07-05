# Curation Standard

## Purpose

This document defines how SkillCheck decides whether a repository belongs in the main catalog.

The main catalog is a product surface, not raw research notes. Users should be able to click an entry and find a real skill, skill pack, command pack, or repeatable agent workflow.

## Main Catalog Target

- Keep exactly 100 entries unless the project owner explicitly changes the target.
- Replace weak entries instead of growing the list casually.
- In a normal maintenance pass, update fewer than 10 entries.
- Preserve category diversity.

## Include

Prefer repositories that contain at least one of:

- `SKILL.md` files
- installable or copyable agent skill packages
- command packs for agent clients
- domain-specific skill workflows
- concrete examples, references, or scripts used by a skill
- agent workflows with clear inputs, outputs, and review boundaries

Strong positive signals:

- official vendor, author, maintainer, or security-team provenance
- focused domain expertise
- clear README and examples
- visible license
- recent maintenance
- portable structure across more than one agent client
- low ambiguity about what the skill touches
- evidence that the skill improves a real workflow

## Exclude

Do not include these in the main catalog:

- pure `awesome-*` lists
- link directories
- ecosystem hubs
- store or marketplace pages
- plugin indexes
- generic resource lists
- SEO pages that only aggregate links
- repos where the actual skill is not inspectable
- repos whose value is mainly discovery of other repos

These sources may still be useful for research, but they should not appear as catalog entries.

## Candidate Verification

Use primary sources whenever possible:

- GitHub repository metadata
- README
- file tree
- `SKILL.md` files
- examples or demos
- scripts
- license
- releases or commit activity

Before accepting a candidate, answer:

- What concrete skill or workflow does this repository provide?
- Where is the skill definition?
- What user task does it improve?
- What does it touch: files, shell, network, browser, account, cloud, APIs, credentials, publishing, or generated assets?
- What platform assumptions does it make?
- Is it still useful if stars are ignored?

## Required Entry Fields

Each catalog entry should have:

- repo name and URL
- approximate stars
- category
- English and Chinese summary
- English and Chinese signal line
- platforms
- score
- safety grade
- docs grade
- portability grade
- good-signal tags in English and Chinese
- risk/watchout tags in English and Chinese

## Tag Standards

Good-signal tags should tell the user why the entry is promising.

Examples:

- `Official source`
- `Single SKILL.md`
- `84 SKILL.md files`
- `Mobile-specific`
- `Low direct risk`
- `Human gates`

Risk tags should tell the user what to inspect before use.

Examples:

- `Script review`
- `Credential handling`
- `SDK version drift`
- `Source freshness`
- `Generated code review`
- `Asset rights`
- `Publishing side effects`

Avoid vague tags like `Useful`, `Popular`, `Interesting`, or `Powerful`.

## Category Diversity

When replacing entries, consider underrepresented categories before adding another broad engineering pack.

Useful categories include:

- engineering
- workflow
- research
- science
- security
- mobile
- infrastructure
- office
- writing
- media
- design
- testing
- memory
- knowledge
- data
- product
- marketing

## Weekly Maintenance Runbook

1. Start from a clean git status.
2. Inspect the current catalog distribution.
3. Identify weak entries, especially non-skill resources that slipped in.
4. Research candidates from GitHub using current data.
5. Verify candidates from primary sources.
6. Replace fewer than 10 entries.
7. Keep `apps/web/src/data.ts`, `data/skills.json`, `README.md`, and `README.zh-CN.md` consistent.
8. Run:

```bash
npm run check
npm run build
git diff --check
```

9. Commit and push.
10. Confirm the live Pages asset updated when possible.

## Rejection Notes

If a high-star candidate is rejected, keep the reasoning simple:

- directory only
- not inspectable
- no concrete skill
- generic prompt collection
- unclear license
- no examples
- too much category overlap
- unsafe side effects without guardrails

This helps future maintainers avoid re-adding the same weak candidates.
