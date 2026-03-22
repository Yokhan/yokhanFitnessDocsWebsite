# Scientific Method & Research: Evidence-Based Practices

> Anti-Stupidity Shield: META-DOMAIN — Critical thinking and decision quality underpin all other domains.
> Evidence ratings: **A** = replicated experimental evidence / meta-analyses; **B** = well-supported by multiple studies; **C** = theoretical/expert consensus with limited direct experimental tests.

---

## 50 BAD PRACTICES

1. **P-Hacking** — Running multiple analyses, excluding outliers, or changing variables until p<0.05 is found. WHY BAD: Inflates false positive rate far above nominal 5%; a study testing 20 metrics at alpha=0.05 has ~64% chance of at least one false positive. INSTEAD: Pre-register analyses; use Bonferroni or Benjamini-Hochberg corrections. SOURCE: Simmons, Nelson & Simonsohn 2011 "False-Positive Psychology"; Head et al. 2015 PLOS Biology. EVIDENCE: A

2. **HARKing (Hypothesizing After Results are Known)** — Generating hypotheses after seeing data and presenting them as a priori predictions. WHY BAD: Converts exploratory findings into false "confirmatory" results; inflates apparent predictive power. INSTEAD: Clearly separate exploratory vs. confirmatory analyses; use pre-registration. SOURCE: Kerr 1998 Personality and Social Psychology Review. EVIDENCE: A

3. **Publication Bias (File Drawer Problem)** — Journals preferentially publish positive/significant results; null results remain unpublished. WHY BAD: Creates systematically distorted literature where effect sizes are inflated and false positives accumulate. INSTEAD: Submit to journals accepting registered reports; publish null results; use pre-print servers. SOURCE: Rosenthal 1979; Franco, Malhotra & Simonovits 2014 Science. EVIDENCE: A

4. **Treating Correlation as Causation** — Inferring that because X correlates with Y, X causes Y. WHY BAD: Confounding variables, reverse causation, and spurious correlations are ubiquitous; Simpson's Paradox can reverse apparent associations when confounders are controlled. INSTEAD: Use RCTs, instrumental variables, difference-in-differences, or DAGs to reason about causal structure. SOURCE: Pearl 2009 "Causality"; classic epidemiological methodology. EVIDENCE: A

5. **N=1 Anecdotes as Evidence** — Basing conclusions on a single case or personal experience. WHY BAD: Individual cases are subject to regression to the mean, placebo effects, spontaneous remission, and confirmation bias; cannot establish generalizability. INSTEAD: Use controlled studies with adequate sample sizes and replication. SOURCE: Basic research methodology; Sackett et al. 1996 evidence-based medicine hierarchy. EVIDENCE: A

6. **Cherry-Picking Studies** — Selectively citing studies that support your position while ignoring contradictory evidence. WHY BAD: Creates illusion of consensus; identical to confirmation bias applied to literature review. INSTEAD: Use systematic reviews and meta-analyses; report contradictory findings explicitly. SOURCE: Ioannidis 2005; Cochrane Collaboration methodology. EVIDENCE: A

7. **"Just a Theory" Misunderstanding** — Dismissing scientific theories because "it's just a theory." WHY BAD: Confuses colloquial "theory" (guess) with scientific "theory" (well-substantiated explanatory framework supported by extensive evidence, e.g., germ theory, theory of evolution). INSTEAD: Understand the hierarchy: observation > hypothesis > theory > law represents different categories, not confidence levels. SOURCE: National Academy of Sciences definitions. EVIDENCE: C

8. **Appealing to Authority Without Checking Methodology** — Accepting claims because an expert said them, without evaluating the actual evidence or methodology. WHY BAD: Experts can be wrong, especially outside their domain; credentials don't make methods sound. INSTEAD: Evaluate the evidence chain: sample size, methodology, replication, conflicts of interest. SOURCE: Ioannidis 2005; philosophy of science. EVIDENCE: B

9. **Ignoring the Replication Crisis** — Assuming published findings are true because they were peer-reviewed. WHY BAD: The Open Science Collaboration (2015) found only 36% of 100 psychology studies replicated; Ioannidis (2005) showed mathematically that most published findings are likely false for small studies, small effects, and flexible analyses. INSTEAD: Weight replicated findings more heavily; check replication databases. SOURCE: Open Science Collaboration 2015 Science; Ioannidis 2005 PLOS Medicine. EVIDENCE: A

