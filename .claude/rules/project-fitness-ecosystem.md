# Fitness Ecosystem — Cross-Project Awareness

## Projects

| Project | Path | Branch | Purpose |
|---------|------|--------|---------|
| **YokhanFitnessAppMY** | `C:/Users/iohan/Documents/YokhanFitnessAppMY` | dev | Kotlin/React fitness app (Telegram Mini App + PWA) |
| **YokhanFitnessDocs** | `C:/Users/iohan/Documents/GitHub/YokhanFitnessDocs` | master | Obsidian knowledge base — anatomy, programs, coaching content |
| **yokhanFitnessDocsWebsite** | `C:/Users/iohan/Documents/GitHub/yokhanFitnessDocsWebsite` | main | Docusaurus guide site (guide.yokhanfitness.ru) |
| **YokhanFitnessLanding** | `C:/Users/iohan/Documents/YokhanFitnessLanding` | master | Landing page (yokhanfitness.ru) |

## Relationships

- **App** uses **Docs** for fitness content (exercises, programs, anatomy)
- **Website** publishes the Beginner Fitness Guide sourced from **Docs** (NewbieFitnessGuide/)
- **Landing** drives traffic to **App** (via Telegram bot link) and **Website** (guide.yokhanfitness.ru)
- **Docs** is the single source of truth for all fitness knowledge

## Cross-Project Rules

- **READ-ONLY**: this project can READ other fitness projects (git log, git status, file reads) but NEVER WRITE to them
- To propose changes to another project: create a spec or note in this project's `tasks/` and hand off
- Each project has its own Claude Code instance with its own CLAUDE.md

## Checking Other Projects

```bash
# Recent commits
git -C "C:/Users/iohan/Documents/YokhanFitnessAppMY" log --oneline -5
git -C "C:/Users/iohan/Documents/GitHub/YokhanFitnessDocs" log --oneline -5
git -C "C:/Users/iohan/Documents/GitHub/yokhanFitnessDocsWebsite" log --oneline -5
git -C "C:/Users/iohan/Documents/YokhanFitnessLanding" log --oneline -5

# Current status
git -C "C:/Users/iohan/Documents/YokhanFitnessAppMY" status
git -C "C:/Users/iohan/Documents/GitHub/YokhanFitnessDocs" status
git -C "C:/Users/iohan/Documents/GitHub/yokhanFitnessDocsWebsite" status
git -C "C:/Users/iohan/Documents/YokhanFitnessLanding" status
```
