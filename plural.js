'use strict';

/**
 * Get plural array index
 *
 * @private
 * @param {number} number Число для которого нужно получить индекс
 * @returns {number} Индекс элемента массива
 */
const index = (number) => {
  const i = number % 10;

  return (i === 1 ) ? 0 : ((i >= 2) && (i <=4)) ? 1 : 2;
};

/**
 * Plural
 * Функция возвращает существительное или окончание для множественного числа
 * слова на основании числа и массива окончаний
 *
 * @param {number} number - Натуральное число
 * @param {Array} plurals - Массив слов/окончаний для чисел (1, 4, 5)
 * @returns {string} слово/окончание
 * @example
 * plural(7, ['яблоко', 'яблока', 'яблок'])
 * returns 'яблок'
 */
const plural = (number, plurals) => {
  const tmpNumber = number % 100;
  const result = (tmpNumber >= 11 && tmpNumber <= 19) ?
    plurals[2] :
    plurals[index(tmpNumber)];

  return result;
};

module.exports = plural;
