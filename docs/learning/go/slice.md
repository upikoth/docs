# Slice

Структура слайса:
1. указатель на элемент базового массив. Не обязательно на 0ой, но это будет 0ой элемент этого слайса
2. длина слайса. Сколько есть элементов в текущем слайсе
3. емкость слайса. Сколько элементов поместится в слайс без необходимости переопределения базового массива

При передаче слайса по значению в функцию передается указатель на элемент базового массива, поэтому передавать по ссылке для экономии памяти особого смысла нет.

```go
var arr []int
arr == nil // true
len(arr) == 0 // true

arr := []int{}
arr == nil // false
len(arr) == 0 // true
```

Видимо при `var arr []int` базовый массив не инициализируется, поэтому nil. А во 2ом примере базовый массив инициализируется

Функция принимает на вход слайс и переменное количество элементов для добавления в слайс. Append расширяет слайс за пределы его len, возвращая при этом новый слайс.

append. Если количество элементов, которые мы добавляем в слайс, не будет превышать cap, вернется новый слайс, который ссылается на тот же базовый массив, что и предыдущий слайс.
Если количество добавляемых элементов превысит cap, то вернется новый слайс, базовым для которого будет новый массив.

На данный момент при нехватке памяти в слайсе создается новый базовый массив примерно в 2 раза больше прежнего, если число элементов небольшое.
Если элементов много, размер увеличивается более плавно. В результате в слайсе получается указатель на другую область памяти

Если нужна защитить слайс от изменения, можно воспользоваться встроенной функцией `copy()`

```go
slice := append([]byte("hello "), "world"...) // так можно
```

```go
a := [5]int{1, 2, 3, 4, 5}
t := a[1:2:len(a)] // это способ задать capacity слайса. cap = последний элмент - первый. т.е. 5 - 1 = 4.

fmt.Println(t[0]) // 2
fmt.Println(cap(t)) // 4
```