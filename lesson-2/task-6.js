'use strict';

const mathOperation = (arg1, arg2, operation) => {
    if (
        (arg1 == 0 || arg1) &&
        (arg2 == 0 || arg2) &&
        operation &&
        !(operation === 'div' && arg2 === 0)
    ) {
        switch (operation) {
            case 'add':
                return +arg1 + +arg2;
            case 'sub':
                return arg1 - arg2;
            case 'mul':
                return arg1 * arg2;
            case 'div':
                return arg1 / arg2;
        }
    } else {
        return null;
    }
};

console.group('Задание 6');

console.log(`5 + 7 ${mathOperation(5, '7', 'add')}`);
console.log(`5 - 7 ${mathOperation(5, 7, 'sub')}`);
console.log(`5 * 7 ${mathOperation(5, 7, 'mul')}`);
console.log(`5 / 7 ${mathOperation('5', '7', 'div')}`);
console.log(`5 / 7 ${mathOperation(5, 0, 'div')}`);
console.log(`5 / 0 ${mathOperation(5, 0)}`);

console.groupEnd();
