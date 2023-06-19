# Backend

## Структура проекта

Ориентировался на проекты:
+ https://github.com/golang-standards/project-layout
+ https://github.com/evrone/go-clean-template
+ https://github.com/bxcodec/go-clean-arch
+ https://github.com/Creatly/creatly-backend


![backend-clean-arch](./backend-clean-arch.png)

### `/scripts`

Содержит основные команды, операции над приложением. Создан, чтобы Makefile был простым и понятным

### `/migrations`

Миграции для БД

### `/docs`

Автоматически генерируемое описание API с помощью swagger

### `/cmd`

Содержит точки входа в приложение

### `/internal`

Основная логика приложения

### `/internal/app`

Пакет app содержит логику для создания экземпляра приложения.
При этом создаются экземпляры всех компонентов приложения (controller, repository).
После этого происходит запуск приложения при котором запускаются необходимые компоненты приложения.

## Env переменные

Env переменные APP:
+ `APP_PORT` Порт, на котором запускается приложение при локальной разработке и в контейнере докера.
+ `APP_JWT_SECRET` Токен для генерации JWT