<script setup>
import Mermaid from '../.vitepress/components/mermaid.vue'
</script>

# Starter

Цель проекта: создать набор проектов, на основе которых можно будет быстро инициализировать новый проект и сразу начать разработку бизнес логики, а не заниматься настройками окружения.

## Превью

- Приложение: https://starter.upikoth.dev
- API: https://starter.upikoth.dev/api/swagger/index.html

## Стек

+ Frontend: Vue3 + Ionic framework
+ Backend: Go + Postgres

## Task manager

- https://github.com/users/upikoth/projects/2

## Общая схема зависимостей проекта

<mermaid>
	<div class="mermaid">
		stateDiagram
			Eslint --> Frontend
			Stylelint --> Frontend
			Frontend --> Backend
			Backend --> Frontend
			Backend --> Database
			Database --> Backend
	</div>
</mermaid>

## Ссылки на репозитории

- Eslint: https://github.com/upikoth/eslint-config-vue3
- Stylelint: https://github.com/upikoth/stylelint-config-vue3
- Frontend: https://github.com/upikoth/starter-vue3
- Backend: https://github.com/upikoth/starter-go

## Как стартовать новый проект на основе Starter

...