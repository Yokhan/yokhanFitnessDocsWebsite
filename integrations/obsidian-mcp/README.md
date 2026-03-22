# Obsidian MCP Integration

Direct vault access from Claude Code via MCP. Claude can read AND write to your Obsidian brain.

## Options

### Option 1: obsidian-mcp (Recommended)
```bash
npm install -g @stevenstav/obsidian-mcp
claude mcp add obsidian -- obsidian-mcp --vault ./brain
```

### Option 2: MCP-Vault
```bash
npm install -g @bitbonsai/mcpvault
claude mcp add vault -- mcpvault --vault-path ./brain
```

## What This Enables
- Claude reads vault notes directly (semantic search, not just file paths)
- Claude creates new notes using vault templates
- Full-text search across all vault content
- Bidirectional: human edits in Obsidian ↔ agent edits via MCP
- Wiki-style links (`[[Note Name]]`) for knowledge connections

## Add to settings.local.json
```json
{
  "mcpServers": {
    "obsidian": {
      "command": "obsidian-mcp",
      "args": ["--vault", "./brain"]
    }
  }
}
```

## Usage After Setup
Claude can:
- Search brain for relevant context at session start
- Auto-create session logs in `brain/01-daily/`
- Link related knowledge via `[[wiki links]]`
- Update project status in `brain/02-projects/`
- Read decisions from `brain/04-decisions/`

## Combine With
- **Memory MCP** (Engram/MemCP) for structured memory + Obsidian for notes
- **Beads** for task tracking + Obsidian for knowledge
- All three work together: tasks in Beads, memory in MCP, knowledge in Obsidian
