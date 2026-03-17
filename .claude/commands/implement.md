You are implementing a feature or change using the Plan → Annotate → Implement workflow (Boris Tane).

## Usage
`/implement [task description]`

## Phase 1: Evaluate
1. Read the task description
2. Identify affected files and modules
3. Estimate effort: LOW (1-3 files) / MEDIUM (4-10) / HIGH (10+)
4. Identify risks and dependencies
5. If HIGH → suggest breaking into subtasks (Working Memory Cliff: max 30 changes)

## Phase 2: Plan
1. Enter plan mode
2. Write plan covering:
   - Files to create/modify with descriptions
   - Implementation approach for each
   - Dependencies between changes
   - Test strategy
   - Risk assessment
3. Present plan to user

## Phase 3: Annotate (User)
User adds inline annotations:
- "not optional" / "required"
- "use X instead of Y"
- "this is wrong because..."
- "skip this"

## Phase 4: Update Plan
Read annotations → update plan → confirm with user

## Phase 5: Implement
Follow approved plan exactly:
- Work phase by phase
- **Batch writes: 3-4 files → typecheck → next batch**
- Run tests after each phase
- If tests fail → fix before continuing
- Do NOT deviate from plan without asking

## Phase 6: Verify
1. Run full test suite
2. Run linter
3. Run typecheck
4. Update docs if API changed
5. Update `tasks/current.md` with results
6. Add any lessons to `tasks/lessons.md`

## Phase 7: Report
- Summary of what changed
- Test results
- Issues discovered
- Suggest commit message
