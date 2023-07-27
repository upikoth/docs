import{_ as e,c as t,o as a,a as s}from"./app.d9de3867.js";const u=JSON.parse('{"title":"\u0420\u0430\u0431\u043E\u0442\u0430 \u0438\u0437 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgres/terminal.md"}'),r={name:"database/postgres/terminal.md"},o=s('<h1 id="\u0440\u0430\u0431\u043E\u0442\u0430-\u0438\u0437-\u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439-\u0441\u0442\u0440\u043E\u043A\u0438" tabindex="-1">\u0420\u0430\u0431\u043E\u0442\u0430 \u0438\u0437 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438 <a class="header-anchor" href="#\u0440\u0430\u0431\u043E\u0442\u0430-\u0438\u0437-\u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439-\u0441\u0442\u0440\u043E\u043A\u0438" aria-hidden="true">#</a></h1><p>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 postgres</p><p>\u0441 \u043E\u0444 \u0441\u0430\u0439\u0442\u0430</p><p>\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0430</p><p>systemctl start postgresql systemctl stop postgresql</p><p>su postgres psql</p><p>\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445</p><p>CREATE DATABASE yourdbname; CREATE USER youruser WITH ENCRYPTED PASSWORD &#39;yourpass&#39;; GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser; GRANT ALL PRIVILEGES ON SCHEMA schema_name TO role_name;</p><p>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0439</p><p>brew install golang-migrate</p><p>migrate create -ext sql -dir migrations -seq create_users_table</p><p>migrate -path migrations -database &quot;postgresql://localhost:5432/example?sslmode=disable&quot; -verbose up</p><p><a href="https://github.com/golang-migrate/migrate" target="_blank" rel="noreferrer">\u041F\u0430\u043A\u0435\u0442 \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F\u043C\u0438</a></p>',13),p=[o];function n(i,l,_,c,m,d){return a(),t("div",null,p)}const h=e(r,[["render",n]]);export{u as __pageData,h as default};