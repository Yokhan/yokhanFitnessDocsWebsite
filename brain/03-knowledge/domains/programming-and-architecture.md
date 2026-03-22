# Programming + Software Architecture: Evidence-Based Practices

> Anti-Stupidity Shield: A knowledge base to protect AI agents from recommending common bad practices.
> Last updated: 2026-03-19. All entries are evidence-graded.

---

## 50 BAD PRACTICES (Anti-patterns)

### Low-level (code)

1. **Magic Numbers / Hardcoded Values** — Using unexplained numeric literals directly in code (e.g., `if (status == 3)`). WHY BAD: destroys readability, makes refactoring error-prone since the same value used in multiple places can be accidentally changed or missed; newcomers cannot infer meaning. INSTEAD: use named constants, enums, or configuration files. SOURCE: Refactoring (Fowler), Baeldung Anti-patterns. EVIDENCE: C

2. **Swallowing Exceptions (Silent Catch)** — Catching exceptions with empty catch blocks or generic handlers that discard error information. WHY BAD: approximately 20% of errors never make it to logs; creates "silent failures" that are extremely difficult to debug; a study of a long-lived Java project found >70% of exception handling blocks caught generic exceptions, leading to robustness problems. INSTEAD: log with full stack trace, catch specific exceptions, rethrow when appropriate. SOURCE: Springer study on exception handling anti-patterns (2019); Wikipedia "Error hiding". EVIDENCE: B

3. **God Object / God Class** — A single class that knows too much or does too much, accumulating responsibilities. WHY BAD: a single change ripples across the system unpredictably; violates cohesion and encapsulation; makes testing nearly impossible in isolation; empirical research found 0.55 Spearman correlation between anti-pattern count and bug count. INSTEAD: decompose into smaller, cohesive classes with single responsibilities. SOURCE: ArXiv study on design anti-pattern mutations (2021); Fowler's Refactoring. EVIDENCE: B

4. **Stringly-Typed Programming** — Using strings where enums, types, or structured data should be used (e.g., `role = "admin"` instead of an enum). WHY BAD: no compile-time checking, typos become runtime bugs, no IDE autocomplete support. INSTEAD: use enums, union types, or typed constants. SOURCE: Expert consensus; "AntiPatterns" (Brown et al., 1998). EVIDENCE: C

5. **Copy-Paste Programming (Cargo Cult Coding)** — Copying code without understanding it, often from Stack Overflow or AI output. WHY BAD: propagates bugs, introduces code the developer cannot debug; with AI-generated code this becomes "generative cargo cult programming" where developers include structures without understanding side effects. INSTEAD: understand code before integrating; write tests to verify behavior. SOURCE: ACM Internetware 2024 paper on software reuse in AI era; Wikipedia "Cargo cult programming". EVIDENCE: B

6. **Premature Optimization** — Optimizing code before profiling identifies actual bottlenecks. WHY BAD: wastes developer time on the 97% of code that doesn't matter for performance; introduces complexity and obscures intent. Knuth's full quote is often misused -- he argued AGAINST micro-optimization but FOR algorithmic efficiency and design-level performance thinking. INSTEAD: profile first, optimize the critical 3%, choose good algorithms upfront. SOURCE: Knuth, "Structured Programming with go to Statements" (1974); ACM Ubiquity analysis. EVIDENCE: B

7. **Deep Nesting (Arrow Code)** — Functions with many levels of nested conditionals or loops (>3 levels deep). WHY BAD: neuroscience-based research shows classic cyclomatic complexity metrics underestimate the cognitive difficulty; deeply nested code exponentially increases mental workload. INSTEAD: use early returns, guard clauses, extract functions. SOURCE: PMC neuroscience study on code complexity (2023); SonarSource cognitive complexity metric. EVIDENCE: B

8. **Boolean Blindness** — Using bare booleans where the meaning is unclear (e.g., `process(true, false, true)`). WHY BAD: caller cannot understand parameter meaning without reading the definition; high bug risk during maintenance. INSTEAD: use named parameters, enums, or option objects. SOURCE: Expert consensus; Haskell community research. EVIDENCE: C

9. **Mutable Global State** — Using globally accessible, mutable variables shared across modules. WHY BAD: IEEE study found classes utilizing mutable global state are more defect-prone than other production classes; makes code unpredictable, hard to reason about, and hard to test; bugs can appear anywhere far from the actual mutation. INSTEAD: pass dependencies explicitly, use immutable data, limit scope. SOURCE: IEEE (2020) study on mutable global state and defect proneness. EVIDENCE: B

10. **Long Parameter Lists** — Functions taking many parameters (>4-5). WHY BAD: increases cognitive load; callers frequently confuse parameter order; signals the function does too much. INSTEAD: use parameter objects, builder pattern, or decompose the function. SOURCE: "Clean Code" (Martin); "Code Complete" (McConnell). EVIDENCE: C

11. **Commented-Out Code** — Leaving dead code in comments "just in case." WHY BAD: creates confusion about whether code is needed; accumulates noise; version control already preserves history. INSTEAD: delete it; retrieve from git history if needed. SOURCE: "Clean Code" (Martin); expert consensus. EVIDENCE: C

12. **Inappropriate Comments (What, Not Why)** — Comments that restate what code does rather than explaining why. WHY BAD: redundant comments rot faster than code; research shows developers spend >30 minutes/day on poorly documented issues. Good comments explain WHY decisions were made, not WHAT code does. INSTEAD: write self-documenting code for the "what"; reserve comments for "why" and non-obvious decisions. SOURCE: Stack Overflow best practices survey (2021); MIT CommKit. EVIDENCE: C

13. **Ignoring Return Values / Error Codes** — Discarding function return values that indicate errors or important state. WHY BAD: equivalent to swallowing exceptions; creates silent failures where the program continues in an invalid state. INSTEAD: always check return values; use result types or exceptions that force handling. SOURCE: CERT Secure Coding Standards; expert consensus. EVIDENCE: C

