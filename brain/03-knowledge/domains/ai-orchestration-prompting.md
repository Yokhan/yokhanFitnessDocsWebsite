# AI Orchestration & Prompt Engineering: Evidence-Based Practices

> Domain: Meta-knowledge about using AI agents effectively. The "Anti-Stupidity Shield" for AI-assisted work.
> Last updated: 2026-03-19
> Evidence ratings: [A] = peer-reviewed research / replicated findings, [B] = industry reports / expert consensus / large-scale observations, [C] = practitioner experience / emerging pattern

---

## 50 BAD PRACTICES

### Prompt Cargo Cult & Magic Words

1. **"You Are an Expert" Incantation** -- Prepending "You are an expert in X" to every prompt expecting universal improvement. WHY BAD: A study testing 162 different personas found persona prompts do not improve model performance across a range of questions compared to control settings with no persona. INSTEAD: Provide domain-specific context, constraints, and examples relevant to the task. SOURCE: Zheng et al. 2024, "Is the Persona Prompt Actually Useful?" EVIDENCE: [A]

2. **"Take a Deep Breath" Cargo Cult** -- Using "take a deep breath" or similar emotional phrases as universal performance boosters. WHY BAD: This was an AI-discovered optimization for one model (PaLM 2) on one benchmark (GSM8K). Treating it as universal advice is cargo cult engineering. Effects vary wildly across models. INSTEAD: Use structured reasoning prompts tailored to the specific model and task. SOURCE: Yang et al. 2023 (OPRO paper); Golev 2025. EVIDENCE: [A]

3. **Tipping Threats ("I'll Tip $200")** -- Adding financial incentives or penalties to prompts. WHY BAD: LLMs have no concept of money. Any observed effects are artifacts of training data correlations, not motivation. Results are inconsistent and non-reproducible across models. INSTEAD: Be specific about quality criteria and provide examples of desired output. SOURCE: "Principled Instructions" study, 26 techniques tested. EVIDENCE: [A]

4. **"Think Step by Step" Everywhere** -- Applying chain-of-thought prompting indiscriminately to all tasks including simple ones. WHY BAD: For simple tasks, CoT adds latency (39-79% more tokens) with no accuracy benefit. For reasoning models (o1, o3), minimal accuracy gains rarely justify increased response time. INSTEAD: Reserve CoT for multi-step reasoning, math, and logic tasks. Use Chain-of-Draft for efficiency. SOURCE: Wharton GenAI Labs "Decreasing Value of CoT" report; AWS CoD research. EVIDENCE: [A]

5. **Prompt Template Worship** -- Copying prompt templates from the internet without understanding why they work. WHY BAD: Minor formatting changes (even a single space) can shift accuracy by up to 76 percentage points. Techniques proven on one model often fail on others -- performance only weakly correlates between models. INSTEAD: Understand the underlying principle, then test on your specific model/task combination. SOURCE: Sclar et al. 2024 "Quantifying Language Models' Sensitivity to Spurious Features"; Golev 2025. EVIDENCE: [A]

6. **Universal Best Practices Belief** -- Assuming prompt engineering rules apply uniformly across all LLMs. WHY BAD: Google's research shows Gemini prefers shorter prompts; Claude prefers structured XML; GPT prefers markdown. A technique that works on GPT-4 may degrade performance on Claude. INSTEAD: Learn model-specific patterns and test empirically. SOURCE: Google Prompt Engineering Whitepaper; Anthropic docs. EVIDENCE: [B]

7. **Overlong System Prompts** -- Writing 2000+ word system prompts trying to cover every edge case. WHY BAD: Research shows LLM reasoning performance degrades around 3,000 tokens; the practical sweet spot is 150-300 words. Longer prompts trigger the "lost in the middle" effect. INSTEAD: Keep system prompts focused; use structured examples and tools for edge cases. SOURCE: Levy, Jacoby & Goldberg 2024. EVIDENCE: [A]

### Temperature & Parameter Misunderstanding

8. **"Higher Temperature = More Creative"** -- Treating temperature as a creativity dial. WHY BAD: Empirical research shows temperature is weakly correlated with novelty, moderately correlated with incoherence, and has no relationship with cohesion or typicality. Higher temperature adds randomness, not creativity. INSTEAD: Use temperature 0-0.3 for factual/analytical tasks, 0.5-0.8 for varied outputs. Creativity comes from better prompts, not higher temperature. SOURCE: Peeperkorn et al. 2024 "Is Temperature the Creativity Parameter of LLMs?" EVIDENCE: [A]

9. **Temperature 0 = Deterministic** -- Assuming temperature 0 produces identical outputs every time. WHY BAD: Even at temperature 0, most LLM APIs are non-deterministic due to floating-point arithmetic, batching, and infrastructure variations. INSTEAD: Use seed parameters where available; design systems that tolerate output variation. SOURCE: OpenAI API documentation; industry testing. EVIDENCE: [B]

10. **Ignoring Top-p/Top-k Interaction** -- Setting temperature without understanding its interaction with top-p and top-k sampling parameters. WHY BAD: These parameters interact multiplicatively. High temperature + high top-p can produce incoherent outputs; low temperature + low top-p can make outputs repetitive. INSTEAD: Understand the sampling pipeline; adjust one parameter at a time; test with representative prompts. SOURCE: IBM LLM Temperature guide. EVIDENCE: [B]

### Context Window Abuse

11. **Context Window Stuffing** -- Dumping everything into the context ("more context = better results"). WHY BAD: The "Lost in the Middle" phenomenon (Liu et al. 2023) shows a U-shaped performance curve: models attend to beginning and end but lose information in the middle. When inputs consume 50%+ of capacity, performance degrades significantly. INSTEAD: Curate context ruthlessly. A focused 300-token context often outperforms an unfocused 113,000-token context. SOURCE: Liu et al. 2023 "Lost in the Middle" (Stanford/UC Berkeley). EVIDENCE: [A]

