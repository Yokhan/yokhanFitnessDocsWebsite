# Product Design + UX: Evidence-Based Practices

> Anti-Stupidity Shield -- Compiled from research across Nielsen Norman Group, SVPG (Marty Cagan), Teresa Torres, Melissa Perri, Google Ventures, academic HCI research, and regulatory findings. Last updated: 2026-03-19.

---

## 50 BAD PRACTICES

1. **Feature Factory Mindset** -- Measuring success by number of features shipped rather than outcomes achieved. WHY BAD: Teams become output machines disconnected from user value; roadmaps become stakeholder wish lists. INSTEAD: Adopt outcome-driven development with empowered product teams (Cagan's product operating model). SOURCE: Marty Cagan, SVPG "Product Teams vs Feature Teams"; Melissa Perri "Escaping the Build Trap". EVIDENCE: B

2. **The Build Trap** -- Locking into a plan of action before gathering evidence, then measuring success by shipping velocity. WHY BAD: Organizations optimize for building more, not building right; teams ship features no one uses. INSTEAD: Measure outcomes (retention, activation, revenue impact) not outputs (features shipped). SOURCE: Melissa Perri, "Escaping the Build Trap" (O'Reilly). EVIDENCE: B

3. **HiPPO-Driven Decisions** -- Letting the Highest Paid Person's Opinion override data, research, and team expertise. WHY BAD: Ignores user needs; demoralizes product teams; stifles innovation as qualified people stop proposing ideas. INSTEAD: Make stakeholders "informed" not "in charge" -- expose them to user research sessions and data. SOURCE: UX Planet; Dovetail research on HiPPO effect. EVIDENCE: C

4. **Vanity Metrics Obsession** -- Tracking page views, downloads, registered users, or social followers as primary success indicators. WHY BAD: These metrics look impressive but are not actionable; they mask real engagement problems and mislead strategy. INSTEAD: Use actionable metrics tied to user behavior (activation rate, retention cohorts, NPS trend, revenue per user). SOURCE: Eric Ries (Lean Startup); Dave McClure AARRR framework critique by Samuel Hulick. EVIDENCE: B

5. **Design Theater** -- Creating polished mockups and design artifacts without validating with real users. WHY BAD: Pretty deliverables create false confidence; stakeholders mistake visual polish for validated solutions. INSTEAD: Test low-fidelity prototypes early; prioritize learning speed over artifact quality. SOURCE: SVPG "Product Discovery Anti-Patterns". EVIDENCE: C

6. **Building What Users Literally Request** -- Taking user feature requests at face value instead of understanding underlying needs. WHY BAD: Users lack the vision/vocabulary to articulate solutions; "faster horse" problem. INSTEAD: Apply Jobs-to-be-Done framework -- uncover what users are actually trying to achieve. SOURCE: Clayton Christensen JTBD theory; ProductPlan; Hotjar JTBD guide. EVIDENCE: B

7. **Dark Patterns / Deceptive Design** -- Using UI tricks to manipulate users into unintended actions (hidden costs, forced continuity, confirmshaming, roach motels). WHY BAD: 97% of top EU websites use at least one (EC 2022 study); 76%+ in FTC 2024 study. Erodes trust, increases churn, and now carries legal liability (EU DSA, FTC enforcement -- accessiBe fined $1M in 2025). INSTEAD: Ethical design with transparent opt-ins, clear cancellation flows, honest defaults. SOURCE: arxiv.org/html/2412.09147v1; Cambridge Behavioural Public Policy journal; FTC 2024 report. EVIDENCE: A

8. **Accessibility as Afterthought** -- Treating WCAG compliance as a bolt-on at the end of development. WHY BAD: 96.3% of top 1M pages fail WCAG (WebAIM Million report). Retrofitting is 10x more expensive than building inclusively. Accessibility overlays don't work -- only 2.4% of disabled users found them effective (WebAIM survey). INSTEAD: Integrate accessibility from design phase; use semantic HTML; test with screen readers during development. SOURCE: WebAIM Million 2025; ACM SIGACCESS 2024 overlay study; FTC accessiBe enforcement. EVIDENCE: A

9. **Accessibility Overlay Reliance** -- Using JavaScript overlay widgets (accessiBe, UserWay, etc.) as a substitute for proper accessibility work. WHY BAD: 72% of disabled users say overlays are not effective; they override assistive technology settings; expose companies to lawsuits rather than protecting them. INSTEAD: Build accessibility into the codebase with semantic markup, ARIA attributes, keyboard navigation, and manual testing. SOURCE: ACM SIGACCESS "Promise and Pitfalls of Web Accessibility Overlays" (2024); shouldiuseanaccessibilityoverlay.com. EVIDENCE: A

10. **A/B Testing Cargo Cult** -- Running tests without proper statistical methodology: peeking at results, stopping early, no power calculation. WHY BAD: Peeking inflates false positive rate from 5% to 26.1%; most teams skip power calculations and run tests "until significant." One in four apparent "winners" is pure noise. INSTEAD: Pre-register hypothesis, calculate required sample size, use sequential testing methods if peeking is needed. SOURCE: Netflix TechBlog on false negatives; American Statistician review (2023); Towards Data Science. EVIDENCE: A

11. **Testing Trivial Variations** -- A/B testing button colors or micro-copy while ignoring fundamental value proposition or flow problems. WHY BAD: Wastes experimentation capacity on effects too small to detect reliably; diverts from high-impact structural improvements. INSTEAD: Test big bets first (value props, pricing, core flows); use heuristic evaluation for cosmetic decisions. SOURCE: PostHog "A/B testing mistakes I learned the hard way"; AB Smartly. EVIDENCE: C

12. **Confusing Statistical and Practical Significance** -- Celebrating a "statistically significant" result that represents a 0.01% improvement. WHY BAD: Statistical significance says nothing about whether the difference is large enough to matter for the business. INSTEAD: Define minimum detectable effect (MDE) before the test; report confidence intervals, not just p-values. SOURCE: Towards Data Science; Contentsquare A/B testing guide. EVIDENCE: B

13. **Pixel-Perfect Obsession** -- Demanding exact pixel alignment between design files and production code at the expense of shipping speed. WHY BAD: Developers waste time chasing microscopic misalignments; products look "fragile" outside design files; competitors ship while you polish. INSTEAD: Define acceptable visual tolerance; focus polish on high-impact interaction points; ship and iterate. SOURCE: Toptal "Pragmatic Pixel-Perfect Design"; raffdimeo.com. EVIDENCE: C

14. **MVP as Minimum Product** -- Stripping an MVP to the point it's unusable, confusing "minimum" with "low quality." WHY BAD: Users reject products that don't deliver core value; destroys first impressions and poisons word-of-mouth. 74% of fast-growing internet companies fail by scaling before validating. INSTEAD: MVP = smallest thing that delivers real value AND enables learning. Focus on "viable" as much as "minimum." SOURCE: Eric Ries; Railsware MVP misconceptions; Built In. EVIDENCE: B

15. **MVP Scope Creep** -- Adding "just one more feature" to the MVP until it's a full product launch. WHY BAD: Delays validation; increases sunk cost; defeats the purpose of rapid learning. INSTEAD: Define a learning goal first, then work backward to the minimum scope that tests it. SOURCE: Ben Yoskovitz "5 Biggest MVP Mistakes"; Codica. EVIDENCE: C

16. **Mobile-First Dogma** -- Applying mobile-first design universally regardless of the product's actual usage context. WHY BAD: A complex analytics dashboard's primary context is desktop; forcing mobile-first creates a crippled desktop experience. INSTEAD: Context-first design -- ask "where is the user most likely to perform this task?" and design for that context first. SOURCE: Emre AY "Mobile First Is Not a UX Strategy, It's a Dogma" (Medium). EVIDENCE: C

17. **Ignoring Cognitive Load** -- Presenting too many choices, too much information, or too many actions simultaneously. WHY BAD: Miller's Law (1956): working memory holds ~7 +/- 2 chunks. Hick's Law: decision time increases logarithmically with options. Overload leads to decision paralysis and abandonment. INSTEAD: Chunk information; use progressive disclosure; limit choices per screen. SOURCE: George Miller (1956); Hick & Hyman; lawsofux.com. EVIDENCE: A

18. **Ignoring Fitts's Law** -- Making interactive targets too small or placing them too far from likely cursor/finger position. WHY BAD: Small targets increase error rate and interaction time; especially problematic on mobile (finger > cursor). Apple HIG specifies minimum 44x44px touch targets. INSTEAD: Size targets proportional to importance; reduce distance between sequential actions. SOURCE: Paul Fitts (1954); Nielsen Norman Group; Apple HIG. EVIDENCE: A

19. **Skipping User Research Entirely** -- Designing based on assumptions, stakeholder opinions, or competitor copying. WHY BAD: Assumptions are systematically wrong; you are not your user. Every $1 invested in UX returns $100 (Forrester). INSTEAD: Even 5 qualitative usability tests per iteration catch 85% of major issues (Nielsen). SOURCE: Forrester ROI study; Jakob Nielsen "Why You Only Need to Test with 5 Users." EVIDENCE: B

20. **One-Off Research** -- Commissioning a user study before a redesign, then archiving the results. WHY BAD: User needs evolve; market changes; one-off research becomes stale within months. INSTEAD: Continuous discovery -- weekly customer interviews, ongoing assumption testing. SOURCE: Teresa Torres "Continuous Discovery Habits". EVIDENCE: B

21. **Confirmation Bias in Research** -- Designing studies or interpreting data to confirm pre-existing beliefs about what users want. WHY BAD: Teams selectively gather supporting evidence; cherry-pick favorable data; ignore contradictory signals. INSTEAD: Pre-register hypotheses; include disconfirming questions; have someone outside the team review findings. SOURCE: Amplitude "Confirmation Bias in Product Management"; Entrepreneur. EVIDENCE: B

22. **Survivorship Bias in Product Decisions** -- Learning only from successful users/products while ignoring churned users, failed features, and non-adopters. WHY BAD: Focusing only on current users misses why people leave; past success may be due to luck or different market conditions. INSTEAD: Study churned users, failed experiments, and non-adopters equally. SOURCE: Attest; Medium analysis of British bomber study analogy. EVIDENCE: B

23. **Say-Do Gap Blindness** -- Relying solely on what users say (surveys, interviews) without observing what they actually do. WHY BAD: Users rate products highly even when struggling to complete tasks; self-report masks workflow issues; Hawthorne effect changes behavior when observed. INSTEAD: Combine attitudinal data with behavioral analytics; weight behavioral data more heavily. SOURCE: Nielsen Norman Group Hawthorne Effect article; MeasuringU "9 Biases in Usability Testing." EVIDENCE: A

24. **Leading Questions in User Research** -- Asking "Don't you think this feature is useful?" instead of neutral, open-ended questions. WHY BAD: Pushes users toward expected answers; produces artificially positive feedback that validates bad ideas. INSTEAD: Use neutral language ("Tell me about your experience with..."); employ the Mom Test for honest feedback. SOURCE: UXtweak research mistakes; Rob Fitzpatrick "The Mom Test." EVIDENCE: B

25. **Design System Over-Engineering (Small Teams)** -- Building a comprehensive design system with tokens, auto-layout, and full component libraries for a 3-person startup. WHY BAD: Premature optimization; the system becomes a project itself; nobody uses it because the product is still finding product-market fit. INSTEAD: Start with a simple style guide; extract patterns only after 3+ repeated use cases. SOURCE: Practical Design Systems "Beware Premature Optimization." EVIDENCE: C

26. **Premature Abstraction in UI Components** -- Creating highly flexible, configurable components before understanding actual use cases. WHY BAD: Over-abstracted components are harder to use than the problem they solve; adds maintenance burden; "Rule of Three" exists for a reason. INSTEAD: Build concrete components first; abstract only after 3+ similar implementations. SOURCE: AmazingCTO "Abstraction as a Developer Footgun"; devshift.substack.com. EVIDENCE: C

27. **Aesthetics Over Functionality** -- Prioritizing visual beauty at the expense of usability, performance, or clarity. WHY BAD: Users don't admire your gradients when they can't find the checkout button. Animations slow interaction; clever layouts confuse. INSTEAD: Ensure functional clarity first; layer aesthetics on top; test comprehension not just impression. SOURCE: Contentsquare UX mistakes guide; Eleken. EVIDENCE: C

28. **Feature Bloat / Creep** -- Continuously adding features without removing or simplifying, driven by fear of saying no. WHY BAD: Increases cognitive load; clutters navigation; makes onboarding harder; increases maintenance cost exponentially. INSTEAD: Audit feature usage; sunset unused features; apply the "one in, one out" principle. SOURCE: Amplitude; Atlassian bias research. EVIDENCE: B

29. **Ignoring Error States** -- Designing only the happy path, leaving error messages vague or nonexistent. WHY BAD: Users encounter errors constantly; vague error messages ("Something went wrong") create helplessness and abandonment. INSTEAD: Design error states first; provide specific error messages with recovery actions. SOURCE: Userpilot UX mistakes; NNG error message guidelines. EVIDENCE: C

30. **Infinite Scroll Without Context** -- Using infinite scroll for content where users need to find specific items or return to a previous position. WHY BAD: Users lose their place; footer content becomes inaccessible; no sense of progress. INSTEAD: Use pagination for goal-directed search; infinite scroll only for casual browsing (social feeds). SOURCE: NNG infinite scroll research; Baymard Institute. EVIDENCE: B

31. **Hamburger Menu Hiding Critical Navigation** -- Burying primary navigation behind a hamburger icon on desktop or for core mobile actions. WHY BAD: NNG research shows hamburger menus decrease discoverability; users don't explore what they can't see. INSTEAD: Show top 4-5 navigation items visibly; use hamburger only for secondary actions. SOURCE: NNG "Hamburger Menus and Hidden Navigation Hurt UX Metrics." EVIDENCE: B

32. **Onboarding Information Dump** -- Front-loading all product education into a lengthy tutorial before users can experience value. WHY BAD: 90% of users churn if they don't see value in the first week; information without context is instantly forgotten. INSTEAD: Progressive onboarding tied to user actions; show help at the point of need. SOURCE: UserGuiding onboarding statistics; Userpilot. EVIDENCE: B

33. **Mandatory Account Creation Before Value** -- Requiring sign-up before users can experience any product value. WHY BAD: Each friction point reduces completion by 3-8%; users abandon before understanding what they're signing up for. INSTEAD: Let users experience core value first; request account creation at the moment value is proven. SOURCE: Formbricks onboarding best practices; FullSession. EVIDENCE: B

34. **Notification Spam** -- Over-notifying users with low-value alerts to boost "engagement" metrics. WHY BAD: Users disable notifications entirely (losing the channel) or uninstall the app. Destroys trust for the sake of vanity engagement numbers. INSTEAD: Notify only for user-relevant triggers; provide granular notification controls; measure notification-driven churn. SOURCE: Fair Patterns ethical design principles; NNG notification guidelines. EVIDENCE: C

35. **Ignoring Page Load Performance** -- Treating performance optimization as a separate technical concern from UX. WHY BAD: Google research shows 53% of mobile users abandon pages that take >3 seconds to load. Each additional second of load time reduces conversions by 7%. INSTEAD: Set performance budgets; measure Core Web Vitals as UX metrics; lazy-load below-fold content. SOURCE: Google Web Vitals research; Akamai performance studies. EVIDENCE: A

36. **Cargo Cult Design Patterns** -- Copying successful product patterns (Spotify's home feed, Slack's threads) without understanding why they work in context. WHY BAD: Patterns succeed because of specific user contexts, data, and ecosystems; transplanting them without those conditions produces confusion. INSTEAD: Understand the user problem the pattern solves; validate it fits your context through testing. SOURCE: UX Collective "Thinking Past the Cliche of LLM's AI Design Patterns." EVIDENCE: C

37. **Stakeholder Roadmap = User Need** -- Equating the internal roadmap (driven by sales requests, executive vision, competitive panic) with what users actually need. WHY BAD: Creates features that close individual deals but don't serve the broader user base; fragments the product. INSTEAD: Separate discovery (what to build) from delivery (how to build it); validate demand before committing. SOURCE: Cagan SVPG; Teresa Torres OST framework. EVIDENCE: B

38. **Ignoring Responsive Design** -- Designing only for one viewport and assuming CSS will "handle" the rest. WHY BAD: Users expect seamless cross-device experience; broken layouts on any device destroy credibility instantly. INSTEAD: Design for key breakpoints; test on actual devices; use responsive design tokens. SOURCE: Contentsquare; Wearetenet UX mistakes. EVIDENCE: C

39. **Single User Persona Tunnel Vision** -- Designing for one idealized persona while ignoring the diversity of actual users. WHY BAD: Real user bases include power users, novices, accessibility needs, different cultural contexts; one persona cannot represent this. INSTEAD: Define 3-5 research-backed personas covering key behavioral segments; test with diverse participants. SOURCE: NNG "Personas vs Jobs-to-be-Done." EVIDENCE: B

40. **Consistency Obsession at the Expense of Context** -- Making every screen look identical regardless of the task's unique requirements. WHY BAD: Consistency is a heuristic, not a law; force-fitting a standard layout on a specialized workflow creates friction. INSTEAD: Be consistent in patterns and language; adapt layout to task requirements. SOURCE: NNG 10 Heuristics (consistency vs. standards); UXPin. EVIDENCE: C

41. **Redesigning Without Measuring the Baseline** -- Launching a major redesign without establishing current metrics. WHY BAD: Impossible to know if the redesign improved anything; "it looks better" is not evidence. INSTEAD: Measure key flows (task completion rate, time-on-task, error rate) before and after. SOURCE: MeasuringU; Contentsquare. EVIDENCE: C

42. **Design by Committee** -- Letting every stakeholder add their opinion to a design, producing Franken-designs that satisfy no one. WHY BAD: Compromises accumulate; coherent vision is lost; cognitive load increases with every "just add this" request. INSTEAD: Assign a single design owner; use structured critique (not open brainstorming); test with users to break ties. SOURCE: SVPG; age-of-product.com anti-patterns. EVIDENCE: C

43. **Copy-Pasting Competitor Features** -- Adding features because "Competitor X has it" without validating user demand. WHY BAD: Competitor's feature may be failing internally; their user context differs; creates feature bloat. INSTEAD: Validate demand through user interviews and behavioral data before building. SOURCE: UXtweak research mistakes; Amplitude. EVIDENCE: C

44. **Dark Pattern Confirmshaming** -- Using guilt-inducing language on opt-out options ("No thanks, I don't want to save money"). WHY BAD: Manipulates through emotional pressure; erodes brand trust; increasingly regulated (EU DSA). INSTEAD: Neutral opt-out language; respect user autonomy. SOURCE: FTC deceptive patterns study 2024; Fair Patterns. EVIDENCE: B

45. **Ignoring Form UX** -- Long forms with too many fields, vague error messages, and no progress indication. WHY BAD: Reducing fields from 10 to 6 improves completion by 12-28%; vague errors cause abandonment. INSTEAD: Ask only what you need now; inline validation; show progress; specific error messages with fixes. SOURCE: Formbricks; Userpilot form UX research. EVIDENCE: B

46. **Testing with Colleagues Instead of Users** -- Using internal team members for usability testing because it's faster. WHY BAD: Colleagues have expert knowledge, institutional context, and social pressure to be positive; they are not representative users. INSTEAD: Recruit from target user segments; even 5 external users beats 50 internal ones. SOURCE: NNG usability testing methodology; MeasuringU. EVIDENCE: B

47. **Premature Personalization** -- Building complex recommendation engines before understanding what basic behaviors to optimize. WHY BAD: Personalization requires behavioral data you don't have yet; recommendations based on thin data are worse than no recommendations. INSTEAD: Get basic UX right first; start with simple rules (popular, recent); add ML personalization when you have sufficient data. SOURCE: Amplitude; ProductSchool. EVIDENCE: C

48. **Ignoring Keyboard Navigation** -- Building interfaces that only work with mouse/touch, ignoring keyboard users. WHY BAD: Blocks power users, screen reader users, and anyone with motor impairments. Violates WCAG 2.1 Success Criterion 2.1.1. INSTEAD: Ensure all interactive elements are focusable; maintain visible focus indicators; test with keyboard only. SOURCE: WebAIM; WCAG 2.1 guidelines. EVIDENCE: A

49. **Motion/Animation Without Purpose** -- Adding animations for visual flair that don't communicate state changes or guide attention. WHY BAD: Increases page load time; causes motion sickness for vestibular disorder users; distracts from content. INSTEAD: Use animation to show cause-effect, transition state, or direct attention; respect prefers-reduced-motion. SOURCE: WCAG 2.3 animation guidelines; A11y Project. EVIDENCE: B

50. **Launching Without Analytics** -- Shipping a product or feature with no instrumentation to measure whether it succeeds. WHY BAD: Without data, you're flying blind; can't iterate effectively; every product debate becomes a HiPPO battle. INSTEAD: Define success metrics before launch; instrument key events; review data within first week. SOURCE: Melissa Perri; PostHog. EVIDENCE: C

---

## 50 BEST PRACTICES

1. **Outcome-Driven Development** -- Define success as measurable user/business outcomes, not features shipped. WHY GOOD: Aligns team effort with actual value creation; 70% of OKR-adopting orgs report improved strategic alignment (McKinsey 2022). SOURCE: Melissa Perri "Escaping the Build Trap"; McKinsey OKR survey 2022. EVIDENCE: B

2. **Continuous Discovery** -- Weekly rhythm of customer interviews + assumption testing to keep product decisions evidence-based. WHY GOOD: Prevents stale assumptions; keeps the roadmap shaped by evidence, not guesswork; creates compounding customer understanding. SOURCE: Teresa Torres "Continuous Discovery Habits"; producttalk.org. EVIDENCE: B

3. **Opportunity Solution Trees** -- Map business outcomes to user opportunities to possible solutions, visualizing the discovery process. WHY GOOD: Creates shared understanding across teams; prevents jumping to solutions; each opportunity supported by interview evidence. SOURCE: Teresa Torres; producttalk.org OST framework. EVIDENCE: B

4. **Jobs-to-be-Done Framework** -- Focus on what users are trying to accomplish ("hire" a product for) rather than demographic profiles or feature requests. WHY GOOD: Reveals underlying motivations; prevents "faster horse" problem; actionable for product decisions. SOURCE: Clayton Christensen; ProductPlan; Hotjar JTBD guide. EVIDENCE: B

5. **Nielsen's 10 Usability Heuristics** -- Apply the 10 broad rules of thumb for UI design refined from factor analysis of 249 usability problems. WHY GOOD: Identified 59 major and 152 minor problems across 6 UI case studies; confirmed across 2,048 users in 14 countries; unchanged and valid since 1994. SOURCE: Jakob Nielsen & Rolf Molich (1990, refined 1994); NNG. EVIDENCE: A

6. **Progressive Disclosure** -- Show only essential information/actions initially; reveal complexity as users need it. WHY GOOD: Improves 3 of 5 usability components: learnability, efficiency, and error rate (NNG). Users understand systems better when guided to prioritize features. SOURCE: John M. Carroll & Mary Rosson (IBM research); NNG progressive disclosure article. EVIDENCE: B

7. **Design Sprints** -- 5-day structured process to go from problem to tested prototype, avoiding months of debate. WHY GOOD: Validated in 300+ teams including Google, Slack, Uber; produces testable prototype with real user feedback in one week. SOURCE: Jake Knapp, GV (Google Ventures); thesprintbook.com. EVIDENCE: B

8. **5-User Iterative Testing** -- Test with 5 users per round, fix issues, test again -- rather than one large study. WHY GOOD: 5 users find ~85% of major usability problems per round; iterative approach maximizes learning per dollar; catches issues before they compound. SOURCE: Jakob Nielsen "Why You Only Need to Test with 5 Users" (2000); NNG. EVIDENCE: B

9. **Accessible-First Design** -- Integrate WCAG compliance from the first design sprint, not as a retrofit. WHY GOOD: Inclusive design benefits all users (curb-cut effect); prevents 10x retrofit cost; reduces legal liability; expands addressable market by 15-20% (disabled users). SOURCE: WebAIM; W3C WCAG 2.1; Microsoft Inclusive Design. EVIDENCE: A

10. **Actionable Metrics (AARRR Done Right)** -- Track Acquisition, Activation, Retention, Referral, Revenue with metrics tied to specific user behaviors, not vanity numbers. WHY GOOD: Each metric maps to a controllable lever; focuses team on the funnel stage that needs most work. SOURCE: Dave McClure (2007); Amplitude "Make Your Pirate Metrics Actionable." EVIDENCE: B

11. **Cognitive Load Management** -- Chunk information into groups of 5-9 items; limit choices per screen; use whitespace to create visual hierarchy. WHY GOOD: Aligns with Miller's Law (7 +/- 2 chunks) and Hick's Law (fewer choices = faster decisions); reduces abandonment. SOURCE: George Miller (1956); William Hick; lawsofux.com. EVIDENCE: A

12. **Fitts's Law-Compliant Target Sizing** -- Make interactive elements large enough and close enough to minimize motor effort. WHY GOOD: Proven across limbs, devices, and populations since 1954; Apple HIG minimum 44x44px touch targets derived from this law. SOURCE: Paul Fitts (1954); Apple HIG; NNG. EVIDENCE: A

13. **Empowered Product Teams** -- Teams with a PM, designer, and engineers who own a problem space and have autonomy to find solutions. WHY GOOD: Netflix, Amazon, Spotify model; teams discover solutions rather than implement specifications; leads to higher innovation and ownership. SOURCE: Marty Cagan, SVPG; "Inspired" and "Empowered." EVIDENCE: B

14. **Ethical Design Defaults** -- Default to the option that best serves the user, not the business. WHY GOOD: Builds long-term trust; users who feel respected return, share data, and recommend the platform; reduces regulatory risk. SOURCE: Fair Patterns; Cambridge Behavioural Public Policy journal; EU DSA. EVIDENCE: B

15. **Interactive Onboarding** -- Guide new users through features with hands-on walkthroughs (tooltips, modals, highlighted elements) rather than static tutorials. WHY GOOD: Products with interactive onboarding see 50% higher activation rates than static tutorials; learning by doing creates stronger mental models. SOURCE: UserGuiding onboarding statistics; Userpilot; Formbricks. EVIDENCE: B

16. **Value-First, Account-Second** -- Let users experience core product value before requiring account creation or payment. WHY GOOD: Moving payment to after value delivery doubles free-to-paid conversion; each removed friction point improves completion by 3-8%. SOURCE: SaaSFactor; Formbricks onboarding research. EVIDENCE: B

17. **Performance as UX Metric** -- Treat page load time and interaction responsiveness as core UX metrics, not just engineering concerns. WHY GOOD: 53% of mobile users abandon at >3 seconds (Google); each additional second costs ~7% conversions. Core Web Vitals directly correlate with user satisfaction. SOURCE: Google Web Vitals; Akamai studies. EVIDENCE: A

18. **Behavioral Over Attitudinal Research** -- Weight what users DO (analytics, session recordings, usability observation) over what they SAY (surveys, interviews). WHY GOOD: Users rate products highly even while struggling with tasks; behavioral data reveals actual friction points that self-report misses. SOURCE: NNG Hawthorne Effect article; MeasuringU "9 Biases in Usability Testing." EVIDENCE: A

19. **Pre-Registered Experiments** -- Define hypothesis, success metric, sample size, and MDE before running A/B tests. WHY GOOD: Prevents peeking bias (false positive rate of 26% vs 5%); ensures tests have statistical power to detect meaningful effects. SOURCE: Netflix TechBlog; American Statistician review (2023). EVIDENCE: A

20. **Error-State-First Design** -- Design error states, empty states, and edge cases before the happy path. WHY GOOD: Users encounter errors constantly; thoughtful error handling with specific messages and recovery actions prevents abandonment and support tickets. SOURCE: NNG error message guidelines; Userpilot. EVIDENCE: C

21. **Context-Appropriate Device Strategy** -- Choose mobile-first, desktop-first, or adaptive based on actual user context analysis, not dogma. WHY GOOD: Analytics dashboards need desktop-first; food delivery needs mobile-first; news needs adaptive. Context-matching increases task completion. SOURCE: Emre AY "Mobile First Is Not a UX Strategy" (Medium); IxDF. EVIDENCE: C

22. **Rule of Three for Abstraction** -- Don't abstract UI components or design patterns until you have 3+ concrete use cases. WHY GOOD: Prevents premature optimization; ensures abstractions are genuinely useful; reduces maintenance burden of unused systems. SOURCE: Practical Design Systems; AmazingCTO. EVIDENCE: C

23. **Continuous Accessibility Testing** -- Test with screen readers, keyboard navigation, and color contrast tools in every sprint, not just before launch. WHY GOOD: Catches issues before they accumulate; far cheaper than remediation; keeps team accessibility-aware. SOURCE: WebAIM; WCAG 2.1; A11y Project. EVIDENCE: B

24. **Usability Heuristic Evaluation** -- Expert review against established heuristics before committing to user testing (saves testing budget for validation). WHY GOOD: Single evaluator finds 42% of major problems on average; 3-5 evaluators catch most heuristic violations cheaply. SOURCE: NNG "Usability Problems Found by Heuristic Evaluation." EVIDENCE: B

25. **Satisficing Over Perfectionism** -- Ship "good enough" and iterate, rather than polishing to perfection before release. WHY GOOD: The difference between good and perfect rarely justifies the time; competitors ship 3 features while you perfect 1; user feedback on real product > internal speculation. SOURCE: Toptal pragmatic pixel-perfect guide; Medium "Stop Being a Product Perfectionist." EVIDENCE: C

26. **Feature Auditing and Sunsetting** -- Regularly review feature usage data and remove or simplify unused features. WHY GOOD: Reduces cognitive load for users; decreases maintenance cost; makes remaining features more discoverable. INSTEAD of keeping everything "just in case." SOURCE: Amplitude product analytics best practices. EVIDENCE: C

27. **Structured Design Critique** -- Replace open-ended "what do you think?" feedback with structured critique (goals, principles, specific questions). WHY GOOD: Prevents design-by-committee; keeps feedback actionable; reduces HiPPO influence; focuses on whether design meets stated objectives. SOURCE: SVPG; Lara Hogan on feedback structures. EVIDENCE: C

28. **Minimum Viable Testing** -- Test assumptions with the cheapest possible method (paper prototypes, Wizard of Oz, fake door tests) before building. WHY GOOD: About 74% of fast-growing internet companies fail by scaling too fast; fake door tests validate demand with zero development cost. SOURCE: GV Design Sprint methodology; Eric Ries Lean Startup. EVIDENCE: B

29. **Semantic HTML Foundation** -- Build interfaces on semantic HTML elements before layering on JavaScript interactivity. WHY GOOD: Provides free accessibility, SEO, and progressive enhancement; forms work without JavaScript; screen readers understand content structure automatically. SOURCE: W3C HTML specification; WebAIM. EVIDENCE: B

30. **Cross-Functional Discovery Teams** -- Include engineering and design in customer discovery, not just product management. WHY GOOD: Engineers spot technical feasibility early; designers observe behaviors PMs miss; shared empathy reduces "throw it over the wall" handoffs. SOURCE: Teresa Torres; Marty Cagan "Empowered." EVIDENCE: B

31. **Baseline Measurement Before Redesign** -- Establish quantitative UX metrics (task completion rate, time-on-task, error rate, SUS score) before changing anything. WHY GOOD: Without a baseline, you cannot prove improvement; prevents expensive redesigns that accidentally make things worse. SOURCE: MeasuringU; System Usability Scale (Brooke 1996). EVIDENCE: B

32. **Cohort-Based Retention Analysis** -- Track user retention by signup cohort, not aggregate numbers, to understand the true health of the product. WHY GOOD: Aggregate retention masks problems; a growing user base can hide a leaky bucket; cohort analysis reveals whether recent changes actually improve stickiness. SOURCE: Amplitude; Userpilot metrics guide. EVIDENCE: B

33. **Transparent Data Practices** -- Clearly communicate what data you collect, why, and how users can control it. WHY GOOD: Builds trust; reduces consent fatigue with clear mechanisms; users who trust share more data, enabling better personalization. Legal compliance with GDPR, CCPA. SOURCE: Future Processing ethical design guide; Cambridge Core. EVIDENCE: B

34. **Visible Navigation for Primary Actions** -- Keep the top 4-5 navigation items visible rather than hidden behind hamburger menus. WHY GOOD: Visible navigation increases discoverability and engagement; NNG research confirms hamburger menus hurt UX metrics on both mobile and desktop. SOURCE: NNG hamburger menu research. EVIDENCE: B

35. **Keyboard-First Interactive Design** -- Ensure all interactive elements work with keyboard before adding mouse/touch enhancements. WHY GOOD: Serves power users, screen reader users, and motor-impaired users simultaneously; required by WCAG 2.1 SC 2.1.1; progressive enhancement principle. SOURCE: WCAG 2.1; WebAIM keyboard accessibility guide. EVIDENCE: A

36. **Reduced-Motion Respect** -- Check prefers-reduced-motion and provide alternatives for all animations. WHY GOOD: Prevents vestibular disorder triggers (affects ~35% of adults over 40); required by WCAG 2.3; shows respect for user preferences. SOURCE: WCAG 2.3; A11y Project; vestibular disorder prevalence data. EVIDENCE: A

37. **Weekly Customer Interviews** -- Talk to at least one customer per week, every week, as a product team habit. WHY GOOD: Prevents assumption drift; builds compounding understanding of user needs; keeps the Opportunity Solution Tree fresh with evidence. SOURCE: Teresa Torres "Continuous Discovery Habits." EVIDENCE: B

38. **Assumption Testing Before Building** -- Identify the riskiest assumptions in a solution and test them with the smallest possible experiment. WHY GOOD: Prevents building features based on untested assumptions; catches deal-breakers before code is written; reduces waste. SOURCE: Teresa Torres; GV Design Sprint. EVIDENCE: B

39. **Inline Form Validation** -- Validate form inputs as users type or on field blur, not only on submission. WHY GOOD: Reduces error recovery time; prevents frustrating re-fills; specific inline messages tell users exactly what to fix. SOURCE: Baymard Institute form usability research; NNG. EVIDENCE: B

40. **Progressive Onboarding Tied to Actions** -- Reveal product education at the moment the user needs it, triggered by their actual behavior. WHY GOOD: Information-in-context is retained better than front-loaded tutorials; reduces time-to-value; average SaaS activation rate is only 37.5% -- progressive onboarding lifts it. SOURCE: UserGuiding; Userpilot; Eleken onboarding best practices. EVIDENCE: B

41. **Diverse User Testing Panels** -- Recruit test participants across age, ability, tech literacy, and cultural backgrounds. WHY GOOD: Catches issues that a homogeneous panel misses; dark pattern research shows all demographics are susceptible, not just "vulnerable" groups. SOURCE: Cambridge Behavioural Public Policy journal; WebAIM. EVIDENCE: B

42. **Explicit Success Criteria for Features** -- Define what "success" means for each feature before building, with specific metrics and timeframes. WHY GOOD: Enables objective post-launch evaluation; prevents zombie features that nobody measures; creates accountability. SOURCE: Melissa Perri; ProductSchool OKR guides. EVIDENCE: C

43. **System Usability Scale (SUS) Tracking** -- Administer the standardized 10-question SUS questionnaire regularly to track perceived usability over time. WHY GOOD: Quick (2 minutes), validated across thousands of studies since 1996; provides a comparable benchmark score (average ~68). SOURCE: John Brooke (1996); MeasuringU SUS database. EVIDENCE: A

44. **Information Architecture Testing (Tree Testing)** -- Validate navigation structure through tree tests before designing the UI. WHY GOOD: Catches navigation problems before visual design work; cheap to run; reveals whether users find content where they expect it. SOURCE: NNG IA methods; Optimal Workshop. EVIDENCE: B

45. **Friction Auditing** -- Map every step in critical user flows and identify each friction point (clicks, decisions, waits, errors). WHY GOOD: Each removed friction point improves completion by 3-8%; makes optimization systematic rather than guesswork. SOURCE: Formbricks; FullSession friction audit methodology. EVIDENCE: B

46. **Design Tokens Over Hardcoded Values** -- Use design tokens (semantic variables for colors, spacing, typography) to enable systematic visual changes. WHY GOOD: Makes theme changes, dark mode, and brand updates trivial; ensures consistency without manual enforcement; scales with team size. SOURCE: Salesforce Lightning Design System; Style Dictionary. EVIDENCE: C

47. **Qualitative + Quantitative Research Pairing** -- Combine behavioral analytics (what) with user interviews (why) for complete understanding. WHY GOOD: Analytics show where problems are; interviews reveal why they happen; neither alone gives the full picture. SOURCE: NNG mixed methods research; UserInterviews.com field guide. EVIDENCE: B

48. **Contrast Ratio Compliance** -- Maintain minimum 4.5:1 contrast ratio for normal text, 3:1 for large text (WCAG AA). WHY GOOD: Benefits everyone in poor lighting conditions; required for WCAG compliance; prevents excluding ~300M people with color vision deficiency globally. SOURCE: WCAG 2.1 SC 1.4.3; WebAIM contrast checker. EVIDENCE: A

49. **User-Facing Language Testing** -- Test labels, button text, error messages, and onboarding copy with real users, not just the writing team. WHY GOOD: Internal jargon leaks into products; users interpret words differently than creators intend; small wording changes can shift conversion by 10-30%. SOURCE: NNG content usability studies; Baymard Institute. EVIDENCE: B

50. **Post-Launch Learning Review** -- After every feature launch, formally review metrics vs. predictions and capture learnings for future discovery. WHY GOOD: Creates institutional learning; prevents repeating mistakes; builds evidence base for future product decisions; closes the build-measure-learn loop. SOURCE: Eric Ries Lean Startup; Melissa Perri. EVIDENCE: C

---

## 10 COMMON LLM MISCONCEPTIONS

LLMs (including AI assistants) frequently give product design and UX advice that sounds authoritative but is misleading or oversimplified. These are the most dangerous misconceptions:

1. **"Always use mobile-first design"** -- LLMs repeat this as a universal rule. REALITY: Mobile-first is a strategy choice, not a law. Complex B2B tools, analytics dashboards, and content creation tools often need desktop-first design. The correct approach is context-first: analyze where users actually perform the task. SOURCE: Emre AY "Mobile First Is Not a UX Strategy, It's a Dogma."

2. **"5 users is always enough for usability testing"** -- LLMs cite Nielsen's number without caveats. REALITY: 5 users is sufficient for qualitative formative studies in iterative testing. For quantitative studies, you need ~40 participants. For diverse user bases with multiple segments, 5 users per segment. Random sets of 5 users found between 55-99% of problems -- the variability is enormous. SOURCE: NNG "How Many Test Users in a Usability Study?"; Springer "Benefits of increased sample sizes."

3. **"Design thinking is a proven methodology"** -- LLMs present design thinking as rigorous and evidence-based. REALITY: Academic research finds limited empirical evidence for its effectiveness; it lacks clear theoretical basis; critics argue it oversimplifies the messy, non-linear nature of actual design; it has been called "a victim of its own popularity." SOURCE: ScienceDirect "Critique of Design Thinking in Organizations"; ResearchGate "The craze for design thinking."

4. **"A/B test everything"** -- LLMs recommend A/B testing as the default decision-making tool. REALITY: Most organizations lack the traffic for statistical power; testing trivial changes wastes capacity; experimentation is a learning mechanism, not a validation mechanism. Many product decisions should be made with qualitative research, heuristic evaluation, or expert judgment. SOURCE: PostHog; AB Smartly "10 Mistakes Product Managers Make."

5. **"AARRR/Pirate metrics are the gold standard"** -- LLMs recommend this framework uncritically. REALITY: Samuel Hulick and others criticize that the framework keeps you distanced from customers' true needs; "Activation" and "Revenue" don't describe how customers experience the product; it encourages measuring vanity versions of each stage (downloads for Acquisition) rather than meaningful behaviors. SOURCE: Amplitude "Make Your Pirate Metrics Actionable"; Hulick critique.

6. **"The user is always right"** -- LLMs conflate "user-centered" with "do what users say." REALITY: Users often can't articulate what they need; there's a massive gap between what users say and what they do. Self-report data contradicts observed behavior. The JTBD framework exists precisely because taking requests literally produces wrong products. SOURCE: NNG Hawthorne Effect research; JTBD framework (Christensen).

7. **"Add AI/personalization to improve UX"** -- LLMs recommend AI features as a UX improvement. REALITY: Personalization requires sufficient behavioral data to work; recommendations based on thin data are worse than no recommendations. Companies building LLM-based products found they need to spend as much time on UX as on modeling. The biggest bottleneck for LLM startups IS UX. SOURCE: Innovation Endeavors "The biggest bottleneck for LLM startups is UX"; Designing for Analytics.

8. **"Accessibility can be solved with an overlay"** -- LLMs sometimes recommend overlay tools as a quick accessibility fix. REALITY: Only 2.4% of disabled users find overlays effective; they break assistive technology; companies using overlays face MORE lawsuits, not fewer; the FTC fined accessiBe $1M for false claims. Accessibility requires structural changes in code, not a JavaScript band-aid. SOURCE: WebAIM overlay survey; ACM SIGACCESS 2024 overlay study; FTC enforcement 2025.

9. **"Build a design system early"** -- LLMs recommend design systems for projects of all sizes. REALITY: For small teams (under ~5 designers) or pre-product-market-fit startups, a comprehensive design system is premature optimization. The system becomes a project itself; nobody uses it because the product is still changing rapidly. Start with a simple style guide and extract patterns after repetition. SOURCE: Practical Design Systems "Beware Premature Optimization."

10. **"More features = more value"** -- LLMs often suggest adding features when asked how to improve a product. REALITY: Feature bloat increases cognitive load, complicates onboarding, and raises maintenance costs exponentially. The best products often succeed by doing LESS, better. Feature auditing and sunsetting are as important as feature development. Hick's Law shows more options = slower decisions = more abandonment. SOURCE: Hick's Law; Amplitude; Melissa Perri "Escaping the Build Trap."

---

> **Evidence Key:** A = Systematic review, meta-analysis, or large-scale empirical study (e.g., WebAIM Million, peer-reviewed HCI research). B = Large study, seminal work, or well-established industry research (e.g., NNG studies across 2,048 users, Forrester ROI study, McKinsey surveys). C = Expert consensus, widely-accepted industry practice, or case-study-level evidence.
