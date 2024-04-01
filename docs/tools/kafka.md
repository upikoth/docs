# Kafka

## Установка kafka

- Установить сам пакет
- Запустить kafka в docker

```shell
docker pull apache/kafka:3.7.0
docker run -p 9092:9092 apache/kafka:3.7.0
```

Создать топик

Команды нужно выполнять в папке с исходниками kafka

```shell
bin/kafka-topics.sh --create --topic topic-name --bootstrap-server localhost:9092
```

Создать producer и отправить события в топик

```shell
bin/kafka-console-producer.sh --topic topic-name --bootstrap-server localhost:9092
```

Создать consumer и считать события из топика

```shell
bin/kafka-console-consumer.sh --topic topic-name --from-beginning --bootstrap-server localhost:9092
```

## Работа с kafka из vscode

- Установить расширение `jeppeandersen.vscode-kafka`
- Можно увидеть брокеры, топики, консьюмер группы
- Можно запустить consumer на выбранном топике
- Можно удалить consumer

## Работа с kafka из node.js приложения

- Установить пакет `kafkajs`

```shell
npm install kafkajs
```

Пример использования kafkajs:

```js
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kafka-node-js',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'kafka-node-js-consumer-group' });

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: 'topic-name',
    messages: [{ value: 'Hello from node.js' }],
  });

  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'topic-name', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
```

## Работа с kafka из bun.js приложения

- Установить пакет `kafkajs`

```shell
bun add kafkajs
```

Пример использования kafkajs:

```js
import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'kafka-bun-js',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'kafka-bun-js-consumer-group' });

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: 'topic-name',
    messages: [{ value: 'Hello from bun.js' }],
  });

  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'topic-name', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value?.toString() || '',
      });
    },
  });
};

run().catch(console.error);
```

## Работа с kafka из go приложения

- Установить пакет `kafka-go`

```shell
go get github.com/segmentio/kafka-go
```

Пример использования kafka-go:

Бесконечный цикл при чтении сообщений не выполняется постоянно, каждый раз происходит ожидание следующего сообщения

```go
package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/segmentio/kafka-go"
)

func main() {
	go readMessages()
	writeMessage()

	for {
		// Предотвращает завершение программы.
		time.Sleep(time.Hour)
	}
}

func readMessages() {
	r := kafka.NewReader(kafka.ReaderConfig{
		Brokers:   []string{"localhost:9092"},
		Topic:     "quickstart-events",
		Partition: 0,
	})

	for {
		m, err := r.ReadMessage(context.Background())

		if err != nil {
			break
		}

		fmt.Printf("message at offset %d: %s = %s\n", m.Offset, string(m.Key), string(m.Value))
	}

	if err := r.Close(); err != nil {
		log.Fatal("failed to close reader:", err)
	}
}

func writeMessage() {
	w := &kafka.Writer{
		Addr:  kafka.TCP("localhost:9092"),
		Topic: "quickstart-events",
	}

	err := w.WriteMessages(context.Background(),
		kafka.Message{
			Value: []byte("Hello kafka from golang"),
		},
	)

	if err != nil {
		log.Fatal("failed to write messages:", err)
	}

	if err := w.Close(); err != nil {
		log.Fatal("failed to close writer:", err)
	}
}
```