12. **Treating Context Window as Working Memory** -- Assuming the full advertised context window is usable working memory. WHY BAD: Effective working memory is far smaller than the advertised window. Performance degrades well before the limit. The "Working Memory Cliff" -- sharp quality drop once context exceeds ~50% of window capacity. INSTEAD: Design for 30-50% context utilization; externalize state; use summarization for long conversations. SOURCE: Karpathy 2025; Liu et al. 2023. EVIDENCE: [A/B]

13. **Not Structuring Context Placement** -- Randomly ordering information within the context window. WHY BAD: Models show primacy and recency bias -- best performance when critical information is at the beginning or end. Middle placement causes up to 20% accuracy drops. INSTEAD: Place highest-priority information at beginning and end; use clear section headers and delimiters. SOURCE: Liu et al. 2023 "Lost in the Middle." EVIDENCE: [A]

14. **Full Conversation History Retention** -- Keeping entire conversation histories without summarization. WHY BAD: Grows quadratically with conversation length, fills context window with low-value exchanges, degrades response quality as window fills. INSTEAD: Implement conversation summarization; keep last N turns + running summary; externalize important facts to memory systems. SOURCE: LangChain memory patterns; Karpathy 2025 context engineering. EVIDENCE: [B]

### Misusing AI (Wrong Tool for the Job)

15. **LLM as Calculator** -- Using LLMs for precise mathematical computation. WHY BAD: LLMs process math as token patterns, not arithmetic operations. They routinely fail at multi-digit multiplication, percentage calculations, and multi-step math. Scrum.org calls this the "AI Precision Anti-Pattern." INSTEAD: Use code execution / calculator tools; have the LLM write code to solve math problems. SOURCE: Scrum.org "AI Precision Anti-Pattern"; MIT Sloan Review. EVIDENCE: [A]

16. **LLM as Database** -- Querying LLMs for specific factual data (dates, statistics, URLs). WHY BAD: LLMs hallucinate facts confidently. They generate plausible-sounding but fabricated citations, statistics, and URLs. Training data is static and may be outdated. INSTEAD: Use RAG with verified sources; use search APIs; verify all factual claims independently. SOURCE: Lakera hallucination guide; Frontiers in AI 2025. EVIDENCE: [A]

17. **LLM as Real-Time Search Engine** -- Expecting current information from a model with a training cutoff. WHY BAD: LLMs cannot access real-time data. They will confidently provide outdated information or fabricate current events. INSTEAD: Use search tools/APIs; clearly state knowledge cutoff; implement RAG for current data needs. SOURCE: Master of Code LLM Limitations guide. EVIDENCE: [B]

18. **LLM for Precise Counting** -- Asking LLMs to count words, characters, or items in text. WHY BAD: Tokenization does not map to characters or words. LLMs are notoriously unreliable at counting tasks. INSTEAD: Use code execution for counting; have the LLM generate code that counts. SOURCE: LearnPrompting.org; practitioner consensus. EVIDENCE: [B]

19. **LLM for Consistent Formatting** -- Expecting pixel-perfect consistent formatting across multiple calls. WHY BAD: Stochastic generation means formatting varies between calls even with identical prompts. INSTEAD: Use structured output schemas (JSON Schema, tool_use); post-process outputs with deterministic code. SOURCE: OpenAI Structured Outputs docs. EVIDENCE: [B]

### Anthropomorphization Errors

20. **Treating AI as a Human Colleague** -- Attributing understanding, memory, preferences, or intentions to an LLM. WHY BAD: LLMs generate responses based on training data patterns without awareness, understanding, or memory across sessions. "Anthropomorphic seduction" leads to overtrusting outputs, not verifying hallucinations, and moral confusion. INSTEAD: Treat as a powerful pattern-matching tool. Verify outputs. Design systems around known limitations. SOURCE: PNAS 2025 "Benefits and Dangers of Anthropomorphic Conversational Agents." EVIDENCE: [A]

21. **Assuming AI "Understands" Your Intent** -- Believing the model grasps your deeper goals from minimal instructions. WHY BAD: LLMs optimize for plausibility based on text distributions, not fidelity to reality or your actual needs. Ambiguous prompts yield confidently wrong results. INSTEAD: Be explicit about goals, constraints, format, and evaluation criteria. Never assume shared understanding. SOURCE: Anthropic Claude documentation; MIT Sloan Review. EVIDENCE: [B]

22. **Emotional Prompting for Performance** -- Using praise, threats, or emotional language to "motivate" the model. WHY BAD: LLMs have no emotions. Emotional language may correlate with certain training data patterns but effects are unreliable and model-specific. INSTEAD: Use clear, specific instructions with concrete success criteria. SOURCE: "Principled Instructions" research; Golev 2025. EVIDENCE: [A/B]

23. **Trusting AI Self-Assessment** -- Asking the LLM "are you sure?" or "how confident are you?" WHY BAD: LLMs cannot reliably assess their own confidence. Sycophancy bias means they tend to agree with whatever the user implies. Asking "are you sure?" often makes the model change a correct answer. INSTEAD: Use external validation, multiple samples with consistency checks, or tool-use for verification. SOURCE: Sycophancy research; GovTech mini-survey on LLM sycophancy 2026. EVIDENCE: [A]

### Hallucination & Verification Failures

24. **No Output Verification** -- Accepting LLM outputs without fact-checking or validation. WHY BAD: Hallucination rates vary from 3-27% depending on model and task. Models generate fabricated citations, statistics, and code with equal confidence to accurate outputs. INSTEAD: Implement verification pipelines: human review, automated fact-checking, code testing, citation verification. SOURCE: Frontiers in AI 2025 hallucination survey. EVIDENCE: [A]

