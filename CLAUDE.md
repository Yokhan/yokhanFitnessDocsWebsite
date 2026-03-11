# Новая физическая культура

Документационный сайт-гайд по фитнесу для IT-специалистов. Автор — Игорь Назаров (Yokhan Gym).

## Стек

Docusaurus 3.8.1 · React 19 · Node 18+ · MDX 3 · Infima CSS

## Команды

- `npm start` — dev-сервер (localhost:3000)
- `npm run build` — production-сборка в `build/`
- `npm run serve` — просмотр сборки локально
- `npm run clear` — очистка кеша `.docusaurus/`

**ВСЕГДА запускай `npm run build` после изменений — проверяет битые ссылки и синтаксис MDX.**

## Карта проекта

```
docs/                         # Весь контент (Markdown/MDX)
  1. Author.md                # Лендинг (slug: /)
  0. WarmingUp/               # Введение в тренировки
  1. Main Part/               # Цели и программы тренировок
  2. Tools/                   # Инструменты для тренировок
  3. FAQ/                     # Частые вопросы
  4. Workouts with injuries/  # Тренировки при заболеваниях
  media/img/, media/video/    # Медиа-контент
src/css/custom.css            # Стили, шрифты, брендовый цвет #C8EA6A
static/fonts/                 # Шрифты: nauriz, IBMPlexSans, DelaGothicOne
static/img/                   # Логотипы, иконки
docusaurus.config.js          # Конфиг сайта (docs на root, blog отключён)
sidebars.js                   # Автогенерация сайдбара из файловой структуры
```

## Контент: стиль и правила

Весь контент — на русском. Подробный стайл-гайд: `.claude/rules/content-style.md`

### Frontmatter (обязательные поля)

```yaml
---
slug: english-kebab-case
sidebar_position: N
title: Заголовок на русском
description: "Краткое описание для SEO"
image: media/images/bendpress.jpg
animation: media/videos/bendpress.mp4
obsIMG: " "
free: true
---
```

### Именование файлов

- Формат: `N. Name.md` (числовой префикс + пробел + имя)
- `sidebar_position` в frontmatter = числовой префикс в имени файла
- Слаги — английские, kebab-case

## DON'T (критические)

1. Не меняй слаги существующих страниц — ломает URL
2. Не удаляй поля `obsIMG` и `free` из frontmatter
3. Не меняй цвет `#C8EA6A` и шрифты без явного запроса
4. Не используй wiki-ссылки `[[link]]` — это наследие Obsidian, в Docusaurus не работает
5. Не добавляй файлы IDE (`.vs/`, `.idea/`) в git
6. Не правь `src/css/custom.css` без прямого запроса — это визуальная идентичность

## Известный техдолг

- `docusaurus.config.js`: плейсхолдер URL, дефолтные Facebook org/project, tagline "Dinosaurs are cool"
- `_category_.json`: английские плейсхолдер-описания
- Wiki-ссылки `[[...]]` в нескольких файлах (не рендерятся)
- `.vs/` закоммичен (артефакт Visual Studio)
- `package.json` name = `my-website`
- Некоторые страницы — заглушки (только title, без контента)

## Compaction

При `/compact` сохраняй: текущую задачу, изменённые файлы, результаты `npm run build`, найденные проблемы, контекст ветки.
