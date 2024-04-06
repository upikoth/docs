# Git

Соглашения по именованию веток и коммитов

## Именование веток

category/reference/description

category:
+ feature (is for adding, refactoring or removing a feature)
+ hotfix (is for changing code with a temporary solution and/or without following the usual process, usually because of an emergency)
+ bugfix (is for fixing a bug)
+ test (is for experimenting outside of an issue/ticket)

reference:
+ no-ref
+ issue-(id)
+ jira-(id)

description: короткое описание issue

Пример: feature/issue-1/add-deploy-gh-pages

[Статья, откуда брал информацию](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4)

## Именование коммитов

category(reference): message

BREAKING CHANGE: что ломает обратную совместимость

category:
+ chore (ci/cd, тесты, документация)
+ fix (фикс багов)
+ feat (новые фичи)

reference:
+ no-ref
+ issue-(id)
+ jira-(id)

message: сообщение коммита

Пример: chore(issue-1): Добавлен деплой на gh pages

[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## Основные постоянные ветки

+ main
