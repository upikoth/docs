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
# Можно проверить с другого устройства в сети или в доке роутера
# После этого будет работать обращение по IP
ping 8.8.8.8
```

скачиваем network-manager и настраиваем, чтобы сервер подключался к wifi после перезагрузки

```shell
sudo apt update
sudo apt install network-manager
sudo systemctl enable NetworkManager

nmcli device wifi connect "name" password "password"
```

Настраиваем DNS

```shell
sudo nano /etc/systemd/resolved.conf
# Надо будет раскомментить и указать DNS и FallbackDNS 
sudo systemctl restart systemd-resolved
# После этого будет работать интернет
ping google.com
```

3. Как обычно настраиваем ssh и ufw

4. Настраиваем роутер

- сначала надо купить белый IP
- в настройках DHCP сервера назначаем статический IP для нашего устройства - 192.168.0.100
- настраиваем либо dmz, либо перенаправление портов на наш сервер

5. Настраиваем чтобы при перезагрузке сервера происходил автологин и ssh автоматически запускался

```shell
sudo nano /etc/systemd/system/getty@tty1.service.d/override.conf

#Заменить строку ExecStart на
ExecStart=-/sbin/agetty --autologin имя_пользователя --noclear %I $TERM

sudo systemctl enable ssh 

sudo reboot
```

Если что-то пошло не так, shift при загрузке системы и заход под рутом должны помочь
