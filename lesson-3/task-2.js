'use strict';

const cartItems = [
    {id: 1, name: 'Брюки BOCHETTI', qty: 3, price: 2800.0},
    {id: 2, name: 'Комплект носков', qty: 10, price: 324.0},
    {id: 3, name: 'Джемпер Gloria Jeans', qty: 3, price: 899.0},
    {id: 4, name: 'Водолазка Kurdi', qty: 2, price: 1098.0},
];

const countBasketPrice = (cart) => 
    cart.reduce((acc, cur) => cur.price * cur.qty + acc, 0);

console.group('Задание 2');
console.log('Стоимость корзины', countBasketPrice(cartItems));
console.groupEnd();