14. **Type Coercion Abuse** — Relying on implicit type conversions (especially in JavaScript, PHP). WHY BAD: produces surprising behavior (`"" == false`, `0 == ""`); source of subtle bugs. INSTEAD: use strict equality, explicit conversions, TypeScript or strict mode. SOURCE: "JavaScript: The Good Parts" (Crockford). EVIDENCE: C

15. **Primitive Obsession** — Using primitive types (strings, ints) to represent domain concepts (e.g., `string email` instead of `Email` type). WHY BAD: no validation at the type level; invalid states are representable; domain logic scattered throughout codebase. INSTEAD: create value objects or domain types. SOURCE: Fowler's Refactoring; DDD (Evans). EVIDENCE: C

16. **Null Returns / Billion Dollar Mistake** — Returning null where absence of value is a normal case. WHY BAD: Tony Hoare called null references his "billion-dollar mistake"; null pointer exceptions are consistently among the top causes of production errors. INSTEAD: use Option/Maybe types, null object pattern, or explicit empty values. SOURCE: Tony Hoare (2009 QCon keynote); expert consensus. EVIDENCE: C

17. **Callback Hell / Pyramid of Doom** — Deeply nested asynchronous callbacks. WHY BAD: unreadable, unmaintainable, error handling becomes nearly impossible. INSTEAD: use async/await, Promises, or reactive patterns. SOURCE: Expert consensus; Node.js community. EVIDENCE: C

### Mid-level (design)

18. **Premature Abstraction** — Creating abstractions before understanding the problem space, often after seeing only 1-2 instances. WHY BAD: Sandi Metz: "duplication is far cheaper than the wrong abstraction." The wrong abstraction creates compounding costs as developers bend it to fit new cases, adding conditional logic and parameters until it becomes unmaintainable. Connected to the sunk cost fallacy. INSTEAD: prefer duplication until you see 3+ real instances (Rule of Three); use AHA -- Avoid Hasty Abstractions (Kent C. Dodds). SOURCE: Sandi Metz, "The Wrong Abstraction" (2016); Kent C. Dodds, AHA Programming. EVIDENCE: C

19. **DRY Obsession (Over-DRYing)** — Eliminating ALL duplication regardless of whether the duplicated pieces represent the same concept. WHY BAD: creates coupling between unrelated features; overly generic abstractions require navigating multiple layers to understand simple logic; the most common mistake is applying DRY too early, creating brittle abstractions. INSTEAD: DRY applies to knowledge, not code syntax; tolerate duplication between different bounded contexts; use WET (Write Everything Twice) or AHA as counterbalances. SOURCE: "The Pragmatic Programmer" (Hunt & Thomas); Sandi Metz; Kent C. Dodds. EVIDENCE: C

20. **Singleton Overuse** — Using Singleton pattern as a global access point throughout the application. WHY BAD: introduces hidden global state; breaks encapsulation; makes testing extremely difficult because singletons carry state between tests; creates tight coupling between components. INSTEAD: use dependency injection; create instances explicitly; use DI containers only where justified. SOURCE: "Design Patterns" (GoF) noted it should be used sparingly; expert consensus. EVIDENCE: C

21. **Inheritance for Code Reuse** — Using class inheritance primarily to share code rather than to model "is-a" relationships. WHY BAD: creates fragile base class problem; tight coupling between parent and child; changes to parent break children unexpectedly. A 2013 study of 93 Java programs found significant opportunity to replace inheritance with composition. INSTEAD: favor composition over inheritance; use mixins/traits where appropriate. SOURCE: "Design Patterns" (GoF); Composition over Inheritance (Wikipedia, citing multiple studies). EVIDENCE: B

22. **Feature Envy** — A method that uses more features of another class than its own. WHY BAD: signals misplaced responsibility; increases coupling; makes both classes harder to change independently. INSTEAD: move the method to the class whose data it uses most. SOURCE: Fowler's Refactoring. EVIDENCE: C

23. **Dependency Injection Overuse** — Injecting every dependency through constructors/containers even when there is only one possible implementation. WHY BAD: creates excessive interfaces and boilerplate with no benefit; incurs runtime performance costs through reflection; obscures control flow making debugging harder; the DI container becomes a "black box." INSTEAD: use DI where you genuinely need testability or multiple implementations; for small services, direct instantiation is fine. SOURCE: James Shore, "The Problem with DI Frameworks" (2023); Nat Pryce. EVIDENCE: C

24. **Anemic Domain Model** — Domain objects that are just data containers (getters/setters) with all logic in separate "service" classes. WHY BAD: loses the power of OOP; scatters business logic across service layers; makes it hard to enforce invariants. INSTEAD: put behavior on the objects that own the data; use rich domain models where complexity warrants it. SOURCE: Fowler, "AnemicDomainModel" (2003); Evans, "Domain-Driven Design". EVIDENCE: C

25. **Leaky Abstractions Ignored** — Building on abstractions without understanding what they hide, then being surprised when they leak. WHY BAD: Joel Spolsky's Law of Leaky Abstractions -- all non-trivial abstractions leak; ignoring this leads to mysterious production failures. INSTEAD: understand at least one level below your abstraction; know what your ORM generates, how your framework handles HTTP, etc. SOURCE: Spolsky, "The Law of Leaky Abstractions" (2002). EVIDENCE: C

26. **Shotgun Surgery** — A single change requiring modifications across many different classes/files. WHY BAD: high risk of missing a location; makes changes expensive and error-prone; signals poor cohesion. INSTEAD: consolidate related logic; use the "move method" refactoring to co-locate related behavior. SOURCE: Fowler's Refactoring. EVIDENCE: C

