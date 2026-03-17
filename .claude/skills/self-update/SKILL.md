---
name: self-update
description: "Self-improvement loop. Trigger when user says 'improve rules', 'update skills', 'promote lessons', or during /weekly retrospective."
---

# Self-Update Skill

Analyze lessons learned and promote recurring patterns into permanent rules and skills.
Based on alirezarezvani/self-improving-agent pattern.

## Three Operations

### /si:review — Analyze lessons.md
1. Read `tasks/lessons.md`
2. Count total entries
3. Group by category (agent/skill/general)
4. Identify recurring patterns (3+ similar entries)
5. Report findings

### /si:promote — Graduate patterns to rules
For each recurring pattern (3+ occurrences):
1. Draft a concrete rule
2. Determine target file:
   - Coding pattern → `.claude/rules/code-style.md`
   - Architecture pattern → `.claude/rules/architecture.md`
   - Testing pattern → `.claude/rules/testing.md`
   - Git pattern → `.claude/rules/git-workflow.md`
   - New category → create new rule file
3. Add the rule to target file
4. Mark promoted entries in lessons.md with `[PROMOTED]`
5. Move promoted entries to `brain/03-knowledge/lessons-archive.md`

### /si:extract — Create skills from repeated solutions
For solutions used 3+ times:
1. Identify the reusable workflow
2. Create new SKILL.md in `.claude/skills/[name]/`
3. Include: trigger description, step-by-step process, examples
4. Update CLAUDE.md if new skill changes project workflow

## Constraints
- `tasks/lessons.md` should stay under 200 lines (promote aggressively when over 50 entries)
- Each rule file should stay under 50 lines
- CLAUDE.md must stay under 200 lines total
- When promoting, prefer updating existing rules over creating new files
- Every promotion must be logged in brain/03-knowledge/

## Trigger
- During `/weekly` retrospective
- When lessons.md exceeds 50 entries
- On explicit user request ("improve rules", "promote lessons")
