# Анализ бандла или проекта

## Инструменты

Выведет список неиспользуемых файлов и зависимостей
- npx unimported

Выведет пути импортов внутри проекта
- https://github.com/sverweij/dependency-cruiser

показалось, что будет полезным для валидации корректности архитектуры проекта. Что никто ничего не импортит из внутренностей, что все разбито по понятным абстракциям.

Анализ бандла
- https://www.npmjs.com/package/source-map-explorer
- https://github.com/webpack-contrib/webpack-bundle-analyzer
- https://github.com/KusStar/vite-bundle-visualizer

### Webpack-bundle-analyzer

- Stat size - размер исходных файлов проекта, до минификации и различных преобразований
- Parsed size - размер после минификации, tree-shaking'a
- Gzipped size - размер после всех оптимизаций + gzip. Размер всего бандла считается корректно, размеры модулей могут немного отличатся от реальности

Parsed size может быть больше Stat size например когда мы преобразуем es6 к es5

Не очень корректно выдает информацию по частям бандла

Работает Tree shaking в библиотеке или нет можно узнать только из документации, наличии /* @__PURE__ */ в билде библиотеки и экспериментов с этой библиотекой

### Source-map-explorer

Подойдет для сборщиков кроме webpack
