You are performing a safe refactoring via git worktree isolation.

## Usage
`/refactor [description of refactoring]`

## Process

### Phase 1: Isolate
1. `git worktree add ../refactor-temp -b refactor/[description]`
2. Switch to worktree directory
3. Run all tests → save as baseline snapshot

### Phase 2: Refactor
1. Perform the refactoring
2. Follow patterns in `_reference/`
3. Keep files < 250 lines
4. Maintain module boundaries (imports through entry points only)

### Phase 3: Verify
1. Run all tests → compare with baseline
2. Run typecheck
3. Run linter
4. Verify no behavioral changes (same test results)

### Phase 4: Result

**If all green:**
1. Switch back to main worktree
2. `git merge refactor/[description]`
3. `git worktree remove ../refactor-temp`
4. Log success to `tasks/lessons.md`
5. Commit: `refactor: [description]`

**If any red:**
1. Analyze what broke
2. Fix if simple, or abandon
3. `git worktree remove ../refactor-temp --force`
4. Nothing in main worktree was touched — completely safe
5. Log findings to `tasks/lessons.md`

## Safety
- Main worktree is NEVER modified during refactoring
- If anything goes wrong → delete worktree, zero damage
- Always have passing tests before starting
