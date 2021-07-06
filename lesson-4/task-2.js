'use strict';

class Cart {
    constructor() {
        this.cartItems = [];
    }

    addToCart(productPayload) {
        const existItem = this.cartItems.find(
            (item) => item.id === productPayload.id
        );

        if (existItem) {
            this.cartItems = this.cartItems.map((item) =>
                item.id === existItem.id ? productPayload : item
            );
        } else {
            this.cartItems = [...this.cartItems, productPayload];
        }
    }

    removeFromCart(productId) {
        this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    }

    clearCart() {
        this.cartItems = [];
    }

    getCartValue() {
        return this.cartItems.reduce(
            (acc, cur) => cur.price * cur.qty + acc,
            0
        );
    }
}

// TEST

const products2 = [
    { id: 1, name: 'Брюки BOCHETTI', price: 2800.0, qty: 2 },
    { id: 2, name: 'Комплект носков', price: 324.0, qty: 4 },
    { id: 3, name: 'Джемпер Gloria Jeans', price: 899.0, qty: 2 },
    { id: 4, name: 'Водолазка Kurdi', price: 1098.0, qty: 1 },
];

const cart2 = new Cart();

products2.forEach((product) => {
    cart2.addToCart(product);
});

console.group('Задание 2');
console.log('Стоимость корзины', cart2.getCartValue());
console.log('Корзина:', cart2);
console.groupEnd();
