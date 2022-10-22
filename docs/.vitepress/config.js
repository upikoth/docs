module.exports = {
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
			text: 'Фронтенд',
			items: [
				{ text: 'Создание документации', link: '/frontend/documentation' },
				{ text: 'Quassar', items: [
					{ text: 'Разработка под android', link: '/frontend/quasar/android' },
				] },
			],
		},
		{
			text: 'CI/CD',
			items: [
				{ text: 'Настройка сервера', link: '/ci-cd/server' },
				{ text: 'Настройка Nginx', link: '/ci-cd/nginx' },
			],
		},
	]
}
