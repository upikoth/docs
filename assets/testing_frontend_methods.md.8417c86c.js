import{_ as e,c as t,o as i,a as n}from"./app.275aaaeb.js";const f=JSON.parse('{"title":"\u041C\u043E\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u041A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432:","slug":"\u043An\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F-\u0442\u0435\u0441\u0442\u043E\u0432","link":"#\u043An\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F-\u0442\u0435\u0441\u0442\u043E\u0432","children":[]},{"level":2,"title":"Unit \u0442\u0435\u0441\u0442\u044B","slug":"unit-\u0442\u0435\u0441\u0442\u044B","link":"#unit-\u0442\u0435\u0441\u0442\u044B","children":[]},{"level":2,"title":"\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B","slug":"\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435-\u0442\u0435\u0441\u0442\u044B","link":"#\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435-\u0442\u0435\u0441\u0442\u044B","children":[]},{"level":2,"title":"End to end","slug":"end-to-end","link":"#end-to-end","children":[]}],"relativePath":"testing/frontend/methods.md"}'),l={name:"testing/frontend/methods.md"},a=n('<h1 id="\u043C\u043E\u0439-\u043F\u043E\u0434\u0445\u043E\u0434-\u043A-\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E" tabindex="-1">\u041C\u043E\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E <a class="header-anchor" href="#\u043C\u043E\u0439-\u043F\u043E\u0434\u0445\u043E\u0434-\u043A-\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E" aria-hidden="true">#</a></h1><h2 id="\u043An\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F-\u0442\u0435\u0441\u0442\u043E\u0432" tabindex="-1">\u041A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432: <a class="header-anchor" href="#\u043An\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F-\u0442\u0435\u0441\u0442\u043E\u0432" aria-hidden="true">#</a></h2><ul><li>End to end</li><li>Integration</li><li>Unit</li></ul><h2 id="unit-\u0442\u0435\u0441\u0442\u044B" tabindex="-1">Unit \u0442\u0435\u0441\u0442\u044B <a class="header-anchor" href="#unit-\u0442\u0435\u0441\u0442\u044B" aria-hidden="true">#</a></h2><p>\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 unit&#39;\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442.</p><p>\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0438 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B:</p><ul><li>props</li><li>emits</li><li>\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E html</li><li>\u0432\u044B\u0437\u043E\u0432\u044B api</li><li>\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F store</li></ul><p>\u041D\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C \u0432\u0441\u0435, \u0447\u0442\u043E \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430:</p><ul><li>computed</li><li>methods</li><li>watcher</li><li>\u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438 \u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F</li></ul><p>\u0415\u0441\u043B\u0438 \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u043A\u0430\u043A\u0430\u044F-\u0442\u043E \u043B\u043E\u0433\u0438\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E, \u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0437\u0431\u0438\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u043B\u0438 \u0432\u044B\u043D\u043E\u0441\u0430 \u044D\u0442\u043E\u0439 \u043B\u043E\u0433\u0438\u043A\u0438 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442.</p><p>Unit \u0442\u0435\u0441\u0442\u044B \u043F\u0438\u0448\u0435\u043C \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u043C\u0435 jest.</p><h2 id="\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435-\u0442\u0435\u0441\u0442\u044B" tabindex="-1">\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B <a class="header-anchor" href="#\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435-\u0442\u0435\u0441\u0442\u044B" aria-hidden="true">#</a></h2><p>\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C\u043E\u0439 \u0435\u0434\u0438\u043D\u0438\u0446\u044B \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.</p><p>\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 flow \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.</p><p>\u0414\u043B\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C cypress.</p><h2 id="end-to-end" tabindex="-1">End to end <a class="header-anchor" href="#end-to-end" aria-hidden="true">#</a></h2><p>\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C flow \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.</p><p>\u0414\u043B\u044F end to end \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C cypress.</p>',18),d=[a];function r(s,o,h,c,p,_){return i(),t("div",null,d)}const m=e(l,[["render",r]]);export{f as __pageData,m as default};
