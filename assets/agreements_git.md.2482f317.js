import{_ as e,c as i,o as a,a as r}from"./app.1727302f.js";const g=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0432\u0435\u0442\u043A\u0438","slug":"\u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435-\u0432\u0435\u0442\u043A\u0438","link":"#\u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435-\u0432\u0435\u0442\u043A\u0438","children":[]},{"level":2,"title":"\u0418\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0435\u0442\u043E\u043A","slug":"\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u0432\u0435\u0442\u043E\u043A","link":"#\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u0432\u0435\u0442\u043E\u043A","children":[]},{"level":2,"title":"\u0418\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432","slug":"\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432","link":"#\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432","children":[]}],"relativePath":"agreements/git.md"}'),t={name:"agreements/git.md"},l=r('<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h1><p>\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u043F\u043E \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044E \u0432\u0435\u0442\u043E\u043A \u0438 \u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432</p><h2 id="\u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435-\u0432\u0435\u0442\u043A\u0438" tabindex="-1">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0432\u0435\u0442\u043A\u0438 <a class="header-anchor" href="#\u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435-\u0432\u0435\u0442\u043A\u0438" aria-hidden="true">#</a></h2><ul><li>main</li></ul><h2 id="\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u0432\u0435\u0442\u043E\u043A" tabindex="-1">\u0418\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0435\u0442\u043E\u043A <a class="header-anchor" href="#\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u0432\u0435\u0442\u043E\u043A" aria-hidden="true">#</a></h2><p><a href="https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4" target="_blank" rel="noreferrer">\u0421\u0442\u0430\u0442\u0435\u0439\u043A\u0430, \u043E\u0442\u043A\u0443\u0434\u0430 \u0431\u0440\u0430\u043B \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E</a></p><p>category/reference/description</p><p>category:</p><ul><li>feature (is for adding, refactoring or removing a feature)</li><li>hotfix (is for changing code with a temporary solution and/or without following the usual process, usually because of an emergency)</li><li>bugfix (is for fixing a bug)</li><li>test (is for experimenting outside of an issue/ticket)</li></ul><p>reference:</p><ul><li>no-ref</li><li>issue-(id)</li><li>jira-(id)</li></ul><p>description: \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 issue</p><p>\u041F\u0440\u0438\u043C\u0435\u0440: feature/issue-1/add-deploy-gh-pages</p><h2 id="\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432" tabindex="-1">\u0418\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432 <a class="header-anchor" href="#\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432" aria-hidden="true">#</a></h2><p><a href="https://www.conventionalcommits.org/en/v1.0.0/#summary" target="_blank" rel="noreferrer">conventional commits</a></p><p>category(reference): message</p><p>BREAKING CHANGE: \u0447\u0442\u043E \u043B\u043E\u043C\u0430\u0435\u0442 \u043E\u0431\u0440\u0430\u0442\u043D\u0443\u044E \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C</p><p>category:</p><ul><li>chore (ci/cd, \u0442\u0435\u0441\u0442\u044B, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F)</li><li>fix (\u0444\u0438\u043A\u0441 \u0431\u0430\u0433\u043E\u0432)</li><li>feat (\u043D\u043E\u0432\u044B\u0435 \u0444\u0438\u0447\u0438)</li></ul><p>reference:</p><ul><li>no-ref</li><li>issue-(id)</li><li>jira-(id)</li></ul><p>message: \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043C\u0438\u0442\u0430</p><p>\u041F\u0440\u0438\u043C\u0435\u0440: chore(issue-1): \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0434\u0435\u043F\u043B\u043E\u0439 \u043D\u0430 gh pages</p>',23),n=[l];function s(o,c,d,p,h,u){return a(),i("div",null,n)}const _=e(t,[["render",s]]);export{g as __pageData,_ as default};