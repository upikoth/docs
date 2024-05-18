import{_ as e,c as a,o as t,a1 as l}from"./chunks/framework.CSxuwOm8.js";const u=JSON.parse('{"title":"Статический сайт","description":"","frontmatter":{},"headers":[],"relativePath":"tools/yandex-cloud/static-site.md","filePath":"tools/yandex-cloud/static-site.md"}'),o={name:"tools/yandex-cloud/static-site.md"},i=l('<h1 id="статическии-саит" tabindex="-1">Статический сайт <a class="header-anchor" href="#статическии-саит" aria-label="Permalink to &quot;Статический сайт&quot;">​</a></h1><h2 id="yandex-cloud-object-storage" tabindex="-1">Yandex Cloud Object storage <a class="header-anchor" href="#yandex-cloud-object-storage" aria-label="Permalink to &quot;Yandex Cloud Object storage&quot;">​</a></h2><p>Основной плюс хранения и раздачи из object storage - цена</p><h3 id="шаги-настроики-по-раздаче-статики" tabindex="-1">Шаги настройки по раздаче статики: <a class="header-anchor" href="#шаги-настроики-по-раздаче-статики" aria-label="Permalink to &quot;Шаги настройки по раздаче статики:&quot;">​</a></h3><ol><li>Переносим управление доменом в yandex cloud.</li></ol><ul><li>создаем зону cloud dns c именем сайта (example.com.)</li><li>добавляем dns сервера в настройках домена. Там где его покупали. ns1.yandexcloud.net и ns2.yandexcloud.net</li></ul><p><strong>Дальнейшие настройки будут производится исключительно в админке yandex cloud</strong></p><ol start="2"><li>Создаем сертификат let&#39;s encrypt в Certificate Manager сразу на два домена example.com и www.example.com</li><li>Привязываем сертификат к домену (должны создаться cname записи)</li><li>Создаем домены в Certificate Manager</li><li>Создаем бакет с именем example.com, выбираем существующий домен на вкладке Веб-сайт</li><li>На вкладке https выбираем созданный сертификат для example.com</li><li>Загружаем контент сайта в бакет</li></ol><p><strong>После этих действий сайт example.com должен быть доступен</strong></p><ol start="8"><li>Создаем бакет www.example.com</li><li>Выбираем в настройках https сертификат для example.com</li><li>Настраиваем переадресацию на домен example.com по https</li><li>В настройках dns добавляем запись aname www.example.com -&gt; www.example.com.website.yandexcloud.net</li></ol><p>После этого www.example.com должен редиректить на example.com</p><p>Оба домена работают, статика раздается.</p>',12),c=[i];function s(n,d,r,m,p,x){return t(),a("div",null,c)}const h=e(o,[["render",s]]);export{u as __pageData,h as default};
