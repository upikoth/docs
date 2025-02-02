import{_ as i,c as a,a0 as n,o as l}from"./chunks/framework.D-WqjATM.js";const g=JSON.parse('{"title":"Свой сервер","description":"","frontmatter":{},"headers":[],"relativePath":"ci-cd/server-local.md","filePath":"ci-cd/server-local.md"}'),t={name:"ci-cd/server-local.md"};function p(h,s,k,e,F,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="свои-сервер" tabindex="-1">Свой сервер <a class="header-anchor" href="#свои-сервер" aria-label="Permalink to &quot;Свой сервер&quot;">​</a></h1><ol><li><p>Установить ununtu. У меня была версия 24.04.1</p></li><li><p>Настроить подключение к интернету</p></li></ol><p>Подключаемся к wifi:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wpa_passphrase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;имя сети&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;пароль&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/wpa_supplicant.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wpa_supplicant</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -B</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wlp2s0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/wpa_supplicant.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemd-networkd</span></span></code></pre></div><p>Настраиваем маршрутизацию</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Показывает информацию по доступным интерфейсам</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> route</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Показывает настройки маршрутизации</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.0.100/24</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wlp2s0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 192.168.0.100 - это будет адрес устройства во внутренней сети</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> route</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> via</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.0.1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 192.168.0.1 - это адрес gateway на роутере</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Можно проверить с другого устройства в сети или в доке роутера</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># После этого будет работать обращение по IP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ping</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8.8.8.8</span></span></code></pre></div><p>скачиваем network-manager и настраиваем, чтобы сервер подключался к wifi после перезагрузки</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network-manager</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NetworkManager</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nmcli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wifi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;name&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;password&quot;</span></span></code></pre></div><p>Настраиваем DNS</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/resolved.conf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Надо будет раскомментить и указать DNS и FallbackDNS </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemd-resolved</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># После этого будет работать интернет</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ping</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> google.com</span></span></code></pre></div><ol start="3"><li><p>Как обычно настраиваем ssh и ufw</p></li><li><p>Настраиваем роутер</p></li></ol><ul><li>сначала надо купить белый IP</li><li>в настройках DHCP сервера назначаем статический IP для нашего устройства - 192.168.0.100</li><li>настраиваем либо dmz, либо перенаправление портов на наш сервер</li></ul><ol start="5"><li>Настраиваем чтобы при перезагрузке сервера происходил автологин и ssh автоматически запускался</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/getty@tty1.service.d/override.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Заменить строку ExecStart на</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-/sbin/agetty</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --autologin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> имя_пользователя</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --noclear</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $TERM</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reboot</span></span></code></pre></div><p>Если что-то пошло не так, shift при загрузке системы и заход под рутом должны помочь</p>`,15)]))}const c=i(t,[["render",p]]);export{g as __pageData,c as default};
