# Статический сайт

## Yandex Cloud Object storage

Основной плюс хранения и раздачи из object storage - цена

### Шаги настройки по раздаче статики:

1. Переносим управление доменом в yandex cloud.

- создаем зону cloud dns c именем сайта (example.com.)
- добавляем dns сервера в настройках домена. Там где его покупали. ns1.yandexcloud.net и ns2.yandexcloud.net

**Дальнейшие настройки будут производится исключительно в админке yandex cloud**

2. Создаем сертификат let's encrypt в Certificate Manager сразу на два домена example.com и www.example.com
3. Привязываем сертификат к домену (должны создаться cname записи)
4. Создаем домены в Certificate Manager
5. Создаем бакет с именем example.com, выбираем существующий домен на вкладке Веб-сайт
6. На вкладке https выбираем созданный сертификат для example.com
7. Загружаем контент сайта в бакет

**После этих действий сайт example.com должен быть доступен**

8. Создаем бакет www.example.com
9. Выбираем в настройках https сертификат для example.com
10. Настраиваем переадресацию на домен example.com по https
11. В настройках dns добавляем запись aname www.example.com -> www.example.com.website.yandexcloud.net

После этого www.example.com должен редиректить на example.com

Оба домена работают, статика раздается.