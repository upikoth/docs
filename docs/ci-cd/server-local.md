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

6. Устанавливаем k3s

до этого пункта лучше установить vpn и указать ip из vpn в список, для которых генерируются сертификаты доступа к k3s

```shell
curl -sfL https://get.k3s.io | sh -

sudo kubectl get nodes
```

7. Устанавливаем helm

```shell
sudo snap install helm --classic

# копируем конфиг
cp /etc/rancher/k3s/k3s.yaml ~/k3s/.k3s.yaml

# добавляем в .profile, чтобы helm видел конфиг и на каком порту развернут кластер
export KUBECONFIG=~/k3s/.k3s.yaml

# добавил права, чтобы конфиг мог читать текущий пользователь и helm 
sudo chmod 644 ~/k3s/.k3s.yaml
sudo chown "user":"user" ~/k3s/.k3s.yaml

helm list
```

8. Устанавливаем и настраиваем lens

lens нужно установить не на сервере, а на клиенте.

После того как lens установлен, нужно скопировать настройки k3s с сервера и добавить этот конфиг к клиенту.

Далее внутри конфига дополнительно добавить ssh туннель. После включения туннеля, обращения к localhost:6443 будут
проксироваться на 6443 порт сервера

```yaml
apiVersion: v1
clusters:
  - cluster:
      certificate-authority-data: ---
      server: https://127.0.0.1:6443
    name: firebat
contexts:
  - context:
      cluster: firebat
      user: upikoth
    name: firebat
current-context: firebat
kind: Config
preferences: {}
users:
  - name: upikoth
    user:
      client-certificate-data: ---
      client-key-data: ---
      exec:
        apiVersion: client.authentication.k8s.io/v1
        command: ssh
        args:
          - -N
          - -L
          - 6443:localhost:6443
          - firebatnet
        interactiveMode: IfAvailable
```

Теперь при подключении lens к k3s будет создаваться туннель и по нему выполняться подключение. Внешние пользователи не 
смогут подключиться.

9. После чего решил установить openvpn, чтобы некоторые сервисы были доступны только под vpn.

клиент:

https://openvpn.net/client/

сервер:

https://github.com/Nyr/openvpn-install

```shell
sudo systemctl restart openvpn-server@server

sudo nano /etc/openvpn/server/server.conf

sudo apt install dnsmasq

sudo systemctl restart dnsmasq

sudo nano /etc/dnsmasq.conf
```

убарл systemd-resolved, настроил dnsmasq

в /etc/dnsmasq.conf прописал address=/grafana.lan/10.8.0.1, чтобы графана резолвилась на ip k3s
далее k3s ingress подхватит и перекинет на нужный под

Понял, что ufw это надстройка над iptables. iptables имеет приоритет и k3s и openvpn настраивают напрямую iptables.
Смотреть и изменять доступы лучше там, но через nftables (nft)

Несколько команд в помощь

```shell
# правила
nft list ruleset | grep 80

# слушатели и статусы
ss -tuln

#узнать какой процесс слушает 22 порт и если в правилах есть доступ, то к нему можно достучаться
sudo ss -tulnp | grep :22
```

```shell
# Разрешил всем в впн сети доступ ко всем портам
sudo ufw allow from 10.8.0.0/24
sudo ufw reload
```

openvpn сам прописал себе разрешение в iptables на указанном порту

10. Grafana

Устанавливаем grafana из helm чартов
Настраиваем ingress, чтобы по хосту grafana.net резолвил нашу графану
