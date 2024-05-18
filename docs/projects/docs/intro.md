# Docs

Сайт с документацией

Цель проекта: создать статический сайт, который будет содержать краткую информацию по аспектам разработки, с которыми я встречался. Это сделано чтобы в любой момент можно было найти отсылки к своим проектам. Также создание сайта поможет лучше запомнить полученную информацию.

## Превью

- https://upikoth.dev
- https://upikoth.github.io/docs/

### Какой функционал считаю наиболее интересным

- На этом проекте впервые использовал инструмент [renovate](/tools/renovate.md)
- Настроил уведомления в telegram бота в github actions, когда workflow выполнился с ошибками
- Настроил мониторинг и алертинг что сайт доступен, ориентируясь на http code

## Ссылки на репозитории

- Frontend: https://github.com/upikoth/docs

## Стек

+ Frontend: Vitepress
+ CI/CD: Github CI + [Yandex Cloud (Object Storage + DNS + Certificate Manager)](/tools/yandex-cloud/static-site.md)

## Инструменты

- https://metrika.yandex.ru/overview?id=96194575

## Мониторинги

- https://upikoth.grafana.net/a/grafana-synthetic-monitoring-app/checks/21071/dashboard
- https://upikoth.grafana.net/alerting/grafana/adkdp24n9k2rkd/view?tab=query
