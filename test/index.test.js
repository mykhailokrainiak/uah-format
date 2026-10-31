'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { formatUAH, formatUAHShort, plural, NBSP } = require('..');

test('formatUAH групує розряди та додає валюту', () => {
  assert.strictEqual(formatUAH(1234.5), `1${NBSP}234,50${NBSP}грн`);
  assert.strictEqual(formatUAH(-99), `-99,00${NBSP}грн`);
  assert.strictEqual(formatUAH(1000000, { symbol: true }), `1${NBSP}000${NBSP}000,00${NBSP}₴`);
});

test('formatUAH відхиляє некоректні значення', () => {
  assert.throws(() => formatUAH('100'), TypeError);
  assert.throws(() => formatUAH(NaN), TypeError);
});

test('plural обирає правильну форму', () => {
  const forms = ['файл', 'файли', 'файлів'];
  assert.strictEqual(plural(1, forms), 'файл');
  assert.strictEqual(plural(3, forms), 'файли');
  assert.strictEqual(plural(5, forms), 'файлів');
  assert.strictEqual(plural(11, forms), 'файлів');
  assert.strictEqual(plural(22, forms), 'файли');
  assert.strictEqual(plural(101, forms), 'файл');
  assert.strictEqual(plural(1.5, ['гривня', 'гривні', 'гривень']), 'гривні');
});

test('formatUAHShort скорочує великі суми', () => {
  assert.strictEqual(formatUAHShort(1500000), `1,5 млн${NBSP}грн`);
  assert.strictEqual(formatUAHShort(2300), `2,3 тис.${NBSP}грн`);
  assert.strictEqual(formatUAHShort(950), `950,00${NBSP}грн`);
});
