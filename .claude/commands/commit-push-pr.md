You are creating a git commit with an optional pull request.

## Process

### Step 1: Check State
Run `git status` and `git diff --staged` to understand what's being committed.

### Step 2: Verify
Before committing, ensure:
- Typecheck passes
- Linter passes
- Tests pass for affected modules

If any fail, fix them first.

### Step 3: Commit
- Stage relevant files (specific files, not `git add .`)
- Write a conventional commit message: `type: description`
  - feat: new feature
  - fix: bug fix
  - refactor: code change without behavior change
  - docs: documentation
  - test: tests
  - chore: maintenance
- Keep subject < 72 chars
- Add body explaining WHY if non-obvious

### Step 4: Push & PR (if requested)
If user wants a PR:
- Push to remote with `-u` flag
- Create PR using `gh pr create`
- Title: same as commit convention
- Body: summary + test plan

### Step 5: Log
Update session log in brain/01-daily/ with the commit.