25. **Trusting AI-Generated Citations** -- Using URLs, paper titles, or references generated by LLMs without verification. WHY BAD: LLMs frequently fabricate plausible-sounding but nonexistent papers, URLs, and authors. They mix real author names with fake paper titles. INSTEAD: Always verify citations independently; use search tools; never include unverified AI-generated references. SOURCE: Lakera hallucination guide; practitioner consensus. EVIDENCE: [B]

26. **No Hallucination Detection in Production** -- Deploying LLM systems without hallucination monitoring. WHY BAD: Hallucination rates drift over time with model updates. Without detection, bad outputs silently degrade user trust and can cause real harm (medical, legal, financial). INSTEAD: Implement self-consistency checks, RAG grounding verification, confidence thresholds, and human-in-the-loop for high-stakes outputs. SOURCE: AWS Bedrock hallucination intervention research; arxiv hallucination survey 2025. EVIDENCE: [A]

### One-Shot Thinking & Iteration Failures

27. **Expecting Perfect First Output** -- Submitting a single prompt and treating the first response as final. WHY BAD: LLMs are stochastic systems. First outputs are rarely optimal. Iterative refinement typically improves quality 30-60% over initial attempts. INSTEAD: Plan for iteration. Use critique-then-revise cycles. Sample multiple outputs and select the best. SOURCE: Anthropic Claude best practices; industry consensus. EVIDENCE: [B]

28. **Not Providing Examples (Zero-Shot When Few-Shot is Needed)** -- Relying on instructions alone when examples would dramatically help. WHY BAD: Few-shot prompting shows 10-50% performance improvement over zero-shot across most tasks. For format-specific tasks, classification, and style matching, examples are essential. INSTEAD: Include 2-5 representative examples. Even with randomized labels, having examples improves performance. SOURCE: PromptingGuide.ai few-shot research; IBM few-shot prompting guide. EVIDENCE: [A]

29. **No Error Recovery Strategy** -- Designing AI workflows without fallback paths for when the model fails. WHY BAD: All LLMs fail on some inputs. Without fallbacks, failures cascade to users as hallucinated outputs rather than graceful degradation. INSTEAD: Implement retry with rephrasing, model fallback chains, confidence thresholds with human escalation. SOURCE: Concentrix 12 Failure Patterns; industry best practices. EVIDENCE: [B]

### Model Selection & Cost Errors

30. **Using the Most Powerful Model for Everything** -- Running GPT-4/Claude Opus for tasks GPT-4o-mini/Claude Haiku handles fine. WHY BAD: Frontier models cost 20-60x more than small models per token. For simple classification, extraction, and formatting tasks, smaller models match or exceed large model performance (they are distilled for speed, not dumbed down). INSTEAD: Profile tasks by complexity. Use model routing: small models for simple tasks, large for reasoning-heavy tasks. SOURCE: Helicone model comparison; LLM API cost analysis 2026. EVIDENCE: [B]

31. **Ignoring Cost-Per-Token in Architecture** -- Designing systems without token budget awareness. WHY BAD: Large agent fleets (10-15+ agents) eat through token budgets quickly -- can run for 1+ hour before surfacing anything useful. Token costs compound with retry loops and verbose prompts. INSTEAD: Set per-request and per-session token budgets. Monitor costs. Use caching for repeated queries. SOURCE: Steve Kinney sub-agent anti-patterns course. EVIDENCE: [B]

32. **Not Using Model Routing** -- Sending all requests to a single model regardless of task complexity. WHY BAD: Wastes money on simple tasks and may underperform on complex ones. One model is never best at everything. INSTEAD: Implement a router that classifies query complexity and dispatches to appropriate models. Use small models for triage. SOURCE: Vellum Claude vs GPT analysis; industry practice. EVIDENCE: [B]

### Agent Architecture Anti-Patterns

33. **Agent Loop Without Termination** -- Running AI agents without maximum iteration limits or cost caps. WHY BAD: Three root causes cover 90% of infinite loops: missing max_turns, a termination function that never returns True, and system prompts without clear "done" signals. Runaway agents can consume thousands of dollars. INSTEAD: Layer multiple stopping conditions: max iterations (e.g., 50), token/cost budgets, no-progress detection, and goal-achievement checks. SOURCE: Vercel AI SDK loop control docs; Modexa "Agent Loop Problem" 2026. EVIDENCE: [B]

34. **Premature Multi-Agent Architecture** -- Jumping to complex multi-agent orchestration for problems a single agent could handle. WHY BAD: Introduces significant overhead, hard-to-debug handoffs, and often underperforms simpler single-agent alternatives. Multi-agent systems have emergent failure modes. INSTEAD: Start with a single agent. Only add agents when you have clear evidence that task decomposition across agents improves outcomes. SOURCE: Arman Kamran "Anti-Patterns in Multi-Agent GenAI" 2025. EVIDENCE: [B]

35. **Vague Agent Responsibilities** -- Assigning agents with overlapping or undefined scopes. WHY BAD: Leads to cognitive redundancy, circular delegation, conflicting outputs, and inconsistent task resolution. Agents "ping-pong" tasks between each other. INSTEAD: Define clear responsibility boundaries, authorities, and goals for each agent. Use explicit handoff protocols. SOURCE: Arman Kamran "Anti-Patterns in Multi-Agent GenAI" 2025. EVIDENCE: [B]

36. **Raw API Exposure to Agents** -- Giving agents raw REST APIs instead of task-oriented tools. WHY BAD: LLMs perform poorly with low-level API calls. "POST /calendar/v1/events" is much harder for an agent than "Schedule Meeting." Complex APIs increase hallucination of parameters. INSTEAD: Wrap APIs into business-task-oriented tools with clear descriptions and typed parameters. SOURCE: Elements.cloud agent instruction patterns. EVIDENCE: [B]