10. **Confusing Statistical Significance with Practical Significance** — Treating any p<0.05 result as meaningful. WHY BAD: With large enough N, trivially small effects become "significant"; a 0.5-point improvement on a 100-point scale can be p<0.001 with N=10,000. INSTEAD: Always report and interpret effect sizes (Cohen's d, odds ratios); consider minimum clinically/practically important differences. SOURCE: Cohen 1988; Sullivan & Feinn 2012 JGME. EVIDENCE: A

11. **Ignoring Effect Sizes** — Reporting only p-values without quantifying the magnitude of effects. WHY BAD: P-values conflate effect size with sample size; a "significant" finding may have negligible real-world impact. INSTEAD: Report Cohen's d, eta-squared, r-squared, or other appropriate effect size measures alongside confidence intervals. SOURCE: APA Publication Manual 6th/7th edition guidelines. EVIDENCE: A

12. **Base Rate Neglect in Interpreting Results** — Ignoring prior probability when evaluating test results or study findings. WHY BAD: A 95% accurate test for a disease with 1/10,000 prevalence yields mostly false positives (PPV ~0.5%); same logic applies to screening hypotheses. INSTEAD: Use Bayesian reasoning; calculate positive predictive value using base rates. SOURCE: Kahneman & Tversky 1973; Gigerenzer et al. 2007 "Helping Doctors and Patients Make Sense of Health Statistics." EVIDENCE: A

13. **Survivorship Bias in Research** — Studying only successes/survivors and ignoring failures/dropouts. WHY BAD: Creates distorted picture; Abraham Wald's WWII bomber example shows how studying only returning planes led to wrong conclusions about where to add armor. INSTEAD: Actively seek data on failures, dropouts, and non-survivors; use intention-to-treat analysis. SOURCE: Wald 1943 (declassified); Elston 2021 on survivorship bias. EVIDENCE: A

14. **Texas Sharpshooter Fallacy** — Finding patterns in random data after the fact and claiming significance. WHY BAD: With enough data points, clusters appear by chance; the 1992 Swedish power line study tested 800 ailments and "found" childhood leukemia — a near-certainty with that many comparisons. INSTEAD: Pre-specify hypotheses; correct for multiple comparisons; replicate findings. SOURCE: Thompson 2009; multiple comparisons literature. EVIDENCE: A

15. **Ecological Fallacy** — Inferring individual-level relationships from group-level data. WHY BAD: Aggregate correlations can differ dramatically from individual correlations; neighborhood income vs. individual income shows poor agreement, especially in rural areas. INSTEAD: Use multi-level modeling; collect individual-level data when making individual-level claims. SOURCE: Robinson 1950; Greenland 2001. EVIDENCE: A

16. **Optional Stopping (Data Peeking)** — Repeatedly checking results during data collection and stopping when significance is reached. WHY BAD: Dramatically inflates Type I error rate; sequential testing without correction can yield false positive rates of 20-50%. INSTEAD: Pre-specify sample size via power analysis; use sequential testing methods (O'Brien-Fleming bounds) if interim analyses needed. SOURCE: Simmons et al. 2011; Lakens 2014. EVIDENCE: A

17. **Changing Primary Outcome Post-Hoc** — Switching the primary outcome variable after peeking at data. WHY BAD: One of the most common forms of p-hacking; researchers change to whichever variable happened to reach significance. INSTEAD: Pre-register primary outcomes; label any post-hoc outcome changes as exploratory. SOURCE: Chan et al. 2004 JAMA (showed >60% of trials had changed outcomes). EVIDENCE: A

18. **Ignoring Multiple Comparisons** — Testing many hypotheses without adjusting significance thresholds. WHY BAD: Testing 20 hypotheses at alpha=0.05 yields expected 1 false positive even if all null hypotheses are true. INSTEAD: Apply family-wise error rate correction (Bonferroni) or false discovery rate control (Benjamini-Hochberg). SOURCE: Benjamini & Hochberg 1995; standard statistical methodology. EVIDENCE: A

19. **Confusing Absence of Evidence with Evidence of Absence** — Concluding an effect doesn't exist because a study failed to detect it. WHY BAD: Null results may reflect low statistical power, not true null effects; an underpowered study proves nothing. INSTEAD: Report confidence intervals; conduct power analyses; use equivalence testing (TOST). SOURCE: Altman & Bland 1995 BMJ "Absence of evidence is not evidence of absence." EVIDENCE: A

20. **Small Sample Size without Power Analysis** — Running studies too small to detect meaningful effects. WHY BAD: Underpowered studies have low probability of detecting true effects AND paradoxically, significant results from underpowered studies are more likely to be false positives or inflated estimates. INSTEAD: Conduct a priori power analysis; aim for 80%+ power for smallest effect of interest. SOURCE: Button et al. 2013 Nature Reviews Neuroscience. EVIDENCE: A

21. **Researcher Degrees of Freedom ("Garden of Forking Paths")** — Making undisclosed analytic decisions that inflate false positives. WHY BAD: Choices about outlier exclusion, variable transformation, covariate inclusion, and subgroup analysis create exponentially many possible analyses; even well-intentioned researchers can unconsciously navigate toward significance. INSTEAD: Pre-register analysis pipelines; use multiverse analysis to show sensitivity to choices. SOURCE: Gelman & Loken 2013; Steegen et al. 2016. EVIDENCE: A

22. **Cargo Cult Science** — Following the surface forms of science (methods sections, statistics, peer review) without the substance of rigorous inquiry. WHY BAD: Creates a veneer of legitimacy for fundamentally flawed work. INSTEAD: Focus on actual predictive power and replicability, not ritual compliance. SOURCE: Feynman 1974 Caltech commencement address. EVIDENCE: C

23. **Confusing Mechanism with Evidence** — Accepting a claim because a plausible mechanism exists, regardless of empirical support. WHY BAD: Many plausible mechanisms don't pan out; biology is full of plausible-sounding pathways that don't work as predicted. INSTEAD: Require empirical evidence regardless of mechanistic plausibility. SOURCE: Hill 1965 criteria for causation (biological plausibility is only one of nine criteria). EVIDENCE: B

24. **Dichotomizing Continuous Variables** — Splitting continuous measures into binary categories (e.g., "high" vs. "low" blood pressure at an arbitrary cutoff). WHY BAD: Loses information; can create or hide effects; the specific cutpoint choice is often arbitrary and results-dependent. INSTEAD: Analyze continuous variables as continuous; use splines for non-linear relationships. SOURCE: Royston, Altman & Sauerbrei 2006 BMJ. EVIDENCE: A

25. **Regression to the Mean Confusion** — Attributing natural statistical regression to an intervention or cause. WHY BAD: Extreme values tend to be followed by less extreme values; patients selected for extreme symptoms will "improve" regardless of treatment. INSTEAD: Use control groups; understand that regression to the mean is mathematical certainty, not a biological effect. SOURCE: Galton 1886; Bland & Altman 1994. EVIDENCE: A

26. **Undisclosed Conflicts of Interest** — Failing to report financial or intellectual conflicts that bias research. WHY BAD: Industry-funded studies are 3-4x more likely to report favorable results; this is a well-documented empirical finding. INSTEAD: Mandatory disclosure; independent replication; evaluate methodology independently of funding source. SOURCE: Lexchin et al. 2003 BMJ; Lundh et al. 2017 Cochrane Review. EVIDENCE: A

27. **Sampling Bias** — Drawing conclusions from non-representative samples. WHY BAD: WEIRD samples (Western, Educated, Industrialized, Rich, Democratic) dominate psychology; conclusions may not generalize. INSTEAD: Diverse sampling; report demographic characteristics; conduct cross-cultural replications. SOURCE: Henrich, Heine & Norenzayan 2010 "The weirdest people in the world?" Behavioral and Brain Sciences. EVIDENCE: A

28. **Misinterpreting Confidence Intervals** — Believing a 95% CI means "95% probability the true value is in this range." WHY BAD: Frequentist CIs are about long-run coverage, not the probability of containing the parameter for this specific study. INSTEAD: Use correct interpretation (95% of such intervals would contain the true value) or use Bayesian credible intervals if probabilistic statements about parameters are needed. SOURCE: Morey et al. 2016 Psychonomic Bulletin & Review. EVIDENCE: B

29. **Goodhart's Law Blindness** — Using a measure as a target, then being surprised when it ceases to be a good measure. WHY BAD: "When a measure becomes a target, it ceases to be a good measure." Optimizing for citation counts, h-index, or publication count degrades research quality. INSTEAD: Use multiple diverse metrics; evaluate substance rather than proxy measures. SOURCE: Goodhart 1975; Campbell's Law (Campbell 1979). EVIDENCE: B

30. **Oversimplifying Causal Chains** — Presenting complex multicausal phenomena as simple single-cause explanations. WHY BAD: Most phenomena have multiple interacting causes with feedback loops; single-cause thinking misses interactions, moderators, and mediators. INSTEAD: Use directed acyclic graphs (DAGs); consider multiple causal pathways and interactions. SOURCE: Pearl 2009; epidemiological methodology. EVIDENCE: B

31. **Misusing Averages** — Using means when medians or distributions are more informative. WHY BAD: Means are sensitive to outliers and skew; "average income" in a country with extreme wealth inequality is misleading. INSTEAD: Report distribution shape, median, and relevant percentiles; visualize full distributions. SOURCE: Basic statistics; Anscombe's Quartet (1973). EVIDENCE: A

32. **Ignoring Selection Effects** — Failing to account for how participants/subjects were selected. WHY BAD: Collider bias, Berkson's paradox, and conditioning on outcomes can create spurious associations or mask real ones. INSTEAD: Draw DAGs to identify selection paths; use methods robust to selection (e.g., Heckman correction). SOURCE: Hernan, Hernandez-Diaz & Robins 2004; Pearl 2009. EVIDENCE: B

33. **Fallacy of the Single Study** — Drawing firm conclusions from one study, however well-designed. WHY BAD: Any single study can be a false positive/negative; systematic variation across replications reveals robustness and boundary conditions. INSTEAD: Weight meta-analytic evidence over individual studies; require replication before high confidence. SOURCE: Cumming 2014 "The New Statistics." EVIDENCE: A

34. **Ignoring Measurement Error** — Treating measured variables as if they perfectly capture the underlying construct. WHY BAD: Measurement error attenuates correlations, biases regression coefficients, and can reverse the direction of effects in multi-variable analyses. INSTEAD: Use reliability-corrected estimates; employ latent variable models; report measurement properties. SOURCE: Loken & Gelman 2017 Science. EVIDENCE: A

35. **Naturalistic Fallacy in Research Interpretation** — Concluding that because something IS natural or common, it SHOULD be or is GOOD. WHY BAD: Confuses descriptive findings with normative claims; evolutionary explanations of behavior don't justify behavior. INSTEAD: Maintain clear is/ought distinction; evaluate normative claims with normative reasoning. SOURCE: Hume 1739; Moore 1903 "Principia Ethica." EVIDENCE: C

36. **Reification of Constructs** — Treating abstract statistical constructs (IQ, personality factors) as concrete entities. WHY BAD: Factor analysis identifies statistical patterns, not necessarily real things; "g factor" is a statistical regularity, not a brain structure. INSTEAD: Remember that constructs are models; evaluate their predictive utility without assuming they are "real" entities. SOURCE: Gould 1981 "The Mismeasure of Man"; Borsboom 2005. EVIDENCE: B

37. **Assuming Linearity** — Defaulting to linear models without checking for non-linear relationships. WHY BAD: Many dose-response and biological relationships are non-linear (U-shaped, threshold, saturation); linear models can miss or misrepresent these. INSTEAD: Visualize data; test for non-linearity; use flexible models (splines, GAMs) as needed. SOURCE: Standard statistical methodology; Hastie & Tibshirani 1990. EVIDENCE: B

38. **Ignoring Time-Varying Confounders** — Failing to account for confounders that change over time in longitudinal studies. WHY BAD: Standard regression can introduce bias when confounders are affected by prior treatment; this is a common problem in observational longitudinal data. INSTEAD: Use marginal structural models, g-estimation, or other methods for time-varying confounding. SOURCE: Robins, Hernan & Brumback 2000. EVIDENCE: B

39. **Denominator Neglect** — Focusing on raw counts rather than rates or proportions. WHY BAD: "Country A has more COVID deaths" is meaningless without population denominators; raw numbers obscure actual risk. INSTEAD: Always calculate rates per relevant denominator; use appropriate standardization. SOURCE: Gigerenzer 2002 "Calculated Risks"; basic epidemiology. EVIDENCE: A

40. **Misunderstanding Bayesian vs. Frequentist** — Using frequentist methods but interpreting results as if they were Bayesian (or vice versa). WHY BAD: P-values are NOT the probability the null is true; posterior probabilities ARE the probability of hypotheses given data. Confusion leads to wildly wrong interpretations. INSTEAD: Be explicit about framework; if you want probability of hypotheses, use Bayesian methods. SOURCE: Greenland et al. 2016 "Statistical tests, P values, confidence intervals, and power." EVIDENCE: B

41. **Failing to Consider Competing Hypotheses** — Collecting evidence that confirms one hypothesis without testing alternatives. WHY BAD: Evidence consistent with H1 may also be consistent with H2, H3, ...; confirmation without attempted disconfirmation is weak evidence. INSTEAD: Generate and test multiple competing hypotheses; use strong inference (Platt 1964). SOURCE: Chamberlin 1890 "Method of Multiple Working Hypotheses"; Platt 1964 Science. EVIDENCE: B

42. **Extrapolation Beyond Data Range** — Making predictions far outside the range of observed data. WHY BAD: Relationships may change outside observed ranges; linear extrapolation from a curved relationship produces systematic errors. INSTEAD: Clearly state the range of applicability; use caution language for extrapolation; validate with new data. SOURCE: Standard statistical methodology. EVIDENCE: A

43. **Ignoring Heterogeneity** — Reporting average effects without examining variation across subgroups or contexts. WHY BAD: Average treatment effects can mask that a treatment helps some and harms others; meta-analyses with high I-squared suggest substantial heterogeneity. INSTEAD: Conduct subgroup analyses (pre-registered); report prediction intervals, not just mean effects; examine moderators. SOURCE: Higgins & Thompson 2002; Riley et al. 2011. EVIDENCE: A

44. **Naively Trusting Self-Report Data** — Taking questionnaire responses at face value without considering response biases. WHY BAD: Social desirability, recall bias, acquiescence bias, and demand characteristics systematically distort self-reports. INSTEAD: Use behavioral measures when possible; include validity checks; triangulate with multiple methods. SOURCE: Paulhus 1991; Schwarz 1999 on survey methodology. EVIDENCE: A

45. **Immortal Time Bias** — Incorrectly classifying follow-up time before treatment initiation as "treated" time. WHY BAD: Guarantees treated group appears to have better survival because they had to survive long enough to receive treatment. INSTEAD: Use time-varying exposure definitions; apply landmark analysis or other appropriate methods. SOURCE: Suissa 2008 American Journal of Respiratory and Critical Care Medicine. EVIDENCE: A

46. **Assumption that Large Data = Good Data** — Believing big data automatically yields reliable insights. WHY BAD: Large datasets amplify systematic biases; N=1,000,000 with selection bias is worse than N=1,000 with random sampling. INSTEAD: Evaluate data quality, representativeness, and potential biases regardless of size. SOURCE: Meng 2018 "Statistical paradises and paradoxes in big data." EVIDENCE: B

47. **Ignoring Negative Controls** — Not including conditions that should show no effect to validate methodology. WHY BAD: Without negative controls, you cannot distinguish true effects from methodological artifacts. INSTEAD: Include negative controls; if they show "effects," your methodology has a problem. SOURCE: Lipsitch, Tchetgen Tchetgen & Cohen 2010. EVIDENCE: B

48. **Premature Quantification** — Rushing to quantitative analysis before understanding the phenomenon qualitatively. WHY BAD: Measuring the wrong thing precisely is worse than roughly measuring the right thing; you may miss critical variables or misspecify the model. INSTEAD: Use qualitative methods, domain expertise, and pilot studies before large quantitative studies. SOURCE: Kaplan 1964 "The Conduct of Inquiry." EVIDENCE: C

49. **Status Quo Bias in Methodology** — Continuing to use outdated methods because they are familiar. WHY BAD: Null hypothesis significance testing persists partly from inertia; newer methods (Bayesian analysis, equivalence testing, multiverse analysis) address known limitations. INSTEAD: Evaluate methods based on their properties, not tradition; adopt improved methods as they become available. SOURCE: Cumming 2014; Lakens 2017. EVIDENCE: B

50. **Failing to Report Exact P-Values and Full Results** — Reporting "p<0.05" or "ns" without exact values, or not reporting non-significant results. WHY BAD: Obscures the actual strength of evidence; prevents meta-analysis; enables selective reporting. INSTEAD: Report exact p-values, effect sizes with confidence intervals, and ALL pre-specified analyses regardless of result. SOURCE: APA Publication Manual; CONSORT guidelines. EVIDENCE: A

---

## 50 BEST PRACTICES

1. **Pre-Registration** — Publicly registering hypotheses, methods, and analysis plans before data collection on platforms like OSF or AsPredicted. WHY GOOD: Creates time-stamped commitment; prevents p-hacking, HARKing, and outcome switching; transparently separates confirmatory from exploratory analysis. SOURCE: Nosek et al. 2018; COS pre-registration initiative. EVIDENCE: A

2. **Registered Reports** — Submitting study design for peer review before data collection; accepted papers are published regardless of results. WHY GOOD: Eliminates publication bias; improves methodology through pre-data review; reduces positive result rates from ~90% to ~50%, suggesting other formats have massive bias. SOURCE: Chambers 2013; Scheel et al. 2021 (meta-analysis of registered report outcomes). EVIDENCE: A

3. **Replication Before Belief** — Requiring independent replication before accepting findings as robust. WHY GOOD: Filters out false positives, methodological artifacts, and context-dependent effects; the most direct test of reliability. SOURCE: Open Science Collaboration 2015; Many Labs projects. EVIDENCE: A

4. **Effect Size Reporting** — Always reporting magnitude of effects (Cohen's d, odds ratio, r) alongside significance tests. WHY GOOD: Effect sizes are sample-size independent; they convey practical importance; they enable cumulative science through meta-analysis. SOURCE: Cohen 1988; APA 6th/7th edition mandate. EVIDENCE: A

5. **Power Analysis** — Calculating required sample size before data collection based on smallest effect of interest. WHY GOOD: Ensures study can detect meaningful effects; prevents waste of resources on underpowered studies; identifies when effects are too small to study feasibly. SOURCE: Cohen 1988; Button et al. 2013. EVIDENCE: A

6. **Bayesian Updating** — Using Bayes' theorem to update prior probabilities as evidence accumulates. WHY GOOD: Provides probability of hypothesis given data (what researchers actually want); naturally incorporates prior information; handles optional stopping without inflation. SOURCE: Kruschke 2013; Wagenmakers et al. 2018. EVIDENCE: A

7. **Meta-Analysis** — Systematically synthesizing results across multiple studies to estimate overall effects. WHY GOOD: Increases precision; reveals heterogeneity; can detect publication bias; provides best available estimate of true effect. SOURCE: Cochrane Handbook; Borenstein et al. 2009. EVIDENCE: A

8. **Blinding** — Keeping participants, experimenters, or analysts unaware of condition assignment. WHY GOOD: Prevents expectation effects, demand characteristics, and biased data collection/analysis; double-blinding is gold standard for clinical trials. SOURCE: Schulz & Grimes 2002 Lancet. EVIDENCE: A

9. **Randomization** — Randomly assigning participants to conditions. WHY GOOD: Controls for all confounders, both known and unknown; makes causal inference valid; eliminates Simpson's paradox concern. SOURCE: Fisher 1935; standard experimental methodology. EVIDENCE: A

10. **Open Data and Open Materials** — Making datasets, analysis code, and materials publicly available. WHY GOOD: Enables verification, reanalysis, and meta-analysis; catches errors; promotes transparency and cumulative science. SOURCE: Munafò et al. 2017 Nature Human Behaviour "A manifesto for reproducible science." EVIDENCE: B

11. **Multiverse Analysis** — Running all reasonable analytic specifications and reporting the distribution of results. WHY GOOD: Shows robustness of findings across researcher degrees of freedom; makes arbitrary choices visible; readers see full picture. SOURCE: Steegen et al. 2016 Perspectives on Psychological Science. EVIDENCE: B

12. **Equivalence Testing (TOST)** — Testing whether an effect is small enough to be considered practically equivalent to zero. WHY GOOD: Provides affirmative evidence for null effects (unlike failing to reject null); specifies smallest effect size of interest. SOURCE: Lakens 2017; Schuirmann 1987. EVIDENCE: A

13. **Strong Inference** — Designing experiments that can distinguish between multiple competing hypotheses simultaneously. WHY GOOD: Eliminates alternatives rather than merely confirming favorites; accelerates knowledge accumulation. SOURCE: Platt 1964 Science; Chamberlin 1890. EVIDENCE: B

14. **Directed Acyclic Graphs (DAGs)** — Using causal diagrams to reason about confounding, mediation, and selection bias before analysis. WHY GOOD: Makes causal assumptions explicit and testable; identifies minimal sufficient adjustment sets; prevents common biases like collider bias. SOURCE: Pearl 2009; Hernan & Robins 2020 "Causal Inference: What If." EVIDENCE: A

15. **Sensitivity Analysis** — Testing how robust conclusions are to violations of key assumptions. WHY GOOD: No analysis has perfectly met assumptions; sensitivity analysis quantifies how wrong assumptions would need to be to change conclusions. SOURCE: Rosenbaum 2002; standard methodological practice. EVIDENCE: A

16. **Systematic Review Methodology** — Using explicit, reproducible search and inclusion criteria to review literature. WHY GOOD: Reduces cherry-picking; provides comprehensive picture; identifies gaps; methodology is transparent and reproducible. SOURCE: Cochrane Handbook; PRISMA guidelines. EVIDENCE: A

17. **Intention-to-Treat Analysis** — Analyzing participants in the groups to which they were randomized, regardless of compliance. WHY GOOD: Preserves randomization benefits; prevents selection bias from differential dropout; provides real-world effectiveness estimate. SOURCE: Hollis & Campbell 1999 BMJ. EVIDENCE: A

18. **Natural Frequencies over Probabilities** — Presenting statistical information as natural frequencies rather than percentages/probabilities. WHY GOOD: Dramatically improves understanding; physicians' Bayesian reasoning accuracy increased from ~15% to ~76% with natural frequency presentation. SOURCE: Gigerenzer & Hoffrage 1995; Gigerenzer 2002. EVIDENCE: A

19. **Adversarial Collaboration** — Researchers with opposing views jointly designing and conducting a study. WHY GOOD: Ensures methodology is accepted by both sides; reduces bias in design and interpretation; produces results both sides must accept. SOURCE: Kahneman 2003; Mellers, Hertwig & Kahneman 2001. EVIDENCE: B

20. **Triangulation** — Using multiple methods, data sources, or theoretical frameworks to study the same question. WHY GOOD: Convergent findings across different methods are unlikely to share the same biases; increases confidence in conclusions. SOURCE: Munafò & Davey Smith 2018 Nature. EVIDENCE: B

21. **Active Open-Mindedness** — Deliberately seeking evidence that could change your mind; actively looking for disconfirmation. WHY GOOD: Counteracts confirmation bias; individuals with higher active open-mindedness show better calibration on judgment tasks. SOURCE: Baron 1993; Stanovich & West 1997. EVIDENCE: B

22. **Specification Curve Analysis** — Plotting results across all defensible analytic specifications to visualize robustness. WHY GOOD: Shows whether a finding depends on arbitrary analytic choices; makes the "garden of forking paths" visible and quantifiable. SOURCE: Simonsohn, Simmons & Nelson 2020. EVIDENCE: B

23. **Pre-Prints** — Sharing research before formal peer review on servers like arXiv, bioRxiv, PsyArXiv. WHY GOOD: Accelerates dissemination; enables community feedback; reduces publication lag; makes work citable and timestamped before review. SOURCE: Sarabipour et al. 2019. EVIDENCE: B

24. **Prediction Markets for Science** — Using prediction markets to estimate replicability of published findings. WHY GOOD: Aggregated expert predictions are well-calibrated for replication outcomes; can prioritize replication efforts. SOURCE: Dreber et al. 2015; Camerer et al. 2018 Nature Human Behaviour. EVIDENCE: B

25. **Negative Controls and Falsification Tests** — Including conditions expected to show no effect to validate methodology. WHY GOOD: If your "placebo" condition shows an effect, your methodology is compromised; provides internal validity check. SOURCE: Lipsitch et al. 2010; standard experimental methodology. EVIDENCE: A

26. **Confidence Intervals over P-Values** — Reporting confidence intervals as primary inferential statistic rather than binary significant/non-significant. WHY GOOD: Conveys precision of estimates; naturally shows effect size; avoids binary thinking; enables accumulation of evidence. SOURCE: Cumming 2014 "The New Statistics"; APA guidelines. EVIDENCE: A

27. **Cross-Validation** — Testing model performance on held-out data not used in model fitting. WHY GOOD: Prevents overfitting; provides honest estimate of predictive accuracy; essential for any predictive model. SOURCE: Stone 1974; Hastie, Tibshirani & Friedman 2009. EVIDENCE: A

28. **Calibration Training** — Practicing making probabilistic judgments and receiving feedback to improve calibration. WHY GOOD: Calibration training reliably improves judgment accuracy; well-calibrated forecasters report confidence levels that match actual accuracy rates. SOURCE: Lichtenstein & Fischhoff 1980; Good Judgment Project. EVIDENCE: A

29. **Effect Size Benchmarks** — Using domain-specific benchmarks rather than arbitrary "small/medium/large" categories. WHY GOOD: Cohen's original d=0.2/0.5/0.8 benchmarks were never intended as universal; what's "small" in one domain may be enormous in another. INSTEAD: Compare to relevant real-world effects in the same domain. SOURCE: Funder & Ozer 2019. EVIDENCE: B

30. **Sequential Analysis with Proper Correction** — Using sequential testing designs that allow interim looks at data while controlling error rates. WHY GOOD: More efficient than fixed-N designs; allows early stopping for efficacy or futility; maintains statistical validity. SOURCE: O'Brien & Fleming 1979; Lakens 2014. EVIDENCE: A

31. **CONSORT/STROBE Reporting Guidelines** — Following standardized reporting checklists for studies. WHY GOOD: Ensures complete reporting; prevents selective omission; enables proper evaluation and replication. SOURCE: Schulz et al. 2010 (CONSORT); von Elm et al. 2007 (STROBE). EVIDENCE: A

32. **Crowdsourced Replication** — Coordinating many labs to simultaneously replicate a finding. WHY GOOD: High statistical power; assesses heterogeneity across sites; definitive tests of replicability. SOURCE: Many Labs (Klein et al. 2014, 2018). EVIDENCE: A

33. **Blinded Analysis** — Having the analyst blinded to the hypothesis or condition labels during analysis. WHY GOOD: Prevents conscious or unconscious biased analysis decisions; forces pre-commitment to analytic strategy. SOURCE: MacCoun & Perlmutter 2015 Nature. EVIDENCE: B

34. **Separation of Exploration and Confirmation** — Explicitly labeling analyses as exploratory vs. confirmatory, using split-sample or hold-out approaches. WHY GOOD: Prevents exploratory findings from being presented as confirmatory; maintains correct error rates for confirmatory tests. SOURCE: Wagenmakers et al. 2012; de Groot 1956/2014. EVIDENCE: A

35. **Formal Causal Inference Methods** — Using structural equation models, instrumental variables, or potential outcomes framework for causal claims. WHY GOOD: Makes causal assumptions explicit and testable; provides principled basis for causal claims from observational data. SOURCE: Pearl 2009; Rubin 1974; Angrist & Pischke 2009. EVIDENCE: A

36. **Publication of Null Results** — Actively seeking venues to publish well-powered negative findings. WHY GOOD: Combats publication bias; prevents research waste from repeated failed replications that stay hidden; informs the field about what doesn't work. SOURCE: Journal of Articles in Support of the Null Hypothesis; PLOS ONE. EVIDENCE: B

37. **Data Quality Checks Before Analysis** — Systematically checking for data entry errors, outliers, distributional assumptions, and missing data patterns before hypothesis testing. WHY GOOD: Prevents errors from propagating into conclusions; many "surprising" findings are data errors. INSTEAD: Build automated data validation pipelines. SOURCE: Standard data science and statistical practice. EVIDENCE: A

38. **Reporting All Conditions and Measures** — Disclosing all experimental conditions and dependent variables, not just significant ones. WHY GOOD: Prevents selective reporting; enables accurate meta-analysis; provides complete picture for readers. SOURCE: Simmons et al. 2012 "21 Word Solution." EVIDENCE: A

39. **Independent Variable Manipulation Check** — Verifying that experimental manipulations actually worked as intended. WHY GOOD: Non-significant results may be due to failed manipulation rather than false hypothesis; establishes that the independent variable was effectively instantiated. SOURCE: Standard experimental methodology. EVIDENCE: B

40. **Computation Reproducibility** — Sharing analysis code, computational environment, and random seeds to enable exact replication of analyses. WHY GOOD: Catches coding errors (which are common); enables verification of results without relying solely on verbal description of methods. SOURCE: Stodden, Seiler & Ma 2018; Docker/containerization approaches. EVIDENCE: B

41. **Prior Elicitation and Documentation** — Formally documenting prior knowledge and uncertainty before data collection. WHY GOOD: Prevents unconscious updating of "priors" after seeing data; creates accountability; enables formal Bayesian analysis. SOURCE: O'Hagan et al. 2006. EVIDENCE: B

42. **Effect Size Planning** — Determining the smallest effect size of interest (SESOI) before conducting a study. WHY GOOD: Grounds research in practical importance; prevents declaring trivially small effects as "discoveries"; enables equivalence testing. SOURCE: Lakens, Scheel & Isager 2018. EVIDENCE: B

43. **Structured Peer Review** — Using checklists and structured evaluation criteria for peer review. WHY GOOD: Reduces inconsistency in review quality; ensures critical methodological issues are evaluated; improves reliability of peer review process. SOURCE: Various journal initiatives; Hardwicke et al. 2020. EVIDENCE: B

44. **Multi-Site Studies** — Conducting the same study across multiple laboratories or settings. WHY GOOD: Tests generalizability; estimates heterogeneity; more credible than single-site findings. SOURCE: Many Labs project; multicenter clinical trial methodology. EVIDENCE: A

45. **Distinguishing Prediction from Explanation** — Recognizing that good predictive models are not necessarily good explanatory models and vice versa. WHY GOOD: Prevents conflating correlation-based prediction with causal understanding; different goals require different methods. SOURCE: Shmueli 2010 Statistical Science. EVIDENCE: B

46. **Within-Study Replication** — Building internal replication into study designs. WHY GOOD: Provides immediate test of robustness; more efficient than separate replication studies; catches one-off artifacts. SOURCE: Munafo et al. 2014. EVIDENCE: B

47. **Constraint Satisfaction Approach** — Evaluating claims against multiple independent lines of evidence that converge on the same conclusion. WHY GOOD: Highly improbable that multiple independent methods all produce the same bias; convergent evidence is much stronger than any single line. SOURCE: Thagard 1989 "Explanatory Coherence." EVIDENCE: B

48. **Error Management Theory Awareness** — Understanding that some cognitive "biases" may be adaptive error management under evolutionary constraints. WHY GOOD: Prevents dismissing all heuristics as errors; some "biases" may be optimal under uncertainty or asymmetric costs. SOURCE: Haselton & Buss 2000; Gigerenzer 2008 "Rationality for Mortals." EVIDENCE: B

49. **Formal Model Comparison** — Using AIC, BIC, Bayes factors, or cross-validation to compare competing models rather than using arbitrary model selection. WHY GOOD: Provides principled basis for choosing among explanations; penalizes complexity; avoids overfitting. SOURCE: Burnham & Anderson 2002; Wagenmakers 2007. EVIDENCE: A

50. **Science of Science (Metascience)** — Studying the scientific process itself using empirical methods. WHY GOOD: Identifies systematic biases in the literature; develops and evaluates reforms; evidence-based improvement of the evidence-generation process itself. SOURCE: Ioannidis 2005; Munafò et al. 2017; Center for Open Science. EVIDENCE: B

---

## 10 COMMON LLM MISCONCEPTIONS ABOUT SCIENTIFIC METHOD

1. **"Statistical significance means the result is important"** — LLMs frequently conflate statistical significance (p<0.05) with practical importance or effect size. A p-value only indicates the probability of data as extreme as observed IF the null hypothesis is true; it says nothing about magnitude, importance, or probability the hypothesis is correct.

2. **"A single well-designed study proves a finding"** — LLMs tend to cite individual studies as definitive evidence. No single study, however rigorous, is sufficient; replication across different contexts and labs is required for high confidence. Meta-analyses should be weighted more heavily.

3. **"Peer review guarantees quality"** — LLMs treat "peer-reviewed" as a quality certificate. Peer review catches some errors but has high variability, low inter-reviewer reliability, and fails to detect many statistical errors, fabrication, and questionable practices.

4. **"Correlation data cannot inform causal questions"** — LLMs sometimes overcorrect by refusing to discuss causation from observational data. While correlation alone is insufficient, formal causal inference methods (instrumental variables, regression discontinuity, DAGs) can yield causal conclusions from observational data under stated assumptions.

5. **"The Dunning-Kruger effect shows incompetent people think they're the best"** — LLMs frequently repeat the popular misrepresentation. The actual finding is that low-performers overestimate their OWN performance but still rate themselves BELOW high-performers. Recent statistical analyses suggest much of the effect may be a statistical artifact of regression to the mean and bounded scales.

6. **"Bayesian and frequentist methods always give different answers"** — LLMs sometimes present these as opposing frameworks. With sufficient data and weakly informative priors, they often converge; the differences are most pronounced with small samples and strong priors. The key difference is interpretive, not always numerical.

7. **"Replication failure means the original was fraud"** — LLMs may imply that non-replication indicates fraud. Most replication failures are due to inflated initial estimates, undisclosed moderators, or methodological differences, not deliberate fraud. Fraud is rare; questionable research practices are common.

8. **"More data always makes research better"** — LLMs sometimes suggest increasing sample size as a universal solution. Large N amplifies systematic biases; a million biased observations are worse than a thousand well-sampled ones (Meng 2018).

9. **"Effect sizes are universal (Cohen's small/medium/large)"** — LLMs apply Cohen's d=0.2/0.5/0.8 benchmarks across all domains. Cohen himself described these as preliminary and domain-dependent. A d=0.2 in a high-stakes medical intervention is enormous; in some psychology contexts it is trivial.

10. **"Falsifiability is the sole criterion for science"** — LLMs often present Popper's falsificationism as the complete demarcation criterion. Modern philosophy of science recognizes falsifiability as important but insufficient; Lakatos's research programs, Kuhn's paradigms, and Bayesian confirmation theory all refine this picture.

---
---

# Decision Making: Evidence-Based Practices

> Evidence ratings: **A** = replicated experimental evidence / meta-analyses; **B** = well-supported by multiple studies; **C** = theoretical/expert consensus with limited direct experimental tests.

---

## 50 BAD PRACTICES

1. **Sunk Cost Fallacy** — Continuing an endeavor because of past investment (time, money, effort) rather than future prospects. WHY BAD: Past costs are irrecoverable and irrelevant to optimal future action; Arkes & Blumer (1985) showed majority chose expensive ski trip over cheaper one they'd enjoy more. INSTEAD: Ask "If I hadn't already invested, would I start now?" Evaluate only future costs and benefits. SOURCE: Arkes & Blumer 1985; Thaler 1980. EVIDENCE: A

2. **Anchoring Effect** — Being disproportionately influenced by the first number or piece of information encountered. WHY BAD: Even random anchors bias subsequent estimates; real estate appraisers' valuations shift 10-15% based on arbitrary listing prices. INSTEAD: Generate your own estimate before seeing others'; consider multiple reference points; use ranges. SOURCE: Tversky & Kahneman 1974; Northcraft & Neale 1987. EVIDENCE: A

3. **Confirmation Bias** — Systematically seeking, interpreting, and remembering information that confirms pre-existing beliefs. WHY BAD: Creates information bubbles; maintains beliefs in the face of contrary evidence; leads to overconfidence in wrong conclusions. INSTEAD: Actively seek disconfirming evidence; ask "What would change my mind?"; use scout mindset (Galef 2021). SOURCE: Wason 1960; Nickerson 1998 Review of General Psychology. EVIDENCE: A

4. **Availability Heuristic** — Judging probability by how easily examples come to mind (recent, vivid, emotional events seem more likely). WHY BAD: People overestimate risks of dramatic events (plane crashes, shark attacks) and underestimate mundane risks (car accidents, heart disease); recent events dominate. INSTEAD: Look up actual base rates; use statistical data rather than recalled examples. SOURCE: Tversky & Kahneman 1973; Slovic, Fischhoff & Lichtenstein 1982. EVIDENCE: A

5. **Planning Fallacy** — Systematically underestimating the time, cost, and risks of future actions while overestimating benefits. WHY BAD: Sydney Opera House: estimated 7 years/$7M, took 16 years/$102M. It is one of the most robust biases in psychology, affecting individuals and organizations alike. INSTEAD: Use reference class forecasting (Kahneman & Tversky 1979); break tasks into components; use historical base rates. SOURCE: Kahneman & Tversky 1979; Buehler, Griffin & Ross 1994; Flyvbjerg 2006. EVIDENCE: A

6. **Groupthink** — Cohesive groups prioritizing unanimity over realistic appraisal of alternatives. WHY BAD: Janis (1972) analyzed Bay of Pigs, Challenger disaster, and other catastrophic group decisions; symptoms include illusion of invulnerability, self-censorship, pressure on dissenters. INSTEAD: Designate a devil's advocate; encourage dissent; use anonymous input mechanisms; consult outsiders. SOURCE: Janis 1972 "Victims of Groupthink." EVIDENCE: B (note: Janis's specific case analyses have been challenged by newer evidence; the general phenomenon is well-supported)

7. **Analysis Paralysis** — Overthinking a decision to the point where no action is taken. WHY BAD: Perfect information is unobtainable; delay itself has costs (opportunity cost, decision fatigue); diminishing returns on additional information gathering. INSTEAD: Use satisficing for reversible decisions (Simon 1956); set decision deadlines; apply Bezos 70% rule. SOURCE: Simon 1955 "A Behavioral Model of Rational Choice"; Schwartz 2004 "The Paradox of Choice." EVIDENCE: B

8. **Overconfidence Bias** — Systematically overestimating the accuracy of one's own judgments and predictions. WHY BAD: People's 90% confidence intervals contain the true value only ~50% of the time; this is among the most robust and damaging biases. INSTEAD: Track prediction accuracy; practice probabilistic thinking; take the "outside view." SOURCE: Lichtenstein, Fischhoff & Phillips 1982; Moore & Healy 2008. EVIDENCE: A

9. **Status Quo Bias** — Preferring the current state of affairs even when alternatives are objectively better. WHY BAD: Default organ donation policies show dramatic effects: countries with opt-out have 85-99% donation rates vs. 4-27% for opt-in. People overvalue what they already have. INSTEAD: Regularly re-evaluate defaults; imagine you were choosing from scratch; consider the cost of inaction. SOURCE: Samuelson & Zeckhauser 1988; Johnson & Goldstein 2003. EVIDENCE: A

10. **Loss Aversion** — Weighting potential losses approximately twice as heavily as equivalent gains. WHY BAD: Leads to excessive risk aversion for small stakes; prevents taking positive expected value gambles; underlies status quo bias and endowment effect. Replicated globally in 19 countries. INSTEAD: Evaluate decisions based on expected value; consider ensemble of decisions over time; reframe losses as costs. SOURCE: Kahneman & Tversky 1979 Prospect Theory; replicated by Ruggeri et al. 2020 Nature Human Behaviour. EVIDENCE: A

11. **Dunning-Kruger Misapplication** — Assuming the least competent are the most confident (the popular misrepresentation). WHY BAD: The actual finding is more nuanced — low performers overestimate their own performance but don't rate themselves above high performers. Recent studies (Gignac & Zajenkowski 2020) suggest the effect may be largely a statistical artifact of regression to the mean on bounded scales. INSTEAD: Focus on calibration training rather than assuming a fixed competence-confidence relationship. SOURCE: Kruger & Dunning 1999; Gignac & Zajenkowski 2020. EVIDENCE: B (contested)

12. **Hindsight Bias** — After learning an outcome, believing you "knew it all along." WHY BAD: Distorts evaluation of past decisions; makes people unable to learn from mistakes because they misremember having predicted the outcome; unfairly judges decision-makers. INSTEAD: Use decision journals to record reasoning before outcomes are known; evaluate decisions by process, not outcome. SOURCE: Fischhoff 1975; Roese & Vohs 2012. EVIDENCE: A

13. **Narrative Fallacy** — Constructing coherent stories to explain random events, making them seem predictable in retrospect. WHY BAD: Our brains are wired to create cause-and-effect stories from random sequences; this creates false confidence in predictive ability and illusory understanding. INSTEAD: Recognize that many events are stochastic; evaluate based on probability distributions, not stories; consider alternative narratives. SOURCE: Taleb 2007 "The Black Swan"; Kahneman 2011 "Thinking, Fast and Slow." EVIDENCE: B

14. **Outcome Bias** — Judging the quality of a decision by its outcome rather than the quality of the reasoning process. WHY BAD: Good decisions can have bad outcomes (and vice versa) due to chance; evaluating by outcome encourages reckless behavior that happened to work and punishes careful reasoning that was unlucky. INSTEAD: Evaluate the decision process: was the reasoning sound? Was the information available properly used? SOURCE: Baron & Hershey 1988; Taleb 2001 "Fooled by Randomness." EVIDENCE: A

15. **Pro-Innovation Bias** — Assuming an innovation will be adopted by all members of a society and should be without adaptation. WHY BAD: Leads to premature scaling, ignoring valid resistance, and failure to adapt innovations to local contexts; not all innovations are improvements. INSTEAD: Pilot test; listen to skeptics; adapt to context; evaluate evidence of effectiveness. SOURCE: Rogers 2003 "Diffusion of Innovations." EVIDENCE: B

16. **Framing Effect** — Making different choices based on how information is presented (gain vs. loss frame) even when the underlying facts are identical. WHY BAD: "90% survival rate" vs. "10% mortality rate" produces different medical decisions despite identical information; violated rational choice theory. INSTEAD: Reframe in multiple ways; translate between frames; present both gain and loss frames. SOURCE: Tversky & Kahneman 1981 "The Framing of Decisions." EVIDENCE: A

17. **Neglect of Probability** — Ignoring probability when making decisions, especially for emotional or extreme outcomes. WHY BAD: People treat 1% risk and 0.001% risk similarly when the outcome is terrifying (terrorism, nuclear); leads to disproportionate resource allocation. INSTEAD: Force explicit probability estimates; use expected value calculations; compare risks quantitatively. SOURCE: Sunstein 2002; Slovic 2000. EVIDENCE: A

18. **Conjunction Fallacy** — Judging the conjunction of two events as more probable than either event alone ("Linda problem"). WHY BAD: Violates basic probability (P(A and B) <= P(A)); representativeness heuristic makes specific, detailed scenarios seem more likely than general ones. INSTEAD: Use frequency formats; check whether conjunction probability makes mathematical sense. SOURCE: Tversky & Kahneman 1983. EVIDENCE: A

19. **Bandwagon Effect** — Adopting beliefs or behaviors because many others do. WHY BAD: Popularity is not evidence of truth; information cascades can lead entire groups astray when each individual follows the previous one rather than their own information. INSTEAD: Evaluate evidence independently; weight expert assessment over popular opinion; consider information cascade dynamics. SOURCE: Bikhchandani, Hirshleifer & Welch 1992. EVIDENCE: A

20. **Endowment Effect** — Overvaluing things simply because you own them. WHY BAD: Kahneman, Knetsch & Thaler (1990) showed people demanded ~2x more to sell a mug than they'd pay to buy it; creates market inefficiency and irrational retention. INSTEAD: Ask "Would I acquire this today at the current price/cost?" SOURCE: Kahneman, Knetsch & Thaler 1990; Thaler 1980. EVIDENCE: A

21. **Scope Neglect / Scope Insensitivity** — Failing to scale emotional or financial response proportionally to the magnitude of a problem. WHY BAD: People pay similar amounts to save 2,000 vs. 200,000 migrating birds; emotional response saturates rather than scaling. INSTEAD: Force quantitative comparison; use per-unit metrics; compare to reference classes. SOURCE: Kahneman 1986; Desvousges et al. 1993. EVIDENCE: A

22. **Zero-Risk Bias** — Preferring complete elimination of a small risk over greater overall risk reduction. WHY BAD: Reducing a risk from 5% to 0% is valued more than reducing from 50% to 25%, even though the latter saves more lives; leads to misallocation of resources. INSTEAD: Compare expected outcomes; focus on total risk reduction rather than elimination of any single risk. SOURCE: Baron, Gowda & Kunreuther 1993. EVIDENCE: B

23. **WYSIATI (What You See Is All There Is)** — Making decisions based only on available information without considering what might be missing. WHY BAD: You build the best story from available evidence and believe it; you don't spontaneously consider what evidence MIGHT exist but you haven't seen. INSTEAD: Explicitly ask "What am I not seeing? What information would change this decision?" SOURCE: Kahneman 2011 "Thinking, Fast and Slow." EVIDENCE: B

24. **Affect Heuristic** — Letting current emotional state drive risk and benefit assessments. WHY BAD: Positive mood makes risks seem lower and benefits higher; negative mood does the opposite; emotional reactions to labels ("nuclear," "organic") override evidence. INSTEAD: Delay decisions when emotional; use structured decision frameworks; separate fact-gathering from valuation. SOURCE: Slovic et al. 2007; Finucane et al. 2000. EVIDENCE: A

25. **Mere Exposure Effect Bias** — Preferring familiar options simply because they're familiar. WHY BAD: Familiarity breeds preference, not quality; leads to brand loyalty independent of value; contributes to status quo bias. INSTEAD: Evaluate options on criteria, not familiarity; blind test when possible. SOURCE: Zajonc 1968. EVIDENCE: A

26. **Illusion of Control** — Believing you have more control over outcomes than you actually do. WHY BAD: People believe they can influence dice rolls through how they throw; leads to poor risk assessment and inadequate contingency planning. INSTEAD: Distinguish skill-based from chance-based outcomes; plan for uncontrollable factors. SOURCE: Langer 1975. EVIDENCE: A

27. **Peak-End Rule Distortion** — Evaluating experiences based on peak intensity and ending rather than overall quality. WHY BAD: Leads to choices that maximize peak/end at expense of total duration; a colonoscopy that was worse overall but ended better is remembered as preferable. INSTEAD: Track objective measures of total experience; don't rely solely on retrospective evaluation. SOURCE: Kahneman, Fredrickson, Schreiber & Redelmeier 1993. EVIDENCE: A

28. **Representativeness Heuristic Misuse** — Judging probability by similarity to stereotypes rather than base rates. WHY BAD: "Steve is shy and organized" — people judge him more likely a librarian than farmer despite farmers vastly outnumbering librarians; ignores base rates. INSTEAD: Start with base rates, then adjust for diagnostic information using Bayesian reasoning. SOURCE: Kahneman & Tversky 1973. EVIDENCE: A

29. **Distinction Bias** — Overvaluing differences between options when evaluating them side-by-side that wouldn't matter in experience. WHY BAD: Side-by-side comparison makes trivial differences seem important; people pay premiums for differences they can't detect in daily use. INSTEAD: Evaluate options in the context of actual use, not artificial comparison. SOURCE: Hsee & Zhang 2004. EVIDENCE: B

30. **Commitment and Consistency Trap** — Escalating commitment to a course of action because you previously committed to it publicly. WHY BAD: Public commitment creates psychological pressure to continue even when evidence shows the course is failing; drives escalation of commitment. INSTEAD: Set pre-defined exit criteria; use "kill criteria" established at project start. SOURCE: Cialdini 1984; Staw 1976 "Knee-deep in the big muddy." EVIDENCE: A

31. **Authority Bias** — Deferring to authority figures even when they are wrong or outside their domain of expertise. WHY BAD: Milgram's experiments showed people administer apparently dangerous shocks when told to by an authority; experts outside their domain are no more reliable than laypeople. INSTEAD: Evaluate evidence independent of source; distinguish between in-domain and out-of-domain authority. SOURCE: Milgram 1963; Cialdini 1984. EVIDENCE: A

32. **Survivorship Bias in Decision Making** — Studying only successful outcomes to derive decision-making principles. WHY BAD: "Study successful CEOs" ignores that failed CEOs may have had identical traits; selection on outcomes creates misleading patterns. INSTEAD: Study both successes and failures; compare what differentiates them; look at base rates of the traits among all candidates. SOURCE: Wald 1943; Denrell 2003. EVIDENCE: A

33. **Recency Bias** — Overweighting recent events in predictions and decisions. WHY BAD: Stock market: recent gains make people bullish, recent losses make them bearish, regardless of fundamentals; extrapolation from small recent samples. INSTEAD: Use longer time horizons; weight base rates; use systematic data rather than recent impressions. SOURCE: Tversky & Kahneman 1973 (availability); DeBondt & Thaler 1985. EVIDENCE: A

34. **Omission Bias** — Preferring inaction over action even when action has better expected value. WHY BAD: Parents refuse vaccines (action) even when disease risk (inaction) is objectively greater; failure to act is psychologically easier to justify. INSTEAD: Evaluate outcomes of both action and inaction; recognize that inaction is itself a choice with consequences. SOURCE: Ritov & Baron 1990; Spranca, Minsk & Baron 1991. EVIDENCE: A

35. **Hyperbolic Discounting** — Dramatically overvaluing immediate rewards relative to future ones. WHY BAD: Present-biased preferences lead to procrastination, undersaving, and choosing smaller-sooner over larger-later rewards in ways that violate own stated preferences. INSTEAD: Use commitment devices; pre-commit to future actions; reframe future costs as present costs. SOURCE: Laibson 1997; Frederick, Loewenstein & O'Donoghue 2002. EVIDENCE: A

36. **Ambiguity Aversion (Ellsberg Paradox)** — Preferring known probabilities over unknown probabilities even when expected values are equal. WHY BAD: Leads to avoiding decisions with uncertainty even when they have better expected outcomes; favors "the devil you know." INSTEAD: Distinguish between risk (known probabilities) and uncertainty (unknown probabilities); manage uncertainty through information gathering rather than avoidance. SOURCE: Ellsberg 1961; Fox & Tversky 1995. EVIDENCE: A

37. **Information Bias** — Seeking more information even when it cannot affect the decision. WHY BAD: Feels productive but delays action; additional information may increase confidence without increasing accuracy (Tsai et al. 2008 showed more information made people more confident but not more accurate). INSTEAD: Ask "Would any answer to this question change my decision?" If not, stop gathering. SOURCE: Baron, Beattie & Hershey 1988. EVIDENCE: B

38. **Denomination Effect** — Treating money differently based on its physical form. WHY BAD: People are more reluctant to break a $100 bill than to spend five $20 bills; fungibility of money is violated, leading to irrational spending patterns. INSTEAD: Track total spending rather than transaction-by-transaction; use budgets rather than denomination-based rules. SOURCE: Raghubir & Srivastava 2009. EVIDENCE: B

39. **Optimism Bias** — Systematically overestimating the probability of positive outcomes for oneself. WHY BAD: Most people rate themselves as above-average drivers, having below-average divorce risk, etc.; leads to inadequate preparation and risk management. INSTEAD: Use base rates for your reference class; track your actual prediction accuracy; seek outside views. SOURCE: Weinstein 1980; Sharot 2011. EVIDENCE: A

40. **Social Proof in Decision Making** — Using others' behavior as primary evidence for correct action. WHY BAD: Information cascades can lead to herding where everyone follows everyone else's (potentially wrong) signal; pluralistic ignorance can maintain harmful norms. INSTEAD: Evaluate evidence independently; weight expert consensus over popular behavior; consider cascade dynamics. SOURCE: Cialdini 1984; Bikhchandani et al. 1992. EVIDENCE: A

41. **Belief Perseverance** — Maintaining beliefs even after the evidence supporting them has been completely discredited. WHY BAD: Ross, Lepper & Hubbard (1975) showed that after debriefing revealed initial "evidence" was fabricated, participants' beliefs barely changed; creates zombie beliefs. INSTEAD: Track the evidential basis for beliefs; if the foundation is removed, update the belief. SOURCE: Ross, Lepper & Hubbard 1975; Anderson, Lepper & Ross 1980. EVIDENCE: A

42. **Reactive Devaluation** — Devaluing a proposal merely because it comes from an adversary or opponent. WHY BAD: The same proposal is rated significantly less favorable when attributed to the "other side"; prevents reaching mutually beneficial agreements. INSTEAD: Evaluate proposals on merits, blind to source; use structured evaluation criteria. SOURCE: Ross 1995; Maoz et al. 2002. EVIDENCE: A

43. **Identifiable Victim Effect** — Responding more strongly to identified individuals than to statistical lives. WHY BAD: "Save Baby Jessica" generates millions while millions dying of preventable disease generates less response; systematically distorts resource allocation from utilitarian optimum. INSTEAD: Use statistical reasoning for resource allocation; make policies based on expected lives saved per dollar. SOURCE: Schelling 1968; Small & Loewenstein 2003. EVIDENCE: A

44. **Feature Creep / Adding by Subtraction Failure** — Defaulting to adding features/options rather than removing them. WHY BAD: Adams et al. (2021 Nature) showed people systematically overlook subtractive solutions; organizations accumulate rules, features, and processes without removing outdated ones. INSTEAD: Explicitly consider "What could I remove?" for every decision; practice via negativa. SOURCE: Adams et al. 2021 Nature. EVIDENCE: A

45. **Focusing Illusion** — Overweighting whatever aspect of a decision you're currently thinking about. WHY BAD: "Nothing in life is as important as you think it is while you are thinking about it" (Kahneman); leads to overvaluing salient factors in any comparison. INSTEAD: Use comprehensive criteria lists; don't make decisions while focused on one factor; sleep on important decisions. SOURCE: Kahneman 2011; Schkade & Kahneman 1998. EVIDENCE: B

46. **Decoy Effect (Asymmetric Dominance)** — Preferences shift when a dominated option is added. WHY BAD: Adding a clearly inferior option makes the option it is most similar to look better; used extensively in marketing to manipulate consumer choice. INSTEAD: Evaluate options against your criteria, not against each other; remove dominated options before deciding. SOURCE: Huber, Payne & Puto 1982; Ariely 2008. EVIDENCE: A

47. **Default Effect Exploitation** — Passively accepting defaults rather than actively choosing. WHY BAD: Organ donation rates (4-27% opt-in vs. 85-99% opt-out in comparable countries) demonstrate the enormous power of defaults; people often don't realize they're "choosing." INSTEAD: Audit your defaults; actively choose rather than passively accepting; recognize when defaults are being used to steer you. SOURCE: Johnson & Goldstein 2003; Thaler & Sunstein 2008 "Nudge." EVIDENCE: A

48. **Mental Accounting** — Treating money in different mental "accounts" as if it were not fungible. WHY BAD: People treat "bonus" money differently from "salary" money; gamble more with "house money"; leads to irrational financial behavior. INSTEAD: Evaluate money as fungible; consider total portfolio/wealth rather than individual accounts. SOURCE: Thaler 1999 "Mental Accounting Matters." EVIDENCE: A

49. **Neglecting Opportunity Costs** — Failing to consider the value of the next best alternative when making a choice. WHY BAD: Frederick et al. (2009) showed people routinely ignore opportunity costs unless explicitly reminded; every dollar spent is a dollar not spent on the next-best option. INSTEAD: Explicitly ask "What else could I do with this time/money/attention?" for every significant commitment. SOURCE: Frederick et al. 2009; basic economic theory. EVIDENCE: A

50. **Substitution Heuristic** — Answering an easier question when faced with a hard one without realizing the switch. WHY BAD: "How effective is this policy?" becomes "How do I feel about it?"; "How likely is this event?" becomes "How easily can I imagine it?"; systematically biases decisions. INSTEAD: Identify the actual question; decompose hard questions into answerable components; use structured decision frameworks. SOURCE: Kahneman 2011 "Thinking, Fast and Slow"; Kahneman & Frederick 2002. EVIDENCE: B

---

## 50 BEST PRACTICES

1. **Pre-Mortem Analysis** — Before starting a project, assume it has failed and work backward to identify what went wrong. WHY GOOD: Research shows it increases ability to accurately forecast risks by 30%; reduces overconfidence more effectively than pros-and-cons analysis; Nobel laureates Kahneman and Thaler endorse it. A study of 178 students confirmed its superiority over standard methods. SOURCE: Klein 2007 Harvard Business Review; Veinott et al. 2010. EVIDENCE: A

2. **Bayesian Reasoning** — Updating probability estimates based on new evidence using Bayes' theorem, starting from base rates. WHY GOOD: Provides mathematically optimal framework for updating beliefs; naturally accounts for base rates; prevents base rate neglect. SOURCE: Bayes 1763; Kahneman & Tversky 1973; medical diagnosis applications. EVIDENCE: A

3. **Expected Value Calculation** — Multiplying probability of each outcome by its value and choosing the option with highest expected value. WHY GOOD: Mathematically optimal for repeated decisions; forces explicit probability and value estimation; prevents neglect of probability. SOURCE: von Neumann & Morgenstern 1944; standard decision theory. EVIDENCE: A

4. **Decision Journals** — Documenting reasoning, alternatives considered, uncertainties, and predictions before outcomes are known. WHY GOOD: Combats hindsight bias; enables learning from past decisions; creates accountability for reasoning quality independent of outcomes. SOURCE: Recommended by Kahneman, Buffett, Bezos; fs.blog practices. EVIDENCE: C (strong theoretical basis, limited experimental evidence on this specific practice)

5. **Red Team / Devil's Advocate** — Deliberately assigning someone to argue against the group consensus or preferred plan. WHY GOOD: Counteracts groupthink; surfaces overlooked flaws and alternatives; US intelligence community uses it; forces consideration of opposing views. SOURCE: Janis 1972 remedy; US Army Red Team University practices. EVIDENCE: B

6. **Fermi Estimation** — Breaking unknown quantities into components you can estimate, then multiplying/adding them together. WHY GOOD: Produces order-of-magnitude estimates from minimal data; develops quantitative reasoning skills; prevents pure guessing. Named for Enrico Fermi who could estimate "how many piano tuners in Chicago" from first principles. SOURCE: Weinstein & Adam 2008; physics and engineering tradition. EVIDENCE: B

7. **Scout Mindset** — Approaching questions with genuine curiosity about the truth rather than defending a pre-existing position. WHY GOOD: "Superforecasters" who embodied scout mindset improved accuracy 25% per year while others didn't improve at all (Tetlock 2015). Galef (2021) shows scout mindset correlates with better calibration and real-world decision outcomes. SOURCE: Galef 2021 "The Scout Mindset"; Tetlock 2015 "Superforecasting." EVIDENCE: B

8. **Second-Order Thinking** — Considering not just the immediate consequences of a decision, but the consequences of those consequences. WHY GOOD: Most people stop at first-order effects; second-order thinking catches unintended consequences, feedback loops, and system dynamics. SOURCE: Senge 1990 "The Fifth Discipline"; Marks 2011 "The Most Important Thing." EVIDENCE: C

9. **Reversible vs. Irreversible Decisions (Bezos Type 1/Type 2)** — Classifying decisions by reversibility and applying proportional deliberation. WHY GOOD: Prevents analysis paralysis for low-stakes decisions while ensuring adequate deliberation for high-stakes ones. Type 2 (reversible): decide fast at 70% certainty. Type 1 (irreversible): slow down, gather more information. SOURCE: Bezos 1997 shareholder letter; Amazon decision-making culture. EVIDENCE: C

10. **Reference Class Forecasting** — Predicting outcomes by looking at a reference class of similar past cases rather than building from the inside. WHY GOOD: Directly combats planning fallacy; Flyvbjerg showed it dramatically improves infrastructure project cost/time estimates; adopted by UK government for major projects. SOURCE: Kahneman & Tversky 1979; Flyvbjerg 2006. EVIDENCE: A

11. **Satisficing for Low-Stakes Decisions** — Choosing the first option that meets a minimum threshold rather than optimizing. WHY GOOD: Herbert Simon (Nobel laureate) showed that bounded rationality makes optimization impractical for most decisions; satisficing saves cognitive resources for high-stakes decisions. Schwartz (2004) showed "satisficers" report higher life satisfaction than "maximizers." SOURCE: Simon 1955; Schwartz 2004. EVIDENCE: A

12. **Calibration Training** — Practicing making probability estimates and receiving feedback to align confidence with accuracy. WHY GOOD: People improve significantly with feedback; Tetlock's superforecasters achieved remarkable accuracy through regular calibration practice. SOURCE: Lichtenstein & Fischhoff 1980; Good Judgment Project (Tetlock 2015). EVIDENCE: A

13. **Consider-the-Opposite Debiasing** — When forming a judgment, deliberately generating reasons your initial assessment could be wrong. WHY GOOD: One of the most robustly effective debiasing techniques; reduces anchoring, overconfidence, and confirmation bias. SOURCE: Lord, Lepper & Preston 1984; Mussweiler, Strack & Pfeiffer 2000. EVIDENCE: A

14. **Explicit Decision Criteria** — Writing down criteria and their relative weights before evaluating options. WHY GOOD: Prevents shifting criteria to justify a favored option; makes trade-offs explicit; enables consistent evaluation across options. SOURCE: Hammond, Keeney & Raiffa 1999 "Smart Choices." EVIDENCE: B

15. **Base Rate Consultation** — Before making a prediction, looking up the statistical base rate for the outcome in question. WHY GOOD: Combats base rate neglect; grounds predictions in empirical reality; prevents overweighting vivid but rare scenarios. SOURCE: Kahneman & Tversky 1973; Gigerenzer 2002. EVIDENCE: A

16. **Premature Closure Prevention** — Deliberately generating more options before choosing; spending more time in divergent thinking before converging. WHY GOOD: First solution is rarely best; number of options generated correlates with quality of final choice. SOURCE: Johnson, Payne & Bettman 2003; design thinking methodology. EVIDENCE: B

17. **Scenario Planning** — Developing multiple plausible future scenarios rather than single-point forecasts. WHY GOOD: Reduces overconfidence in predictions; prepares for multiple contingencies; developed by Shell Oil, credited with their navigation of 1970s oil crisis. SOURCE: Wack 1985; Schwartz 1991 "The Art of the Long View." EVIDENCE: B

18. **Outside View (Reference Class)** — Starting with general statistical patterns before incorporating specific case details. WHY GOOD: The "outside view" counteracts the natural tendency toward optimistic "inside view" thinking; Lovallo & Kahneman (2003) showed it significantly improves forecast accuracy. SOURCE: Kahneman & Lovallo 1993; Kahneman 2011. EVIDENCE: A

19. **Commitment Devices** — Pre-committing to a course of action to overcome predictable future weakness of will. WHY GOOD: Addresses hyperbolic discounting and akrasia; Odysseus tying himself to the mast is the classic example; empirically effective for savings, exercise, and other self-control challenges. SOURCE: Thaler & Benartzi 2004 "Save More Tomorrow"; Ariely & Wertenbroch 2002. EVIDENCE: A

20. **10/10/10 Rule** — Asking how you'll feel about a decision in 10 minutes, 10 months, and 10 years. WHY GOOD: Combats hyperbolic discounting and emotional decision-making; forces temporal perspective-taking; simple enough to use routinely. SOURCE: Welch 2009 "10-10-10"; recommended by decision science practitioners. EVIDENCE: C

21. **Regret Minimization Framework** — For major life decisions, project yourself to age 80 and ask which choice you'd regret NOT making. WHY GOOD: Helps cut through short-term noise for irreversible life decisions; counteracts status quo bias and loss aversion for once-in-a-lifetime opportunities. SOURCE: Bezos (described in founding Amazon); regret theory (Loomes & Sugden 1982). EVIDENCE: C

22. **Information Value Analysis** — Before gathering information, estimating whether it could actually change your decision. WHY GOOD: Prevents information bias; focuses data-gathering on decision-relevant information; saves time and resources. SOURCE: Raiffa 1968 "Decision Analysis"; value of information theory. EVIDENCE: B

23. **Disaggregation / Decomposition** — Breaking complex judgments into component parts and estimating each separately. WHY GOOD: Reduces anchoring effects; enables different expertise for different components; aggregate of component estimates is typically more accurate than single holistic judgment. SOURCE: Armstrong 2001; Fermi estimation tradition. EVIDENCE: A

24. **Decision Matrix (Weighted)** — Scoring options across multiple criteria with explicit weights. WHY GOOD: Forces explicit trade-offs; prevents halo effect; enables comparison on relevant dimensions; reduces influence of single salient feature. SOURCE: Pugh matrix methodology; multi-criteria decision analysis literature. EVIDENCE: B

25. **Two-Way Door Test** — For any decision, first ask "Is this reversible?" If yes, decide quickly and move on. WHY GOOD: Prevents wasting deliberation time on low-stakes reversible choices; reserves careful analysis for truly irreversible decisions. SOURCE: Bezos Type 1/Type 2 framework; organizational decision science. EVIDENCE: C

26. **Asymmetric Dominance Awareness** — Recognizing when a decoy option is being used to influence your choice and removing it. WHY GOOD: Decoy effects are ubiquitous in pricing, marketing, and negotiation; awareness enables removal of the distortion. SOURCE: Huber et al. 1982; Ariely 2008. EVIDENCE: A

27. **Structured Analytic Techniques (SATs)** — Using formal analytical frameworks (ACH, SWOT, scenario matrices) to organize thinking. WHY GOOD: Externalizes reasoning; makes assumptions visible; enables critique; US Intelligence Community mandates them for high-stakes assessments. SOURCE: Heuer 1999 "Psychology of Intelligence Analysis"; Pherson & Heuer 2010. EVIDENCE: B

28. **Prospective Hindsight** — Imagining a future state and reasoning backward about how you got there (broader than pre-mortem). WHY GOOD: Prospective hindsight generates 25-30% more reasons for outcomes than prospective foresight; taps into narrative reasoning in a productive direction. SOURCE: Mitchell et al. 1989; Klein 2007. EVIDENCE: A

29. **Checklists** — Using pre-specified checklists for recurring decisions. WHY GOOD: Gawande's "Checklist Manifesto" showed surgical safety checklists reduced deaths by 47% and complications by 36% (Haynes et al. 2009 NEJM); reduces omission errors. SOURCE: Gawande 2009; Haynes et al. 2009 New England Journal of Medicine. EVIDENCE: A

30. **Deliberate Practice at Decision-Making** — Systematically practicing decisions with feedback, not just experience. WHY GOOD: Ericsson's research shows expertise requires deliberate practice with feedback, not just experience; 10,000 hours of undirected experience may yield no improvement. SOURCE: Ericsson, Krampe & Tesch-Romer 1993; Kahneman & Klein 2009. EVIDENCE: A

31. **Recognizing Ego Depletion Context** — Avoiding important decisions when mentally fatigued (though noting ego depletion has replication issues). WHY GOOD: Even if strict "ego depletion" has replication concerns, decision fatigue is real — Israeli parole judges granted 65% of cases early in day, nearly 0% before meals (Danziger et al. 2011). INSTEAD: Make important decisions when fresh; use routines to reduce trivial decision load. SOURCE: Danziger, Levav & Avnaim-Pesso 2011; Baumeister debate. EVIDENCE: B (contested but practical)

32. **Avoiding Peak-End Bias in Evaluation** — Using objective process metrics rather than subjective retrospective evaluation. WHY GOOD: Peak-end rule distorts memory of experiences; objective metrics capture total value rather than psychological salience. SOURCE: Kahneman et al. 1993. EVIDENCE: A

33. **Productive Disagreement Norms** — Creating environments where disagreement is safe and expected. WHY GOOD: Ray Dalio's "radical transparency" at Bridgewater; Google's "psychological safety" research (Project Aristotle) showed it was the #1 predictor of team effectiveness. SOURCE: Dalio 2017 "Principles"; Edmondson 1999; Google Project Aristotle. EVIDENCE: B

34. **Probabilistic Thinking** — Expressing beliefs as probabilities rather than binary certainties. WHY GOOD: Forces acknowledgment of uncertainty; enables calibration; prevents overconfidence; Tetlock's superforecasters use precise probabilities rather than "possible" or "likely." SOURCE: Tetlock 2015; Silver 2012 "The Signal and the Noise." EVIDENCE: A

35. **Via Negativa** — Improving by removing negatives rather than adding positives. WHY GOOD: Taleb argues subtractive knowledge (knowing what doesn't work) is more robust than additive; removing bad decisions has clearer impact than trying to make perfect decisions. SOURCE: Taleb 2012 "Antifragile"; Adams et al. 2021 Nature (people overlook subtractive solutions). EVIDENCE: B

36. **Wargaming and Simulation** — Testing decisions in simulated environments before committing in reality. WHY GOOD: Reveals unforeseen consequences; enables learning from failures without real costs; used by military, business, and policy organizations. SOURCE: Military wargaming tradition; Monte Carlo simulation in finance. EVIDENCE: B

37. **Eisenhower Matrix** — Categorizing tasks/decisions by urgency and importance to prioritize. WHY GOOD: Prevents urgency from crowding out importance; ensures strategic priorities get attention despite tactical demands; simple enough for daily use. SOURCE: Covey 1989 "7 Habits" (popularized); Eisenhower attribution. EVIDENCE: C

38. **Sunk Cost Circuit Breaker** — Establishing pre-defined "kill criteria" for projects before starting. WHY GOOD: Removes the sunk cost decision from the heat of the moment; pre-commitment makes abandonment psychologically easier when criteria are met. SOURCE: Decision science best practices; project management methodology. EVIDENCE: B

39. **Prediction Tracking / Brier Scores** — Systematically recording predictions with probabilities and tracking accuracy over time. WHY GOOD: Only way to actually improve calibration; Tetlock's superforecasters improved through systematic tracking; reveals systematic biases in your own thinking. SOURCE: Tetlock 2015; Brier 1950. EVIDENCE: A

40. **Minimum Viable Decision** — Making the smallest commitment needed to get decision-relevant information. WHY GOOD: Reduces cost of being wrong; enables learning before full commitment; aligns with lean startup methodology (Ries 2011). SOURCE: Ries 2011 "The Lean Startup"; iterative decision frameworks. EVIDENCE: B

41. **Steelmanning** — Constructing the strongest possible version of the opposing argument before countering it. WHY GOOD: Prevents strawmanning; ensures you've actually addressed the best counterargument; if you can't articulate the opposing view compellingly, you don't understand the issue well enough. SOURCE: Philosophical argumentation tradition; Galef 2021. EVIDENCE: C

42. **Premature Commitment Avoidance** — Keeping options open as long as possible when the cost of doing so is low. WHY GOOD: Real options theory shows option value is positive; closing off reversible options prematurely destroys value; especially important under uncertainty. SOURCE: Real options theory (Dixit & Pindyck 1994); agile methodology. EVIDENCE: B

43. **Libertarian Paternalism / Choice Architecture** — Designing decision environments that nudge toward good defaults while preserving choice. WHY GOOD: Leverages default effect and status quo bias for good outcomes; opt-out retirement savings increases enrollment from ~50% to ~90%. SOURCE: Thaler & Sunstein 2008 "Nudge"; behavioral economics policy applications. EVIDENCE: A

44. **Dialectical Thinking** — Holding thesis and antithesis simultaneously to arrive at synthesis. WHY GOOD: Prevents premature closure; captures partial truths in opposing viewpoints; recognizes that many real-world situations involve genuine trade-offs without clear winners. SOURCE: Philosophical tradition; Tetlock's hedgehog vs. fox framework. EVIDENCE: C

45. **Impact Effort Matrix** — Plotting options on two dimensions (impact and effort) to identify quick wins and strategic initiatives. WHY GOOD: Visual framework forces estimation of both dimensions; quickly identifies dominated options; practical for organizational and personal priority setting. SOURCE: Project management and consulting methodology. EVIDENCE: C

46. **OODA Loop (Observe-Orient-Decide-Act)** — Boyd's iterative decision-making framework emphasizing speed of cycling through decision loops. WHY GOOD: Emphasizes that decision speed matters; faster loops can outcompete better-resourced but slower competitors; widely adopted in military, business, and cybersecurity. SOURCE: Boyd 1976; military strategy applications. EVIDENCE: B

47. **Precommitment to Process** — Deciding HOW you'll decide before facing the specific decision. WHY GOOD: Eliminates motivated reasoning in decision procedures; creates consistent quality; separates process design (cold) from decision execution (hot). SOURCE: Thaler 1991; Elster 2000 "Ulysses Unbound." EVIDENCE: B

48. **Sensitivity Analysis for Decisions** — Testing how changes in key assumptions affect the optimal decision. WHY GOOD: Identifies which assumptions actually matter for the decision; if a decision is robust across reasonable assumption ranges, you can decide confidently even under uncertainty. SOURCE: Standard operations research; decision analysis. EVIDENCE: A

49. **Learning from Base Rates of Similar Decisions** — Before a major decision, studying the outcomes of many similar decisions made by others. WHY GOOD: Directly combats uniqueness bias (the belief that your situation is special); reference class data provides reality check on optimistic predictions. SOURCE: Kahneman & Lovallo 1993; Flyvbjerg 2006. EVIDENCE: A

50. **Periodic Decision Audits** — Regularly reviewing past decisions and their outcomes to identify systematic patterns in your reasoning. WHY GOOD: Only way to discover personal blind spots; reveals whether your decision process actually produces good outcomes over time; enables meta-learning about your own biases. SOURCE: Decision science best practices; organizational learning literature (Argyris 1977). EVIDENCE: C

---

## 10 COMMON LLM MISCONCEPTIONS ABOUT DECISION MAKING

1. **"Biases are always bad"** — LLMs often present all cognitive biases as errors to eliminate. Many heuristics are adaptive under real-world constraints (time pressure, incomplete information). Gigerenzer's research shows simple heuristics can outperform complex optimization in uncertain environments. The goal is bias awareness and calibration, not elimination.

2. **"More information always leads to better decisions"** — LLMs default to recommending more research and data-gathering. Beyond a threshold, additional information increases confidence without increasing accuracy (Tsai et al. 2008). Bezos's 70% rule suggests acting with incomplete information and course-correcting is often superior to waiting.

3. **"Rational = unemotional"** — LLMs sometimes equate good decision-making with removing emotion entirely. Damasio's somatic marker hypothesis and research on patients with ventromedial prefrontal cortex damage show that emotion is essential for practical decision-making. The goal is emotional awareness, not suppression.

4. **"The Dunning-Kruger effect means stupid people are confident"** — As in the scientific method section, LLMs repeat the pop-culture version. The actual finding is about miscalibration at different skill levels, and the effect may be substantially a statistical artifact.

5. **"Sunk cost reasoning is never rational"** — While the sunk cost FALLACY is irrational in standard economics, there are contexts where past investment provides information (learning costs, signaling commitment) or where reputation costs of abandonment are real. Context matters.

6. **"Expected value maximization is always the right framework"** — LLMs often recommend EV maximization without considering risk of ruin, utility curvature, or the difference between repeated and one-shot decisions. A single bet that is +EV but has a chance of bankruptcy can be rationally rejected (Kelly criterion).

7. **"Cognitive biases affect everyone equally"** — LLMs present biases as universal and uniform. In reality, there is substantial individual variation; cognitive reflection, intelligence, expertise, and domain knowledge all moderate susceptibility to specific biases. Some biases are more robust than others.

8. **"Fast decisions are bad decisions"** — LLMs sometimes conflate deliberation with quality. Klein's Recognition-Primed Decision model shows experts make excellent rapid decisions in their domains; Gladwell's "Blink" (despite its flaws) captures the real phenomenon that thin-slicing can be effective. Speed is bad only when it prevents incorporating available decision-relevant information.

9. **"Lists of biases are the best framework for improving decisions"** — LLMs readily produce lists of biases but this taxonomic approach is less useful than process-based approaches (structured analytic techniques, decision hygiene, systematic checklists). Knowing about a bias is necessary but insufficient for overcoming it (Fischhoff 1982).

10. **"LLMs are not susceptible to cognitive biases"** — Recent research (2025) from Royal Society Open Science and PNAS demonstrates that LLMs exhibit systematic biases including framing effects, anchoring, omission bias, and suggestibility. LLMs show amplified biases in some moral decision-making contexts and their reasoning capabilities do not protect against clinical cognitive biases. Forewarning LLMs about biases only modestly reduces them.

---

## Key Sources and References

- Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
- Kahneman, D. & Tversky, A. (1979). Prospect Theory: An Analysis of Decision under Risk. *Econometrica*, 47(2), 263-291.
- Tversky, A. & Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases. *Science*, 185, 1124-1131.
- Ioannidis, J.P.A. (2005). Why Most Published Research Findings Are False. *PLOS Medicine*, 2(8), e124.
- Open Science Collaboration (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251).
- Taleb, N.N. (2007). *The Black Swan*. Random House.
- Tetlock, P.E. (2015). *Superforecasting: The Art and Science of Prediction*. Crown.
- Galef, J. (2021). *The Scout Mindset*. Portfolio/Penguin.
- Gigerenzer, G. (2002). *Calculated Risks*. Simon & Schuster.
- Klein, G. (2007). Performing a Project Premortem. *Harvard Business Review*.
- Thaler, R.H. & Sunstein, C.R. (2008). *Nudge*. Yale University Press.
- Pearl, J. (2009). *Causality*. Cambridge University Press.
- Munafò, M.R. et al. (2017). A manifesto for reproducible science. *Nature Human Behaviour*, 1, 0021.
- Simon, H.A. (1955). A Behavioral Model of Rational Choice. *Quarterly Journal of Economics*, 69(1), 99-118.
- Janis, I.L. (1972). *Victims of Groupthink*. Houghton Mifflin.
- Cohen, J. (1988). *Statistical Power Analysis for the Behavioral Sciences*. Routledge.
