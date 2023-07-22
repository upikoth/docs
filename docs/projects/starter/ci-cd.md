# CI/CD и окружения

## Dev

При разработке все сервисы работают локально.

- Database: localhost:5555 (запущена в docker)
- Backend: localhost:8888
- Frontend: localhost:8000

## Prod

Все сервисы запущены в docker

- Database: 178.170.196.94:5555
- Backend: 178.170.196.94:8080
- Frontend: starter.upikoth.dev

проекты starter-vue и starter-go содержат docker-compose.yml, которые позволят быстро развернуть приложение на новом окружении.
