# Renovate

Инструмент по автоматическому обновлению зависимостей в репозитории

## Зачем нужен этот инструмент?

1. Поддерживаем проект в актуальном состоянии
Не приведем его к состоянию, когда обновление какой-либо зависимости станет невозможным из-за того, что это обновление потребует обновления других зависимостей, сломается обратная совместимость и проект перестанет работать.
2. Безопасность. Менее вероятно что актуальные зависимости содержат известные уязвимости

## Почему именно этот инструмент?

3. Работает на многих платформах (gitlab, github, ...)
4. Много звезд на github, хорошая поддержка
5. Этот инструмент используется во многих известных проектах. Например vuejs

## Renovate локально для проверки конфига

6. `npm install -g renovate`
7. Перейти в репозиторий, запустить команду `RENOVATE_CONFIG_FILE=renovate.json renovate-config-validator`

## Renovate локально для проверки зависимостей репозитория

8. `npm install -g renovate`
2. GITHUB_COM_TOKEN=... RENOVATE_TOKEN=... renovate --platform=gitlab путь до репозитория

GITHUB_COM_TOKEN - токен из github, любой, можно даже без прав. Нужен, чтобы changelog по зависимостям подтягивать

RENOVATE_TOKEN - в данном случае это access token из gitlab с правами api, read_user, write_repository

В конце указываем путь до репозитория

## Renovate на github

1. Устанавливаем https://github.com/apps/renovate
2. Даем доступ приложению к нужным репозиториям
3. Заходим в эти репозитории, там должны были создаться мр, которые конфигурируют renovate. Мерджим ее
4. Дополнительно настраиваем конфиг. "rangeStrategy": "bump" (для того чтобы package.json обновлялся) и assignees.
5. После установки приложения также есть ui, в котором можно посмотреть репозитории и джобы. https://developer.mend.io/github/upikoth
6. Создана issue, которая показывает какие зависимости нужно обновить
7. Запустить сканирование можно из issue или из ui. Также можно настроить периодический запуск из конфига renovate
8. По умолчанию запускается при изменении в основной ветке

## Renovate на gitlab

В гитлабе можно пайплайны по расписанию запускать: ci/cd -> schedules. Можно сделать запуск периодическим

```yml
renovate:
	variables:
		GITHUB_COM_TOKEN: "..."
		RENOVATE_TOKEN: "..."
		RENOVATE_AUTODISCOVER: 'false'
		RENOVATE_GIT_AUTHOR: 'Renovate Bot <bot@renovateapp.com>'
		RENOVATE_PLATFORM: 'gitlab'
	image: renovate/renovate:latest
	script:
		- renovate путь до репозитория
	only:
		- schedules
```

GITHUB_COM_TOKEN - токен из github, любой, можно даже без прав. Нужен, чтобы changelog по зависимостям подтягивать

RENOVATE_TOKEN - в данном случае это access token из gitlab с правами api, read_user, write_repository
