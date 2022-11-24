# Работа из командной строки

Установка postgres

Создание и запуск сервера

Создание базы данных

Использование миграций

brew install golang-migrate

migrate create -ext sql -dir migrations -seq create_users_table

migrate -path migrations -database "postgresql://localhost:5432/example?sslmode=disable" -verbose up

[Пакет для управления миграциями](https://github.com/golang-migrate/migrate)
