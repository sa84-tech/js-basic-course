'use strict';

const power = (val, pow) => {
    if (pow <= 1) {
        return val;
    }
    return val * power(val, pow - 1);
};

console.group('Задание 8');

console.log(`2^10 = ${power(2, 10)}`);
console.log(`3^4 = ${power(3, 4)}`);
console.log(`1^300 = ${power(1, 300)}`);

console.groupEnd();
