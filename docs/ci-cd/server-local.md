# Свой сервер

1. Установить ununtu. У меня была версия 24.04.1

2. Настроить подключение к интернету

Подключаемся к wifi:
```shell
wpa_passphrase "имя сети" "пароль" | sudo tee /etc/wpa_supplicant.conf
sudo wpa_supplicant -B -i wlp2s0 -c /etc/wpa_supplicant.conf
sudo systemctl restart systemd-networkd
```

Настраиваем маршрутизацию

```shell
ip a # Показывает информацию по доступным интерфейсам
ip route show # Показывает настройки маршрутизации

sudo ip addr add 192.168.0.100/24 dev wlp2s0 # 192.168.0.100 - это будет адрес устройства во внутренней сети
sudo ip route add default via 192.168.0.1 # 192.168.0.1 - это адрес gateway на роутере
# можно проверить с другого устройства в сети или в доке роутера
```

Настраиваем DNS

```shell
sudo nano /etc/systemd/resolved.conf
# Надо будет раскомментить и указать DNS и FallbackDNS 
sudo systemctl restart systemd-resolved
```

3. Как обычно настраиваем ssh и ufw
