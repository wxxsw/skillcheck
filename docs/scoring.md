# Scoring Method

SkillCheck uses static checks to produce an initial trust report for an agent skill repository.

The current score starts at 100 and subtracts points for missing trust signals or risky behavior patterns. The result should be easy to explain. It is not meant to be perfect.

## Safety

Safety findings look for:

- Script files such as `.sh`, `.py`, `.js`, `.ts`, and `.rb`
- Command execution patterns such as `exec`, `spawn`, `subprocess`, `eval`, `chmod +x`, and `rm -rf`
- Network access patterns such as `fetch`, `axios`, `requests`, `curl`, `wget`, and URLs
- Credential patterns such as `process.env`, `API_KEY`, `TOKEN`, `SECRET`, and `credential`
- File write patterns such as `writeFile`, append operations, and patching

Safety grades:

- `A`: no command execution, no secrets, and at most one low-risk warning
- `B`: review recommended
- `C`: at least one dangerous safety finding
- `D`: multiple dangerous safety findings

## Documentation

Documentation findings check for:

- `SKILL.md`
- YAML frontmatter
- A clear `description` trigger
- Usage guidance
- README
- License
- Examples or demos

## Portability

Portability grades are based on platform mentions:

- `A`: three or more platforms
- `B`: two platforms
- `C`: one platform
- `D`: platform support unclear

The scanner currently recognizes Claude, Codex, Cursor, Gemini, Copilot, and OpenCode.

## Known Limits

SkillCheck is not a sandbox, malware detector, or formal security audit. Static checks can miss behavior that is hidden, obfuscated, downloaded at runtime, or delegated to dependencies. Use the score to guide review, not replace it.

## Future Evidence Layer

The long-term direction is to add reproducible evidence:

- Before/after task quality benchmarks
- Cross-agent compatibility tests
- Install success rates
- Runtime traces for tool calls and file access
- Human review notes for high-impact skills
