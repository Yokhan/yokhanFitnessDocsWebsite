#!/bin/bash
# Drift Detection Script (v2)
# Run before major sessions or weekly to catch stale docs and violations
# Usage: bash scripts/check-drift.sh

echo "=== Drift Detection ==="
echo ""
WARNINGS=0
ERRORS=0

# 1. Check if docs are stale (>30 days)
echo "[1/7] Checking document freshness..."
if [ -d docs ]; then
  for doc in docs/*.md; do
    [ -f "$doc" ] || continue
    if [ "$(uname)" = "Darwin" ]; then
      age=$(( ($(date +%s) - $(stat -f %m "$doc")) / 86400 ))
    else
      age=$(( ($(date +%s) - $(stat -c %Y "$doc" 2>/dev/null || echo $(date +%s))) / 86400 ))
    fi
    if [ "$age" -gt 30 ]; then
      echo "  ⚠️  $doc not updated in $age days"
      WARNINGS=$((WARNINGS + 1))
    fi
  done
fi

# 2. Check CLAUDE.md size
echo "[2/7] Checking CLAUDE.md size..."
if [ -f CLAUDE.md ]; then
  lines=$(wc -l < CLAUDE.md)
  if [ "$lines" -gt 200 ]; then
    echo "  ⚠️  CLAUDE.md: $lines lines (limit 200)"
    WARNINGS=$((WARNINGS + 1))
  else
    echo "  ✅ CLAUDE.md: $lines lines (OK)"
  fi
fi

# 3. Check lessons.md size (>50 = time to promote)
echo "[3/7] Checking lessons.md..."
if [ -f tasks/lessons.md ]; then
  entries=$(grep -c "^### " tasks/lessons.md 2>/dev/null || echo 0)
  if [ "$entries" -gt 50 ]; then
    echo "  ⚠️  tasks/lessons.md has $entries entries — run /weekly to promote"
    WARNINGS=$((WARNINGS + 1))
  else
    echo "  ✅ tasks/lessons.md: $entries entries"
  fi
fi

# 4. Check for files > 250 lines in src/
echo "[4/7] Checking file sizes in src/..."
if [ -d src ]; then
  find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.py" -o -name "*.rs" -o -name "*.go" -o -name "*.js" -o -name "*.jsx" \) | while read -r file; do
    lines=$(wc -l < "$file")
    if [ "$lines" -gt 250 ]; then
      echo "  ⚠️  $file: $lines lines (limit 250)"
    fi
  done
fi

# 5. Check module entry points exist
echo "[5/7] Checking module entry points..."
if [ -d src/features ]; then
  find src/features -mindepth 1 -maxdepth 1 -type d | while read -r dir; do
    found=0
    for entry in "$dir"/index.* "$dir"/__init__.py "$dir"/mod.rs; do
      [ -f "$entry" ] && found=1 && break
    done
    if [ "$found" -eq 0 ]; then
      echo "  ❌ Missing entry point: $dir"
    fi
  done
fi

# 6. Check architecture boundaries
echo "[6/7] Checking architecture boundaries..."
if command -v npx &> /dev/null && [ -f .dependency-cruiser.js ]; then
  npx dependency-cruiser src --output-type err 2>/dev/null || echo "  ⚠️  Boundary violations detected"
else
  echo "  ℹ️  dependency-cruiser not configured (optional)"
fi

# 7. Check for secrets in tracked files
echo "[7/7] Scanning for potential secrets..."
if git rev-parse --git-dir > /dev/null 2>&1; then
  secrets=$(grep -rlE '(sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{36}|-----BEGIN.*(RSA|EC|DSA))' src/ 2>/dev/null || true)
  if [ -n "$secrets" ]; then
    echo "  ❌ Potential secrets found in: $secrets"
    ERRORS=$((ERRORS + 1))
  else
    echo "  ✅ No secrets detected"
  fi
fi

echo ""
echo "=== Summary: $WARNINGS warnings, $ERRORS errors ==="
[ "$ERRORS" -gt 0 ] && echo "❌ Fix errors before proceeding" && exit 1
echo "✅ Done"
