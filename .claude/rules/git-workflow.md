# Git Workflow Rules

## Branches
- `main` — protected, always deployable. Never edit directly.
- `feat/description` — new features
- `fix/description` — bug fixes
- `refactor/description` — refactoring without behavior change
- `docs/description` — documentation only

## Commits
- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
- Message format: `type: short description` (< 72 chars)
- Body (optional): explain WHY, not WHAT
- One logical change per commit

## Before Commit
1. Run typecheck
2. Run linter
3. Run tests for affected modules
4. All must pass. No exceptions.

## Pull Requests
- Title: same as commit convention
- Body: what changed, why, how to verify
- Link related issues
- Keep PRs small (< 400 lines changed)

## Never
- Force push to main
- Commit secrets, API keys, .env files
- Skip pre-commit hooks
- Amend published commits
