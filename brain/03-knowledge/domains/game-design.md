# Game Design: Evidence-Based Practices

> Anti-Stupidity Shield for AI agents working on game design projects.
> Compiled from GDC talks, academic research, Schell's lenses, Hodent's UX psychology, Zileas' anti-fun patterns, and industry post-mortems.

---

## 50 BAD PRACTICES

### Dark Patterns & Monetization

1. **Loot Box Gambling** --- Randomized paid rewards with hidden odds that exploit variable-ratio reinforcement. WHY BAD: Mimics slot machine psychology; 1-in-10 young players borrow money they cannot repay for loot boxes (UK Gambling Commission survey). Belgium and Netherlands have declared them illegal gambling. INSTEAD: Transparent cosmetic shops with direct purchase. SOURCE: UK Gambling Commission 2020; FTC Epic Games fine ($245M). EVIDENCE: A

2. **FOMO Time-Limited Events** --- Creating artificial urgency through time-gated content and limited-time offers. WHY BAD: Exploits loss aversion bias; players feel punished for having a life outside the game, leading to resentment and burnout. INSTEAD: Rotating availability with eventual permanent access; seasonal content that returns. SOURCE: Dark Patterns in Games (ACM CHI 2022). EVIDENCE: A

3. **Artificial Scarcity** --- Restricting access to content to create false exclusivity (limited stock of digital goods). WHY BAD: Digital goods have zero marginal cost; artificial scarcity is inherently deceptive and erodes trust. INSTEAD: Earned exclusivity through skill or time investment, not wallet size. SOURCE: Predatory Monetisation categorisation study (Journal of Business Ethics, 2021). EVIDENCE: A

4. **Pay-to-Win Mechanics** --- Selling gameplay advantages that provide competitive edge. WHY BAD: Destroys competitive integrity; players increasingly avoid games labeled "money pits." Research on Korean mobile games shows it creates compulsive spending cycles. INSTEAD: Cosmetics-only monetization (Fortnite, Path of Exile model). SOURCE: Springer Nature Link (2021); GameAnalytics industry data. EVIDENCE: A

5. **Monetization-First Design** --- Designing game systems around monetization funnels rather than player experience. WHY BAD: The industry has measurably shifted from monetization-first to retention-first because extractive designs kill long-term revenue. INSTEAD: Player-first design where monetization enhances rather than exploits; focus on DAU and retention metrics. SOURCE: GameAnalytics monetization research. EVIDENCE: B

6. **Intentional Grind Walls** --- Making free gameplay so tedious that players pay to skip it. WHY BAD: Identified as a specific dark pattern by researchers; creates a deliberately degraded experience that punishes non-paying players. INSTEAD: Earn-or-buy parity where time investment is respected. SOURCE: GDC Vault "Dark Patterns: How Good UX Can Be Bad UX." EVIDENCE: A

7. **Predatory Advertising in Games** --- Deceptive ads, bait-and-switch rewards, forced ad viewing. WHY BAD: Study of 1,104 players identified 35 separate predatory techniques across 8 domains. Players perceive these as misleading, aggressive, or unfair. INSTEAD: Opt-in rewarded ads with genuine value exchange. SOURCE: Predatory Monetisation study (Journal of Business Ethics, 2021). EVIDENCE: A

8. **Monetizing Basic Quality of Life** --- Charging for inventory space, save slots, or UI improvements. WHY BAD: Players perceive this as holding basic functionality hostage; one of the 8 predatory domains identified in research. INSTEAD: Monetize expansion content, cosmetics, or convenience that doesn't feel mandatory. SOURCE: Journal of Business Ethics (2021). EVIDENCE: B

### Scope & Production

9. **Unchecked Scope Creep** --- Allowing project scope to expand without evaluation against resources and timeline. WHY BAD: Over 70% of indie games exceeding initial scope failed to meet critical deadlines (Game Developer Magazine survey). Scope creep is the #1 reason games never ship. INSTEAD: MVP-first development; feature backlog for post-launch; "cut early, cut often." SOURCE: Game Developer Magazine; Codecks scope management guide. EVIDENCE: A

10. **Feature Creep as Progress** --- Confusing adding features with making the game better. WHY BAD: Complexity increases exponentially with each new system; a crafting system requires UI, balance, integration with existing loops. INSTEAD: Subtract before adding; ask "does this serve the core loop?" SOURCE: Wayline (Feature Creep: The Silent Killer). EVIDENCE: B

11. **"More Content = Better Game" Fallacy** --- Equating quantity of content with quality of experience. WHY BAD: Creates content bloat that overwhelms and frustrates players. RPGs adding artificial depth through volume tax the player rather than providing genuine strategic depth. INSTEAD: Curated, intentional content design; respect player time. SOURCE: Game Design Snacks Wiki; SuperJump "The Overdesign Trap." EVIDENCE: B

12. **Second System Effect (Sequel Bloat)** --- Overloading sequels with every deferred feature from the first game. WHY BAD: Described by Frederick Brooks in The Mythical Man-Month (1975). Accumulated ideas added en masse create bloated, unfocused sequels. INSTEAD: Maintain the elegant core of the original; add depth, not breadth. SOURCE: Brooks (1975); Gamedeveloper.com "The Overdesign Trap." EVIDENCE: B

