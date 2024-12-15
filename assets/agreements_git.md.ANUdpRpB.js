import{_ as i,c as a,a0 as r,o as t}from"./chunks/framework.D-WqjATM.js";const f=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[],"relativePath":"agreements/git.md","filePath":"agreements/git.md"}'),o={name:"agreements/git.md"};function l(n,e,s,p,c,u){return t(),a("div",null,e[0]||(e[0]=[r('<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h1><p>Соглашения по именованию веток и коммитов</p><h2 id="именование-веток" tabindex="-1">Именование веток <a class="header-anchor" href="#именование-веток" aria-label="Permalink to &quot;Именование веток&quot;">​</a></h2><p>category/reference/description</p><p>category:</p><ul><li>feature (is for adding, refactoring or removing a feature)</li><li>hotfix (is for changing code with a temporary solution and/or without following the usual process, usually because of an emergency)</li><li>bugfix (is for fixing a bug)</li><li>test (is for experimenting outside of an issue/ticket)</li></ul><p>reference:</p><ul><li>no-ref</li><li>issue-(id)</li><li>jira-(id)</li></ul><p>description: короткое описание issue</p><p>Пример: feature/issue-1/add-deploy-gh-pages</p><p><a href="https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4" target="_blank" rel="noreferrer">Статья, откуда брал информацию</a></p><h2 id="именование-коммитов" tabindex="-1">Именование коммитов <a class="header-anchor" href="#именование-коммитов" aria-label="Permalink to &quot;Именование коммитов&quot;">​</a></h2><p>category(reference): message</p><p>BREAKING CHANGE: что ломает обратную совместимость</p><p>category:</p><ul><li>chore (ci/cd, тесты, документация)</li><li>fix (фикс багов)</li><li>feat (новые фичи)</li></ul><p>reference:</p><ul><li>no-ref</li><li>issue-(id)</li><li>jira-(id)</li></ul><p>message: сообщение коммита</p><p>Пример: chore(issue-1): Добавлен деплой на gh pages</p><p><a href="https://www.conventionalcommits.org/en/v1.0.0/#summary" target="_blank" rel="noreferrer">conventional commits</a></p><h2 id="основные-постоянные-ветки" tabindex="-1">Основные постоянные ветки <a class="header-anchor" href="#основные-постоянные-ветки" aria-label="Permalink to &quot;Основные постоянные ветки&quot;">​</a></h2><ul><li>main</li></ul>',23)]))}const g=i(o,[["render",l]]);export{f as __pageData,g as default};