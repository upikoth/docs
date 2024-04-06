# Функции

## Способы объявления функций

### Typescript

```typescript
function myFunction(a: number): number {
	return a
}
```

```typescript
const myFunction = function(a: number): number {
	return a
}
```

```typescript
const myFunction = (a: number): number => {
	return a
}
```

### Golang

```go
func divide(x, y int) (int, error) {
	if y == 0 {
		return 0, errors.New("division by zero")
	}
	return x / y, nil
}
```

```go
divide := func(x, y int) (int, error) {
	if y == 0 {
		return 0, errors.New("division by zero")
	}
	return x / y, nil
}
```

### Postgresql

```sql
create or replace function example(foo integer) returns integer as $$
declare
	bar integer;
begin
	bar = 1;

	return foo + bar;
end;
$$ language plpgsql;

select example(4);
```
