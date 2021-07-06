'use strict';

a = -1;
b = 3;

console.group('Задание 3');
console.log('b =', b);
console.log('a =', a);
if (a >= 0 && b >= 0) {
    console.log(`a - b = ${a - b}`);
} else if (a < 0 && b < 0) {
    console.log(`a * b = ${a * b}`);
} else {
    console.log(`a + b = ${a + b}`);
}
console.groupEnd();
