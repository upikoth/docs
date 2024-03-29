# Github Actions

Github Actions - платформа для автоматизации рабочих процессов. CI/CD является одним из примеров такого рабочего процесса.

Любые действия с репозиторием генерируют Event. Полный список событий есть в [доке](https://docs.github.com/ru/actions/using-workflows/events-that-trigger-workflows).

На Event триггериться Workflow. Workflow содержит набор Actions. Actions группируются в Job.

Например:

Event: Создание issue.

Worflow:
- action: Label
- action: Assign

## Примеры Workflow

Документация. Есть артефакты и кэш.

```yaml
name: Build and deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Cache npm dependencies
        id: cache-npm
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-npm-${{ hashFiles('package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-

      - if: ${{ steps.cache-npm.outputs.cache-hit != 'true' }}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-artifacts
          path: docs/.vitepress/dist

  deploy-to-github-pages:
    name: Deploy to Github Pages
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-artifacts
          path: dist

      - name: Deploy Github Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: dist

  deploy-to-server:
    name: Deploy to Server
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-artifacts
          path: dist

      - name: Deploy to Server
        uses: webfactory/ssh-agent@v0.7.0
        with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}

      - run: rsync -e "ssh -p ${{ secrets.SSH_PORT }} -o StrictHostKeyChecking=no" --delete -r ./dist root@${{ secrets.SSH_HOST }}:${{ vars.APP_SERVER_PATH }}
```