27. **Golden Hammer** — Using a familiar technology or pattern for every problem regardless of fit. WHY BAD: "if all you have is a hammer, everything looks like a nail"; leads to architectural mismatch. Resume-Driven Development is a variant: a study of 591 software professionals found 82% believed using trending technologies makes them more employable, leading to technology choices optimized for resumes, not products. INSTEAD: evaluate tools against requirements; prefer boring technology for production. SOURCE: ACM ICSE-SEIS (2021) paper on Resume-Driven Development. EVIDENCE: B

28. **Lava Flow** — Dead code and abandoned experiments that remain in the codebase because "it might be needed" or nobody knows what it does. WHY BAD: increases cognitive load; developers are afraid to remove it; accumulates as technical debt. INSTEAD: delete aggressively; version control preserves history; add tests before removing if uncertain. SOURCE: "AntiPatterns" (Brown et al., 1998). EVIDENCE: C

29. **Accidental Complexity in Testing** — Tests that are tightly coupled to implementation details (testing private methods, mocking everything). WHY BAD: tests break on every refactor even when behavior is preserved; gives false confidence; high maintenance cost. INSTEAD: test behavior through public interfaces; mock at architectural boundaries, not internal collaborators. SOURCE: Expert consensus; "Growing Object-Oriented Software, Guided by Tests" (Freeman & Pryce). EVIDENCE: C

30. **Circular Dependencies** — Module A depends on Module B which depends on Module A. WHY BAD: creates compilation issues; makes it impossible to understand, test, or deploy modules independently; signals confused responsibility boundaries. INSTEAD: extract shared logic into a third module; use dependency inversion. SOURCE: "Clean Architecture" (Martin); expert consensus. EVIDENCE: C

31. **Configuration Over Convention Excess** — Requiring extensive XML/YAML/JSON configuration for every behavior. WHY BAD: explodes boilerplate; configuration files become their own unmaintainable codebase. INSTEAD: use sensible defaults with convention-over-configuration; allow overrides only where needed. SOURCE: Rails philosophy; "Convention over Configuration" principle. EVIDENCE: C

32. **Temporal Coupling** — Methods that must be called in a specific order but nothing enforces that order. WHY BAD: silent bugs when callers don't follow the implicit protocol; a common source of initialization errors. INSTEAD: use builder pattern, state machines, or type-level enforcement. SOURCE: "The Pragmatic Programmer" (Hunt & Thomas). EVIDENCE: C

33. **Interface Bloat** — Creating interfaces with many methods, forcing implementors to provide stubs they don't need. WHY BAD: violates Interface Segregation Principle genuinely (vs. over-applying ISP to trivial cases); creates coupling. INSTEAD: split into focused interfaces (role interfaces); but don't over-split -- one-method interfaces everywhere is its own anti-pattern. SOURCE: Martin, SOLID principles; but applied pragmatically. EVIDENCE: C

### High-level (architecture)

34. **Premature Microservices** — Starting a new project with microservices architecture before understanding domain boundaries. WHY BAD: Martin Fowler: "almost all the successful microservice stories have started with a monolith that got too big and was broken up." Microservices add network latency, distributed transaction complexity, operational overhead, and debugging difficulty. GitHub and Shopify run their core applications as monoliths with millions of LOC. INSTEAD: start with a well-modularized monolith; extract services only when you have clear bounded contexts and team scaling needs. SOURCE: Fowler, "MonolithFirst" (2015); Segment's migration back to monolith. EVIDENCE: B

35. **Distributed Monolith** — Microservices that are tightly coupled, requiring coordinated deployments. WHY BAD: you get all the complexity of distributed systems (network failures, serialization, eventual consistency) with none of the benefits (independent deployment, team autonomy). INSTEAD: if services can't be deployed independently, they should be one service; define clear contracts and boundaries. SOURCE: Expert consensus; Fowler's Microservices Guide. EVIDENCE: C

36. **Big Ball of Mud** — A system with no discernible architecture where components are tangled with spaghetti-like dependencies. WHY BAD: the most common architecture anti-pattern; makes the system nearly impossible to understand, maintain, or extend. INSTEAD: enforce module boundaries; use architecture fitness functions; establish clear layering. SOURCE: Foote & Yoder, "Big Ball of Mud" (1999). EVIDENCE: B

37. **Big Bang Rewrite** — Rewriting an entire system from scratch instead of incrementally modernizing it. WHY BAD: Netscape's famous rewrite cost them the browser war; rewrites take far longer than estimated, lose institutional knowledge encoded in the old code, and must hit a moving target. INSTEAD: Strangler Fig pattern -- incrementally replace components while the old system continues running. SOURCE: Fowler, "StranglerFigApplication"; Spolsky, "Things You Should Never Do" (2000). EVIDENCE: B

38. **Ignoring the Fallacies of Distributed Computing** — Designing distributed systems assuming the network is reliable, latency is zero, bandwidth is infinite, etc. WHY BAD: Peter Deutsch's 8 fallacies (1994) are consistently validated in production; ignoring them leads to cascading failures, data loss, and outages. INSTEAD: design for failure; use circuit breakers, retries with backoff, idempotency, timeouts. SOURCE: Deutsch, "Fallacies of Distributed Computing" (1994); Brewer's CAP theorem (2000). EVIDENCE: B

39. **Database as Integration Layer** — Multiple services sharing the same database schema, using the database for inter-service communication. WHY BAD: creates invisible coupling; schema changes break all consumers; no clear ownership; impossible to evolve services independently. INSTEAD: each service owns its data; use APIs or events for inter-service communication. SOURCE: "Building Microservices" (Newman); expert consensus. EVIDENCE: C

