# Переменные

## Способы объявления переменных

### Typescript

1. var foo = 1;
2. let foo = 1; / let foo: number;
3. const foo = 1;

var - область видимости внутри функции, всплытие переменной

let/const - блочная область видимости

### Golang

1. var foo int = 1; / var foo int;
2. foo := 1;
3. foo := new(int); - new возвращает указатель на выделенный блок памяти
4. const foo = 1;

### Postgresql

```sql
create or replace function example() returns integer as $$
declare
	foo integer;
begin
	return foo;
end;
$$ language plpgsql;
```
