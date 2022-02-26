'use strict';

/**
 * Plural
 * Функция возвращает окончание для множественного числа слова на основании
 * числа и массива окончаний
 *
 * @param {number} number Число на основе которого нужно сформировать окончание
 * @param {Array} plurals Массив слов или окончаний для чисел (1, 4, 5),
 *                        например array('яблоко', 'яблока', 'яблок')
 * @returns {string} result
 */
const plural = (number, plurals) => {
  let result = '';
  let tmpNumber = number % 100;

  if (tmpNumber >= 11 && tmpNumber <= 19) {
    result = plurals[2];
  } else {
    let i = tmpNumber % 10;
    switch (i) {
    case 1:
      result = plurals[0];
      break;
    case 2:
    case 3:
    case 4:
      result = plurals[1];
      break;
    default:
      result = plurals[2];
    }
  }
  return result;
};

module.exports = plural;
