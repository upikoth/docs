import{_ as s,c as n,o as a,d as e}from"./app.8b576cc8.js";const x=JSON.parse('{"title":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 Nginx mac","description":"","frontmatter":{},"headers":[],"relativePath":"ci-cd/nginx-mac.md"}'),p={name:"ci-cd/nginx-mac.md"},l=e(`<h1 id="\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430-nginx-mac" tabindex="-1">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 Nginx mac <a class="header-anchor" href="#\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430-nginx-mac" aria-hidden="true">#</a></h1><p>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 nginx:</p><p>\u0415\u0441\u043B\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E, \u043D\u0443\u0436\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C brew, \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">brew update</span></span>
<span class="line"><span style="color:#A6ACCD;">brew upgrade</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">brew install nginx</span></span>
<span class="line"></span></code></pre></div><p>\u0417\u0430\u043F\u0443\u0441\u043A nginx \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">brew services info nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">brew services start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">brew services stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">brew services restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"></span></code></pre></div>`,6),c=[l];function t(i,o,r,d,_,g){return a(),n("div",null,c)}const A=s(p,[["render",t]]);export{x as __pageData,A as default};
