# Нормализация

Нормализация позволяет привести базу данных к минимальной избыточности.

- Данные будут храниться наиболее оптимально по памяти.
- Меньше аномалий (например, когда обновили в одном месте, но не обновили в другом те же самые данные)
- Проще управлять данными

Чем выше уровень нормализации, тем меньше аномалий будет в бд.

0.0 Нулевая нормальная форма (UNF)
- Строки в таблицах не должно быть пронумерованы (порядок строк и столбцов не имеет значения).

1.0 Первая нормальная форма - 09:37 (1NF)
- В таблице не должно быть дублирующих строк;
- В каждой ячейке таблицы хранится атомарное значение (одно не составное значение);
- В столбце хранятся данные одного типа;
- Отсутствуют массивы и списки в любом виде.

2.0 Вторая нормальная форма - 11:24 (2NF)
- Таблица должна находиться в 1NF;
- Таблица должна иметь ключ;
- Все неключевые столбцы таблицы должны зависеть от полного ключа (если ключ составной).
  Таблица должна иметь правильный ключ, по которому можно идентифицировать каждую строку.

3.1. Третья нормальная форма - 16:18 (3NF)
- В таблицах не должно быть транзитивной зависимости (неключевые столбцы зависят от других неключевых столбов).

3.2. Нормальная форма Бойса-Кодда - 18:54 (BCNF)
Требования BCNF актуальны для таблиц с составными ключами. Таблицы 3NF с полным ключом автоматически становятся BCNF.
- Таблица должна находиться в 3NF;
- Ключевые атрибуты составного ключа не должны зависеть от неключевых атрибутов.

4.0. Четверная нормальная форма(4NF)
- В таблице не должно быть многозначных зависимостей

Денормализация повышает производительность, но возникает избыточность данных и сложность их обновления.