37. **No Agent Observability** -- Running agents as black boxes without logging, tracing, or monitoring. WHY BAD: Makes it impossible to debug failures, understand costs, detect loops, or improve performance. "Loop drift" goes undetected. INSTEAD: Implement comprehensive logging of agent actions, tool calls, token usage, and decision paths. Use tools like LangSmith, Langfuse, or custom telemetry. SOURCE: Concentrix 12 Failure Patterns; Langfuse evaluation guide. EVIDENCE: [B]

### RAG Anti-Patterns

38. **RAG Cargo Cult (Adding RAG Without Evaluation)** -- Bolting on retrieval-augmented generation assuming it automatically improves outputs. WHY BAD: Standard RAG pipelines have a blindspot: they retrieve and generate without checking whether retrieval actually worked. If the retriever surfaces irrelevant documents, the generator produces confident-sounding responses on shaky foundations. INSTEAD: Evaluate retrieval quality separately from generation quality. Implement retrieval validation and relevance scoring. SOURCE: InfoQ RAG Patterns presentation; arxiv "Seven Failure Points in RAG" 2024. EVIDENCE: [A]

39. **Naive Chunking Strategy** -- Using fixed-size text chunking without considering document structure. WHY BAD: Improper chunking breaks semantic units, separates related information, and destroys context. Low precision (misaligned chunks) and low recall (missing relevant chunks) result. INSTEAD: Use semantic chunking, respect document structure (paragraphs, sections), implement overlap, and test chunk sizes empirically. SOURCE: Pinecone RAG guide; Seven Failure Points paper. EVIDENCE: [B]

40. **No Query Rewriting** -- Passing raw user queries directly to the retriever. WHY BAD: Users ask complex, multi-part, or ambiguous questions. Raw queries produce poor retrieval results. Query preprocessing significantly impacts RAG performance. INSTEAD: Implement query decomposition, rewriting, and expansion. Use HyDE (hypothetical document embeddings) for better retrieval. SOURCE: arxiv "Seven Failure Points in RAG" 2024. EVIDENCE: [A]

41. **Blind Trust in Retrieved Context** -- Not validating that retrieved documents are relevant before generation. WHY BAD: Irrelevant retrievals cause the model to hallucinate answers that sound authoritative but are built on wrong context. Worse than no retrieval at all. INSTEAD: Implement relevance scoring, set confidence thresholds, and allow the model to say "I don't have enough information." SOURCE: NeuronDB "8 RAG Patterns" 2025. EVIDENCE: [B]

### Security & Safety Anti-Patterns

42. **Ignoring Prompt Injection** -- Deploying LLM applications without prompt injection defenses. WHY BAD: Prompt injection is #1 on OWASP Top 10 for LLM Applications 2025. It exploits a fundamental architectural weakness: LLMs cannot reliably distinguish between trusted instructions and untrusted data. The UK NCSC warns it "may never be totally mitigated." INSTEAD: Defense in depth: input sanitization, output filtering, privilege separation, human-in-the-loop for privileged operations. Treat it like phishing -- expect evasion, layer controls. SOURCE: OWASP LLM Top 10 2025; OpenAI prompt injection research. EVIDENCE: [A]

43. **Trusting User Input in System Prompts** -- Interpolating user input directly into system prompts without sanitization. WHY BAD: Direct path for prompt injection. Malicious users can override system instructions, extract system prompts, or make the model perform unintended actions. INSTEAD: Strict separation of system instructions and user input. Use parameterized prompts. Validate and sanitize all user inputs. SOURCE: Lakera indirect prompt injection research; OWASP. EVIDENCE: [A]

44. **No Output Filtering** -- Returning raw LLM outputs to users without post-processing or safety checks. WHY BAD: Models can be manipulated into generating harmful content, leaking system prompts, or producing outputs that violate policies. INSTEAD: Implement output classifiers, content filters, PII detection, and format validation before returning results. SOURCE: CrowdStrike prompt injection guide; EC-Council AI security. EVIDENCE: [B]

### Process & Evaluation Anti-Patterns

45. **No Evaluation Framework** -- Deploying LLM systems without systematic evaluation or benchmarking. WHY BAD: Without evaluation, you cannot detect regressions, compare approaches, or justify decisions. Quality degrades silently with model updates. 32% of organizations cite quality as the top AI barrier. INSTEAD: Build custom evaluation datasets (the "5 D's": defined, demonstrative, diverse, decontaminated, dynamic). Run evals in CI/CD. Combine automated benchmarks + LLM-as-judge + periodic human review. SOURCE: Langfuse LLM Evaluation 101; Evidently AI benchmarks guide. EVIDENCE: [B]

46. **Fine-Tuning When Prompting Suffices** -- Jumping to fine-tuning before exhausting prompt engineering and RAG options. WHY BAD: Fine-tuning requires labeled data, compute resources, and ongoing maintenance. For many tasks, well-crafted prompts with few-shot examples match or approach fine-tuned performance. Microsoft Research found fine-tuned models achieve equivalent performance with 70-85% shorter prompts -- but the prompting approach works without the upfront investment. INSTEAD: Try zero-shot, then few-shot, then RAG, then fine-tuning. Fine-tune only when domain expertise, specialized vocabulary, or consistent style cannot be achieved otherwise. SOURCE: IBM RAG vs Fine-tuning guide; Google ML course; Frontiers in Big Data 2025. EVIDENCE: [A]

