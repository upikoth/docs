# Операции над строками

## Javascript/Typescript

```javascript
// Конкатенация.
'hello ' + 'world'

// Получение длины строки.
'foo'.length

// Разделение по разделителю.
"foo".split('')

// Объединение массива строк в строку.
['a', 'b'].join("delimiter")

// Преобразование к верхнему/нижнему регистру.
'foo'.toUpperCase()
'foo'.toLowerCase()
```

## Golang

```go
// Конкатенация.
"hello " + "world"

// Или используя builder. Нужен при многократном сложении строк.
b := strings.Builder{}
b.WriteString("hello")
b.WriteString("world")
b.String()

// Получение длины строки.
len("foo")

// Разделение по разделителю.
strings.Split("foo", "")

// Объединение массива строк в строку.
arr := []string{"a", "b"}
strings.Join(arr, "delimiter")

// Преобразование к верхнему/нижнему регистру.
strings.ToUpper("foo")
strings.ToLower("foo")

// Количество символов (rune) в строке.
utf8.RuneCountInString("foo")

// Количество байт в строке.
len("foo")

string
```

## Postgresql

```sql
-- Конкатенация.
select 'hello ' || 'world'
select concat('hello', ' ', 'world')
select concat_ws(' ', 'hello', 'world')
select format('%s %s', 'hello', 'world')

-- Получение длины строки.
select length('foo')

-- Разделение по разделителю.
select regexp_split_to_array('foo', '')

-- Объединение массива строк в строку.
select array_to_string(array['a', 'b'], 'delimiter');

-- Преобразование к верхнему/нижнему регистру.
select upper('foo');
select lower('foo');
```
