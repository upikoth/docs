# Backend

## Структура проекта

Ориентировался на проекты:
+ https://github.com/golang-standards/project-layout
+ https://github.com/evrone/go-clean-template
+ https://github.com/bxcodec/go-clean-arch
+ https://github.com/Creatly/creatly-backend


![backend-clean-arch](./backend-clean-arch.png)

### `/internal/repository/sqlite/migrations`

Миграции для БД

### `/index.ts`

Содержит точки входа в приложение

### `/internal/app`

Пакет app содержит логику для создания экземпляра приложения.
При этом создаются экземпляры всех компонентов приложения (controller, repository).
После этого происходит запуск приложения при котором запускаются необходимые компоненты приложения.

### `/internal/constants`

Константы

### `/internal/controller`

Содержит логику получения запросов и формирования ответов

### `/internal/model`

Основные модели приложения (domains)

### `/internal/repository`

Содержит логику получения данных из других источников

### `/internal/service`

Бизнес логика приложения

## Форматы http запроса и ответа

Тело запроса:

```json
{
	"meta": {},
	"data": {
		// Данные, необходимые для запроса
	}
}
```

Успешный ответ:

```json
{
	"success": true,
	"data": {
		// Данные ответа
	}
}
```

Ошибка при обработке запроса:

```json
{
	"success": false,
	"error": {
		"code": "",
		"description": "",
	}
}
```
