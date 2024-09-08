<script setup>
import Mermaid from '../../.vitepress/components/mermaid.vue'
</script>

# Starter

Цель проекта: создать набор проектов, на основе которых можно будет быстро инициализировать новый проект и сразу начать разработку бизнес логики, а не заниматься настройками окружения.

## Архитектура

<mermaid>
	<pre class='.mermaid'>
		architecture-beta
			group internet(internet)[Browser]
			group api(cloud)[Yandex Cloud]
			group observability(cloud)[Observability]
			service frontend_app(internet)[Frontend App] in internet
			service gateway(internet)[Gateway] in api
			service backend_app(server)[Backend App] in api
			service ydb(database)[YDB] in api
			service ycp(server)[Cloud Postbox] in api
			service s3(database)[Object Storage] in api
			service sentry(server)[Sentry] in observability
			frontend_app:R -- L:gateway
			frontend_app:T -- B:sentry
			gateway:R -- L:backend_app
			backend_app:R -- L:ydb
			backend_app:B -- T:ycp
			backend_app:T -- B:s3
			backend_app:T -- T:sentry
	</pre>
</mermaid>

## Превью

- Приложение: https://starter.upikoth.dev

## Стек

+ Frontend: Vue3 + Quasar
+ Backend: Go + Ydb
+ yandex.cloud: object storage (s3), cloud postbox, container registry, serverless containers

## Task manager

- https://github.com/users/upikoth/projects/2

## Ссылки на репозитории

- Frontend: https://github.com/upikoth/starter-vue3
- Backend: https://github.com/upikoth/starter-go

## Полезные ссылки по проекту

+ [Sentry starter](https://upikoth.sentry.io/projects/starter-vue3/?project=4505991751598080)
