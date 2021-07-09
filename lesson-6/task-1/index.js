'use strict';

const cart = {
    cartItems: [],
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
    },

    removeFromCart(productId) {
        this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },

    clearCart() {
        this.cartItems = [];
    },

    getCartValue() {
        return this.cartItems.reduce(
            (acc, cur) => cur.price * cur.qty + acc,
            0
        );
    },

    getTotalCount() {
        return this.cartItems.reduce((acc, cur) => cur.qty + acc, 0);
    },

    getAllItems() {
        return [...this.cartItems];
    },
};

const diplayCart = {
    wrapper: document.getElementById('wrapper'),

    init() {
        const products = [
            {
                id: 123423,
                image: '../assets/img/crimping-tool.jpg',
                name: 'Инструмент ITK (TM1-B11V) для обжима (упак:1шт) красный',
                price: 1320.0,
                qty: 1,
                countInStock: 10,
            },
            {
                id: 1234221,
                image: '../assets/img/8p8c.jpg',
                name: 'Коннектор Lanmaster (TWT-PL45-8P8C) UTP кат.5e RJ45 (упак.:100шт)',
                price: 580.0,
                qty: 2,
                countInStock: 10,
            },
            {
                id: 212323,
                image: '../assets/img/utp.jpg',
                name: 'Кабель сетевой HQ UTP, cat.5E, 305м, 4 пары, 24AWG, 0.51мм, медь, одножильный',
                price: 6324.0,
                qty: 10,
                countInStock: 10,
            },
            {
                id: 33434,
                image: '../assets/img/keystone.jpg',
                name: 'Модуль Lanmaster (TWT-OK45UTP/5E-WH) информ. KeystoneRJ45 кат.5E UTP бел.',
                price: 130.0,
                qty: 60,
                countInStock: 80,
            },
            {
                id: 4234234,
                image: '../assets/img/patch-cord-1.jpg',
                name: 'Патч-корд Lanmaster UTP 4 пары cat5E molded 1м серый',
                price: 330.0,
                qty: 60,
                countInStock: 80,
            },
            {
                id: 4234234,
                image: '../assets/img/patch-cord-2.jpg',
                name: 'Патч-корд Lanmaster UTP 4 пары cat5E molded 2м серый',
                price: 380.0,
                qty: 60,
                countInStock: 80,
            },
            {
                id: 34345,
                image: '../assets/img/patch-panel.jpg',
                name: 'Патч-панель ITK (PP24-1UC5EU-K05-G) 19" 1U 24xRJ45 кат.5e UTP',
                price: 1298.0,
                qty: 3,
                countInStock: 10,
            },
        ];

        products.forEach((product) => {
            cart.addToCart(product);
        });
    },

    getCartPage() {
        return `
            <div class="container">
                <div class="row py-5">
                    <div class="col-md-8">
                        <h1>Корзина</h1>
                        <ul id="cartItemsList" class="list-group list-group-flush">
                        </ul> 
                    </div> 
                    <div class="col-md-4">
                        <div class="card">
                            <ul id="totalPrice" class="list-group">
                            
                                <li class="list-group-item">
                                    <h2>Всего ${cart.getTotalCount()} товаров</h2>
                                    ${cart.getCartValue()} <i class="fa fa-ruble-sign"></i>
                                </li>
                                <li class="list-group-item">
                                    <button type="button" class="btn btn-primary btn-block">
                                        Продолжить
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
    },

    getCartItem(item) {
        return `
        <li class="list-group-item">
            <div class="row">
                <div class="col-md-3">
                    <img
                        src="${item.image}"
                        class="img-fluid"
                        alt="${item.name}"
                    />
                </div>
                <div class="col-md-3">${item.name}</div>
                <div class="col-md-2">${item.qty}</div>
                <div class="col-md-2">${item.price} <i class="fa fa-ruble-sign"></i> </div>
                <div class="col-md-2">
                    <button class="btn btn-light trash"><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </li>
        `;
    },

    getCart(items) {
        return items.length
            ? items.reduce((acc, cur) => acc + this.getCartItem(cur), '')
            : '<li class="list-group-item">В корзине нет товаров</li>';
    },

    render() {
        const cartItems = cart.getAllItems();

        this.wrapper.insertAdjacentHTML('beforeend', this.getCartPage());
        const cartItemsList = document.getElementById('cartItemsList');
        cartItemsList.insertAdjacentHTML('beforeend', this.getCart(cartItems));
    },
};

diplayCart.init();
diplayCart.render();