40. **No Observability** — Running production systems without structured logging, metrics, tracing, or alerting. WHY BAD: when things break (and they will), diagnosis is guesswork; mean time to recovery skyrockets. INSTEAD: implement the three pillars of observability: logs, metrics, traces. SOURCE: "Observability Engineering" (Majors, Fong-Jones, Miranda); Google SRE book. EVIDENCE: C

41. **Environment-Specific Code** — Hardcoding environment-specific values (URLs, credentials, feature flags) directly in application code. WHY BAD: creates deployment risks; leads to "it works on my machine" syndrome. INSTEAD: use environment variables, config files, secrets management. SOURCE: 12-Factor App methodology (Heroku). EVIDENCE: C

42. **Shared Mutable State in Distributed Systems** — Allowing multiple services to directly mutate shared state without coordination. WHY BAD: leads to race conditions, lost updates, and data corruption; the CAP theorem proves you cannot have consistency, availability, and partition tolerance simultaneously. INSTEAD: use event sourcing, CQRS, or consensus protocols where needed. SOURCE: Brewer's CAP theorem; PACELC extension (Abadi, 2010). EVIDENCE: B

43. **Ignoring Technical Debt** — Letting technical debt accumulate without tracking or addressing it. WHY BAD: McKinsey Digital finds organizations with high tech debt spend 40% more on maintenance and deliver features 25-50% slower; Stripe's Developer Coefficient report found 42% of developer time is spent on tech debt and bad code; CISQ estimates $1.52 trillion annual cost in the US. INSTEAD: make debt visible (track it), pay it down incrementally, budget 15-20% of capacity for debt reduction. SOURCE: McKinsey Digital; Stripe Developer Coefficient; CISQ report; SEI CMU research. EVIDENCE: A

44. **Not Using Feature Flags for Risky Deployments** — Deploying risky changes without the ability to quickly toggle them off. WHY BAD: forces rollback of entire deployments when problems arise; extends blast radius. INSTEAD: wrap risky changes in feature flags; deploy dark, then gradually roll out; LaunchDarkly's own DB migration using feature flags found bugs without customer impact. SOURCE: ThoughtWorks Tech Radar; LaunchDarkly case study. EVIDENCE: C

45. **Inverted Testing Pyramid** — Having more end-to-end/UI tests than unit tests (ice cream cone anti-pattern). WHY BAD: E2E tests are slow, flaky (browser quirks, timing issues), and expensive to maintain; a bug caught in E2E testing costs ~10x more than in unit testing, and ~100x more in production. INSTEAD: follow Mike Cohn's test pyramid -- many unit tests, fewer integration tests, minimal E2E tests covering critical paths. SOURCE: Cohn, "Succeeding with Agile" (2009); Fowler, "Practical Test Pyramid". EVIDENCE: B

46. **Cargo Cult Architecture** — Adopting architectural patterns (microservices, event sourcing, CQRS, Kubernetes) because "Netflix/Google does it" without having Netflix/Google's problems. WHY BAD: what works for 1000+ engineers and millions of requests/second creates pure overhead for a 5-person team with moderate traffic; increases operational complexity without business value. INSTEAD: use the simplest architecture that solves your actual problems; adopt complexity only when you hit the scaling pain it addresses. SOURCE: "Cargo cults in software engineering" (Chuniversiteit); ThoughtWorks. EVIDENCE: C

47. **Tightly Coupled Deployment (Monolithic Deployment of Independent Components)** — Deploying all components together even when they have different change rates and risk profiles. WHY BAD: a low-risk change to a logging module gets blocked by a high-risk payment change; deployment frequency drops. INSTEAD: deploy independently where possible; use contract testing to verify compatibility. SOURCE: "Accelerate" (Forsgren, Humble, Kim). EVIDENCE: B

48. **No Automated Deployment Pipeline** — Relying on manual deployment steps. WHY BAD: "Accelerate" research (based on 23,000+ survey responses over 4 years) showed elite performers deploy on demand with lead times under an hour; manual deployment is the #1 bottleneck to delivery speed and reliability. INSTEAD: implement CI/CD; automate testing, building, and deploying. SOURCE: "Accelerate" (Forsgren, Humble, Kim, 2018) -- DORA metrics. EVIDENCE: A

49. **Security as Afterthought** — Adding security only late in development or after an incident. WHY BAD: architectural flaws found in production cost up to 100x more to fix than those found during design; security debt compounds. INSTEAD: shift-left security; threat modeling during design; SAST/DAST in CI pipeline. SOURCE: NIST; IBM "Cost of a Data Breach" report. EVIDENCE: A

50. **Vendor Lock-In Without Exit Strategy** — Building core business logic on proprietary vendor APIs without abstraction layers. WHY BAD: vendor price increases, deprecations, or acquisitions can threaten the business; migration costs grow exponentially over time. INSTEAD: use adapter/anti-corruption layers for vendor integrations; separate business logic from infrastructure concerns. SOURCE: "Clean Architecture" (Martin); DDD anti-corruption layer (Evans). EVIDENCE: C

---

## 50 BEST PRACTICES

### Low-level (code)

1. **Meaningful Naming** — Use descriptive, intention-revealing names for variables, functions, and classes (2-4 natural language words). WHY GOOD: research by Relf shows names composed of 2-4 words with no abstract-only words significantly improve comprehension; reduces cognitive load when navigating large codebases; enables code to be self-documenting. SOURCE: Relf naming guidelines study; Binkley et al. identifier naming research. EVIDENCE: B

2. **Small, Focused Functions** — Keep functions short (ideally <20 lines) with a single level of abstraction. WHY GOOD: reduces cognitive load; reviewers catch defects most effectively in 200-400 LOC reviews; smaller functions are easier to name, test, and reuse. SOURCE: "Code Complete" (McConnell); code review research. EVIDENCE: B

