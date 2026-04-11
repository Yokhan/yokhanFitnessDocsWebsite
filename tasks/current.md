---
status: completed
current_task: "project audit improvements — 20 verkhneuropisanij"
branch: "claude/project-audit-improvements-wa81o"
blockers: []
next_steps:
  - "Set YANDEX_METRICA_ID env var at build time to enable analytics"
  - "Configure giscus.app and fill customFields.giscus in docusaurus.config.js"
  - "Fill real client testimonials in Author.md social proof section"
  - "Medical review of draft stubs (Hypertension, Diabetes, Back pain)"
last_updated: "2026-04-11"
---

# Current Task — Session Handoff

## Active Task

**Status**: COMPLETED (across 3 sprints, one commit each)
**Branch**: `claude/project-audit-improvements-wa81o`
**Goal**: «Глубокий аудит + 20 верхнеуровневых улучшений» — все 20 реализованы как доработки до прода с приоритетом «дописать».

## Context

Запрос: провести глубокий аудит фитнес-Docusaurus-сайта «Новая физическая культура» через 9 линз (health safety, science, content-style, software, seo, design/ux, marketing-sales, business, psychology) и реализовать 20 улучшений «неспеша и качественно».

Аудит был запущен через 3 параллельных Explore-агента. Найдено 40+ проблем, сгруппировано в 20 верхнеуровневых улучшений. Все реализованы и закоммичены в 3 спринта (+ 1 cleanup-коммит).

## Progress — Sprint 1: Cleanup & Stubs (commit 1)

- [x] Удалены битые frontmatter-поля `image: media/images/bendpress.jpg` и `animation: media/videos/bendpress.mp4` во всех 35 файлах
- [x] Убраны 7 Obsidian wiki-links `[[...]]` — заменены на file-relative markdown-ссылки (URL-encoded)
- [x] Починен `robots.txt` placeholder → реальный sitemap URL
- [x] Добавлен `onBrokenAnchors: 'warn'` в docusaurus.config.js
- [x] Safety-critical заглушки помечены `draft: true` + чистые «в разработке» блоки (hypertension, diabetes, back pain)
- [x] Удалён гиббериш «вапвапва» из Hypertension injury
- [x] Полноценный контент для 4 non-safety заглушек (Motivation, Cant-eat-more, Cracks/sounds, Cardio workout)
- [x] Полноценный Diet.md (были авторские заметки-дроны)
- [x] Obsidian-admonitions `> [!warning]`/`> [!done]`/etc заменены на Docusaurus `:::warning`/`:::tip` (Coach&Doctor, BADs&farm, MusclePain)
- [x] Фиксирована dead reference на страницу про фармакологию → ссылка на FAQ/BADs&farm
- [x] Удалены 3 неиспользуемых шрифта (nauriz, DelaGothicOne, IBMPlexSans) — 1.5 MB
- [x] Файлы `2..md`, `3..md` переименованы (slug сохранён)
- [x] Фикс invalid `:::alert` директивы в Save muscles
- [x] Синхронизированы `.claude/rules/docusaurus.md` и `CLAUDE.md` с реальным кодом (Unbounded + Golos Text, primary #d4a054)

## Progress — Sprint 2: Polish (commit 2)

- [x] `src/components/MedicalDisclaimer.jsx` — React-компонент
- [x] Инжект MedicalDisclaimer в 4 injuries-страницы
- [x] Author.md: блок «Квалификация и подход», ссылка на школу, evidence-based подход, explicit «I'm not a doctor»
- [x] Long-tail SEO: 10 якорных страниц с новыми descriptions + `keywords` frontmatter (Author, Gain muscles, Lose weight, More energy, Power workout, Cardio workout, Diet, Muscle pain, Motivation, Cant eat more)
- [x] Evidence sources (уровень A/B) в MusclePain и Weight-loss targets
- [x] `prefers-reduced-motion` + `:focus-visible` в `src/css/custom.css` (WCAG 2.4.7, vestibular safety)
- [x] **Новая страница**: `docs/0. WarmingUp/QuickStart.md` (slug `quick-start`, sidebar_position -1, label «🚀 Quick Start») — один-экран чек-лист для новичка

## Progress — Sprint 3: Features (commit 3)

- [x] JSON-LD в `headTags`: Organization, Person (автор с credentials), WebSite — YMYL E-A-T
- [x] Preload Unbounded + Golos Text fonts (perf)
- [x] Yandex Metrica snippet с `process.env.YANDEX_METRICA_ID` gate (no-op без env)
- [x] Расширен themeConfig.metadata (keywords, og:type/site_name/locale, twitter summary_large_image)
- [x] Social proof placeholder-блок в Author.md с шаблоном кейса
- [x] Primary CTA «Начните здесь» выше фолда на лендинге + повторный CTA в конце
- [x] Расширен footer — три колонки (Навигация, Связь с автором, Материалы) + медицинский disclaimer в copyright
- [x] `src/components/ShareButtons.jsx` — Telegram/ВКонтакте/X/Copy-link
- [x] **Swizzle** `src/theme/DocItem/Footer/index.js` — заменяет classic footer, добавляет ShareButtons + GiscusComments
- [x] `src/components/GiscusComments.jsx` — lazy-load GitHub Discussions через `customFields.giscus` (no-op без конфига)
- [x] `customFields.giscus` слот с инструкцией в docusaurus.config.js

## Progress — Cleanup (commit 4)

- [x] Добавлены в `.gitignore`: `.docusaurus/`, `build/`, `brain/01-daily/*.md`, `tasks/.current.md.bak`
- [x] Удалены эти файлы из git tracking

## Test State

- **`npm run build`**: ✅ zero broken links, zero errors, completes successfully (`onBrokenLinks: 'throw'`)
- **onBrokenAnchors**: warn
- **Тесты**: нет (контент-сайт, тестов не было)

## Modified Files This Session

| Area | Files |
|------|-------|
| Content (docs/) | 35+ frontmatter обновлений, 10 новых/переписанных статей |
| Config | `docusaurus.config.js` (headTags, analytics, customFields, footer, metadata) |
| Components | `src/components/{MedicalDisclaimer,ShareButtons,GiscusComments}.jsx` |
| Theme swizzle | `src/theme/DocItem/Footer/index.js` |
| CSS | `src/css/custom.css` (a11y block) |
| Static | 3 шрифта удалены; `robots.txt` исправлен |
| Rules | `.claude/rules/docusaurus.md`, `CLAUDE.md` синхронизированы |
| Git hygiene | `.gitignore` расширен |

## Blocked / Open Questions

- Giscus — требует ручной конфигурации у автора через giscus.app, потом заполнение `customFields.giscus`
- Yandex Metrica ID — нужно получить у автора и установить `YANDEX_METRICA_ID` env var для прода
- Social proof — требует реальных кейсов от автора; сейчас placeholder
- Hypertension/Diabetes/Back pain — требуют медицинского ревью перед снятием `draft: true`

## Next Steps

1. Author: зарегистрировать Giscus на giscus.app
2. Author: получить Yandex Metrica counter ID
3. Author: собрать 3-5 реальных отзывов клиентов для Social proof
4. Push ветку на origin и создать PR (если запросит пользователь)
