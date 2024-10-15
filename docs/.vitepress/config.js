const base =
	process.argv.find((el) => el.startsWith('base='))?.replace(/^base=/, '') ||
	'/';

module.exports = {
	title: 'Документация',
	lang: 'ru',
	base,

	themeConfig: {
		sidebar: getSidebar(),
		outlineTitle: 'На этой странице',
		docFooter: {
			prev: 'Предыдущая страница',
			next: 'Следующая страница',
		},
	},
};

function getSidebar() {
	return [
		{
			text: 'Проекты',
			items: [
				// {
				//   text: 'Upikoth.dev',
				//   link: '/projects/upikoth-dev/intro',
				// },
				{
					text: 'Docs',
					link: '/projects/docs/intro',
				},
				{
					text: 'Leaders2023',
					link: '/projects/leaders2023/intro',
				},
				{
					text: 'Starter',
					link: '/projects/starter/intro',
					items: [
						{
							text: 'Бизнес логика',
							link: '/projects/starter/logic',
						},
						{
							text: 'Database',
							link: '/projects/starter/database',
						},
						{
							text: 'Backend',
							link: '/projects/starter/backend',
						},
						{
							text: 'Frontend',
							link: '/projects/starter/frontend',
						},
						{
							text: 'CI/CD и окружения',
							link: '/projects/starter/ci-cd',
						},
						{
							text: 'Как создать новый проект',
							link: '/projects/starter/initialization',
						},
					],
				},
			],
		},
		{
			text: 'Инструменты',
			items: [
				{ text: 'Терминал', link: '/tools/terminal' },
				{ text: 'Vscode', link: '/tools/vscode' },
				// { text: 'Sentry', link: '/tools/sentry' },
				{ text: 'Kafka', link: '/tools/kafka' },
				{ text: 'Renovate', link: '/tools/renovate' },
				{
					text: 'Yandex Cloud',
					items: [
						// {
						//   text: 'CLI',
						//   link: '/tools/yandex-cloud/cli',
						// },
						{
							text: 'Статический сайт',
							link: '/tools/yandex-cloud/static-site',
						},
					],
				},
			],
		},
		{
			text: 'Соглашения',
			items: [{ text: 'Git', link: '/agreements/git' }],
		},
		{
			text: 'Изучение ЯП',
			items: [
				{ text: 'Типы данных', link: '/pl/data-types' },
				{ text: 'Переменные', link: '/pl/variables' },
				{ text: 'Функции', link: '/pl/functions' },
				{
					text: 'Операции',
					items: [
						{ text: 'Числа', link: '/pl/operations/numbers' },
						{ text: 'Строки', link: '/pl/operations/strings' },
					],
				},
				{
					text: 'Go',
					items: [
						{ text: 'Slice', link: '/pl/go/slice' },
						{ text: 'Map', link: '/pl/go/map' },
					],
				},
				// {
				//   text: 'Алгоритмы',
				//   items: [{ text: 'Деревья', link: '/pl/algorithms/trees' }],
				// },
			],
		},
		// {
		//   text: 'Архитектура',
		//   items: [{ text: 'System design', link: '/architecture/system-design' }],
		// },
		{
			text: 'Frontend',
			items: [
				{ text: 'Анализ бандла', link: '/frontend/bundle-analysis' },
				// { text: 'Груминг', link: '/frontend/grooming' },
				{ text: 'Создание документации', link: '/frontend/documentation' },
				// {
				// 	text: 'Quasar',
				// 	items: [
				// 		{
				// 			text: 'Разработка под android',
				// 			link: '/frontend/quasar/android',
				// 		},
				// 	],
				// },
				// { text: 'Собеседование', link: '/frontend/interview' },
			],
		},
		{
			text: 'Backend',
			items: [
				{ text: 'Как найти утечки памяти, понять что расходует CPU', link: '/backend/memory-leak-cpu-consumption' },
				{ text: 'Конкурентность и параллелизм', link: '/backend/concurrency-parallelism' },
			],
		},
		{
			text: 'Database',
			items: [
				{
					text: 'Postgres',
					items: [
						{
							text: 'Запуск в docker',
							link: '/database/postgres/docker',
						},
					],
				},
				// { text: 'Анализ запроса к БД', link: '/database/query-analysis' },
			],
		},
		{
			text: 'CI/CD',
			items: [
				{ text: 'Github Actions', link: '/ci-cd/github-actions' },
				{ text: 'Docker', link: '/ci-cd/docker' },
				{ text: 'Настройка сервера', link: '/ci-cd/server' },
				{ text: 'Nginx', link: '/ci-cd/nginx' },
				{ text: 'SSL сертификат', link: '/ci-cd/ssl' },
			],
		},
		// {
		//   text: 'Testing',
		//   items: [
		//     {
		//       text: 'Frontend',
		//       items: [
		//         {
		//           text: 'Подходы к тестированию',
		//           link: '/testing/frontend/methods',
		//         },
		//       ],
		//     },
		//     // {
		//     //   text: 'Security',
		//     //   items: [
		//     //     {
		//     //       text: 'Roadmap',
		//     //       link: '/testing/security/roadmap',
		//     //     },
		//     //   ],
		//     // },
		//   ],
		// },
		// {
		//   text: 'Design',
		//   items: [
		//     {
		//       text: 'Ui kit',
		//       items: [
		//         {
		//           text: 'Шаги по созданию Ui kit',
		//           link: '/design/ui-kit/flow',
		//         },
		//       ],
		//     },
		//   ],
		// },
		// {
		//   text: 'Не совсем про код',
		//   items: [
		//     {
		//       text: 'Развитие',
		//       link: '/other/development',
		//     },
		//     {
		//       text: 'Логирование времени',
		//       link: '/other/tracking',
		//     },
		//     {
		//       text: 'Планирование',
		//       link: '/other/planning',
		//     },
		//   ],
		// },
		// {
		//   text: 'Product',
		//   items: [{ text: 'Шаги создания приложения', link: '/product/steps' }],
		// },
	];
}
