# Agent-Ready Project

AI-agent optimized project with persistent memory, autonomous hooks, and self-improving context infrastructure.

## Status

**NEW_PROJECT** — Run `/setup-project` or say "настрой проект" to configure for your stack.

## Stack

<!-- Filled by /setup-project -->
Not configured yet.

## Map

- `src/` — source code (vertical slices, created by /setup-project)
- `docs/` — architecture, data design, API contracts, decisions
- `templates/` — scaffolding templates for new modules
- `_reference/` — canonical reference implementations
- `brain/` — Obsidian vault, persistent memory across sessions
- `tasks/` — lessons learned + current task handoff
- `integrations/` — setup guides for memory MCP, Telegram, Beads, Obsidian MCP
- `scripts/` — drift detection, automation

## Commands

- `/setup-project` — configure project for your stack (run first!)
- `/implement` — Plan → Annotate → Implement (Boris Tane workflow)
- `/commit` — smart commit + optional PR
- `/review` — change review (intent + impact, not style)
- `/refactor` — safe refactoring via git worktree
- `/sprint` — autonomous work loop (Ralph Loop + circuit breaker)
- `/brain-sync` — sync knowledge to Obsidian vault
- `/weekly` — retrospective + self-improvement promotion

## Build & Test

<!-- Filled by /setup-project -->
Not configured yet.

## Rules

- Import only through module entry points (index.ts / __init__.py / mod.rs)
- Core modules = pure functions, no IO
- Data (config/tables) separated from logic (processors)
- Tests colocated: module.test.ts / test_module.py
- ALWAYS: typecheck + lint + tests after changes
- Files < 250 lines (Working Memory Cliff)

## Context on demand

- `docs/ARCHITECTURE.md` — modules and dependencies
- `docs/DATA_DESIGN.md` — data schema
- `docs/API_CONTRACTS.md` — API contracts
- `docs/DECISIONS.md` — architectural decision records
- `brain/02-projects/` — project context and goals
- `brain/03-knowledge/` — patterns and lessons learned
- `tasks/lessons.md` — self-improvement log (read at session start!)
- `_reference/README.md` — canonical implementations

## Persistent Memory

- `tasks/lessons.md` — after EVERY user correction, add entry (Error → Root Cause → Rule)
- Session logs auto-saved to `brain/01-daily/` via Stop hook
- Decisions in `brain/04-decisions/`
- `/brain-sync` for manual sync
- Optional: install memory MCP (see `integrations/memory-mcp/README.md`)

## Self-Improvement

After each mistake: add to `tasks/lessons.md`. Read it at session start. When >50 entries — promote best rules to `.claude/rules/` via `/weekly`.

## DON'T

- Files > 250 lines — split them
- No `any` — use `unknown` + type guards
- No mutations — return new objects
- No editing main/master directly
- No skipping tests before commit
- No committing secrets (.env, API keys)

## Compaction

Preserve: current task, modified files, test results, discovered issues, lessons context.
