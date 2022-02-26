'use strict';

const index = (number) => {
  let result = 2;
  const i = number % 10;
  if (i == 1) {
    result = 0;
  }
  if ((i >= 2) && (i <=4)) {
    result = 1;
  }
  return result;
};

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
  const tmpNumber = number % 100;

  if (tmpNumber >= 11 && tmpNumber <= 19) {
    result = plurals[2];
  } else {
    result = plurals[index(tmpNumber)];
  }
  return result;
};

module.exports = plural;