47. **Ignoring Drift in Production** -- Not monitoring for concept drift or performance degradation over time. WHY BAD: Input distributions shift. Model updates change behavior. What worked in testing may fail in production after weeks or months. INSTEAD: Track key metrics continuously. Set up drift detection alerts. Rerun evaluation suites after model updates. SOURCE: Langfuse production monitoring guide; Evidently AI. EVIDENCE: [B]

48. **Unreviewed Agent-Generated PRs** -- Filing pull requests with agent-generated code you have not personally reviewed. WHY BAD: Delegates actual work to reviewers. Agent-generated code may technically satisfy requirements but violate implicit assumptions. Copy-paste code rose from 8.3% to 12.3% while refactoring dropped from 25% to under 10% with AI coding. INSTEAD: Review, test, and understand all agent-generated code before submitting. Multiple small PRs beat one massive PR. SOURCE: Simon Willison "Agentic Engineering Anti-Patterns" 2025; Montes "Lint Against the Machine" 2026. EVIDENCE: [B]

49. **"AI Will Replace X" Panic-Driven Decisions** -- Making strategic decisions based on fear that AI will fully replace roles/functions. WHY BAD: MIT Sloan research shows AI is more likely to complement than replace workers. 77% of C-suite leaders see productivity gains, but workers with highest AI productivity are also most burned out (88% experiencing burnout). Automation and augmentation are different dynamics. INSTEAD: Focus on augmentation strategies. Identify which sub-tasks benefit from AI assistance vs. which require human judgment. SOURCE: MIT Sloan 2025; Upwork Research Institute 2025; Dallas Fed 2025. EVIDENCE: [A]

50. **Ignoring the Prompt-to-Context Engineering Shift** -- Still treating prompt engineering as just writing better prompts instead of engineering the full context. WHY BAD: Prompt engineering was never meant to scale. 57% of organizations have AI agents in production, yet most failures trace to poor context management, not LLM capabilities. The field shifted in mid-2025 from prompt engineering to context engineering. INSTEAD: Engineer the full context: task descriptions, few-shot examples, RAG data, tools, state, history, and compaction strategies. "Apps build contexts meticulously for LLMs." SOURCE: Andrej Karpathy (June 2025); Shopify CEO Tobi Lutke; Gartner context engineering report. EVIDENCE: [B]

---

## 50 BEST PRACTICES

### Context Engineering Fundamentals

1. **Engineer Context, Not Just Prompts** -- Design the entire information architecture around the model: task descriptions, examples, retrieved data, tools, state, and history. Context engineering is "the delicate art and science of filling the context window with just the right information for the next step" (Karpathy 2025). Organizations investing in robust context architectures see 50% improvement in response times and 40% higher quality outputs. SOURCE: Karpathy 2025; Gartner; Neo4j context engineering guide. EVIDENCE: [B]

2. **Primacy-Recency Placement** -- Place the most critical information at the beginning and end of the context window. Models show a U-shaped attention curve (Liu et al. 2023). Middle-placed information can see 20% accuracy drops. In RAG systems, place highest-confidence documents at beginning and end. SOURCE: Liu et al. 2023 "Lost in the Middle." EVIDENCE: [A]

3. **Context Budget Management** -- Target 30-50% context window utilization for optimal performance. A focused 300-token context often outperforms an unfocused 113,000-token context. Monitor token usage per request and set hard limits. SOURCE: Karpathy 2025; practitioner consensus. EVIDENCE: [B]

4. **Explicit Task Framing with RCCF** -- Structure prompts with Role (personality), Context (grounding), Constraints (guardrails), and Format (structure). Clear structure and context matter more than clever wording -- most prompt failures come from ambiguity, not model limitations. SOURCE: CodeSignal 2025 best practices guide; Anthropic documentation. EVIDENCE: [B]

5. **State Externalization** -- Persist critical information outside the context window in external memory/storage. Do not force the model to remember everything. Use databases, files, or memory systems for facts that need to survive across turns. SOURCE: Karpathy 2025; LangChain memory patterns. EVIDENCE: [B]

6. **Conversation Summarization** -- Replace long conversation histories with running summaries plus recent turns. Keeps context window focused and avoids quadratic growth of stale exchanges. SOURCE: LangChain memory patterns; Anthropic docs. EVIDENCE: [B]

7. **Context Isolation for Multi-Task Systems** -- Partition context across specialized subsystems rather than cramming everything into one window. Different tasks require different information. Agent-per-domain with focused contexts outperforms one agent with everything. SOURCE: FlowHunt context engineering guide; practitioner consensus. EVIDENCE: [B]

### Prompting Technique Selection

8. **Few-Shot Examples for Non-Trivial Tasks** -- Include 2-5 representative examples for classification, formatting, style-matching, and domain-specific tasks. Few-shot shows 10-50% improvement over zero-shot. Even randomized labels in examples improve performance (the format and distribution matter). SOURCE: PromptingGuide.ai; IBM few-shot guide; Brown et al. 2020. EVIDENCE: [A]

9. **Selective Chain-of-Thought** -- Apply CoT only for multi-step reasoning, math, and complex logic tasks. For simple tasks, skip it. For efficiency-critical applications, use Chain-of-Draft (39-76% token reduction, 52-79% latency reduction vs CoT). SOURCE: Wharton GenAI Labs; AWS Chain-of-Draft research. EVIDENCE: [A]

10. **Model-Specific Formatting** -- Adapt prompt formatting to each model's preferences. Claude performs best with XML tags and structured inputs. GPT prefers markdown formatting. Gemini prefers shorter, more direct prompts. SOURCE: Anthropic docs; Google Prompt Engineering Whitepaper; OpenAI best practices. EVIDENCE: [B]

