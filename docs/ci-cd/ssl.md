# SSL

```sh
# устанавливаем Certbot
sudo apt install -yq certbot

# устанавливаем плагин для nginx
apt-get install python3-certbot-nginx

# генерируем/обновляем сертификат
sudo certbot --nginx -d upikoth.dev
```

конфиг nginx будет автоматически обновлен и nginx перезапущен
