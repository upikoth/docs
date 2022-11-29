# Настройка Nginx mac

Установка nginx:

Если необходимо, нужно установить brew, после чего:

```shell
brew update
brew upgrade

brew install nginx
```

Запуск nginx и другие основные команды:

```shell
brew services info nginx
brew services start nginx
brew services stop nginx
brew services restart nginx
nginx -t
```