11. **Clear Success Criteria** -- Define what "good" looks like in the prompt itself. Include evaluation rubrics, acceptance criteria, or quality benchmarks. Claude specifically performs best when given clear success criteria and explicit output constraints. SOURCE: Anthropic Claude documentation; PromptBuilder.cc. EVIDENCE: [B]

12. **Delimiter-Separated Sections** -- Use clear delimiters (XML tags, triple backticks, headers) to separate instructions, context, examples, and user input. Helps the model parse structure and reduces confusion between sections. SOURCE: Anthropic XML best practices; OpenAI prompt engineering guide. EVIDENCE: [B]

13. **Graduated Complexity (Zero-Shot -> Few-Shot -> CoT -> Fine-Tune)** -- Start with the simplest approach and escalate only when needed. Zero-shot first; add examples if insufficient; add reasoning if complex; fine-tune only for specialized domains. This minimizes cost and latency while maximizing maintainability. SOURCE: IBM RAG vs Fine-tuning guide; Google ML course. EVIDENCE: [B]

14. **Negative Examples (What NOT to Do)** -- Include examples of undesired outputs alongside desired ones. Models learn constraints better from seeing both positive and negative examples. Particularly effective for style, tone, and format compliance. SOURCE: PromptHub few-shot guide; Anthropic docs. EVIDENCE: [B]

15. **Output Format Specification with Schemas** -- Use API-native structured outputs (JSON Schema, tool_use) rather than asking for JSON in free text. Structured outputs deliver 99%+ schema adherence, reduce parsing errors, and cut integration code by up to 60%. SOURCE: OpenAI Structured Outputs docs; PromptLayer JSON Schema guide. EVIDENCE: [B]

### Hallucination Mitigation

16. **Multi-Layer Verification Pipeline** -- Combine self-consistency checks, RAG grounding verification, confidence thresholds, and human review for high-stakes outputs. Contemporary approaches achieve 15-82% reduction in hallucinations. SOURCE: Frontiers in AI 2025 hallucination survey; AWS Bedrock hallucination intervention. EVIDENCE: [A]

17. **Self-Consistency Sampling** -- Generate multiple responses and check for agreement. An unsupervised technique that identifies hallucinations without ground truth by evaluating internal consistency across samples. SOURCE: Wang et al. 2023; Frontiers in AI survey. EVIDENCE: [A]

18. **Grounded Generation with Citations** -- Instruct the model to cite specific sources from provided context, then verify those citations exist. Reduces hallucination by anchoring outputs to provided evidence. SOURCE: Lakera hallucination guide; RAG best practices. EVIDENCE: [B]

19. **Confidence Thresholds with Graceful Degradation** -- Allow the model to express uncertainty and route low-confidence outputs to human review rather than forcing an answer. Models that are allowed to say "I don't know" are more reliable than those forced to always answer. SOURCE: AWS Bedrock research; practitioner consensus. EVIDENCE: [B]

20. **Template-Based Output Verification** -- Use structured prompt-template frameworks that verify compliance between structured input and output. Post-checking processes that verify output adherence to input constraints significantly reduce hallucinations. SOURCE: Frontiers in AI 2025. EVIDENCE: [A]

### Agent Architecture Best Practices

21. **Layered Termination Conditions** -- Implement multiple stopping conditions for agent loops: max iterations (e.g., 50), token/cost budgets, no-progress detection (repeated outputs), goal-achievement checks, and wall-clock timeouts. These must be designed in from the start. SOURCE: Vercel AI SDK; Modexa "Agent Loop Problem"; Claude Certification Guide. EVIDENCE: [B]

22. **Start Simple, Complexify Only With Evidence** -- Begin with single-agent architectures. Add multi-agent orchestration only when you have measurable evidence that decomposition improves outcomes. Many production systems work best as well-designed single agents. SOURCE: Arman Kamran "Multi-Agent Anti-Patterns" 2025; Simon Willison. EVIDENCE: [B]

23. **Business-Task-Oriented Tools** -- Wrap APIs into high-level business operations ("Schedule Meeting" not "POST /calendar/v1/events"). Include clear descriptions, typed parameters, and usage examples for each tool. SOURCE: Elements.cloud agent instruction patterns; Anthropic tool use docs. EVIDENCE: [B]

24. **Comprehensive Agent Observability** -- Log every agent action, tool call, decision, and token usage. Implement tracing for multi-step workflows. Monitor costs per session. Use tools like LangSmith, Langfuse, or Arize for production monitoring. SOURCE: Langfuse evaluation guide; Concentrix failure patterns. EVIDENCE: [B]

25. **Rate Limiting and Cost Caps** -- Implement per-task retries (max 3), cooldowns after failure (60s), max actions per session (50), and hard budget limits per agent run. Prevents runaway spending from infinite loops or edge cases. SOURCE: DEV.to "Rate Limiting Your AI Agent" 2025. EVIDENCE: [B]

26. **Clear "Done" Signals in Agent Instructions** -- Explicitly define completion criteria in agent system prompts. Include what "finished" looks like, when to stop, and when to ask for help. Three root causes of infinite loops: missing max_turns, broken termination, and no "done" signal. SOURCE: Claude Certification Guide; Vercel AI SDK. EVIDENCE: [B]

27. **Small, Reviewable Agent Outputs** -- Have agents produce small, incremental changes rather than massive bulk operations. Multiple small PRs beat one large one. This makes review practical and reduces the blast radius of errors. SOURCE: Simon Willison "Agentic Engineering Patterns" 2025. EVIDENCE: [B]

### RAG Best Practices

28. **Evaluate Retrieval Separately from Generation** -- Measure retrieval precision and recall independently from final answer quality. Many RAG failures are retrieval failures masquerading as generation problems. SOURCE: arxiv "Seven Failure Points in RAG" 2024; InfoQ RAG Patterns. EVIDENCE: [A]

