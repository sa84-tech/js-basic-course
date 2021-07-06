'use strict';

const numToObject = (num) => {
    if (num < 0 || num > 999) {
        console.error('Bad number');
        return {};
    }

    const digits = String(num).split('').reverse();
    const keys = ['units', 'tens', 'hundreds'];

    return keys.reduce((acc, cur, i) => {
        acc[cur] = +digits[i] || 0;
        return acc;
    }, {});
};

console.group('Задание 1');
console.log(numToObject(245));
console.log(numToObject(56));
console.log(numToObject(1));
console.log(numToObject(5556));
console.groupEnd();
