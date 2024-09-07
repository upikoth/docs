# Как найти утечки памяти, понять что расходует CPU

Для быстрой оценки нагрузки на память и cpu можно запустить приложение локально и посмотреть загрузку компьютера, например через activity monitor

## Golang

Полезные ссылки:
- https://github.com/google/pprof/blob/main/doc/README.md

Просмотр профилей в ui:

```sh
go tool pprof -http=localhost:8000 cpu.prof
go tool trace -http=localhost:8000 trace.out
```

### Используем тесты

```go
// main.go
package main

import (
	"fmt"
	"math/rand"
)

func main() {
	for i := 0; i < 10; i++ {
		n := rand.Intn(100)
		s := square(n)
		fmt.Printf("%d^2 = %d\n", n, s)
	}
}

func square(n int) int {
	return n * n
}

```

```go
// main_test.go
package main

import "testing"

func Test_main(t *testing.T) {
	t.Run("test", func(t *testing.T) {
		main()
	})
}

```

Собираем профиль во время выполнения тестов:

```sh
go test -cpuprofile cpu.prof -memprofile mem.prof -bench .
```

## Код

Кажется что trace.out дает более полную информацию о работе приложения

```go
package main

import (
	"fmt"
	"math/rand"
	"os"
	"runtime"
	"runtime/pprof"
	"runtime/trace"
)

func main() {
	cpuFile, err := os.Create("cpu.prof")
	if err != nil {
		panic(err)
	}
	defer cpuFile.Close()

	memFile, err := os.Create("mem.prof")
	if err != nil {
		panic(err)
	}
	defer memFile.Close()

	traceFile, err := os.Create("trace.out")
	if err != nil {
		panic(err)
	}
	defer traceFile.Close()

	if err := pprof.StartCPUProfile(cpuFile); err != nil {
		panic(err)
	}
	defer pprof.StopCPUProfile()

	if err := trace.Start(traceFile); err != nil {
		panic(err)
	}
	defer trace.Stop()

	for i := 0; i < 10; i++ {
		n := rand.Intn(100)
		s := square(n)
		fmt.Printf("%d^2 = %d\n", n, s)
	}

	runtime.GC()
	if err := pprof.WriteHeapProfile(memFile); err != nil {
		panic(err)
	}
}

func square(n int) int {
	return n * n
}
```

### Сбор профиля удаленно

```go
import _ "net/http/pprof"
```
