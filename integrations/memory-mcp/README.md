# Memory MCP Integration

Persistent memory across Claude Code sessions. All options work WITHOUT Ollama, Docker, or GPU.

## Option 1: Engram (Recommended — Simplest)

Zero-dependency Go binary. Single file, SQLite + FTS5.

### Install
1. Download binary from [GitHub Releases](https://github.com/Gentleman-Programming/engram/releases)
2. Place in PATH or project root
3. Add to Claude Code:
   ```
   claude mcp add engram -- engram mcp
   ```

### Tools Available
- `mem_save(title, type, what, why, where, learned)` — save structured memory
- `mem_search(query)` — full-text search

### Storage
- `~/.engram/engram.db` (SQLite)
- Git sync: `engram sync` for cross-machine transfer

---

## Option 2: claude-memory-mcp (Recommended — Powerful)

TypeScript + better-sqlite3. Hybrid search with auto-summarization.

### Install
```bash
npm install -g claude-memory-mcp
claude mcp add memory -- claude-memory-mcp
```

### Features
- Hybrid scoring: recency + importance + frequency
- Auto-summarization + entity extraction
- Token-aware loading (respects context window)
- 90-day TTL with soft-delete + audit trail

### Storage
- `~/.memory-mcp/memory.db`

---

## Option 3: MemCP (Most Powerful)

5-tier search: BM25 → fuzzy → semantic → hybrid RRF fusion. 20x token savings.

### Install
```bash
npm install -g memcp
claude mcp add memcp -- memcp serve
```

### Features
- 24 MCP tools
- 4-graph structure (semantic, temporal, causal, entity)
- Built-in secret detection
- 3-zone retention: Active → Archive → Purge
- 4 sub-agents (analyzer, mapper, synthesizer, entity-extractor)

### Storage
- `~/.memcp/graph.db`

---

## Option 4: Anima (Token-Budgeted)

Automatic token budget management + memory decay.

### Install
```bash
pip install anima-mcp
claude mcp add anima -- python -m anima.server
```

### Features
- Global install (works across all projects)
- Loads max 10% of context budget
- Impact tags: CRITICAL/HIGH/MEDIUM/LOW
- "Dream processing" — auto-consolidation between sessions

---

## Which to Choose?

| Need | Choose |
|------|--------|
| Simplest setup, no Node.js | **Engram** |
| Best search quality | **claude-memory-mcp** |
| Maximum token savings | **MemCP** |
| Auto token management | **Anima** |

## After Installing

Add to CLAUDE.md:
```
## Memory
Using [chosen MCP] for persistent memory. Search memory at session start for relevant context.
```
