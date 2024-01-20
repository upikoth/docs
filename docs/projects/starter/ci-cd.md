# CI/CD и окружения

## Dev

При разработке все сервисы работают локально.

- Database: sqlite в файле
- Backend: localhost:8000
- Frontend: localhost:4001

## Prod

Все сервисы запущены в docker

- Database: sqlite в файле. volume /var/www/databases/starter-bun-database.sqlite
- Логи также через volume доступны тут /var/www/logs/starter-bun
- Backend: 127.0.0.1:8000
- Frontend: starter.upikoth.dev - 127.0.0.1:4001
