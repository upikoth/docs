# Github Actions

Github Actions - платформа для автоматизации рабочих процессов. CI/CD является одним из примеров такого рабочего процесса.

Любые действия с репозиторием генерируют Event. Полный список событий есть в [доке](https://docs.github.com/ru/actions/using-workflows/events-that-trigger-workflows).

На Event триггериться Workflow. Workflow содержит набор Actions. Actions группируются в Job.

Например:

Event: Создание issue.

Worflow:
- action: Label
- action: Assign
