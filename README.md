# [Тестовое задание](https://variantnet.notion.site/React-Developer-Test-Assignment-Variant-Group-d7a1e3460dc643958eb57a0518ce84b2) для Variant Group

## Дисклеймер

В данном проекте был сделан сознательный трейдофф в плане безопасности: вызов OpenAI API не защищен отдельным API сервисом, из-за чего API ключ доступен на клиенте. Это небезопасное решение было принято исключительно для экономии времени разработки, учитывая тестовый характер задания. В реальном проекте такие запросы должны проксироваться через backend, чтобы защитить API ключи от публичного доступа.

При наличии backend-сервиса предпочел бы описание OpenAPI спецификации и использование [TanStack Query](https://tanstack.com/query) в связке с [автоматической генерацией моделей](https://orval.dev/guides/react-query) и хуков из этой схемы. В рамках этого тестового задания я намеренно старался использовать минимальное количество зависимостей, чтобы не усложнять структуру проекта.

## Технологический стек

- **[React 19](https://react.dev/)** - библиотека для создания пользовательских интерфейсов
- **[TypeScript](https://www.typescriptlang.org/)** - типизированный JavaScript
- **[React Router](https://reactrouter.com/)** - маршрутизация приложения
- **[React Hook Form](https://react-hook-form.com/)** - управление формами
- **[Zod](https://zod.dev/)** - валидация схем данных
- **[Rsbuild](https://rsbuild.dev/)** - сборщик приложения
- **[Storybook](https://storybook.js.org/)** - разработка и тестирование UI компонентов
- **[Biome](https://biomejs.dev/)** - линтер и форматтер кода

## Доступные команды:

Установка зависимостей:

```bash
pnpm install
```

Запуск сервера разработки:

```bash
pnpm dev
```

Сборка проекта для продакшена:

```bash
pnpm build
```

Локальный предпросмотр продакшен-сборки:

```bash
pnpm preview
```

Проверка кода:

```bash
pnpm check
```

Форматирование кода:

```bash
pnpm format
```

Запуск Storybook:

```bash
pnpm storybook
```

Сборка Storybook:

```bash
pnpm storybook:build
```

Тестирование Storybook:

```bash
pnpm storybook:test
```
