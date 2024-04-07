import{_ as e,c as t,o as a,a2 as o}from"./chunks/framework.BSzcDgWL.js";const b=JSON.parse('{"title":"Renovate","description":"","frontmatter":{},"headers":[],"relativePath":"tools/renovate.md","filePath":"tools/renovate.md"}'),i={name:"tools/renovate.md"},r=o('<h1 id="renovate" tabindex="-1">Renovate <a class="header-anchor" href="#renovate" aria-label="Permalink to &quot;Renovate&quot;">​</a></h1><p>Инструмент по автоматическому обновлению зависимостей в репозитории</p><h2 id="зачем-нужен-этот-инструмент" tabindex="-1">Зачем нужен этот инструмент? <a class="header-anchor" href="#зачем-нужен-этот-инструмент" aria-label="Permalink to &quot;Зачем нужен этот инструмент?&quot;">​</a></h2><ol><li>Поддерживаем проект в актуальном состоянии Не приведем его к состоянию, когда обновление какой-либо зависимости станет невозможным из-за того, что это обновление потребует обновления других зависимостей, сломается обратная совместимость и проект перестанет работать.</li><li>Безопасность. Менее вероятно что актуальные зависимости содержат известные уязвимости</li></ol><h2 id="почему-именно-этот-инструмент" tabindex="-1">Почему именно этот инструмент? <a class="header-anchor" href="#почему-именно-этот-инструмент" aria-label="Permalink to &quot;Почему именно этот инструмент?&quot;">​</a></h2><ol><li>Работает на многих платформах (gitlab, github, ...)</li><li>Много звезд на github, хорошая поддержка</li><li>Этот инструмент используется во многих известных проектах. Например vuejs</li></ol><h2 id="renovate-на-github" tabindex="-1">Renovate на github <a class="header-anchor" href="#renovate-на-github" aria-label="Permalink to &quot;Renovate на github&quot;">​</a></h2><ol><li>Устанавливаем <a href="https://github.com/apps/renovate" target="_blank" rel="noreferrer">https://github.com/apps/renovate</a></li><li>Даем доступ приложению к нужным репозиториям</li><li>Заходим в эти репозитории, там должны были создаться мр, которые конфигурируют renovate. Мерджим ее</li><li>После установки приложения также есть ui, в котором можно посмотреть репозитории и джобы. <a href="https://developer.mend.io/github/upikoth" target="_blank" rel="noreferrer">https://developer.mend.io/github/upikoth</a></li><li>Создана issue <a href="https://github.com/upikoth/docs/issues/12" target="_blank" rel="noreferrer">https://github.com/upikoth/docs/issues/12</a>, которая показывает какие зависимости нужно обновить</li><li>Запустить сканирование можно из issue или из ui. Также можно настроить периодический запуск из конфига renovate</li></ol>',8),l=[r];function n(s,h,u,c,d,_){return a(),t("div",null,l)}const v=e(i,[["render",n]]);export{b as __pageData,v as default};
