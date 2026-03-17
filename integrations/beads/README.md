# Beads Integration

Git-native structured task tracker for multi-session work (Steve Yegge).
SQLite + JSONL, survives sessions, queryable.

## When to Use
- Project spans days/weeks (not just one session)
- Need structured task dependencies (blocks, parent-child)
- Want `bd ready --json` instead of parsing markdown checklists

## Install
```bash
curl -fsSL https://raw.githubusercontent.com/steveyegge/beads/main/scripts/install.sh | bash
```

## Setup
```bash
cd your-project
bd init                    # Creates .beads/ directory
bd setup claude            # Installs Claude Code hooks
```

## Usage

### Start of session
```bash
bd ready                   # What tasks are unblocked and ready?
bd show <id>               # Get full task context
bd update <id> --status in_progress
```

### During work
```bash
bd create "Fix auth bug"   # Create new task
bd link <id1> blocks <id2> # Set dependency
bd update <id> --note "Found related issue in payments"
```

### End of session
```bash
bd close <id>              # Mark task done
bd sync                    # Export to JSONL + git commit
git push                   # Share with remote
```

## Dependency Types

| Type | Purpose | Affects `bd ready`? |
|------|---------|-------------------|
| **blocks** | X can't start until Y done | Yes |
| **parent-child** | Task belongs to epic | Yes |
| **related** | Connected but not blocking | No |
| **discovered-from** | Found while working on another | No (audit) |

**`discovered-from` is the most powerful type** — when fixing a bug and you notice a memory leak elsewhere, capture it without losing focus on the current task.

## Storage
- `.beads/beads.db` — SQLite (gitignored, local queries)
- `.beads/issues.jsonl` — JSONL (git-tracked, sync via push/pull)

## Add to CLAUDE.md
```markdown
## Inter-session memory
Use `bd` for task tracking. `bd ready --json` — what to do next.
`bd close <id>` — finish task. Before ending: `bd sync`.
```
