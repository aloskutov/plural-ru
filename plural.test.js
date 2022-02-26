'use strict';

const plural = require('./plural');

describe('Tests', () => {
  test.each([
    {number: 1, plurals: ['груша', 'груши', 'груш'], result: 'груша'},
    {number: 2, plurals: ['арбуз', 'арбуза', 'арбузов'], result: 'арбуза'},
    {number: 4, plurals: ['банан', 'банана', 'бананов'], result: 'банана'},
    {number: 5, plurals: ['абрикос', 'абрикоса', 'абрикосов'], result: 'абрикосов'},
    {number: 7, plurals: ['гном', 'гнома', 'гномов'], result: 'гномов'},
    {number: 10, plurals: ['яблоко', 'яблока', 'яблок'], result: 'яблок'},
    {number: 13, plurals: ['чертёнок', 'чертёнка', 'чертят'], result: 'чертят'},
    {number: 77, plurals: ['статья', 'статьи', 'статей'], result: 'статей'},
    {number: 101, plurals: ['долматинец', 'долматинца', 'долматинцев'], result: 'долматинец'},
    {number: 300, plurals: ['спартанец', 'спартанца', 'спартанцев'], result: 'спартанцев'},
    {number: 1000, plurals: ['чёрта', 'чёрта', 'чертей'], result: 'чертей'},
  ])(`$number $result`, ({number, plurals, result}) => {
    expect(plural(number, plurals)).toStrictEqual(result);
  });
});
