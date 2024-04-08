import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BSzcDgWL.js";const g=JSON.parse('{"title":"SSL","description":"","frontmatter":{},"headers":[],"relativePath":"ci-cd/ssl.md","filePath":"ci-cd/ssl.md"}'),t={name:"ci-cd/ssl.md"},e=n(`<h1 id="ssl" tabindex="-1">SSL <a class="header-anchor" href="#ssl" aria-label="Permalink to &quot;SSL&quot;">​</a></h1><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># устанавливаем Certbot</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -yq</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># устанавливаем плагин для nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3-certbot-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># генерируем/обновляем сертификат</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upikoth.dev</span></span></code></pre></div><p>конфиг nginx будет автоматически обновлен и nginx перезапущен</p>`,3),l=[e];function p(h,k,d,r,c,o){return a(),i("div",null,l)}const _=s(t,[["render",p]]);export{g as __pageData,_ as default};