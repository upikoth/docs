# Работа из командной строки

Установка postgres

с оф сайта

Создание и запуск сервера

systemctl start postgresql
systemctl stop postgresql

su postgres
psql

Создание базы данных

CREATE DATABASE yourdbname;
CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;

Использование миграций

brew install golang-migrate

migrate create -ext sql -dir migrations -seq create_users_table

migrate -path migrations -database "postgresql://localhost:5432/example?sslmode=disable" -verbose up

[Пакет для управления миграциями](https://github.com/golang-migrate/migrate)
