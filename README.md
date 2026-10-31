# @mykhailokrainiak/uah-format

Невелика бібліотека для форматування сум у гривнях та вибору українських форм множини.

## Встановлення

```bash
echo "@mykhailokrainiak:registry=https://npm.pkg.github.com" >> .npmrc
npm install @mykhailokrainiak/uah-format
```

## Використання

```js
const { formatUAH, plural } = require('@mykhailokrainiak/uah-format');

formatUAH(1234.5);                 // "1 234,50 грн"
formatUAH(250, { symbol: true });  // "250,00 ₴"
plural(5, ['файл', 'файли', 'файлів']); // "файлів"
```

Самостійна робота з дисципліни «Проєктний практикум», Крайняк Михайло, група 451.
