# Операции над числами

## Javascript

```javascript
Math.abs(-4);
Math.round(4.7);
Math.floor(4.7);
Math.ceil(4.2);
Math.max(5, 10);
Math.min(5, 10);
Math.random();
```

Битовые операции с числами

```javascript
5 & 3 = 1
5 | 3 = 7
5 ^ 3 = 6
~5 = -6
5 << 2 = 10
5 >> 1 = 2
-5 >>> 1 = 2147483645
```

Преобразование строки к числу и числа к строке

```javascript
Number.parseInt('123')
Number.parseFloat('123.123')
String(123)
```

## Golang

```go
import "math"

math.Round(4)
math.Floor(4)
math.Ceil(4)
math.Rand(100)
```

Битовые операции с числами

```go
5 & 3 = 1
5 | 3 = 7
5 ^ 3 = 6
^5 = -6
5 << 2 = 10
5 >> 1 = 2
```

Преобразование строки к числу и числа к строке

```go
import "strconv"

num, error := strconv.Atoi("123")
num, error := strconv.ParseFloat("123.123", 64)

str := strconv.Itoa(123)
str := strconv.FormatFloat(123, 'f', -1, 64)
```

## Postgresql

```sql
select abs(-5);
select ceil(4.3);
select floor(4.8);
select round(3.14159, 2);
select power(2, 3);
select sqrt(16);
```

Битовые операции с числами

```sql
select 5 & 3; -- 1
select 5 | 3; -- 7
select 5 # 3; -- 6
select ~5; -- -6
select 5 << 2; -- 10
select 5 >> 1; -- 2
```

Преобразование строки к числу и числа к строке

```sql
select cast('123' as integer); -- Вернет число 123
select try_cast('123' as integer); -- Вернет число 123. null если не получилось преобразовать к числу. Не получилось запустить.
select '123'::integer; -- Вернет число 123
select '123.45'::double precision; -- Вернет число 123.45
```
