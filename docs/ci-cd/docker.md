# Docker

## Введение

Докер позволяет единообразно разворачивать и управлять приложениями независимо от их стека.

Основные термины:
- Container
- Image
- Registry
- Dockerfile

Container - изолированная среда, в которой запущено приложение. Экземпляр Image. Image определяет окружение и доступные инструменты внутри Container.

Image - настроенная файловая система для Container. Содержит все, что необходимо для запуска приложения.

Registry - место хранения всех образов приложения.

Dockerfile - инструкция по созданию Image.

Простейший сценарий использования Docker выглядит так:
1. На основе приложения создаем Image
2. Image храним в Registry. Публичном или приватном.
3. На сервере где будет запущено приложения скачиваем Image, запускаем Container, указывая порт, на котором будет работать приложение.

## Как создать Image

Создаем .Dockerfile

Помним, что кэширование происходит по строкам.

```docker
# Stage 1. Build.

FROM golang:1.20-alpine as build

RUN apk add --no-cache make \
	&& rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

WORKDIR /starter-go

COPY go.mod go.sum ./

RUN go mod download

COPY . ./

RUN make build

# Stage 2.

FROM alpine:3.18

COPY --from=build /starter-go/app ./

EXPOSE 8888

CMD ["./app"]

```

Команда для создания Image

```sh
docker build -t image-name:0.0.1 .
```

Команда для запуска Container

```sh
docker run -p 127.0.0.1:3000:3000 image-name:0.0.1
```

docker --help поможет в остальном

## Удаленное подключение

Проблема: просмотр состояния контейнеров, информации о них, возможность перезапустить на удаленном сервере.

1. Установить Docker Desktop
2. Установить расширение Portainer
3. Добавить новое окружение (новый хост)

Расширение позволит решить проблему.

## Уменьшение размера Image

1. Выбрать подходящий базовый образ. Возможно подойдет alpine
2. Использовать многоступенчатую сборку приложения

Пример:

```docker
# Stage 1. Build.

FROM node:16-alpine as build

WORKDIR /documentation

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

# Stage 2.

FROM nginx:1.25-alpine-slim

COPY --from=build /documentation/docs/.vitepress/dist/ /usr/share/nginx/html/

EXPOSE 80
```

## Docker compose

- Создаем docker-compose.yml

```bash
docker compose up -d
# Запуск только одного сервиса с зависимостями.
docker compose up -d service-name
# Запуск сервиса без зависимостей.
docker compose up --no-deps -d service-name
```

## Deploy c Docker compose

```yaml
steps:
  - name: Checkout repository
    uses: actions/checkout@v3

  - name: Log in to the Container registry
    uses: docker/login-action@v2
    with:
      registry: ${{ env.REGISTRY }}
      username: ${{ github.actor }}
      password: ${{ secrets.GITHUB_TOKEN }}

  - name: Setup docker context
    run: |
      mkdir -p ~/.ssh
      touch ~/.ssh/known_hosts
      echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
      chmod 0400 ~/.ssh/id_rsa
      ssh-keyscan -t rsa  ${{ secrets.SSH_HOST }} >> ~/.ssh/known_hosts
      docker context create remote --docker "host=ssh://${{ secrets.SSH_USERNAME }}@${{ secrets.SSH_HOST }}:${{ secrets.SSH_PORT }}"
      docker context use remote

  - name: Deploy
    run: |
			echo "" > .env
      docker compose stop backend
      docker compose pull backend
      docker compose up --no-deps -d backend
      docker system prune -f
```
