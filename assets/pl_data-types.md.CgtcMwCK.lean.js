import{_ as l,c as a,a0 as t,o as e}from"./chunks/framework.D-WqjATM.js";const h=JSON.parse('{"title":"Типы данных","description":"","frontmatter":{},"headers":[],"relativePath":"pl/data-types.md","filePath":"pl/data-types.md"}'),n={name:"pl/data-types.md"};function o(r,i,s,c,d,p){return e(),a("div",null,i[0]||(i[0]=[t('<h1 id="типы-данных" tabindex="-1">Типы данных <a class="header-anchor" href="#типы-данных" aria-label="Permalink to &quot;Типы данных&quot;">​</a></h1><h2 id="какие-есть-типа-данных" tabindex="-1">Какие есть типа данных? <a class="header-anchor" href="#какие-есть-типа-данных" aria-label="Permalink to &quot;Какие есть типа данных?&quot;">​</a></h2><h3 id="javascript-typescript" tabindex="-1">Javascript/Typescript: <a class="header-anchor" href="#javascript-typescript" aria-label="Permalink to &quot;Javascript/Typescript:&quot;">​</a></h3><ol><li>Undefined (undefined)</li><li>Boolean (true/false)</li><li>Number (Infinity, NaN, 1) - 64 бита. Есть особенности хранения 0.1 + 0.2 != 0.3</li><li>String (&#39;string-example&#39;)</li><li>BigInt (123n) - число произвольной длины</li><li>Symbol (let foo = Symbol())</li><li>Null (null)</li><li>Object (все сложные структуры. Массивы, map, set, date)</li></ol><h3 id="golang" tabindex="-1">Golang: <a class="header-anchor" href="#golang" aria-label="Permalink to &quot;Golang:&quot;">​</a></h3><ol><li>bool (true/false)</li><li>int - в зависимости от платформы либо int32, либо int64. 32битных - int32, 64битных - int64</li><li>int8 (-128 до 127 - 1 байт памяти - 8 бит)</li><li>int16 (-32768 до 32767 - 2 байта памяти - 16 бит)</li><li>int32 (-2147483648 до 2147483647 - 4 байта - 32 бита)</li><li>int64 (–9 223 372 036 854 775 808 до 9 223 372 036 854 775 807 - 8 байт - 64 бита)</li><li>uint - в зависимости от платформы либо uint32, либо uint64. u - unsigned.</li><li>uint8 (0 до 255 - 1 байт - 8 бит)</li><li>uint16 (0 до 65535 - 2 байта - 16 бит)</li><li>uint32 (0 до 2 ** 32 - 4 байта - 32 бита)</li><li>uint64 (0 до 2 ** 64 - 8 байт - 64 бита)</li><li>uintptr - unsigned pointer. Для хранения указателя</li><li>byte - uint8</li><li>rune - int32 - символ Unicode</li><li>float32 - число с плавающей точкой - точность 6 цифр</li><li>float64 - число с плавающей точкой - точность 15 цифр</li><li>complex64 - комплексные числа</li><li>complex128 - комплексные числа</li><li>string (&quot;string-example&quot;)</li></ol><h3 id="postgresql" tabindex="-1">Postgresql: <a class="header-anchor" href="#postgresql" aria-label="Permalink to &quot;Postgresql:&quot;">​</a></h3><ol><li>boolean</li><li>integer - 4 байта</li><li>bigint - 8 байт</li><li>numeric / decimal</li><li>real - вещественные - 4 байта</li><li>double precision - вещественные - 8 байт</li><li>varchar / text / char(n)</li></ol><h2 id="как-проверить-какого-типа-данные-хранятся-в-переменнои" tabindex="-1">Как проверить какого типа данные хранятся в переменной? <a class="header-anchor" href="#как-проверить-какого-типа-данные-хранятся-в-переменнои" aria-label="Permalink to &quot;Как проверить какого типа данные хранятся в переменной?&quot;">​</a></h2><h3 id="javascript" tabindex="-1">Javascript: <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;Javascript:&quot;">​</a></h3><ol><li>typeof foo</li></ol><p>Исключение typeof null - &#39;object&#39;. Это баг языка</p><h3 id="golang-1" tabindex="-1">Golang: <a class="header-anchor" href="#golang-1" aria-label="Permalink to &quot;Golang:&quot;">​</a></h3>',13)]))}const f=l(n,[["render",o]]);export{h as __pageData,f as default};
