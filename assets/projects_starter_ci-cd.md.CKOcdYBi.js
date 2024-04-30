import{_ as e,c as a,o as r,a1 as t}from"./chunks/framework.CSxuwOm8.js";const f=JSON.parse('{"title":"CI/CD и окружения","description":"","frontmatter":{},"headers":[],"relativePath":"projects/starter/ci-cd.md","filePath":"projects/starter/ci-cd.md"}'),o={name:"projects/starter/ci-cd.md"},i=t('<h1 id="ci-cd-и-окружения" tabindex="-1">CI/CD и окружения <a class="header-anchor" href="#ci-cd-и-окружения" aria-label="Permalink to &quot;CI/CD и окружения&quot;">​</a></h1><ul><li><a href="https://upikoth.grafana.net/d/nodes/main-server-overview" target="_blank" rel="noreferrer">Grafana с информацией о хосте, на котором запущен проект</a></li><li><a href="https://upikoth.grafana.net/d/integration-docker-overview/main-docker-overview" target="_blank" rel="noreferrer">Grafana с информацией о docker контейнерах</a></li></ul><h2 id="dev" tabindex="-1">Dev <a class="header-anchor" href="#dev" aria-label="Permalink to &quot;Dev&quot;">​</a></h2><p>При разработке все сервисы работают локально.</p><ul><li>Database: sqlite в файле</li><li>Backend: localhost:8000</li><li>Frontend: localhost:4001</li></ul><h2 id="prod" tabindex="-1">Prod <a class="header-anchor" href="#prod" aria-label="Permalink to &quot;Prod&quot;">​</a></h2><p>Все сервисы запущены в docker</p><ul><li>Database: sqlite в файле. volume /var/www/databases/starter-bun-database.sqlite</li><li>Логи также через volume доступны тут /var/www/logs/starter-bun</li><li>Backend: 127.0.0.1:8000</li><li>Frontend: starter.upikoth.dev - 127.0.0.1:4001</li></ul>',8),l=[i];function s(n,d,c,h,_,p){return r(),a("div",null,l)}const v=e(o,[["render",s]]);export{f as __pageData,v as default};