13. **GDD as Waterfall Bible** --- Treating the Game Design Document as a fixed specification rather than a living document. WHY BAD: Waterfall means entire product handed down department-by-department; cannot adapt to playtest findings. Game design is inherently iterative and unpredictable. INSTEAD: Hybrid approach: Waterfall for concept/pre-production, Agile sprints for development. GDD as living reference, not gospel. SOURCE: Game Pill; Kolibri Games workflow comparison. EVIDENCE: B

14. **Crunch Culture as "Passion"** --- Extended mandatory overtime reframed as developer dedication. WHY BAD: "Crunch does not work. More hours does not mean more productivity." Productivity declines sharply after 4 days of extended hours. Crunched games show more bugs and lower Metacritic scores. Leads to burnout, depression, anxiety, talent hemorrhage. INSTEAD: Sustainable production schedules; scope management; cultural factors (focus, team cohesion, clear direction) matter more than hours. SOURCE: Take This "Crunch Hurts" report; Gamedeveloper.com; Journal of Games Criticism (2025). EVIDENCE: A

15. **No Production Pipeline** --- Starting development without defined milestones, pipelines, or Definition of Done. WHY BAD: Without structure, every decision becomes ad-hoc; integration nightmares compound. INSTEAD: Pre-production > vertical slice > alpha > beta > gold pipeline with clear gates. SOURCE: Industry standard (GDC production talks). EVIDENCE: B

### Difficulty & Challenge

16. **Artificial Difficulty (Stat Inflation)** --- Increasing difficulty by inflating enemy HP/damage rather than designing new challenges. WHY BAD: Negates strategic approaches; devolves into tedious grind. Players feel the AI is "cheating." INSTEAD: Design challenges requiring new skills, strategies, or mechanics mastery. SOURCE: Wayline "Illusion of Challenge"; Gamedesigning.org artificial difficulty analysis. EVIDENCE: B

17. **Untelegraphed One-Hit Kills** --- Instant death from unseen sources without visual/audio cues. WHY BAD: Punishes without teaching; removes opportunity to learn or adapt. Violates the flow channel. INSTEAD: All lethal attacks must have readable tells; death should teach the player something. SOURCE: TV Tropes "Fake Difficulty"; Game design community consensus. EVIDENCE: B

18. **Difficulty = Fun Assumption** --- Believing that making a game harder automatically makes it more engaging. WHY BAD: Difficulty without mastery opportunity creates frustration, not engagement. Csikszentmihalyi's flow theory shows optimal engagement occurs when challenge matches skill. INSTEAD: Dynamic difficulty or multiple difficulty options that maintain the flow channel. SOURCE: Csikszentmihalyi (1990); Jenova Chen MFA thesis "Flow in Games." EVIDENCE: A

19. **No Difficulty Options** --- Shipping with a single fixed difficulty. WHY BAD: One size fits none; alienates both casual players and challenge-seekers. Disabled players (31% of US gamers) may be locked out entirely. INSTEAD: Multiple difficulty settings; assist modes; accessibility options that don't gate content. SOURCE: Game Accessibility Guidelines; Microsoft Xbox Accessibility Guidelines. EVIDENCE: B