3. **Fail Fast and Loud** — Detect invalid conditions early and throw clear errors immediately rather than propagating bad state. WHY GOOD: bugs are caught closer to their source; reduces debugging time by up to 50% (documented by code commenting research); prevents cascading failures. SOURCE: "The Pragmatic Programmer" (Hunt & Thomas); CERT Secure Coding. EVIDENCE: C

4. **Use the Type System** — Leverage static types, generics, value objects, and algebraic data types to make illegal states unrepresentable. WHY GOOD: shifts error detection from runtime to compile time; eliminates entire categories of bugs (null errors, type mismatches, invalid states); TypeScript, Rust, and Kotlin adoption trends validate this approach. SOURCE: "Domain Modeling Made Functional" (Wlaschin); Hoare's null reference apology. EVIDENCE: C

5. **Immutability by Default** — Prefer immutable data structures; use `const`, `readonly`, `final`, or frozen objects. WHY GOOD: IEEE research found mutable global state increases defect proneness; immutability eliminates race conditions, simplifies reasoning, and makes code more predictable. INSTEAD of mutation: return new copies, use functional transformations. SOURCE: IEEE (2020) mutable state study; functional programming research. EVIDENCE: B

6. **Guard Clauses (Early Return)** — Handle edge cases and error conditions at the top of functions, then proceed with the happy path. WHY GOOD: reduces nesting depth; makes the primary logic path clear; neuroscience research shows reduced cognitive complexity metrics correlate with better comprehension. SOURCE: PMC neuroscience-based complexity study (2023). EVIDENCE: B

7. **Explicit Error Handling** — Use Result/Either types, checked exceptions, or explicit error returns instead of null or silent failures. WHY GOOD: makes error paths visible in the type signature; forces callers to handle failures; Rust's Result type and Go's explicit error returns demonstrate the effectiveness of this pattern. SOURCE: Rust language design; "Effective Java" (Bloch). EVIDENCE: C

8. **Consistent Code Formatting** — Use automated formatters (Prettier, Black, gofmt) enforced by CI. WHY GOOD: eliminates style debates in code review; naming convention research shows consistency reduces cognitive load; code reviews can focus on logic rather than formatting. SOURCE: Naming convention research (Binkley et al.); Google style guides. EVIDENCE: C

9. **Write Comments That Explain Why** — Comment business decisions, non-obvious trade-offs, and workarounds, not what code does. WHY GOOD: well-documented code can reduce debugging time by up to 50%; explains the reasoning that cannot be captured in code alone. SOURCE: Stack Overflow best practices (2021); MIT CommKit coding style guide. EVIDENCE: C

10. **Avoid Deeply Nested Code** — Keep nesting to a maximum of 2-3 levels using extraction, early returns, and decomposition. WHY GOOD: neuroscience-based research demonstrates that classic complexity metrics underestimate cognitive difficulty of nested code; SonarSource's cognitive complexity metric was specifically designed to capture this. SOURCE: PMC neuroscience study (2023); SonarSource cognitive complexity whitepaper. EVIDENCE: B

11. **Use Descriptive Test Names** — Name tests to describe the scenario and expected outcome (e.g., `shouldRejectOrderWhenInventoryIsZero`). WHY GOOD: failing test names become documentation; makes it immediately clear what broke and why. SOURCE: "Growing Object-Oriented Software, Guided by Tests" (Freeman & Pryce). EVIDENCE: C

12. **Limit Function Parameters** — Keep functions to 3 or fewer parameters; group related parameters into objects. WHY GOOD: reduces cognitive load; eliminates parameter ordering bugs; makes function calls self-documenting with named fields. SOURCE: "Clean Code" (Martin); "Code Complete" (McConnell). EVIDENCE: C

13. **Defensive Copying for Shared Data** — When sharing mutable data across boundaries, pass copies rather than references. WHY GOOD: prevents action-at-a-distance bugs; maintains encapsulation; particularly important at API boundaries. SOURCE: "Effective Java" (Bloch). EVIDENCE: C

14. **Dead Code Deletion** — Aggressively remove unused code rather than commenting it out. WHY GOOD: version control preserves history; dead code creates confusion and increases cognitive load; less code to maintain and search through. SOURCE: "Clean Code" (Martin); expert consensus. EVIDENCE: C

### Mid-level (design)

15. **Composition Over Inheritance** — Build behavior by composing objects rather than inheriting from base classes. WHY GOOD: more flexible (can change at runtime); avoids fragile base class problem; 2013 study of 93 Java programs found significant inheritance used purely for code reuse where composition would be more appropriate. INSTEAD of deep hierarchies: use interfaces + delegation, mixins, or traits. SOURCE: "Design Patterns" (GoF); 2013 Java inheritance study. EVIDENCE: B

16. **Dependency Inversion (Pragmatic)** — Depend on abstractions at architectural boundaries, not everywhere. WHY GOOD: decouples high-level policy from low-level details; enables testing and swapping implementations where it matters. KEY NUANCE: only create interfaces when you genuinely have or foresee multiple implementations or need testability; don't create interfaces for every class. SOURCE: Martin's SOLID (applied pragmatically); James Shore. EVIDENCE: C

17. **Separation of Concerns** — Divide code into distinct sections, each addressing a separate concern (e.g., business logic vs. data access vs. presentation). WHY GOOD: enables independent development, testing, and modification of each concern; reduces change amplification. SOURCE: Dijkstra (1974); "Clean Architecture" (Martin). EVIDENCE: C

18. **Rule of Three for Abstraction** — Wait until you see three instances of genuine duplication before extracting a shared abstraction. WHY GOOD: Sandi Metz: "duplication is far cheaper than the wrong abstraction"; two instances rarely provide enough information to design the right abstraction; prevents premature generalization. SOURCE: Sandi Metz, "The Wrong Abstraction" (2016); "The Pragmatic Programmer". EVIDENCE: C

