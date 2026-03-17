# Code Style Rules (Stack-Agnostic)

## Immutability
- Prefer returning new objects over mutating existing ones.
- Use const/final/let (not var/mutable) by default.
- If mutation is necessary, document why.

## Type Safety
- No `any` (TypeScript), no `object` (Python), no `interface{}` (Go old-style).
- Use `unknown` + type guards, generics, or proper typing.
- Define explicit types for all public function signatures.

## Naming
- Functions: verb + noun (getUser, calculateScore, validateInput)
- Booleans: is/has/can/should prefix (isActive, hasPermission)
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case or snake_case (match language convention)

## Functions
- Single responsibility: one function does one thing.
- Max 30 lines per function. Longer = split into helpers.
- Pure functions preferred: same input = same output, no side effects.
- Error handling at boundaries, not deep inside.

## Comments
- Don't comment WHAT (the code shows that). Comment WHY.
- No commented-out code. Delete it (git has history).
- TODO format: `// TODO(context): description`