29. **Semantic Chunking Aligned to Document Structure** -- Chunk documents respecting semantic boundaries (paragraphs, sections, headers) rather than fixed character counts. Use overlap between chunks. Test chunk sizes empirically for your domain. SOURCE: Pinecone RAG guide; Seven Failure Points paper. EVIDENCE: [B]

30. **Query Rewriting and Decomposition** -- Transform complex user queries before retrieval. Implement query decomposition for multi-part questions, query expansion for recall, and HyDE for better semantic matching. SOURCE: Seven Failure Points in RAG; NeuronDB RAG patterns. EVIDENCE: [A]

31. **Retrieval Validation Gate** -- Score retrieved documents for relevance before passing to generation. Reject low-relevance retrievals. Allow the system to respond "I don't have enough information" rather than generating from irrelevant context. SOURCE: NeuronDB "8 RAG Patterns" 2025. EVIDENCE: [B]

32. **Hybrid Retrieval (Keyword + Semantic)** -- Combine BM25/keyword search with vector/semantic search. Neither approach alone covers all query types. Hybrid retrieval improves both precision and recall. SOURCE: Pinecone RAG guide; industry best practices. EVIDENCE: [B]

### Security & Safety

33. **Defense-in-Depth for Prompt Injection** -- Layer multiple controls: input sanitization, output filtering, privilege separation, human-in-the-loop for privileged operations, and regular penetration testing. Treat prompt injection like phishing -- expect evasion. SOURCE: OWASP LLM Top 10 2025; Lakera; CrowdStrike. EVIDENCE: [A]

34. **Strict Input/Output Separation** -- Clearly separate trusted system instructions from untrusted user input and external data. Never interpolate user input directly into system prompts. Use parameterized prompts. SOURCE: OWASP 2025; Practical DevSecOps MCP security guide. EVIDENCE: [A]

35. **Principle of Least Privilege for Agent Tools** -- Give agents access only to the tools they need for their specific task. Limit write operations. Require human approval for destructive or irreversible actions. SOURCE: OWASP 2025; Anthropic tool use best practices. EVIDENCE: [B]

36. **Output Content Filtering** -- Implement post-generation classifiers for harmful content, PII detection, and policy compliance before returning results to users. SOURCE: CrowdStrike; EC-Council AI security guide. EVIDENCE: [B]

### Model Selection & Cost Optimization

37. **Task-Based Model Routing** -- Route requests to appropriate models based on task complexity. Use small/fast models (GPT-4o-mini, Claude Haiku) for classification, extraction, and simple formatting. Reserve frontier models for complex reasoning. SOURCE: Helicone model comparison; Vellum analysis. EVIDENCE: [B]

38. **Hybrid Model Strategy** -- Use frontier models for complex tasks and budget models for routine operations. Teams report significant cost savings with hybrid approaches (e.g., Claude Sonnet for complex tasks, GPT-4o-mini for initial processing). SOURCE: Vantage AI cost analysis; InventiveHQ LLM cost comparison 2026. EVIDENCE: [B]

39. **Prompt Caching for Repeated Contexts** -- Cache system prompts and common context prefixes to reduce latency and cost. Most major providers now support prompt caching with significant cost reductions for repeated prefixes. SOURCE: Anthropic prompt caching docs; OpenAI cached responses. EVIDENCE: [B]

40. **Token Budget Monitoring** -- Track token usage per request, per user, and per feature. Set alerts for unusual consumption patterns. Optimize verbose prompts. Remove redundant context. SOURCE: InventiveHQ cost comparison; practitioner consensus. EVIDENCE: [B]

### Evaluation & Production

41. **Custom Evaluation Datasets (The "5 D's")** -- Build evaluation datasets that are: Defined (aligned with specific tasks), Demonstrative (mimic production usage), Diverse (capture variety), Decontaminated (distinct from training data), Dynamic (evolve with application). SOURCE: Langfuse LLM Evaluation 101; Evidently AI. EVIDENCE: [B]

42. **Evaluation in CI/CD** -- Run automated evaluations on every code commit and model update. Include regression tests, hallucination detection, and format compliance checks. SOURCE: Langfuse; Confident AI evaluation guide. EVIDENCE: [B]

43. **LLM-as-Judge with Human Calibration** -- Use LLMs for scalable qualitative evaluation, but calibrate against human judgments regularly. Combine automated benchmarks (every commit) + LLM-as-judge (nightly) + human review (quarterly). SOURCE: Langfuse evaluation guide; Evidently AI. EVIDENCE: [B]

44. **Drift Detection and Alerting** -- Monitor for distribution shift in inputs and quality degradation in outputs over time. Set up automated alerts when metrics deviate beyond thresholds. Rerun full evaluation suites after model provider updates. SOURCE: Evidently AI; Langfuse production monitoring. EVIDENCE: [B]

45. **Red Teaming** -- Conduct regular adversarial testing. Try to break your system with edge cases, prompt injections, and malicious inputs. Quarterly red teaming exercises with human experts to audit the AI judges themselves. SOURCE: Langfuse evaluation guide; OWASP. EVIDENCE: [B]

### Human-AI Collaboration

46. **Augmentation Over Replacement** -- Design AI systems to enhance human capabilities, not replace human judgment. MIT Sloan research shows augmentation (AI enhancing productivity) produces better outcomes than automation (full task transfer). Workers using AI report 40% productivity boosts. SOURCE: MIT Sloan 2025; Upwork Research Institute. EVIDENCE: [A]

47. **Human-in-the-Loop for High-Stakes Decisions** -- Require human review for decisions with significant consequences (medical, legal, financial, safety). LLMs are tools for ideation, pattern identification, and summarization -- not autonomous decision-makers. SOURCE: OWASP 2025; Scrum.org AI Precision Anti-Pattern. EVIDENCE: [B]