19. **Design for Testability** — Structure code so that components can be tested in isolation with minimal setup. WHY GOOD: meta-analysis of 27 TDD studies found small but positive effect on quality; testable code is inherently better-structured; randomized controlled trials showed significant improvements in code coverage and maintainability. SOURCE: TDD meta-analysis (Springer); IEEE experimental evaluation. EVIDENCE: A

20. **Encapsulate What Varies** — Identify the aspects of your application that vary and separate them from what stays the same. WHY GOOD: limits the blast radius of change; fundamental principle underlying most design patterns. SOURCE: "Design Patterns" (GoF); "Head First Design Patterns". EVIDENCE: C

21. **Rich Domain Model (Where Warranted)** — Put business logic on the objects that own the data rather than in service classes. WHY GOOD: enforces invariants at the source; makes the domain self-documenting; reduces the risk of inconsistent state. KEY NUANCE: not every application needs DDD -- CRUD apps can use anemic models just fine. SOURCE: Evans, "Domain-Driven Design" (2003); Fowler. EVIDENCE: C

22. **API First Design** — Design the API contract before implementation, treating it as a first-class artifact. WHY GOOD: catches design mismatches early; enables parallel development of client and server; reduces integration surprises. SOURCE: "Build APIs You Won't Hate" (Sturgeon); OpenAPI ecosystem. EVIDENCE: C

23. **Repository Pattern for Data Access** — Abstract data access behind a repository interface, keeping persistence logic separate from business logic. WHY GOOD: enables switching databases or ORMs without changing business logic; simplifies testing by allowing in-memory implementations. KEY NUANCE: don't over-abstract -- if you will always use PostgreSQL and it's a CRUD app, a thin repository is fine. SOURCE: Evans, "Domain-Driven Design"; Fowler's Patterns of Enterprise Application Architecture. EVIDENCE: C

24. **Behavior-Driven Testing** — Test the public behavior/API of components rather than internal implementation details. WHY GOOD: tests survive refactoring; reduces test maintenance burden; avoids the anti-pattern of testing private methods which couples tests to implementation. SOURCE: "Growing Object-Oriented Software, Guided by Tests" (Freeman & Pryce). EVIDENCE: C

25. **Event-Driven Decoupling (Where Appropriate)** — Use events/messages to decouple components that don't need synchronous communication. WHY GOOD: reduces temporal coupling; enables independent scaling and deployment; supports eventual consistency where strong consistency isn't required. KEY NUANCE: don't use events for everything -- adds complexity, debugging difficulty, and eventual consistency challenges. SOURCE: "Enterprise Integration Patterns" (Hohpe & Woolf). EVIDENCE: C

26. **Strategic use of Design Patterns** — Apply patterns to solve specific identified problems, not preemptively. WHY GOOD: patterns provide shared vocabulary and proven solutions. KEY NUANCE: a pattern applied without a matching problem is an anti-pattern. The original GoF book warned against overuse. INSTEAD of pattern-first design: identify the problem, then reach for the appropriate pattern. SOURCE: "Design Patterns" (GoF, 1994); expert consensus. EVIDENCE: C

27. **Feature Flags for Safe Deployments** — Wrap risky or incomplete features behind toggles that can be enabled/disabled without redeployment. WHY GOOD: enables trunk-based development; allows gradual rollout with monitoring; LaunchDarkly case study showed DB migration with zero customer impact. INSTEAD of long-lived feature branches: deploy dark with flags. SOURCE: ThoughtWorks Tech Radar; LaunchDarkly case study; "Continuous Delivery" (Humble & Farley). EVIDENCE: B

28. **Bounded Contexts** — Define clear boundaries where a particular domain model applies, with explicit translation at boundaries. WHY GOOD: prevents model pollution; allows different teams to evolve models independently; the prerequisite for successful microservices extraction. SOURCE: Evans, "Domain-Driven Design" (2003). EVIDENCE: C

29. **Anti-Corruption Layer** — When integrating with external systems or legacy code, create an adapter layer that translates between models. WHY GOOD: protects your domain model from external model pollution; isolates change when external systems evolve; prevents vendor lock-in. SOURCE: Evans, "Domain-Driven Design"; "Clean Architecture" (Martin). EVIDENCE: C

30. **Strangler Fig Pattern** — Incrementally replace legacy system components by routing traffic through a facade that gradually shifts to the new implementation. WHY GOOD: avoids the big-bang rewrite risk; allows the old system to continue serving while new components prove themselves; Fowler documented this based on real migration successes. SOURCE: Fowler, "StranglerFigApplication" (2004). EVIDENCE: C

31. **Code Review (200-400 LOC Batches)** — Review code in focused batches of 200-400 lines for maximum defect detection. WHY GOOD: research shows individual inspections catch ~60% of defects; combined design and code inspections remove 70-85% of defects; effectiveness drops sharply beyond 400 LOC or 60-90 minutes. SOURCE: Code review effectiveness research; "Code Complete" (McConnell). EVIDENCE: B

32. **Contract Testing** — Verify that service interfaces meet agreed contracts rather than relying solely on end-to-end tests. WHY GOOD: catches integration issues early; faster and more reliable than E2E tests; enables independent deployment. SOURCE: Pact testing framework; "Building Microservices" (Newman). EVIDENCE: C

### High-level (architecture)

33. **Monolith First** — Start with a well-structured monolith; extract services only when scaling pain demands it. WHY GOOD: Fowler: "almost all successful microservice stories started with a monolith." Monoliths are simpler to develop, deploy, and debug; GitHub and Shopify prove monoliths scale to thousands of developers. KEY NUANCE: invest in modularity from day one -- clean module boundaries make later extraction possible. SOURCE: Fowler, "MonolithFirst" (2015). EVIDENCE: B

