'use strict';

console.group('Задание 4');

for(let i = 1; i<=21; i++) {
    let str = '';
    for(let j=0; j < i; j++) {
        str += 'x';
    }
    console.log(str);
};

console.groupEnd();