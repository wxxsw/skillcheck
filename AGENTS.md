# SkillCheck Agent Context

This file is durable project memory for future agent sessions. Read it before changing the repository.

## Project Goal

SkillCheck helps users decide whether an AI agent skill is worth installing. It is not another awesome list. It turns a curated set of real skill repositories into reviewable scorecards: what the skill does, why it is promising, what it may touch, and what a human should check before use.

## Product Vision

SkillCheck should become the trust layer for the emerging agent-skill ecosystem:

- fewer, better entries instead of endless links
- safety, documentation, portability, and evidence instead of stars alone
- clear good-signal and risk tags for every skill
- English and Chinese content kept in sync
- a path toward scans, badges, benchmarks, and reproducible evidence

## Non-Negotiable Curation Rules

- Keep the main catalog at 100 entries unless the project owner explicitly changes the target.
- Update fewer than 10 catalog entries in a single maintenance pass.
- Exclude pure awesome-lists, link directories, ecosystem hubs, stores, marketplaces, plugin indexes, and generic resource lists even if they have many stars.
- Prefer concrete agent skills, `SKILL.md` packages, command packs, domain skill packs, or repeatable agent workflows that users can directly inspect or use.
- Verify candidates from primary sources: GitHub repo metadata, README, tree contents, `SKILL.md` files, examples, scripts, and license.
- Preserve category diversity. Do not let generic coding skills crowd out mobile, research, science, security, infra, office, writing, media, data, design, testing, memory, and knowledge workflows.
- Every accepted entry needs clear good-signal tags and risk/watchout tags in both English and Chinese.

## Repository Contract

When catalog data changes, keep these files consistent:

- `apps/web/src/data.ts`
- `data/skills.json`
- `README.md`
- `README.zh-CN.md`

Do not update only one surface. If a new rule is added, also update the docs under `docs/`.

## Verification

Before committing meaningful changes, run:

```bash
npm run check
npm run build
git diff --check
```

For docs-only changes, `npm run check` and `git diff --check` are usually enough. Run the full build when catalog or frontend data changes.

## Deployment

Pushes to `main` trigger the `Pages` workflow, which builds `apps/web/dist` and publishes to `gh-pages`. The live site is:

```txt
https://gesen.me/skillcheck/
```

If GitHub Pages creates the `gh-pages` commit but the Pages deployment fails transiently, retry deployment by pushing a same-tree commit to `gh-pages`; do not change content just to retrigger deployment.

## Deeper References

- Product goal and vision: `docs/project-brief.md`
- Curation and maintenance standard: `docs/curation-standard.md`
- Scoring method: `docs/scoring.md`
- Skill contribution notes: `docs/contributing-skills.md`
