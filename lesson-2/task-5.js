'use strict';

const adition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

console.group('Задание 5');

console.log(`5 + 7 ${adition(5, 7)}`);
console.log(`5 - 7 ${substraction(5, 7)}`);
console.log(`5 * 7 ${multiplication(5, 7)}`);
console.log(`5 / 7 ${division(5, 7)}`);

console.groupEnd();
