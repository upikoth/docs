<script setup>
import Mermaid from './.vitepress/components/mermaid.vue'
</script>

# Проекты - стартеры

[Backend на Go](https://github.com/upikoth/project-starter-backend)

[Frontend на Vue3 + Quasar](https://github.com/upikoth/project-starter-frontend)

[Документания для пользователя](https://github.com/upikoth/project-starter-user-documentation)

[Техническая документация](https://github.com/upikoth/project-starter-technical-documentation)

## Текущее состояние проектов

Backend на Go:

+ Аутентификация пользователя
+ Авторизация пользователя
+ CRUD операции с пользователями

Frontend на Vue3 + Quasar:

+ Инициализирован проект
+ Доработана аутентификация пользователя
+ Сделаны отдельные проекты для пользовательской и технической документации, интегрированы в ЛК с помощью iframe

## Дальнейшие планы на проекты

Backend на Go:

+ Установка и настройка swagger
+ Написание unit тестов
+ Добавление ролевой модели для пользователей

Frontend на Vue3 + Quasar:

+ Создать CRUD страницы для пользователя
+ Unit + e2e тесты
+ Поддержка билда под андроид

## Пример использования mermaid в документации

<mermaid>
	<div class="mermaid">
		graph TD;
			A[1asdfasdf]-->B[2asdfasdf];
			B-->C[3asdfasdf];
			C-->B;
			C-->D[4asdfasdf];
			D-->B[2asdfasdf];
			D-->E[5asdfasdf];
			E-->D;
			E-->F[6asdfasdf];
	</div>
</mermaid>
