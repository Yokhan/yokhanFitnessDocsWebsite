# Добавить новую страницу контента

## Использование
`/add-page [секция] [тема]`

## Инструкции

1. Определи секцию (0. WarmingUp, 1. Main Part, 2. Tools, 3. FAQ, 4. Workouts with injuries)
2. Посмотри существующие файлы в секции, определи следующий `sidebar_position`
3. Создай файл с именем `N. Name.md` где N = sidebar_position
4. Используй frontmatter-шаблон из CLAUDE.md
5. Напиши контент в стиле автора (см. `.claude/rules/content-style.md`)
6. Запусти `npm run build` для проверки

## Шаблон файла

```markdown
---
slug: english-slug
sidebar_position: N
title: Заголовок на русском
description: "Краткое описание"
image: media/images/bendpress.jpg
animation: media/videos/bendpress.mp4
obsIMG: " "
free: true
---

Вступительный абзац — о чём эта страница и почему это важно.

### Первый раздел

Основной контент.

:::tip[Совет]
Полезная информация
:::
```

## Проверка

После создания обязательно: `npm run build`