20. **Rubber-Band AI Without Transparency** --- Hidden dynamic difficulty that feels like cheating rather than helping. WHY BAD: When players detect invisible assistance, they feel patronized; when they detect invisible penalties for doing well, they feel punished. INSTEAD: If using dynamic difficulty, make it transparent or player-controlled (e.g., Resident Evil 4's adaptive difficulty). SOURCE: Wikipedia "Dynamic Game Difficulty Balancing." EVIDENCE: C

### Tutorial & Onboarding

21. **Tutorial Hell (Information Dump)** --- Front-loading all mechanics explanation before gameplay begins. WHY BAD: Players get confused and frustrated when taught all concepts at once. Violates cognitive load principles (Hodent). Working memory is limited. INSTEAD: Progressive disclosure; teach one mechanic at a time through gameplay; introductory levels that feel like play, not school. SOURCE: Celia Hodent "The Gamer's Brain"; Inworld AI tutorial design guide. EVIDENCE: A

22. **Unskippable Tutorials** --- Forcing experienced players through mandatory tutorials on every playthrough. WHY BAD: Punishes replay; disrespects player time and existing knowledge. INSTEAD: Skippable tutorials; contextual help that appears only when player demonstrates need. SOURCE: Gamedeveloper.com onboarding best practices. EVIDENCE: B

23. **Text-Wall Instructions** --- Explaining mechanics through paragraphs of text rather than interactive demonstration. WHY BAD: Players don't read; cognitive load of processing text while learning controls is excessive. INSTEAD: "Show, don't tell." Let players discover mechanics through guided interactive scenarios (Nintendo's World 1-1 philosophy). SOURCE: Appcues "3 Lessons from Classic Nintendo Games." EVIDENCE: B

24. **Tooltip Overload** --- Covering the screen with simultaneous tooltips and prompts. WHY BAD: Competes for attention with gameplay; creates decision paralysis. Cognitive workload should be dedicated to core experience, not UI (Hodent). INSTEAD: Contextual, just-in-time tooltips that appear when relevant and disappear when acknowledged. SOURCE: Celia Hodent "The Gamer's Brain." EVIDENCE: B

25. **No Testing with New Players** --- Only playtesting tutorials with people who already know the game. WHY BAD: Developers and QA are blind to their own knowledge curse. Tutorial effectiveness can only be measured with fresh eyes. INSTEAD: Regular first-time-player playtests; observe silently; note where confusion occurs. SOURCE: Gamedeveloper.com "Design 101: Playtesting." EVIDENCE: B

### UX & Interface

26. **HUD Overload** --- Displaying all possible information simultaneously on screen. WHY BAD: Obstructs gameplay view; overwhelms attention; particularly problematic for players with attention difficulties. INSTEAD: Prioritize essential information; progressive disclosure; allow HUD customization (size, position, elements shown). SOURCE: Accessible Game Design HUD Guidelines; Celia Hodent. EVIDENCE: B

27. **Ignoring Accessibility** --- Shipping without colorblind modes, remappable controls, subtitle options, or text scaling. WHY BAD: 31% of US gamers have a disability. The Last of Us Part II shipped with 60+ accessibility settings and was universally praised. Excluding disabled players is both ethically wrong and commercially foolish. INSTEAD: Follow Game Accessibility Guidelines (gameaccessibilityguidelines.com); Microsoft Xbox Accessibility Guidelines; test with disabled players. SOURCE: Game Accessibility Guidelines; Xbox Accessibility Guidelines; AFB. EVIDENCE: A

28. **Fixed Control Schemes** --- No button remapping or alternative input methods. WHY BAD: Players with motor disabilities may be completely locked out. All key actions should be achievable with digital controls; complex input should be supplementary. INSTEAD: Full remapping; alternative input support; sensitivity sliders. SOURCE: Game Accessibility Guidelines (full list). EVIDENCE: A

29. **Tiny Unreadable Text** --- Small font sizes, especially on console/TV setups. WHY BAD: One of the most universal accessibility complaints. Text readability is the single most impactful accessibility feature. INSTEAD: Minimum 28px for body text on console; scalable text options; high-contrast backgrounds. SOURCE: Game Accessibility Guidelines; Accessible Game Design. EVIDENCE: B

30. **No Subtitle/Caption Customization** --- Fixed subtitles without size, color, or background options. WHY BAD: Deaf/HoH players need customizable captions. All important audio information should be replicated in text/visuals. INSTEAD: Adjustable subtitle size, background opacity, speaker identification, and sound-effect captions. SOURCE: Game Accessibility Guidelines. EVIDENCE: B

### Design Philosophy Errors

31. **"Realistic = Fun" Misconception** --- Prioritizing simulation fidelity over gameplay enjoyment. WHY BAD: Sid Meier cut scurvy from Pirates! because he "couldn't make it fun." Realism that doesn't serve gameplay is ballast. Nintendo's stylized Mario games outsell most realistic competitors. INSTEAD: Use realism selectively to serve immersion and tone; sacrifice realism whenever it conflicts with fun. SOURCE: Gamedeveloper.com "Realism vs. Fun"; SuperJump "Risks of Realism." EVIDENCE: B

32. **Copy-Paste Mechanics Without Context** --- Borrowing mechanics from successful games without understanding why they work in context. WHY BAD: A mechanic works within a specific design ecosystem. Copying without understanding the system it supports creates derivative, incoherent experiences. INSTEAD: Study why a mechanic works (what problem it solves in that game), then design your own solution to your own problem. SOURCE: Geoff Engelstein "Copy Paste" (GameTek); BGG design theory discussions. EVIDENCE: B

33. **"Just Add Multiplayer"** --- Bolting multiplayer onto a single-player game as a feature checkbox. WHY BAD: Multiplayer requires fundamentally different architecture, balance, and pacing from the start. Dead Space 2/3's forced multiplayer was universally panned. Balancing for both solo and group play simultaneously creates poor experiences for both. INSTEAD: Design multiplayer from the ground up or don't include it. Separate modes with independent balance. SOURCE: Gamedeveloper.com "Designing for Multiplayer"; Medium analysis of Forced (game). EVIDENCE: B

34. **Ludonarrative Dissonance (Unintentional)** --- Gameplay mechanics contradicting the narrative the game tells. WHY BAD: Coined by Clint Hocking (2007) re: BioShock. Uncharted's Nathan Drake is a "lovable rogue" who murders thousands. Unintentional dissonance breaks immersion and narrative credibility. INSTEAD: Align mechanics with narrative themes; if the story says "violence is wrong," gameplay shouldn't reward mass killing. Or use dissonance intentionally as commentary (Spec Ops: The Line). SOURCE: Hocking (2007); Spec Ops GDC talk by Walt Williams. EVIDENCE: B

35. **Procedural Generation as Content Substitute** --- Using procgen to fill a game with volume without design intent. WHY BAD: Without authorial vision, procgen creates repetitive, indistinguishable spaces. Players recognize the pattern and disengage. "Curated experiences with definite ends will almost always be better than infinitely replayable content without repetition." INSTEAD: Use procgen as a tool within designed constraints; hand-craft key moments; use procgen for variety within intentional frameworks (Hades, Spelunky). SOURCE: SuperJump "By Design: Procedural Generation"; Game Wisdom "3 Failings." EVIDENCE: B

36. **Balance by Spreadsheet Only** --- Relying exclusively on mathematical models for game balance. WHY BAD: "Spreadsheet math alone cannot predict how real people will play." Players find exploits and strategies designers never anticipated. Sid Meier's Civilization succeeded through gut feeling + iteration, not spreadsheets. INSTEAD: Spreadsheets for foundation, intuition for direction, playtesting for truth. The designer's "nagging feeling" is valuable data. SOURCE: Wayline "Beyond Spreadsheets"; Gamedeveloper.com data-driven balancing. EVIDENCE: B

37. **Playtesting Only with Gamers** --- Testing exclusively with experienced gamers who are not representative of the target audience. WHY BAD: Casual players pinpoint difficulty curve issues that hardcore testers overlook. Valve's Portal final level: hardcore FPS testers demanded a boss fight, but the broader audience needed a cerebral puzzle. INSTEAD: Diverse playtester recruitment matching target demographics; separate stress tests (hardcore) from usability tests (casual). SOURCE: Gamedeveloper.com "Design 101: Playtesting"; Antidote.gg QA vs Playtesting. EVIDENCE: B

38. **Burden of Knowledge** --- Complex mechanics that only create gameplay if the player already knows what is happening. WHY BAD: Zileas (Riot Games VP of Design) identified this: DOTA's Rupture DOT triggers on movement, but nothing communicates this in-game. New players experience extreme frustration with no learning path. INSTEAD: Communicate all mechanics clearly through visual/audio language; counterplay must be discoverable in-game. SOURCE: Zileas' List of Game Design Anti-Patterns (Riot Games, 2010). EVIDENCE: B

39. **Power Without Gameplay** --- Giving players a big benefit in a way they don't notice or find satisfying. WHY BAD: Invisible buffs feel unrewarding. If a power-up has no perceptible effect, it doesn't register as fun. Anti-pattern identified by Zileas at Riot Games. INSTEAD: Make every power-up feel impactful through clear feedback (visual, audio, haptic). SOURCE: Zileas' Anti-Fun Patterns. EVIDENCE: B

40. **Anti-Fun Exceeding Fun** --- Mechanics where the negative experience for opponents exceeds the positive experience for the user. WHY BAD: Hard CC, stuns, and denial mechanics that feel terrible to receive but only moderately satisfying to use create net-negative experiences. INSTEAD: Ensure every mechanic's fun-for-user outweighs the anti-fun-for-opponent. If not, redesign. SOURCE: Zileas' Anti-Fun Patterns (Riot Games). EVIDENCE: B

### Feedback & Polish

41. **No Game Juice** --- Shipping a mechanically sound game with no visual/audio feedback. WHY BAD: "Juice" is the tactile connection between input and response that keeps players engaged. Without it, correct actions feel empty and unrewarding. INSTEAD: Layer visual effects (screen shake, particles, squash-stretch), audio cues, and haptic feedback on every meaningful interaction. SOURCE: GDC "Juice It or Lose It" talk; Blood Moon Interactive. EVIDENCE: B

42. **Over-Juicing** --- Excessive screen shake, particles, and effects that obscure gameplay. WHY BAD: When everything is emphasized, nothing is. Over-juicing creates visual noise that degrades readability and can cause motion sickness. INSTEAD: Juice should complement core mechanics, not substitute for them. Offer "reduce motion" settings. SOURCE: Wayline "The Perils of Over-Juicing." EVIDENCE: B

43. **Ignoring Audio Design** --- Treating sound as an afterthought. WHY BAD: Audio is the most cost-effective way to improve game feel. Sound reinforces the presence and credibility of every interaction. INSTEAD: Audio-first feedback design; ensure every player action has satisfying sound feedback. SOURCE: GameAnalytics "Squeezing More Juice." EVIDENCE: B

44. **No Negative Feedback Loops** --- Rich-get-richer dynamics without catch-up mechanics. WHY BAD: Creates snowball effects where losing players have no path to recovery, leading to abandonment. INSTEAD: Balancing feedback loops (Mario Kart's blue shell principle); ensure losing players remain engaged. SOURCE: Machinations.io feedback loop analysis. EVIDENCE: B

45. **Ignoring Player Telemetry** --- Not collecting or acting on quantitative gameplay data post-launch. WHY BAD: Without data, you're guessing where players quit, get stuck, or disengage. INSTEAD: Implement analytics for key metrics (retention curves, level completion rates, difficulty spikes); combine with qualitative feedback. SOURCE: Gamedeveloper.com "Using Game Session Data to Balance." EVIDENCE: B

### Miscellaneous Anti-Patterns

46. **Punishing Exploration** --- Penalizing players for curiosity (traps without tells, dead ends that waste time, point-of-no-return without warning). WHY BAD: Exploration is intrinsically motivating; punishing it teaches players to follow the critical path robotically. INSTEAD: Reward curiosity consistently; signal danger before commitment. SOURCE: Schell "The Art of Game Design" (Lens of Curiosity). EVIDENCE: C

47. **Inconsistent Rules** --- Game systems that don't follow their own established logic. WHY BAD: Players build mental models; broken rules destroy trust and create "that's BS" moments. INSTEAD: Establish rules clearly and follow them; if an exception exists, telegraph it. SOURCE: Schell (Lens of Rules); general design consensus. EVIDENCE: B

48. **Cutscene-Gameplay Segregation** --- Important narrative delivered only in non-interactive cutscenes while gameplay is narratively empty. WHY BAD: Creates two disconnected experiences; players skip cutscenes and miss story, or sit through them wanting to play. INSTEAD: Environmental storytelling; narrative integrated into gameplay (Half-Life 2, Dark Souls approach). SOURCE: Hocking (2007); GDC narrative design talks. EVIDENCE: B

49. **Save System Hostage-Taking** --- Restrictive save systems that force long replays on failure (no checkpoints, save-point-only in long levels). WHY BAD: Disrespects player time; creates frustration rather than challenge. Especially hostile to players with limited play sessions. INSTEAD: Generous autosave with manual save option; checkpoints before difficult sections. SOURCE: Game Accessibility Guidelines. EVIDENCE: B

50. **Shipping Without Polish Pass** --- Releasing a feature-complete but unpolished game. WHY BAD: Polish is the difference between "good" and "great." Unpolished games feel janky and unfinished regardless of content quality. First impressions on launch determine commercial success. INSTEAD: Schedule dedicated polish sprints; cut features before cutting polish time. SOURCE: Industry post-mortems (GDC Vault). EVIDENCE: C

---

## 50 BEST PRACTICES

### Core Design Principles

1. **Flow Channel Design** --- Balance challenge to player skill level, keeping players in Csikszentmihalyi's flow state between boredom and anxiety. WHY GOOD: Decades of psychology research confirm flow produces optimal engagement, focus, and satisfaction. Seven elements: clear goals, immediate feedback, adaptive challenge, sense of control, concentration, rewards, and sensory immersion. SOURCE: Csikszentmihalyi (1990); Jenova Chen "Flow in Games" (2006). EVIDENCE: A

2. **The Core Loop First** --- Design and validate the fundamental gameplay loop before adding any secondary systems. WHY GOOD: If the core 30-second loop isn't fun, no amount of content, story, or polish will save the game. Stardew Valley succeeded by nailing the Harvest Moon core loop first. SOURCE: Industry consensus; Stardew Valley post-mortem. EVIDENCE: A

3. **Schell's Lens of Essential Experience** --- Ask "What experience do I want the player to have?" and remove everything that doesn't serve it. WHY GOOD: Forces focus and prevents feature bloat. Every system must justify its existence against the essential experience. SOURCE: Jesse Schell "The Art of Game Design" (100+ lenses). EVIDENCE: B

4. **Subtractive Design** --- Remove mechanics until only the essential remain; a game is complete not when nothing can be added, but when nothing can be taken away. WHY GOOD: Prevents overdesign trap; creates elegance. Portal succeeded with one mechanic explored deeply. SOURCE: Schell; Antoine de Saint-Exupery principle applied to games. EVIDENCE: B

5. **Iterative Prototyping (The Rule of the Loop)** --- Build rough prototypes and test them repeatedly. "The more times you test and improve your design, the better your game will be." WHY GOOD: Each iteration reveals truths that theory cannot predict. Rapid prototyping catches design problems before they become expensive. SOURCE: Jesse Schell "The Art of Game Design." EVIDENCE: A

6. **Player Agency and Meaningful Choice** --- Give players decisions that have visible consequences and multiple valid strategies. WHY GOOD: Sid Meier: "A game is a series of interesting decisions." Agency is the fundamental differentiator of games from passive media. SOURCE: Sid Meier (GDC); Schell (Lens of Meaningful Choices). EVIDENCE: A

7. **Elegant Design (Simple Rules, Complex Outcomes)** --- Design systems with few rules that interact to create emergent complexity. WHY GOOD: Chess has 6 piece types but infinite strategic depth. Emergent gameplay gives players ownership of their experience. INSTEAD of designing content, design possibility spaces. SOURCE: Schell (Lens of Elegance); Salen & Zimmerman "Rules of Play." EVIDENCE: B

8. **Respect Player Time** --- Value the player's time as a finite, non-renewable resource. WHY GOOD: Games competing for attention in 2026 must earn every minute. Respecting time builds trust and goodwill; disrespecting it is the #1 reason players quit. SOURCE: Industry consensus; retention data across platforms. EVIDENCE: B

9. **Clear Communication of State** --- The player should always understand what is happening, why, and what their options are. WHY GOOD: Reduces frustration from confusion; ensures deaths/failures feel fair and educational. Core UX principle from Hodent's cognitive framework. SOURCE: Celia Hodent "The Gamer's Brain." EVIDENCE: A

10. **Failing Forward** --- When players fail, they should learn something and be motivated to try again. WHY GOOD: Failure is the primary teaching tool in games. If failure teaches nothing, it's just punishment. Dark Souls succeeds because every death is a lesson. SOURCE: Schell (Lens of Failure); general game design theory. EVIDENCE: B

### Player Psychology & UX

11. **Cognitive Load Management** --- Dedicate player's mental workload to the core experience, not to figuring out menus or icons. WHY GOOD: Hodent's central principle: the brain has limited processing capacity. Every confusing UI element steals attention from gameplay. SOURCE: Celia Hodent "The Gamer's Brain" (2017). EVIDENCE: A

12. **Progressive Disclosure** --- Introduce mechanics gradually, one at a time, through gameplay rather than text. WHY GOOD: Matches how human learning works; prevents cognitive overload. Nintendo's World 1-1 is the gold standard: each screen teaches one concept. SOURCE: Hodent; Inworld AI tutorial design research. EVIDENCE: A

13. **Show Don't Tell** --- Teach through interactive demonstration rather than instruction text. WHY GOOD: Players learn by doing, not by reading. Interactive tutorials produce faster mastery and higher retention. SOURCE: Appcues Nintendo analysis; Gamedeveloper.com onboarding. EVIDENCE: B

14. **Immediate, Clear Feedback** --- Every player action should produce perceptible, informative feedback within frames. WHY GOOD: Feedback is one of Csikszentmihalyi's flow prerequisites. Delayed or ambiguous feedback breaks the action-response loop that sustains engagement. SOURCE: Flow theory; Hodent; "Juice it or Lose it" GDC talk. EVIDENCE: A

15. **Reward Curiosity** --- Consistently reward players who explore and experiment. WHY GOOD: Intrinsic motivation (curiosity, mastery) produces deeper engagement than extrinsic rewards alone. Players who feel rewarded for exploration play longer and enjoy more. SOURCE: Schell (Lens of Curiosity); Self-Determination Theory (Deci & Ryan). EVIDENCE: B

16. **Positive-Sum Multiplayer Design** --- Design multiplayer interactions where all participants can have fun, not just the winner. WHY GOOD: Zero-sum interactions drive away losing players; positive-sum keeps the player base healthy. Mario Kart's catch-up mechanics keep races exciting for all. SOURCE: Zileas anti-fun analysis; game design theory. EVIDENCE: B

17. **Readable Game State** --- Ensure players can quickly parse what is happening on screen through visual hierarchy and clarity. WHY GOOD: Reduces cognitive load; prevents "what just killed me?" frustration. Critical for competitive games and accessibility. SOURCE: Hodent; Game Accessibility Guidelines (HUD). EVIDENCE: B

18. **Intrinsic Motivation Design** --- Design systems that tap into autonomy, competence, and relatedness (Self-Determination Theory). WHY GOOD: Intrinsic motivation produces sustained engagement without manipulation. Players who play because they want to, not because they're tricked into it, become loyal fans. SOURCE: Deci & Ryan SDT; applied to games by multiple researchers. EVIDENCE: A

19. **Anticipation and Payoff Rhythms** --- Structure experiences with buildup, climax, and resolution cycles. WHY GOOD: Matches narrative and emotional pacing that humans find satisfying. Every dungeon needs a boss; every tension needs a release. SOURCE: Schell (Lens of Moments); narrative design theory. EVIDENCE: C

20. **Emotional Contrast** --- Vary emotional tone to prevent fatigue and heighten impact. WHY GOOD: Constant high-intensity creates numbness. Quiet moments make action moments more impactful (The Last of Us model). SOURCE: Schell (Lens of the Elemental Tetrad); pacing theory. EVIDENCE: C

### Production & Process

21. **MVP-First Development** --- Build the Minimum Viable Product (core features that make the game playable and fun) before expanding. WHY GOOD: Allows early validation; real-world feedback guides feature additions. Stardew Valley launched polished and focused, then expanded. SOURCE: Wayline scope management; Codecks best practices. EVIDENCE: A

22. **Early and Frequent Playtesting** --- Test with real players from the earliest possible prototype. WHY GOOD: One playtest reveals more than weeks of design discussion. "Testing too late is a trap -- early testing catches more problems." SOURCE: Gamedeveloper.com "Best Practices: Five Tips for Better Playtesting." EVIDENCE: A

23. **Diverse Playtester Recruitment** --- Include casual players, hardcore gamers, accessibility testers, and non-genre-fans. WHY GOOD: Different audiences reveal different problems. Casual players find UX issues that experts overlook; hardcore players find balance exploits. Portal's final level was shaped by testing with non-FPS players. SOURCE: Gamedeveloper.com; Valve Portal post-mortem. EVIDENCE: B

24. **Kill Your Darlings** --- Be willing to cut beloved features that don't serve the game. WHY GOOD: Attachment to features is the root of scope creep. The best games are defined as much by what they excluded as what they included. SOURCE: Industry consensus; multiple GDC post-mortems. EVIDENCE: B

25. **Sustainable Development Pace** --- Maintain consistent work hours; avoid crunch. WHY GOOD: Cultural factors (focus, cohesion, clear direction) matter more than hours. Sustained crunch produces diminishing returns, more bugs, lower quality, and talent loss. SOURCE: Take This "Crunch Hurts"; Gamedeveloper.com crunch analysis. EVIDENCE: A

26. **Vertical Slice Validation** --- Build one complete, polished slice of the game before full production. WHY GOOD: Validates the tech pipeline, art style, core gameplay, and production estimates simultaneously. Reveals integration problems early. SOURCE: Industry standard production methodology. EVIDENCE: B

27. **Definition of Done** --- Establish clear, shared criteria for when a feature is "done" before starting it. WHY GOOD: Prevents eternal iteration on individual features; creates production predictability. SOURCE: Agile methodology applied to games. EVIDENCE: B

28. **Feature Backlog Discipline** --- Maintain a prioritized list of ideas for post-launch; resist adding them during development. WHY GOOD: Captures creativity without derailing the current project. Post-launch content keeps the game alive. SOURCE: Wayline; Codecks scope management. EVIDENCE: B

29. **Hybrid Waterfall-Agile Pipeline** --- Use Waterfall for concept/pre-production (solid foundation), then Agile sprints for development (flexibility). WHY GOOD: Combines predictable planning with adaptive iteration. Best-fit for game development's unique challenges. SOURCE: Game Pill methodology comparison; industry practice. EVIDENCE: B

30. **Data + Intuition + Playtesting Trinity** --- Balance quantitative analytics, designer instinct, and qualitative playtesting for all design decisions. WHY GOOD: Data provides the foundation, intuition guides direction, playtesting reveals truth. No single source is sufficient alone. A designer's "nagging feeling" is valuable information. SOURCE: Wayline "Beyond Spreadsheets"; Gamedeveloper.com balance guides. EVIDENCE: B

### Accessibility & Inclusion

31. **Accessibility from Day One** --- Build accessibility into the design from the start, not as a post-launch patch. WHY GOOD: Retrofitting accessibility is 10x more expensive than designing it in. 31% of US gamers have a disability -- this is a massive audience. The Last of Us Part II's 60+ accessibility settings were universally praised and drove sales. SOURCE: Game Accessibility Guidelines; Xbox Accessibility Guidelines. EVIDENCE: A

32. **Remappable Controls** --- Allow full button remapping on all platforms. WHY GOOD: The single most impactful accessibility feature for motor-impaired players. Low implementation cost, massive inclusion benefit. SOURCE: Game Accessibility Guidelines (full list). EVIDENCE: A

33. **Scalable Text and UI** --- Allow players to adjust text size, HUD scale, and contrast. WHY GOOD: Addresses the most universal accessibility complaint. Benefits all players on all screen sizes, not just disabled players. SOURCE: Game Accessibility Guidelines; Accessible Game Design. EVIDENCE: A

34. **Colorblind Mode** --- Provide multiple colorblind schemes (protanopia, deuteranopia, tritanopia). WHY GOOD: ~8% of males have some color vision deficiency. Providing multiple schemes rather than a single filter ensures coverage. SOURCE: Game Accessibility Guidelines. EVIDENCE: A

35. **Subtitle and Caption System** --- Customizable subtitles with size, background, color, and speaker identification options. WHY GOOD: Benefits deaf/HoH players and anyone playing without audio (commuters, parents). All audio-conveyed information should have visual equivalents. SOURCE: Game Accessibility Guidelines. EVIDENCE: A

### Polish & Feel

36. **Game Juice (Layered Feedback)** --- Combine visual effects, audio cues, and haptic feedback on every meaningful player action. WHY GOOD: Creates the satisfying "game feel" that keeps players engaged. Each feedback layer reinforces the others. Audio alone is the cheapest high-impact improvement. SOURCE: GDC "Juice It or Lose It"; Blood Moon Interactive; GameAnalytics. EVIDENCE: B

37. **Audio-First Design** --- Treat sound design as a first-class citizen alongside visuals and mechanics. WHY GOOD: Audio feedback is processed faster than visual; reinforces presence and credibility of every interaction. Often the most cost-effective improvement. SOURCE: GameAnalytics "Squeezing More Juice." EVIDENCE: B

38. **Screen Shake and Camera Feel** --- Use controlled camera movement to communicate impact, with "reduce motion" option. WHY GOOD: Screen shake is the single most effective juice technique for conveying weight and impact. But must include motion reduction for vestibular-sensitive players. SOURCE: "Juice It or Lose It"; Game Accessibility Guidelines. EVIDENCE: B

39. **Polish Sprints** --- Schedule dedicated development time for polish before release. WHY GOOD: Polish is the difference between "playable" and "enjoyable." First impressions at launch determine commercial success. Cutting features to protect polish time is always the right trade. SOURCE: GDC post-mortems; industry best practices. EVIDENCE: B

40. **Consistent Visual Language** --- Use consistent color coding, iconography, and UI patterns throughout the game. WHY GOOD: Reduces cognitive load by leveraging pattern recognition. Players learn the visual language once and apply it everywhere. SOURCE: Hodent; Game UX best practices. EVIDENCE: B

### Monetization & Ethics

41. **Cosmetics-Only Monetization** --- Sell visual customization that doesn't affect gameplay balance. WHY GOOD: Proven model (Fortnite earned billions). Preserves competitive integrity while generating revenue. Players feel purchases are optional, not mandatory. SOURCE: Industry data; GameAnalytics monetization research. EVIDENCE: A

42. **Transparent Pricing** --- Show exactly what the player gets before purchase; no obfuscated premium currencies. WHY GOOD: Builds trust; reduces refund rates and negative reviews. Regulatory trend is moving toward mandatory transparency. SOURCE: FTC actions; ethical game design research. EVIDENCE: B

43. **Respect for Non-Paying Players** --- Ensure the full core experience is available without payment in F2P games. WHY GOOD: Non-paying players are the content for paying players in multiplayer; they drive word-of-mouth; they may convert later. Mistreating them poisons the ecosystem. SOURCE: GameAnalytics retention research. EVIDENCE: B

44. **Ethical Engagement Design** --- Use opt-in engagement features; avoid exploiting psychological vulnerabilities. WHY GOOD: Regulatory scrutiny is increasing (FTC, EU, Belgium/Netherlands laws). Ethical design builds long-term brand trust. SOURCE: Celia Hodent "Ethics in the Videogame Industry"; ACM CHI 2022. EVIDENCE: A

45. **Value-First Live Service** --- In live-service games, every update should add genuine value, not just new monetization. WHY GOOD: Player trust erodes when updates are perceived as cash grabs. Games with generous live-service models (Warframe, Deep Rock Galactic) build fanatical loyalty. SOURCE: Industry examples; community sentiment analysis. EVIDENCE: B

### Advanced Design

46. **Procgen Within Authored Constraints** --- Use procedural generation to create variety within intentionally designed frameworks. WHY GOOD: Combines authorial vision with replayability. Hades and Spelunky use procgen to rearrange hand-designed elements, ensuring quality and variety coexist. SOURCE: SuperJump "By Design: Procedural Generation"; Gamedeveloper.com procgen guide. EVIDENCE: B

47. **Negative Feedback Loops (Catch-Up Mechanics)** --- Implement systems that help losing players stay competitive. WHY GOOD: Prevents snowball effects that cause player abandonment. Keeps games exciting until the end. Mario Kart's item distribution is the classic example. SOURCE: Machinations.io; game balance theory. EVIDENCE: B

48. **Environmental Storytelling** --- Communicate narrative through the game world itself rather than exposition. WHY GOOD: Respects player agency; rewards observation and curiosity. Dark Souls' item descriptions and environmental details created one of gaming's most discussed narratives with almost zero cutscenes. SOURCE: GDC narrative design talks; industry analysis. EVIDENCE: B

49. **Modular Design for Future Expansion** --- Architect systems to be extensible without refactoring core code. WHY GOOD: Reduces cost of DLC and updates; prevents "spaghetti code" that makes changes expensive. Feature backlog items become feasible post-launch additions. SOURCE: Software engineering applied to games; GDC production talks. EVIDENCE: B

50. **Community-Informed Iteration** --- Use player feedback, telemetry, and community engagement to guide post-launch development. WHY GOOD: Players are the ultimate playtesters at scale. Games that visibly respond to community feedback (No Man's Sky, Final Fantasy XIV) can recover from poor launches and build lasting loyalty. SOURCE: No Man's Sky post-mortem; FFXIV A Realm Reborn case study. EVIDENCE: A

---

## 10 COMMON LLM MISCONCEPTIONS ABOUT GAME DESIGN

1. **"More features = better game"** --- LLMs tend to suggest adding systems (crafting, skill trees, housing) to any game concept without evaluating whether they serve the core loop. In reality, subtractive design produces more elegant games. Portal has one mechanic; it is a masterpiece.

2. **"Realistic graphics are always better"** --- LLMs default to recommending high-fidelity graphics. In practice, art style coherence matters more than polygon count. Stardew Valley, Undertale, and Celeste prove stylized art can be commercially superior and more memorable.

3. **"Story and gameplay are separate concerns"** --- LLMs often generate narrative and mechanics independently. Good game design integrates them (ludonarrative harmony). Mechanics ARE narrative in games like Dark Souls, Journey, and Papers Please.

4. **"Difficulty should be uniform"** --- LLMs suggest single difficulty settings or uniform challenge. Flow theory requires dynamic matching of challenge to skill. Difficulty should ebb and flow, with safe spaces between challenges.

5. **"A comprehensive GDD means the design is done"** --- LLMs excel at generating detailed documents, which can create false confidence. A GDD is a starting hypothesis, not a blueprint. The design is found through prototyping and playtesting, not documentation.

6. **"Procedural generation solves the content problem"** --- LLMs overvalue procgen's ability to create "infinite content." Without design intent, procgen produces infinite mediocrity. Quality requires authored constraints and curated experiences.

7. **"Balance can be achieved through math alone"** --- LLMs can generate impressive damage formulas and stat curves. But balance is ultimately about player perception, not math. A mathematically balanced game can still feel unfair, and a "broken" game can feel delightful.

8. **"Multiplayer can be added later"** --- LLMs treat multiplayer as a feature to bolt on. In reality, multiplayer changes everything: architecture, balance, pacing, economy, social dynamics. It must be designed from the foundations.

9. **"More player choice is always better"** --- LLMs tend to suggest branching narratives and open-world freedom for every game. But choice paralysis is real; curated linear experiences (God of War, Uncharted) can be more impactful than open ones. The quality of choices matters more than quantity.

10. **"Good games don't need tutorials"** --- LLMs sometimes suggest "intuitive" design as a substitute for onboarding. In practice, even the most "intuitive" games use carefully disguised tutorials (Nintendo's level design, Valve's environmental guidance). The art is making the tutorial invisible, not absent.

---

## EVIDENCE RATING KEY

- **A** = Strong empirical evidence: peer-reviewed research, large-scale industry data, regulatory findings, or replicated studies
- **B** = Moderate evidence: expert consensus, multiple GDC talks/post-mortems, widely cited design theory, consistent industry practice
- **C** = Weak/anecdotal evidence: individual case studies, designer opinion, limited data, or theoretical reasoning without broad validation

## KEY SOURCES & REFERENCES

- Schell, Jesse. *The Art of Game Design: A Book of Lenses* (3rd ed., 2019)
- Hodent, Celia. *The Gamer's Brain: How Neuroscience and UX Can Impact Video Game Design* (2017)
- Hodent, Celia. *The Psychology of Video Games* (2020)
- Csikszentmihalyi, Mihaly. *Flow: The Psychology of Optimal Experience* (1990)
- Chen, Jenova. "Flow in Games" (MFA Thesis, USC, 2006)
- Brooks, Frederick. *The Mythical Man-Month* (1975)
- Salen, Katie & Zimmerman, Eric. *Rules of Play: Game Design Fundamentals* (2003)
- Zileas (Tom Cadwell). "List of Game Design Anti-Patterns" (Riot Games, 2010)
- Hocking, Clint. "Ludonarrative Dissonance in BioShock" (2007)
- Game Accessibility Guidelines: https://gameaccessibilityguidelines.com/
- Xbox Accessibility Guidelines: https://learn.microsoft.com/en-us/gaming/accessibility/guidelines
- GDC Vault: "Dark Patterns: How Good UX Can Be Bad UX"
- King & Delfabbro. "Predatory Monetisation" (Journal of Business Ethics, 2021)
- Take This. "Crunch Hurts" report
- ACM CHI 2022: "A Game of Dark Patterns: Designing Healthy, Highly-Engaging Mobile Games"
