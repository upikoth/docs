module.exports = {
  title: "Документация",
  lang: "ru",
  base: "/docs/",

  themeConfig: {
    sidebar: getSidebar(),
    outlineTitle: "На этой странице",
  },
};

function getSidebar() {
  return [
    {
      text: "Frontend",
      items: [
        { text: "Создание документации", link: "/frontend/documentation" },
        {
          text: "Quassar",
          items: [
            {
              text: "Разработка под android",
              link: "/frontend/quasar/android",
            },
          ],
        },
      ],
    },
    {
      text: "Backend",
      items: [{ text: "Go", link: "/backend/go" }],
    },
    {
      text: "Database",
      items: [
        {
          text: "Postgres",
          items: [
            {
              text: "Работа из командной строки",
              link: "/database/postgres/terminal",
            },
          ],
        },
      ],
    },
    {
      text: "CI/CD",
      items: [
        { text: "Настройка сервера", link: "/ci-cd/server" },
        { text: "Настройка Nginx", link: "/ci-cd/nginx" },
      ],
    },
    {
      text: "Testing",
      items: [
        {
          text: "Frontend",
          items: [
            {
              text: "Подходы к тестированию",
              link: "/testing/frontend/methods",
            },
          ],
        },
      ],
    },
  ];
}
