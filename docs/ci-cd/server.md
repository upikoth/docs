# Настройка сервера

## Арендуем сервер.

В результате мы должны получить:
1. Ip-адрес. (194.67.90.176)
2. Логин: (root)
3. Пароль: (Ahv4Neephae3)

Подключаемся по ssh

```shell
ssh root@194.67.90.176
```
```shell
Ahv4Neephae3
```

## Настраиваем сервер.

Получаем информацию для обновления всех пакетов сервера и устанавливаем эти обновления:

```shell
apt-get update
apt-get upgrade -y
```

### Настройки безопасности
Стандартный ssh порт 22, изменим его (нужно выбрать значение от 1023 до 65535)

```shell
vim /etc/ssh/sshd_config
```

Заменяем значение Port на 4873
Перезапускаем ssh, чтобы изменения применились

```shell
service ssh restart
```

Теперь, чтобы подключиться по ssh, нужно указывать порт

```shell
ssh root@194.67.90.176 -p 4873
```

Изменяем пароль пользователя (H43k4ld5K8L843_d3a4s3d)

```shell
passwd
```

Устанавливаем брандмауэр, который закроет все порты сервера, кроме 80, 443, и 4873
Включаем брандмауэр и проверяем корректность настроек

```shell
apt install ufw
ufw allow 4873/tcp
ufw allow 80
ufw allow 443
ufw enable
ufw status
```

Настраиваем подключение по ключам шифрования
Для этого в директории пользователя создаем папку .ssh

```shell
mkdir .ssh
chmod 700 .ssh
```
И в файл authorized_keys добавляем наш публичный ключ, после чего ему также редактируем права доступа

```shell
vim .ssh/authorized_keys
chmod 700 .ssh/authorized_keys
```

Убираем возможность подключения с помощью логина и пароля
Для этого в файле /etc/ssh/sshd_config PasswordAuthentication устанавливаем значение no и рестартуем ssh

Далее переходим к настройкам [nginx как Веб-сервера](/ci-cd/nginx-ubuntu)

После запуска веб сервера нужно заполнить папку, которая указана в root статическим содержимым. Для этого будем использовать команду rsync. Ниже пример копирования содержимого текущей директории на удаленный сервер с помощью логина и пароля.

```shell
rsync -r ./ root@185.46.11.17:/var/www/vue-examle
```