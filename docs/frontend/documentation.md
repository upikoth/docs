# Создание документации на vitepress

## Создание проекта

Копируем и вставляем в консоль следующий скрипт:

```bash
sudo npm install -g npm-add-script

mkdir documentation
cd documentation

npm init -y
npm i -D vitepress

echo ".DS_Store
node_modules
docs/.vitepress/dist" > .gitignore

npmAddScript -k dev -v "vitepress dev docs"
npmAddScript -k build -v "vitepress build docs"
npmAddScript -k serve -v "vitepress serve docs"

mkdir docs
echo "# Документация" > docs/index.md

mkdir docs/.vitepress

mkdir docs/menu
echo "# Пример описания" > docs/menu/child.md

echo "module.exports = {
	title: 'Документация',
	lang: 'ru',
	base: '/docs/',

	themeConfig: {
		sidebar: getSidebar(),
		outlineTitle: 'На этой странице'
	}
}

function getSidebar() {
	return [
		{
			text: 'Пункт меню',
			children: [
				{ text: 'Подпункт меню', link: '/menu/child' },
			],
		},
	]
}" > docs/.vitepress/config.js
```

Получаем проект с заготовкой документации.

После этого:
1. Создаем проект на github, например, docs, должно совпадать с параметром base в docs/.vitepress/config.js
2. инициализируем git
3. меняем основную ветку на main
4. пушим проект на github

## Деплой документации в github pages

1. создаем файл .github/workflows/deploy.yml

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

2. Пушим изменения в репозиторий.

github action создаст ветку gh-pages, в которой будет лежать билд проекта

3. Заходим в проект -> Settings/Pages
4. Устанавливаем Deploy from a branch
5. Выбираем ветку gh-pages
6. На этой странице должна быть кнопка visit site, которая будет вести на документацию
