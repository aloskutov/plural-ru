# plural-ru

[![DeepSource](https://deepsource.io/gh/aloskutov/plural-ru.svg/?label=active+issues&show_trend=true&token=o5rasMJ-Hspa8IoYOvzT29vo)](https://deepsource.io/gh/aloskutov/plural-ru/?ref=repository-badge)[![DeepSource](https://deepsource.io/gh/aloskutov/plural-ru.svg/?label=resolved+issues&show_trend=true&token=o5rasMJ-Hspa8IoYOvzT29vo)](https://deepsource.io/gh/aloskutov/plural-ru/?ref=repository-badge)

Возвращает нужную форму существительного в зависимости от заданного числа.

## Использование

### Установка

**Через npm**

```shell
npm install @aloskutov/plural-ru
```

Подключение:

```js
const plural = require('@aloskutov/plural-ru');
```

**Скачать из [репозитория](https://github.com/aloskutov/plural-ru) `plural.js`**

Подключение:

```js
const plural = require('./plural');
```

### Параметры

```js
let result = plural(number, array)
```

Первый аргумент &mdash; натуральное число.

Второй аргумент &mdash; Массив из трёх форм существительных:

1. Существительное в единственном числе.
2. Существительное во множественном числе, для 4-х
3. Существительное во множественном числе, для 5-ти

Результат &mdash; строка, элемент переданного массива.
## Пример

Например, возьмём слова _машина_, три формы будут соответственно: одна _машина_, четыре _машины_ и пять _машин_.

```js
'use strict';

const plural = require('./plural');
const cars = ['машина', 'машины', 'машин'];

console.log(0, plural(0, cars));
console.log(1, plural(1, cars));
console.log(52, plural(52, cars));
console.log(100, plural(100, cars));
```

Результат:

```shell
0 машин
1 машина
52 машины
100 машин
```
