# ЭкоСкан

Фронтенд веб-приложения для сообщений о городских проблемах (мусор, граффити, повреждённые дороги, упавшие деревья и т.д.). Житель фотографирует нарушение, добавляет описание и отправляет заявку с геолокацией в администрацию. Проект студентов СКФ МТУСИ (Ростов-на-Дону).

> Репозиторий содержит клиентскую часть. Реализовано: интерактивная карта, формы входа и регистрации с валидацией, страница «О нас». Остальные разделы (профиль, уведомления, список заявок) в разработке.

## Стек

- **Vue 3** (Composition API, `<script setup>`) + **TypeScript**
- **Vite 7**, **Vue Router 4**
- **Tailwind CSS 4** + **PrimeVue 4** (unstyled-режим, компоненты в стиле [Volt](https://volt.primevue.org/))
- **PrimeVue Forms** + **Zod** — формы и валидация
- **Yandex Maps JS API v3** (`vue-yandex-maps`)
- **ESLint** (flat config) + **Prettier**

## Архитектура

Структура следует идеям [Feature-Sliced Design](https://feature-sliced.design/):

```
src/
├── app/       # инициализация приложения, роутер, layouts, глобальные стили
├── pages/     # страницы: home (карта), about, auth/sign-in, auth/sign-up
└── shared/    # переиспользуемое: UI-компоненты, иконки, хелперы
```

У каждого слайса есть публичный API через `index.ts`, схемы валидации лежат в `model/`.

## Запуск

Требуется Node.js `^20.19.0 || >=22.12.0` и [pnpm](https://pnpm.io/).

```sh
pnpm install
cp .env.example .env   # укажите ключ Яндекс.Карт в VITE_YMAPS_API_KEY
pnpm dev
```

Ключ можно получить в [кабинете разработчика Яндекса](https://developer.tech.yandex.ru/services) (JavaScript API и HTTP Геокодер).

## Скрипты

| Команда           | Описание                           |
| ----------------- | ---------------------------------- |
| `pnpm dev`        | Dev-сервер с HMR                   |
| `pnpm build`      | Проверка типов и production-сборка |
| `pnpm preview`    | Предпросмотр сборки                |
| `pnpm type-check` | Проверка типов (`vue-tsc`)         |
| `pnpm lint`       | ESLint                             |
| `pnpm format`     | Prettier                           |
