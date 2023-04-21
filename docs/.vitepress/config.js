module.exports = {
  title: 'Документация',
  lang: 'ru',
  base: '/docs/',

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
      text: 'Соглашения',
      items: [{ text: 'Git', link: '/agreements/git' }],
    },
    {
      text: 'Product',
      items: [{ text: 'Шаги создания приложения', link: '/product/steps' }],
    },
    {
      text: 'Frontend',
      items: [
        { text: 'Создание документации', link: '/frontend/documentation' },
        {
          text: 'Quassar',
          items: [
            {
              text: 'Разработка под android',
              link: '/frontend/quasar/android',
            },
          ],
        },
        { text: 'Собеседование', link: '/frontend/interview' },
      ],
    },
    {
      text: 'Backend',
      items: [
        {
          text: 'Go',
          items: [
            {
              text: 'Общая информация',
              link: '/backend/go/common',
            },
            {
              text: 'Полезные материалы',
              link: '/backend/go/sources',
            },
            {
              text: 'Debugging Vscode',
              link: '/backend/go/debugging-vscode',
            },
          ],
        },
      ],
    },
    {
      text: 'Database',
      items: [
        {
          text: 'Postgres',
          items: [
            {
              text: 'Работа из командной строки',
              link: '/database/postgres/terminal',
            },
          ],
        },
      ],
    },
    {
      text: 'CI/CD',
      items: [
        { text: 'Настройка сервера', link: '/ci-cd/server' },
        { text: 'Настройка Nginx Ubuntu', link: '/ci-cd/nginx-ubuntu' },
        { text: 'Настройка Nginx mac', link: '/ci-cd/nginx-mac' },
      ],
    },
    {
      text: 'Testing',
      items: [
        {
          text: 'Frontend',
          items: [
            {
              text: 'Подходы к тестированию',
              link: '/testing/frontend/methods',
            },
          ],
        },
        // {
        //   text: 'Security',
        //   items: [
        //     {
        //       text: 'Roadmap',
        //       link: '/testing/security/roadmap',
        //     },
        //   ],
        // },
      ],
    },
    {
      text: 'Design',
      items: [
        {
          text: 'Ui kit',
          items: [
            {
              text: 'Шаги по созданию Ui kit',
              link: '/design/ui-kit/flow',
            },
          ],
        },
      ],
    },
    {
      text: 'Не совсем про код',
      items: [
        {
          text: 'Развитие',
          link: '/other/development',
        },
        {
          text: 'Логирование времени',
          link: '/other/tracking',
        },
        {
          text: 'Планирование',
          link: '/other/planning',
        },
      ],
    },
    {
      text: 'Проекты',
      items: [
        {
          text: 'Стартеры',
          link: '/projects/starters',
        },
      ],
    },
  ];
}
