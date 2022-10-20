module.exports = {
	title: 'Документация',
	lang: 'ru',

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
