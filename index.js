'use strict';

/**
 * Форматує суму в гривнях: 1234.5 -> "1 234,50 грн"
 * @param {number} amount
 * @param {{symbol?: boolean}} [options] symbol: true -> "₴" замість "грн"
 */
function formatUAH(amount, options = {}) {
  if (typeof amount !== 'number' || !Number.isFinite(amount)) {
    throw new TypeError('amount має бути скінченним числом');
  }
  const sign = amount < 0 ? '-' : '';
  const [int, frac] = Math.abs(amount).toFixed(2).split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const currency = options.symbol ? '₴' : 'грн';
  return `${sign}${grouped},${frac} ${currency}`;
}

/**
 * Обирає українську форму множини: plural(5, ['файл', 'файли', 'файлів']) -> "файлів"
 * @param {number} n
 * @param {[string, string, string]} forms
 */
function plural(n, forms) {
  const a = Math.abs(n) % 100;
  const b = a % 10;
  if (a > 10 && a < 20) return forms[2];
  if (b === 1) return forms[0];
  if (b >= 2 && b <= 4) return forms[1];
  return forms[2];
}

module.exports = { formatUAH, plural };
