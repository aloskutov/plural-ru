'use strict';

const plural = require('./plural');
const cars = ['машина', 'машины', 'машин'];

console.log(0, plural(0, cars));
console.log(1, plural(1, cars));
console.log(52, plural(52, cars));
console.log(100, plural(100, cars));
