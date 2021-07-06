'use strict';

let x = 2;
let primeNumbers = [];

while (x <= 100) {
    let isSimple = true;
    let y = 2;
    while(y < x) {
        if (x % y === 0) {
            isSimple = false;
            break;
        };
        y++;
    }
    if (isSimple) primeNumbers.push(x);
    x++;
};

console.group('Задание 1');
console.log(primeNumbers);
console.groupEnd();