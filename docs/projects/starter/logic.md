# Бизнес логика приложения

Сущности:
- Пользователь
- Сессия
- Регистрация
- Запрос на восстановление пароля
<!-- - Файл -->

<!-- Пользователь:
- активный (status active)
- заблокированный (status blocked) -->

Роли пользователя:
- User
- Admin
<!-- - SuperAdmin -->

## User story

### Неавторизованный пользователь
1. может заходить на страницу авторизации и попытаться авторизоваться
- для этого нужно указать email и пароль
<!-- - также пользователь не должен быть заблокирован -->

2. может зарегистрироваться в приложении указав почту и пароль и подтвердив регистрацию через почту
- для регистрации почта пользователя должна быть уникальна в системе
- регистрация фиксируется в системе, после подтверждения она удаляется
- все пользователи регистрируются автоматически с ролью User

3. может восстановить пароль с помощью почты

### Авторизованный пользователь. Роль User

<!-- #### Пользователи и действия над ними

- может получить информацию о себе и отредактировать. Email, роль отредактировать нельзя -->

#### Сессии и действия над ними

- может удалить свою сессию

<!-- #### Файлы и действия над ними

- может получить список своих файлов. Удалить свои файлы или загрузить новые. -->

### Авторизованный пользователь. Роль Admin

#### Пользователи и действия над ними

- может получить список всех пользователей приложения
<!-- - может получить полную информация о любом пользователе -->
<!-- - может отредактировать любого пользователя c ролью User, также может отредактировать свой профиль.
	Email редактировать нельзя.
	Может изменить роль с User на Admin, другие изменения роли запрещены. -->
<!-- - может заблокировать любого пользователя в системе с ролью User и Admin
  Все сессии заблокированного пользователя должны удалиться -->

<!-- #### Сессии и действия над ними

- может получить все сессии всех пользователей приложения
- может удалить любую сессию в приложении -->

<!-- #### Регистрации и действия над ними

- может получить все регистрации приложения
- может удалить любую регистрацию в приложении -->

<!-- #### Файлы и действия над ними

- может получить список всех файлов. Также доступна фильтрация по id пользователя (Возможно сделано через ФИО или почту).
- НЕ может удалить файлы других пользователей.
- НЕ может загружать свои файлы. -->

<!-- ### Авторизованный пользователь. Роль SuperAdmin

SuperAdmin только один в приложении

#### Пользователи и действия над ними

- может получить список всех пользователей приложения
- может получить полную информация о любом пользователе
- может создать нового пользователя, указав email и пароль. Email должен быть уникален
- может отредактировать любого пользователя. Email редактировать нельзя. Может менять роли пользователя. Нельзя изменить роль на SuperAdmin.
- может заблокировать любого пользователя в системе. Все сессии заблокированного пользователя должны удалиться

#### Сессии и действия над ними

- может получить все сессии всех пользователей приложения
- может удалить любую сессию в приложении

#### Регистрации и действия над ними

- может получить все регистрации приложения
- может удалить любую регистрацию в приложении

#### Файлы и действия над ними

- может получить список всех файлов. Также доступна фильтрация по id пользователя (Возможно сделано через ФИО или почту).
- может удалить файлы других пользователей.
- НЕ может загружать свои файлы. -->
