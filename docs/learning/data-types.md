# Типы данных

## Какие есть типа данных?

### Javascript/Typescript:

1. Undefined (undefined)
2. Boolean (true/false)
3. Number (Infinity, NaN, 1) - 64 бита. Есть особенности хранения 0.1 + 0.2 != 0.3
4. String ('string-example')
5. BigInt (123n) - число произвольной длины
6. Symbol (let foo = Symbol())
7. Null (null)
8. Object (все сложные структуры. Массивы, map, set, date)

### Golang:

1. bool (true/false)
2. int - в зависимости от платформы либо int32, либо int64. 32битных - int32, 64битных - int64
3. int8 (-128 до 127 - 1 байт памяти - 8 бит)
4. int16 (-32768 до 32767 - 2 байта памяти - 16 бит)
5. int32 (-2147483648 до 2147483647 - 4 байта - 32 бита)
6. int64 (–9 223 372 036 854 775 808 до 9 223 372 036 854 775 807 - 8 байт - 64 бита)
7. uint - в зависимости от платформы либо uint32, либо uint64. u - unsigned.
8. uint8 (0 до 255 - 1 байт - 8 бит)
9. uint16 (0 до 65535 - 2 байта - 16 бит)
10. uint32 (0 до 2 ** 32 - 4 байта - 32 бита)
11. uint64 (0 до 2 ** 64 - 8 байт - 64 бита)
12. uintptr - unsigned pointer. Для хранения указателя
13. byte - uint8
14. rune - int32 - символ Unicode
15. float32 - число с плавающей точкой - точность 6 цифр
16. float64 - число с плавающей точкой - точность 15 цифр
17. complex64 - комплексные числа
18. complex128 - комплексные числа
19. string ("string-example")

### Postgresql:

1. boolean
2. integer - 4 байта
3. bigint - 8 байт
4. numeric / decimal
5. real - вещественные - 4 байта
6. double precision - вещественные - 8 байт
7. varchar / text / char(n)

## Как проверить какого типа данные хранятся в переменной?

### Javascript:

1. typeof foo

Исключение typeof null - 'object'. Это баг языка

### Golang:

1. reflect.TypeOf
2. switch foo.(type) { case int: ... }

### Postgresql:

1. select pg_typeof(foo) from table;