34. **Testing Pyramid** — Maintain many fast unit tests, fewer integration tests, and minimal end-to-end tests. WHY GOOD: a bug caught in unit testing costs ~$1, in integration ~$10, in E2E ~$100, in production ~$1000+; unit tests provide fast feedback; E2E tests are flaky and slow. SOURCE: Cohn, "Succeeding with Agile" (2009); Fowler, "Practical Test Pyramid". EVIDENCE: B

35. **CI/CD Pipeline Automation** — Automate build, test, and deployment in a continuous pipeline. WHY GOOD: "Accelerate" research (23,000+ responses, 4 years) found elite performers deploy on demand with <1 hour lead time; automated pipelines are the strongest predictor of software delivery performance and organizational performance. SOURCE: "Accelerate" (Forsgren, Humble, Kim, 2018) -- DORA metrics. EVIDENCE: A

36. **Design for Failure** — Assume every component can fail; implement circuit breakers, retries, timeouts, and graceful degradation. WHY GOOD: Deutsch's 8 Fallacies of Distributed Computing (1994) are consistently validated; systems that don't design for failure suffer cascading outages. SOURCE: Deutsch, "Fallacies of Distributed Computing"; Netflix Chaos Engineering; "Release It!" (Nygard). EVIDENCE: B

37. **Observability (Logs, Metrics, Traces)** — Implement structured logging, metrics collection, and distributed tracing from the start. WHY GOOD: dramatically reduces mean time to recovery (MTTR); enables understanding system behavior in production without reproducing issues. INSTEAD of ad-hoc print statements: use structured logging with correlation IDs. SOURCE: "Observability Engineering" (Majors et al.); Google SRE book. EVIDENCE: C

38. **12-Factor App Principles** — Follow the 12-Factor methodology for building portable, scalable applications. WHY GOOD: battle-tested principles from Heroku's experience with millions of apps; covers config, dependencies, ports, logs, and more; creates deployment-environment independence. SOURCE: Wiggins, "The Twelve-Factor App" (2011). EVIDENCE: B

39. **Choose Boring Technology** — Prefer well-understood, proven technology over the newest shiny option. WHY GOOD: each new technology is an "innovation token" that costs operational knowledge and introduces unknown failure modes; organizations have a limited budget for new technology. KEY NUANCE: not "never use new things" but "spend your innovation budget on what differentiates your business." SOURCE: McKinley, "Choose Boring Technology" (2015). EVIDENCE: C

40. **Evolutionary Architecture** — Design architecture to support incremental, guided change using fitness functions. WHY GOOD: requirements evolve; big-upfront architecture becomes stale; fitness functions (automated checks for architectural properties) catch drift early. SOURCE: "Building Evolutionary Architectures" (Ford, Parsons, Kua). EVIDENCE: C

41. **Infrastructure as Code** — Define infrastructure through version-controlled code rather than manual configuration. WHY GOOD: reproducible environments; auditable changes; enables disaster recovery; reduces "snowflake server" problems. SOURCE: "Infrastructure as Code" (Morris); DevOps research. EVIDENCE: B

42. **Shift-Left Security** — Integrate security testing early in the development process (SAST/DAST in CI, threat modeling during design). WHY GOOD: NIST research shows architectural security flaws found in production cost up to 100x more to fix than those found during design; IBM's Cost of a Data Breach report consistently validates this. SOURCE: NIST; IBM "Cost of a Data Breach" annual report. EVIDENCE: A

43. **Trunk-Based Development** — Use short-lived branches (< 1 day) that merge frequently to main/trunk. WHY GOOD: "Accelerate" research found trunk-based development is a strong predictor of high delivery performance; reduces merge conflicts and integration hell; enables continuous delivery. SOURCE: "Accelerate" (Forsgren, Humble, Kim); Google's internal practices. EVIDENCE: A

44. **Data Ownership Per Service** — Each service owns its data store; no shared databases between services. WHY GOOD: enables independent evolution and deployment; prevents invisible coupling; each team can choose the storage technology appropriate for their service. SOURCE: "Building Microservices" (Newman); Fowler's microservices guidance. EVIDENCE: C

45. **Incremental Database Migrations** — Use versioned, reversible migration scripts rather than ad-hoc schema changes. WHY GOOD: enables repeatable deployments; supports rollback; combined with feature flags, enables zero-downtime migrations (validated by multiple case studies). SOURCE: "Continuous Delivery" (Humble & Farley); ThoughtWorks feature flag migration guide. EVIDENCE: B

46. **Load Testing Before Launch** — Performance test under realistic load before production release. WHY GOOD: performance problems found in production are the most expensive to fix; load testing reveals bottlenecks, resource limits, and scaling issues early. INSTEAD of hoping: establish performance budgets and test against them. SOURCE: "Release It!" (Nygard); Google SRE practices. EVIDENCE: C

47. **Graceful Degradation** — When a dependency fails, provide reduced functionality rather than complete failure. WHY GOOD: Netflix's Hystrix and resilience patterns demonstrate that users prefer partial functionality over total outage; improves perceived reliability. SOURCE: Netflix Hystrix; "Release It!" (Nygard). EVIDENCE: C

48. **Technical Debt Budget** — Allocate 15-20% of development capacity to addressing technical debt continuously. WHY GOOD: McKinsey finds high-debt organizations deliver 25-50% slower; Stripe found 42% of developer time is wasted on debt; proactive management is far cheaper than reactive crisis mode. SOURCE: McKinsey Digital; Stripe Developer Coefficient; SEI CMU 10-year research program. EVIDENCE: A

49. **Architecture Decision Records (ADRs)** — Document significant architectural decisions with context, options considered, and rationale. WHY GOOD: prevents re-litigating past decisions; helps new team members understand why the system is built the way it is; captures trade-offs that code alone cannot express. SOURCE: Nygard, "Documenting Architecture Decisions" (2011); ThoughtWorks Tech Radar. EVIDENCE: C

