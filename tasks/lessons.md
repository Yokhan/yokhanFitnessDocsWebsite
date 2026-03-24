# Lessons Learned

Self-improvement log for AI agent sessions. After EVERY user correction or discovered mistake, add an entry below using the format shown in the example. Read this file at the start of every session to avoid repeating past mistakes.

When this file exceeds 50 entries, run `/weekly` to promote recurring patterns into permanent rules (`.claude/rules/`) and archive promoted entries to `brain/03-knowledge/lessons-archive.md`.

---

## Entry Format

```
### [YYYY-MM-DD] — [Brief descriptive title]
**Error**: What went wrong (observable symptom)
**Root cause**: Why it happened (the actual underlying issue)
**Rule**: Concrete, actionable prevention rule for the future
**Applies to**: [agent name / skill name / general]
**Category**: [security | architecture | testing | workflow | tooling | general]
```

---

## Entries

### 2026-03-17 — Example: Hallucinated npm package name
**Error**: Recommended `@utils/smart-merge` package which does not exist on npm.
**Root cause**: Generated a plausible-sounding package name from training data without verifying it exists. No verification step was performed before recommending.
**Rule**: Before recommending ANY external package, verify it exists by running `npm view <package>` or checking the official registry. If unable to verify, state confidence as LOW and flag it explicitly.
**Applies to**: researcher, implementer, general
**Category**: tooling

### 2026-03-24 — Точечные CSS-замены не работают при глобальной проблеме
**Error**: Менял зелёный цвет точечно в отдельных селекторах, но он продолжал всплывать через --ifm-color-primary который пронизывал весь Infima framework
**Root cause**: --ifm-color-primary задан как #C8EA6A в :root, [data-theme='dark'] и [data-theme='light']. Все Infima-компоненты наследуют этот цвет. Точечная замена в .menu__link не убирает его из pagination, links, blockquote, etc.
**Rule**: При глобальной визуальной проблеме — grep по всему файлу, найти ВСЕ вхождения, заменить за один Write. Не использовать Edit для CSS-рефакторинга — результат непредсказуем из-за каскада.
**Applies to**: implementer, general
**Category**: workflow

### 2026-03-24 — CSS контраст-тест давал ложные результаты из-за getBg()
**Error**: JS-скрипт для проверки контраста показывал ratio 1.00 и 1.15 для элементов которые визуально читались нормально
**Root cause**: getBg() не учитывал compositing rgba-слоёв поверх тёмного фона, и fallback на темный bg-secondary когда body bg transparent
**Rule**: Не доверять JS-скриптам для контраста — считать вручную по токенам: lum(fg) vs lum(bg) по формуле WCAG. Визуальный скриншот + математика по токенам надёжнее.
**Applies to**: general
**Category**: tooling
