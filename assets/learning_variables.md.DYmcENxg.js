import{_ as a,c as i,a0 as e,o as l}from"./chunks/framework.D-WqjATM.js";const c=JSON.parse('{"title":"Переменные","description":"","frontmatter":{},"headers":[],"relativePath":"learning/variables.md","filePath":"learning/variables.md"}'),n={name:"learning/variables.md"};function t(r,s,h,p,o,k){return l(),i("div",null,s[0]||(s[0]=[e(`<h1 id="переменные" tabindex="-1">Переменные <a class="header-anchor" href="#переменные" aria-label="Permalink to &quot;Переменные&quot;">​</a></h1><h2 id="способы-объявления-переменных" tabindex="-1">Способы объявления переменных <a class="header-anchor" href="#способы-объявления-переменных" aria-label="Permalink to &quot;Способы объявления переменных&quot;">​</a></h2><h3 id="typescript" tabindex="-1">Typescript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;Typescript&quot;">​</a></h3><ol><li>var foo = 1;</li><li>let foo = 1; / let foo: number;</li><li>const foo = 1;</li></ol><p>var - область видимости внутри функции, всплытие переменной</p><p>let/const - блочная область видимости</p><h3 id="golang" tabindex="-1">Golang <a class="header-anchor" href="#golang" aria-label="Permalink to &quot;Golang&quot;">​</a></h3><ol><li>var foo int = 1; / var foo int;</li><li>foo := 1;</li><li>foo := new(int); - new возвращает указатель на выделенный блок памяти</li><li>const foo = 1;</li><li>foo := make([]string, 5) - создает slice заданной длины</li></ol><h3 id="postgresql" tabindex="-1">Postgresql <a class="header-anchor" href="#postgresql" aria-label="Permalink to &quot;Postgresql&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create or replace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">returns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> integer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $$</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plpgsql;</span></span></code></pre></div>`,10)]))}const g=a(n,[["render",t]]);export{c as __pageData,g as default};