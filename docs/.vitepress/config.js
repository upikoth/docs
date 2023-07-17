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
      text: 'Проекты',
      items: [
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
      items: [{ text: 'Sentry', link: '/tools/sentry' }],
    },
    {
      text: 'Соглашения',
      items: [{ text: 'Git', link: '/agreements/git' }],
    },
    {
      text: 'Архитектура',
      items: [{ text: 'System design', link: '/architecture/system-design' }],
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
              text: 'Docker',
              link: '/database/postgres/docker',
            },
            {
              text: 'CLI',
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
        { text: 'Docker', link: '/ci-cd/docker/intro' },
        { text: 'Nginx', link: '/ci-cd/nginx' },
        { text: 'SSL сертификат', link: '/ci-cd/ssl' },
        { text: 'Github Actions', link: '/ci-cd/github-actions' },
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
  ];
}
