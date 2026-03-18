#!/usr/bin/env bash
# upgrade-project.sh — One-command upgrade for any project created from this template
#
# Usage (run FROM the template directory):
#   ./upgrade-project.sh /path/to/my-project
#   ./upgrade-project.sh /path/to/my-project --dry-run
#
# What it does:
#   1. Copies sync-template.sh into the project (if missing)
#   2. Generates .template-manifest.json (if missing)
#   3. Adds git remote "template" pointing to this repo (if missing)
#   4. Syncs all template files to latest version
#   5. Preserves all project-specific files (src/, docs/, brain/, tasks/, CLAUDE.md, project-*)

set -euo pipefail

PROJECT_PATH="${1:-}"
DRY_RUN=false
[ "${2:-}" = "--dry-run" ] && DRY_RUN=true

# --- Validate ---
if [ -z "$PROJECT_PATH" ]; then
    echo "Usage: $0 /path/to/your-project [--dry-run]"
    echo ""
    echo "Run this from the template directory to upgrade any project."
    exit 1
fi

if [ ! -d "$PROJECT_PATH" ]; then
    echo "Error: $PROJECT_PATH does not exist."
    exit 1
fi

if [ ! -f "$PROJECT_PATH/CLAUDE.md" ]; then
    echo "Error: $PROJECT_PATH doesn't look like a project (no CLAUDE.md)."
    exit 1
fi

TEMPLATE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -f "$TEMPLATE_DIR/scripts/sync-template.sh" ]; then
    echo "Error: Can't find scripts/sync-template.sh in template. Is this the template directory?"
    exit 1
fi

echo "=== Project Upgrade ==="
echo "Template: $TEMPLATE_DIR"
echo "Project:  $PROJECT_PATH"
echo ""

# --- Step 1: Ensure scripts/ directory exists ---
if [ ! -d "$PROJECT_PATH/scripts" ]; then
    echo "[1/4] Creating scripts/ directory..."
    mkdir -p "$PROJECT_PATH/scripts"
else
    echo "[1/4] scripts/ directory exists."
fi

# --- Step 2: Copy sync-template.sh ---
echo "[2/4] Copying sync-template.sh..."
cp "$TEMPLATE_DIR/scripts/sync-template.sh" "$PROJECT_PATH/scripts/sync-template.sh"
chmod +x "$PROJECT_PATH/scripts/sync-template.sh" 2>/dev/null || true

# --- Step 3: Bootstrap manifest if missing ---
if [ ! -f "$PROJECT_PATH/.template-manifest.json" ]; then
    echo "[3/4] Generating .template-manifest.json (first-time bootstrap)..."
    cd "$PROJECT_PATH"
    bash scripts/sync-template.sh "$TEMPLATE_DIR" --bootstrap
    cd "$TEMPLATE_DIR"
else
    echo "[3/4] .template-manifest.json already exists."
fi

# --- Step 4: Sync ---
cd "$PROJECT_PATH"

if [ "$DRY_RUN" = true ]; then
    echo "[4/4] Dry run — showing what would change:"
    echo ""
    bash scripts/sync-template.sh "$TEMPLATE_DIR" --dry-run
else
    echo "[4/4] Syncing template..."
    echo ""
    bash scripts/sync-template.sh "$TEMPLATE_DIR" --force
fi

# --- Step 5: Add git remote if template has one ---
TEMPLATE_REMOTE=$(cd "$TEMPLATE_DIR" && git remote get-url origin 2>/dev/null || echo "")
if [ -n "$TEMPLATE_REMOTE" ]; then
    cd "$PROJECT_PATH"
    if ! git remote get-url template &>/dev/null; then
        git remote add template "$TEMPLATE_REMOTE" 2>/dev/null || true
        echo ""
        echo "Git remote 'template' added: $TEMPLATE_REMOTE"
        echo "Future updates: bash scripts/sync-template.sh --from-git"
    fi
fi

echo ""
echo "=== Done! ==="
