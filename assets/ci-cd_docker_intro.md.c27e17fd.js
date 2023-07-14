import{_ as a,c as e,o as s,a as n}from"./app.a49b7fe7.js";const u=JSON.parse('{"title":"Docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435","slug":"\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435","link":"#\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435","children":[]},{"level":2,"title":"\u041A\u0430\u043A \u0441\u043E\u0437\u0434\u0430\u0442\u044C Image","slug":"\u043A\u0430\u043A-\u0441\u043E\u0437\u0434\u0430\u0442\u044C-image","link":"#\u043A\u0430\u043A-\u0441\u043E\u0437\u0434\u0430\u0442\u044C-image","children":[]},{"level":2,"title":"\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435","slug":"\u0443\u0434\u0430n\u0435\u043D\u043D\u043E\u0435-\u043F\u043E\u0434\u043An\u044E\u0447\u0435\u043D\u0438\u0435","link":"#\u0443\u0434\u0430n\u0435\u043D\u043D\u043E\u0435-\u043F\u043E\u0434\u043An\u044E\u0447\u0435\u043D\u0438\u0435","children":[]}],"relativePath":"ci-cd/docker/intro.md"}'),l={name:"ci-cd/docker/intro.md"},o=n(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h1><h2 id="\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435" tabindex="-1">\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 <a class="header-anchor" href="#\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435" aria-hidden="true">#</a></h2><p>\u0414\u043E\u043A\u0435\u0440 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0435\u0434\u0438\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u043E \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0438\u0445 \u0441\u0442\u0435\u043A\u0430.</p><p>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u044B:</p><ul><li>Container</li><li>Image</li><li>Registry</li><li>Dockerfile</li></ul><p>Container - \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0440\u0435\u0434\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435. \u042D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 Image. Image \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0432\u043D\u0443\u0442\u0440\u0438 Container.</p><p>Image - \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0444\u0430\u0439\u043B\u043E\u0432\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0434\u043B\u044F Container. \u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435, \u0447\u0442\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.</p><p>Registry - \u043C\u0435\u0441\u0442\u043E \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.</p><p>Dockerfile - \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E Image.</p><p>\u041F\u0440\u043E\u0441\u0442\u0435\u0439\u0448\u0438\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F Docker \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0442\u0430\u043A:</p><ol><li>\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0435\u043C Image</li><li>Image \u0445\u0440\u0430\u043D\u0438\u043C \u0432 Registry. \u041F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C \u0438\u043B\u0438 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u043C.</li><li>\u041D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0433\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u043C Image, \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C Container, \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u043F\u043E\u0440\u0442, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.</li></ol><h2 id="\u043A\u0430\u043A-\u0441\u043E\u0437\u0434\u0430\u0442\u044C-image" tabindex="-1">\u041A\u0430\u043A \u0441\u043E\u0437\u0434\u0430\u0442\u044C Image <a class="header-anchor" href="#\u043A\u0430\u043A-\u0441\u043E\u0437\u0434\u0430\u0442\u044C-image" aria-hidden="true">#</a></h2><p>\u0421\u043E\u0437\u0434\u0430\u0435\u043C .Dockerfile</p><p>\u041F\u043E\u043C\u043D\u0438\u043C, \u0447\u0442\u043E \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E \u0441\u0442\u0440\u043E\u043A\u0430\u043C.</p><div class="language-docker"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre><code><span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> node:18-alpine</span></span>
<span class="line"><span style="color:#F78C6C;">WORKDIR</span><span style="color:#A6ACCD;"> /app</span></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#A6ACCD;"> . .</span></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#A6ACCD;"> yarn install --production</span></span>
<span class="line"><span style="color:#F78C6C;">CMD</span><span style="color:#A6ACCD;"> [</span><span style="color:#C3E88D;">&quot;node&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#C3E88D;">&quot;src/index.js&quot;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#F78C6C;">EXPOSE</span><span style="color:#A6ACCD;"> 3000</span></span>
<span class="line"></span></code></pre></div><p>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F Image</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker build -t image-name:0.0.1 </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><p>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 Container</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -p 127.0.0.1:3000:3000 image-name:0.0.1</span></span>
<span class="line"></span></code></pre></div><p>docker --help \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u043C</p><h2 id="\u0443\u0434\u0430n\u0435\u043D\u043D\u043E\u0435-\u043F\u043E\u0434\u043An\u044E\u0447\u0435\u043D\u0438\u0435" tabindex="-1">\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 <a class="header-anchor" href="#\u0443\u0434\u0430n\u0435\u043D\u043D\u043E\u0435-\u043F\u043E\u0434\u043An\u044E\u0447\u0435\u043D\u0438\u0435" aria-hidden="true">#</a></h2><p>\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430: \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043D\u0438\u0445, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0435.</p><ol><li>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C Docker Desktop</li><li>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 Portainer</li><li>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435 (\u043D\u043E\u0432\u044B\u0439 \u0445\u043E\u0441\u0442)</li></ol><p>\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443.</p>`,24),p=[o];function i(t,r,c,d,C,h){return s(),e("div",null,p)}const y=a(l,[["render",i]]);export{u as __pageData,y as default};
