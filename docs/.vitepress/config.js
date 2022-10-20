module.exports = {
	title: 'Документация',
	lang: 'ru',
	base: '/docs/',

	themeConfig: {
		sidebar: {
			'/': getSidebar()
		}
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
}
