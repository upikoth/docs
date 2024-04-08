import{_ as a,c as l,o as i,a2 as e}from"./chunks/framework.BSzcDgWL.js";const q=JSON.parse('{"title":"Бизнес логика приложения","description":"","frontmatter":{},"headers":[],"relativePath":"projects/starter/logic.md","filePath":"projects/starter/logic.md"}'),r={name:"projects/starter/logic.md"},t=e('<h1 id="бизнес-логика-приложения" tabindex="-1">Бизнес логика приложения <a class="header-anchor" href="#бизнес-логика-приложения" aria-label="Permalink to &quot;Бизнес логика приложения&quot;">​</a></h1><p>Сущности:</p><ul><li>Пользователь</li><li>Сессия</li><li>Регистрация</li><li>Файл</li></ul><p>Пользователь:</p><ul><li>активный (status active)</li><li>заблокированный (status blocked)</li></ul><p>Роли пользователя:</p><ul><li>User</li><li>Admin</li><li>SuperAdmin</li></ul><h2 id="user-story" tabindex="-1">User story <a class="header-anchor" href="#user-story" aria-label="Permalink to &quot;User story&quot;">​</a></h2><h3 id="неавторизованныи-пользователь" tabindex="-1">Неавторизованный пользователь <a class="header-anchor" href="#неавторизованныи-пользователь" aria-label="Permalink to &quot;Неавторизованный пользователь&quot;">​</a></h3><ol><li>может заходить на страницу авторизации и попытаться авторизоваться</li></ol><ul><li>для этого нужно указать email и пароль</li><li>также пользователь не должен быть заблокирован</li></ul><ol start="2"><li>может зарегистрироваться в приложении указав почту и пароль и подтвердив регистрацию через почту</li></ol><ul><li>для регистрации почта пользователя должна быть уникальна в системе</li><li>регистрация фиксируется в системе, после подтверждения она удаляется</li><li>все пользователи регистрируются автоматически с ролью User</li></ul><h3 id="авторизованныи-пользователь-роль-user" tabindex="-1">Авторизованный пользователь. Роль User <a class="header-anchor" href="#авторизованныи-пользователь-роль-user" aria-label="Permalink to &quot;Авторизованный пользователь. Роль User&quot;">​</a></h3><h4 id="пользователи-и-деиствия-над-ними" tabindex="-1">Пользователи и действия над ними <a class="header-anchor" href="#пользователи-и-деиствия-над-ними" aria-label="Permalink to &quot;Пользователи и действия над ними&quot;">​</a></h4><ul><li>может получить информацию о себе и отредактировать. Email, роль отредактировать нельзя</li></ul><h4 id="сессии-и-деиствия-над-ними" tabindex="-1">Сессии и действия над ними <a class="header-anchor" href="#сессии-и-деиствия-над-ними" aria-label="Permalink to &quot;Сессии и действия над ними&quot;">​</a></h4><ul><li>может удалить свою сессию</li></ul><h4 id="фаилы-и-деиствия-над-ними" tabindex="-1">Файлы и действия над ними <a class="header-anchor" href="#фаилы-и-деиствия-над-ними" aria-label="Permalink to &quot;Файлы и действия над ними&quot;">​</a></h4><ul><li>может получить список своих файлов. Удалить свои файлы или загрузить новые.</li></ul><h3 id="авторизованныи-пользователь-роль-admin" tabindex="-1">Авторизованный пользователь. Роль Admin <a class="header-anchor" href="#авторизованныи-пользователь-роль-admin" aria-label="Permalink to &quot;Авторизованный пользователь. Роль Admin&quot;">​</a></h3><h4 id="пользователи-и-деиствия-над-ними-1" tabindex="-1">Пользователи и действия над ними <a class="header-anchor" href="#пользователи-и-деиствия-над-ними-1" aria-label="Permalink to &quot;Пользователи и действия над ними&quot;">​</a></h4><ul><li>может получить список всех пользователей приложения</li><li>может получить полную информация о любом пользователе</li><li>может отредактировать любого пользователя c ролью User, также может отредактировать свой профиль. Email редактировать нельзя. Может изменить роль с User на Admin, другие изменения роли запрещены.</li><li>может заблокировать любого пользователя в системе с ролью User и Admin Все сессии заблокированного пользователя должны удалиться</li></ul><h4 id="сессии-и-деиствия-над-ними-1" tabindex="-1">Сессии и действия над ними <a class="header-anchor" href="#сессии-и-деиствия-над-ними-1" aria-label="Permalink to &quot;Сессии и действия над ними&quot;">​</a></h4><ul><li>может получить все сессии всех пользователей приложения</li><li>может удалить любую сессию в приложении</li></ul><h4 id="регистрации-и-деиствия-над-ними" tabindex="-1">Регистрации и действия над ними <a class="header-anchor" href="#регистрации-и-деиствия-над-ними" aria-label="Permalink to &quot;Регистрации и действия над ними&quot;">​</a></h4><ul><li>может получить все регистрации приложения</li><li>может удалить любую регистрацию в приложении</li></ul><h4 id="фаилы-и-деиствия-над-ними-1" tabindex="-1">Файлы и действия над ними <a class="header-anchor" href="#фаилы-и-деиствия-над-ними-1" aria-label="Permalink to &quot;Файлы и действия над ними&quot;">​</a></h4><ul><li>может получить список всех файлов. Также доступна фильтрация по id пользователя (Возможно сделано через ФИО или почту).</li><li>НЕ может удалить файлы других пользователей.</li><li>НЕ может загружать свои файлы.</li></ul><h3 id="авторизованныи-пользователь-роль-superadmin" tabindex="-1">Авторизованный пользователь. Роль SuperAdmin <a class="header-anchor" href="#авторизованныи-пользователь-роль-superadmin" aria-label="Permalink to &quot;Авторизованный пользователь. Роль SuperAdmin&quot;">​</a></h3><p>SuperAdmin только один в приложении</p><h4 id="пользователи-и-деиствия-над-ними-2" tabindex="-1">Пользователи и действия над ними <a class="header-anchor" href="#пользователи-и-деиствия-над-ними-2" aria-label="Permalink to &quot;Пользователи и действия над ними&quot;">​</a></h4><ul><li>может получить список всех пользователей приложения</li><li>может получить полную информация о любом пользователе</li><li>может создать нового пользователя, указав email и пароль. Email должен быть уникален</li><li>может отредактировать любого пользователя. Email редактировать нельзя. Может менять роли пользователя. Нельзя изменить роль на SuperAdmin.</li><li>может заблокировать любого пользователя в системе. Все сессии заблокированного пользователя должны удалиться</li></ul><h4 id="сессии-и-деиствия-над-ними-2" tabindex="-1">Сессии и действия над ними <a class="header-anchor" href="#сессии-и-деиствия-над-ними-2" aria-label="Permalink to &quot;Сессии и действия над ними&quot;">​</a></h4><ul><li>может получить все сессии всех пользователей приложения</li><li>может удалить любую сессию в приложении</li></ul><h4 id="регистрации-и-деиствия-над-ними-1" tabindex="-1">Регистрации и действия над ними <a class="header-anchor" href="#регистрации-и-деиствия-над-ними-1" aria-label="Permalink to &quot;Регистрации и действия над ними&quot;">​</a></h4><ul><li>может получить все регистрации приложения</li><li>может удалить любую регистрацию в приложении</li></ul><h4 id="фаилы-и-деиствия-над-ними-2" tabindex="-1">Файлы и действия над ними <a class="header-anchor" href="#фаилы-и-деиствия-над-ними-2" aria-label="Permalink to &quot;Файлы и действия над ними&quot;">​</a></h4><ul><li>может получить список всех файлов. Также доступна фильтрация по id пользователя (Возможно сделано через ФИО или почту).</li><li>может удалить файлы других пользователей.</li><li>НЕ может загружать свои файлы.</li></ul>',39),o=[t];function h(s,u,n,d,c,m){return i(),l("div",null,o)}const p=a(r,[["render",h]]);export{q as __pageData,p as default};