50. **Measure Before Optimizing (Performance Engineering)** — Always profile and measure before optimizing; focus on algorithmic improvements first, then hot-path micro-optimizations. WHY GOOD: Knuth's actual position: "In established engineering disciplines a 12% improvement, easily obtained, is never considered marginal" BUT only for the critical 3% identified by measurement. Algorithmic improvements (O(n) vs O(n^2)) dwarf micro-optimizations. INSTEAD of guessing: use profilers, flame graphs, benchmarks. SOURCE: Knuth, "Structured Programming with go to Statements" (1974); expert consensus. EVIDENCE: B

---

## 10 COMMON LLM MISCONCEPTIONS

Things AI models frequently get wrong about programming due to training data bias:

1. **Over-recommending design patterns** — LLMs are trained on tutorials and examples that showcase patterns, leading them to suggest Factory, Strategy, Observer, etc. even for simple problems. The GoF book itself warns against pattern overuse. AI models pattern-match to familiar structures rather than evaluating whether the complexity is warranted. *Reality: Most code doesn't need formal design patterns. A simple function or module often suffices.*

2. **Defaulting to microservices architecture** — Training data is heavily biased toward microservices content (blog posts, conference talks). LLMs rarely suggest monolith-first despite Fowler's evidence that "almost all successful microservice stories started with a monolith." *Reality: Most projects should start as monoliths and extract services only when scaling demands it.*

3. **Excessive abstraction and interface creation** — LLMs tend to create interfaces for every class, abstract base classes for every hierarchy, and layers of indirection. This comes from training on "clean code" tutorials. *Reality: An interface with one implementation is just indirection. Abstract only when you have concrete variation.*

4. **Over-applying SOLID as rigid rules** — LLMs treat SOLID principles as laws rather than guidelines, splitting simple code into excessive classes. Dan North called SRP "pointlessly vague" for good reason -- LLMs can't judge when simplicity trumps principle adherence. *Reality: SOLID principles are trade-offs, not commandments. A 50-line class with two reasons to change is often better than five 10-line classes.*

5. **Recommending DRY before understanding duplication** — LLMs aggressively extract shared code even when two similar-looking pieces serve different domains. They optimize for eliminating textual duplication rather than maintaining conceptual clarity. *Reality: Sandi Metz: "Duplication is far cheaper than the wrong abstraction." Wait for three instances.*

6. **Generating over-commented code** — LLMs produce excessive `// Set the value to 5` style comments that restate the code. Research shows bad comments are worse than no comments. *Reality: Comments should explain WHY, not WHAT. Self-documenting code with strategic comments beats heavily annotated code.*

7. **Suggesting overly complex error handling** — LLMs tend to generate elaborate try-catch hierarchies with custom exception classes for every error case, even in prototypes or simple scripts. *Reality: Match error handling complexity to the application's needs. A startup MVP doesn't need the same error handling rigor as a payment processing system.*

8. **Preferring popular frameworks over simpler solutions** — Due to training data volume, LLMs recommend React for simple pages, Kubernetes for single-server apps, and Redis for in-memory caching that a HashMap would handle. Research on resume-driven development shows this same bias in human developers. *Reality: Evaluate whether a dependency is justified by the problem's actual complexity.*

9. **Misunderstanding premature optimization** — LLMs either over-optimize trivially (avoiding string concatenation in code that runs once) OR miss genuine algorithmic inefficiencies (suggesting O(n^2) solutions where O(n log n) is straightforward). They lack the judgment to distinguish the critical 3% from the irrelevant 97%. *Reality: Choose good algorithms upfront (that's not premature); profile before micro-optimizing.*

10. **Confidently generating subtly wrong code** — MIT research (2025) found LLMs sometimes leverage grammatical patterns from training rather than domain knowledge. When an LLM makes an early mistake, it tends to elaborate on that mistake rather than self-correct. All LLMs share common semantic errors: incorrect conditions, wrong constant values, and incorrect references. More than 40% of syntactic errors involve missing or incorrect code blocks. *Reality: LLM code requires human review. Trust but verify -- run the code, write tests, question the logic. Smaller, focused prompts produce more accurate results than large, complex ones.*

---

## Key Sources and References

- Forsgren, Humble, Kim. *Accelerate: The Science of Lean Software and DevOps* (2018) -- DORA metrics, 23,000+ survey responses
- Fowler, Martin. *Refactoring* (2018); various bliki articles on MonolithFirst, StranglerFig, etc.
- Martin, Robert C. *Clean Architecture* (2017); *Clean Code* (2008) -- useful but apply critically
- Evans, Eric. *Domain-Driven Design* (2003)
- McConnell, Steve. *Code Complete* (2004)
- Hunt & Thomas. *The Pragmatic Programmer* (1999)
- Gamma, Helm, Johnson, Vlissides. *Design Patterns* (1994)
- Knuth, Donald. "Structured Programming with go to Statements" (1974)
- Sandi Metz. "The Wrong Abstraction" (2016)
- Nygard, Michael. *Release It!* (2007/2018)
- Newman, Sam. *Building Microservices* (2015/2021)
- Freeman & Pryce. *Growing Object-Oriented Software, Guided by Tests* (2009)
- PMC neuroscience-based code complexity study (2023)
- IEEE study on mutable global state and defect proneness (2020)
- ArXiv study on design anti-pattern mutations and fault-proneness (2021)
- ACM ICSE-SEIS paper on Resume-Driven Development (2021)
- Springer meta-analysis on TDD effectiveness (27 studies)
- McKinsey Digital technical debt research
- Stripe Developer Coefficient report
- CISQ Cost of Poor Software Quality report
- IBM Cost of a Data Breach annual report
- ArXiv study on LLM code generation mistakes (2024)
- MIT research on LLM reliability shortcomings (2025)
