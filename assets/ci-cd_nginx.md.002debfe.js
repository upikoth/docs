import{_ as s,c as n,o as a,a as p}from"./app.275aaaeb.js";const d=JSON.parse('{"title":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"ci-cd/nginx.md"}'),l={name:"ci-cd/nginx.md"},e=p(`<h1 id="\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430-nginx" tabindex="-1">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 Nginx <a class="header-anchor" href="#\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430-nginx" aria-hidden="true">#</a></h1><p>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F \u0431\u0443\u0434\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C nginx - \u044D\u0442\u043E \u0440\u0430\u0437\u0434\u0430\u0447\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u043E\u0432) \u0438 \u043A\u0430\u043A \u0432\u0435\u0431 \u0441\u0435\u0440\u0432\u0435\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0444\u0430\u0439\u043B\u044B \u043E\u0442\u0434\u0430\u0435\u0442 \u0441\u0440\u0430\u0437\u0443, \u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u043A \u0431\u044D\u043A\u0435\u043D\u0434 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u043F\u0440\u043E\u043A\u0441\u0438\u0440\u0443\u0435\u0442 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.</p><p>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 nginx:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get install nginx</span></span>
<span class="line"></span></code></pre></div><p>\u0417\u0430\u043F\u0443\u0441\u043A nginx \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">service nginx start</span></span>
<span class="line"><span style="color:#A6ACCD;">service nginx status</span></span>
<span class="line"><span style="color:#A6ACCD;">service nginx reload</span></span>
<span class="line"><span style="color:#A6ACCD;">service nginx restart</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"></span></code></pre></div><p>\u041F\u0440\u043E\u0441\u0442\u0435\u0439\u0448\u0438\u0439 \u043A\u043E\u043D\u0444\u0438\u0433 \u0434\u043B\u044F \u0440\u0430\u0437\u0434\u0430\u0447\u0438 \u0441\u0442\u0430\u0442\u0438\u043A\u0438 \u0438\u0437 /var/www/vue-example \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E nginx \u0438 \u043F\u0440\u043E\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0441 /api/ \u043D\u0430 \u043F\u043E\u0440\u0442 3000.</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre><code><span class="line"><span style="color:#C792EA;">events</span><span style="color:#A6ACCD;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">http</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">185.46.11.17</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">/var/www/vue-example</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/api/.*$ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:3000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,8),o=[e];function c(t,r,i,C,A,D){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{d as __pageData,g as default};