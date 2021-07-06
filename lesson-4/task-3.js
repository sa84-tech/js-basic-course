'use strict';

class Product {
    constructor() {
        this.catalog = [];
    }

    addProduct(name, brand, category, description, price, countInStock) {
        const product = {
            id: uuidv4(),
            name,
            brand,
            category,
            description,
            price,
            countInStock,
        };
        this.catalog = [...this.catalog, product];

        return product;
    }

    getProducts() {
        return this.catalog;
    }

    getProductById(id) {
        return this.catalog.find((item) => item.id === id);
    }
}

// TEST

const cart3 = new Cart();
const catalog = new Product();

const products3 = [
    {
        name: 'Брюки BOCHETTI',
        brand: 'BOCHETTI',
        category: 'Брюки',
        description: '',
        price: 2800.0,
    },
    {
        name: 'Комплект носков',
        brand: 'RAULLI',
        category: 'Носки и гетры',
        description: '',
        price: 324.0,
    },
    {
        name: 'Джемпер Gloria Jeans',
        brand: 'Gloria Jeans',
        category: 'Свитеры, джемперы и кардиганы',
        description: '',
        price: 899.0,
    },
    {
        name: 'Водолазка Kurdi',
        brand: 'Kurdi',
        category: 'Свитеры, джемперы и кардиганы',
        description: '',
        price: 1098.0,
    },
];

const addProductResults = [];
products3.forEach((product) => {
    addProductResults.push(
        catalog.addProduct(
            product.name,
            product.brand,
            product.category,
            product.description,
            product.price,
            10
            ).id
            );
        });
        
addProductResults.forEach((productId, i) => {
    let product = catalog.getProductById(productId)
    cart3.addToCart( {
        id: product.id,
        name: product.name,
        price: product.price,
        countInStock: product.countInStock,
        qty: i + 1
    });
})

console.group('Задание 3');
console.log('Каталог', catalog.getProducts());
console.log('Стоимость корзины', cart3.getCartValue());
console.log('Корзина:', cart3);
console.groupEnd();
