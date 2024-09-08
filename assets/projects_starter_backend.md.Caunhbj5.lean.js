import{_ as s,c as i,a0 as t,o as e}from"./chunks/framework.D-WqjATM.js";const n="/docs/assets/backend-clean-arch.DvbKoCwV.png",E=JSON.parse('{"title":"Backend","description":"","frontmatter":{},"headers":[],"relativePath":"projects/starter/backend.md","filePath":"projects/starter/backend.md"}'),l={name:"projects/starter/backend.md"};function r(h,a,p,o,c,d){return e(),i("div",null,a[0]||(a[0]=[t('<h1 id="backend" tabindex="-1">Backend <a class="header-anchor" href="#backend" aria-label="Permalink to &quot;Backend&quot;">​</a></h1><h2 id="процесс-разработки-новых-методов-изменения-существующего-функционала" tabindex="-1">Процесс разработки новых методов/изменения существующего функционала <a class="header-anchor" href="#процесс-разработки-новых-методов-изменения-существующего-функционала" aria-label="Permalink to &quot;Процесс разработки новых методов/изменения существующего функционала&quot;">​</a></h2><h2 id="документация" tabindex="-1">Документация <a class="header-anchor" href="#документация" aria-label="Permalink to &quot;Документация&quot;">​</a></h2><p>Методы, которые поддерживает сервис описаны в <code>/docs/app/docs.yml</code>. Эта документация содержит схемы запросов и ответов, а также примеры запросов и ответов.</p><h2 id="структура-проекта" tabindex="-1">Структура проекта <a class="header-anchor" href="#структура-проекта" aria-label="Permalink to &quot;Структура проекта&quot;">​</a></h2><p>Содержит точки входа в приложение</p><h3 id="internal-app" tabindex="-1"><code>/internal/app</code> <a class="header-anchor" href="#internal-app" aria-label="Permalink to &quot;`/internal/app`&quot;">​</a></h3><p>Пакет app содержит логику для создания экземпляра приложения. При этом создаются экземпляры всех компонентов приложения (controller, repository). После этого происходит запуск приложения при котором запускаются необходимые компоненты приложения.</p><h3 id="internal-constants" tabindex="-1"><code>/internal/constants</code> <a class="header-anchor" href="#internal-constants" aria-label="Permalink to &quot;`/internal/constants`&quot;">​</a></h3><p>Константы</p><h3 id="internal-controller" tabindex="-1"><code>/internal/controller</code> <a class="header-anchor" href="#internal-controller" aria-label="Permalink to &quot;`/internal/controller`&quot;">​</a></h3><p>Содержит логику получения запросов и формирования ответов</p><h3 id="internal-model" tabindex="-1"><code>/internal/model</code> <a class="header-anchor" href="#internal-model" aria-label="Permalink to &quot;`/internal/model`&quot;">​</a></h3><p>Основные модели приложения (domains)</p><h3 id="internal-repository" tabindex="-1"><code>/internal/repository</code> <a class="header-anchor" href="#internal-repository" aria-label="Permalink to &quot;`/internal/repository`&quot;">​</a></h3><p>Содержит логику получения данных из других источников</p><h3 id="internal-service" tabindex="-1"><code>/internal/service</code> <a class="header-anchor" href="#internal-service" aria-label="Permalink to &quot;`/internal/service`&quot;">​</a></h3><p>Бизнес логика приложения</p><p>Ориентировался на проекты:</p><ul><li><a href="https://github.com/golang-standards/project-layout" target="_blank" rel="noreferrer">https://github.com/golang-standards/project-layout</a></li><li><a href="https://github.com/evrone/go-clean-template" target="_blank" rel="noreferrer">https://github.com/evrone/go-clean-template</a></li><li><a href="https://github.com/bxcodec/go-clean-arch" target="_blank" rel="noreferrer">https://github.com/bxcodec/go-clean-arch</a></li><li><a href="https://github.com/Creatly/creatly-backend" target="_blank" rel="noreferrer">https://github.com/Creatly/creatly-backend</a></li></ul><p><img src="'+n+`" alt="backend-clean-arch"></p><h2 id="форматы-http-запроса-и-ответа" tabindex="-1">Форматы http запроса и ответа <a class="header-anchor" href="#форматы-http-запроса-и-ответа" aria-label="Permalink to &quot;Форматы http запроса и ответа&quot;">​</a></h2><p>Тело запроса:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;meta&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// Данные, необходимые для запроса</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Успешный ответ:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// Данные ответа</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Ошибка при обработке запроса:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,28)]))}const u=s(l,[["render",r]]);export{E as __pageData,u as default};
