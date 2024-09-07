# Запуск в docker

```shell
# Скачиваем образ.
docker pull postgres:15
```

```yaml
services:
  postgres:
    image: postgres:15
    container_name: postgres
    restart: always
    ports:
      - 127.0.0.1:5555:5432
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: db-name

volumes:
  postgres:
    name: "volume-name"
    driver: local
```

## Зайти в бд через контейнер

1. Подключаемся к консоли контейнера
2. psql -U userName databaseName
