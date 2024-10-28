# Package reflect

Позволяет получать дополнительную информацию о метаинформации значений и работать с переменными с разными 

Полезные методы:

```go
reflect.DeepEqual(x, y)
reflect.ValueOf(a).IsZero()
```

```go
t := reflect.TypeOf(a)
v := reflect.ValueOf(a)

if t.Kind() == reflect.Map {
    // Actions with map.
}
```

Можно работать не только с типами, в метаинформации есть данные о тегах структур и значениях этих тегов.
