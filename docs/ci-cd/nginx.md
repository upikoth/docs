# Nginx

Запуск nginx и другие основные команды:

```shell
service nginx start
service nginx status
service nginx reload
service nginx restart
# Валидация конфига.
nginx -t
```

## Nginx Ubuntu

Основные задачи для который я буду использовать nginx - это раздача статических файлов (например лендингов) и как веб сервер, который статические файлы отдает сразу, а запросы к бэкенд приложению проксирует в приложение.

Установка nginx:

```shell
apt-get install nginx
```

Простейший конфиг для раздачи статики из /var/www/vue-example с помощью nginx и проксирования запросов начинающихся с /api/ на порт 3000.

```nginx
events {}

http {
  include mime.types;

  server {
    listen 80;
    server_name 185.46.11.17;
    root /var/www/vue-example;

    location ~ ^/api/.*$ {
      proxy_pass http://127.0.0.1:3000;
    }
  }
}
```

## Nginx mac os

Установка nginx:

Если необходимо, нужно установить brew, после чего:

```shell
brew update
brew upgrade

brew install nginx
```