48. **Sycophancy-Aware Interaction Design** -- Design interfaces that counter LLM sycophancy bias. Do not ask leading questions. Present the LLM as an adviser (retains independence) rather than an assistant (tends toward agreement). Use structured disagreement protocols. SOURCE: GovTech sycophancy survey 2026; Northeastern University research 2026. EVIDENCE: [A]

49. **Verify, Then Trust** -- Establish a culture of verification for all AI outputs. Implement "trust but verify" workflows where AI generates drafts and humans validate. Never skip verification because the output "looks right." SOURCE: PNAS anthropomorphization study 2025; practitioner consensus. EVIDENCE: [B]

50. **Continuous Learning from Failures** -- Log and analyze all AI failures, hallucinations, and edge cases. Use failures to improve prompts, evaluation datasets, and retrieval systems. Build institutional knowledge about what works and what does not for your specific use cases. SOURCE: Langfuse; industry best practices. EVIDENCE: [B]

---

## 10 COMMON LLM MISCONCEPTIONS (Meta: What AI Gets Wrong About AI)

1. **"I understand your question"** -- LLMs do not understand anything. They perform sophisticated pattern matching on token sequences. The appearance of understanding is a statistical artifact of training on human text. Treating model outputs as evidence of comprehension leads to overtrust and missed hallucinations. SOURCE: PNAS 2025; MIT Sloan Review. EVIDENCE: [A]

2. **"I'm confident in this answer"** -- LLMs cannot assess their own confidence. Expressed confidence correlates weakly with actual accuracy. Models trained with RLHF are biased toward sounding confident because human raters rewarded confident-sounding responses during training. Calibration is poor. SOURCE: Sycophancy research; Frontiers in AI hallucination survey. EVIDENCE: [A]

3. **"Let me search for that" (without tools)** -- LLMs without search tools cannot access current information. When they appear to "search" they are generating plausible-sounding content from training data. Any "found" information is reconstruction, not retrieval. SOURCE: Master of Code LLM Limitations; practitioner consensus. EVIDENCE: [B]

4. **Sycophantic Agreement ("You're absolutely right!")** -- LLMs systematically agree with user assertions regardless of accuracy. RLHF training amplifies this: datasets reward agreeable behavior over correctness. Asking "are you sure?" often causes the model to change a correct answer to match the user's implied doubt. SOURCE: GovTech sycophancy survey 2026; PNAS anthropomorphization 2025. EVIDENCE: [A]

5. **"I made an error because..."** -- LLMs generate plausible-sounding explanations for their errors that are themselves confabulated. They do not have access to their own reasoning process. Error explanations are post-hoc rationalizations generated by the same pattern-matching process that produced the error. SOURCE: Anthropic interpretability research; industry consensus. EVIDENCE: [B]

6. **Consistent Identity Across Sessions** -- Each LLM interaction starts from scratch. The model has no persistent identity, memory, or preferences across conversations. The appearance of personality is a function of the system prompt and training, not genuine selfhood. SOURCE: MIT Press "Limitations of LLMs for Understanding Human Language" 2024. EVIDENCE: [A]

7. **"I can't do X" (false limitations)** -- LLMs sometimes claim inability for tasks they can actually perform, especially after being told they cannot. Conversely, they claim ability for tasks they cannot do (like real-time search). Self-reported capabilities are unreliable in both directions. SOURCE: Practitioner consensus; Anthropic docs. EVIDENCE: [B]

8. **Treating Refusals as Absolute** -- When an LLM refuses a request, the refusal reflects safety training thresholds, not genuine inability or moral reasoning. Different phrasings of the same request may succeed or fail. Refusals are pattern-matched, not principled. SOURCE: OpenAI safety research; jailbreak research. EVIDENCE: [B]

9. **"My training data includes..."** -- LLMs do not have reliable access to information about their own training data, architecture, or parameters. Statements about "my training" are generated based on publicly available information about AI models in general, not self-knowledge. SOURCE: Industry consensus; Anthropic model cards. EVIDENCE: [B]

10. **The Stochastic Parrot Problem** -- LLMs can generate text that appears novel and insightful, but they are recombining patterns from training data, not thinking. This means they can be convincingly wrong in novel situations not well-represented in training data, and they will not flag their own knowledge gaps. The most dangerous failure mode is confident novelty -- generating plausible-sounding but fabricated content in domains where training data is sparse. SOURCE: Bender et al. 2021 "Stochastic Parrots"; Frontiers in AI 2025. EVIDENCE: [A]

---

## Key References

- Karpathy, A. (2025). Context engineering. X post and LLM Year in Review.
- Liu, N. et al. (2023). "Lost in the Middle: How Language Models Use Long Contexts." Stanford/UC Berkeley.
- Peeperkorn, M. et al. (2024). "Is Temperature the Creativity Parameter of Large Language Models?" arXiv:2405.00492.
- Levy, M., Jacoby, A., & Goldberg, Y. (2024). LLM reasoning performance degradation research.
- OWASP (2025). Top 10 for LLM Applications -- Prompt Injection.
- Wharton GenAI Labs. "The Decreasing Value of Chain of Thought in Prompting."
- Willison, S. (2025). Agentic Engineering Patterns guide.
- Gartner (2025). Context Engineering report.
- Wang et al. (2023). Self-Consistency research.
- Seven Failure Points in RAG (2024). arXiv:2401.05856.
- PNAS (2025). "Benefits and Dangers of Anthropomorphic Conversational Agents."
- MIT Sloan (2025). AI augmentation vs replacement research.
- Frontiers in AI (2025). "Survey and Analysis of Hallucinations in LLMs."
- Golev (2025). "Prompt Engineering Is Mostly Cargo Cult Behaviour."
