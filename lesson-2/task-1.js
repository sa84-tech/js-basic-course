'use strict';

let a = 1,
    b = 1,
    c,
    d;
c = ++a;
console.group('Задание 1');
console.log('c =', c);
d = b++;
console.log('d =', d);
c = 2 + ++a;
console.log('c =', c);
d = 2 + b++;
console.log('d =', d);
console.log('a =', a);
console.log('b =', b);
console.groupEnd();
