module.exports = {
	title: 'Документация',
	lang: 'ru',
	base: '/docs/',

	themeConfig: {
		sidebar: getSidebar()
	}
}

function getSidebar() {
	return [
		{
			text: 'Фронтенд',
			items: [
				{ text: 'Создание документации', link: '/frontend/documentation' },
			],
		},
	]
}
