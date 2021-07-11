"use strict";

const cart = {
  cartItems: [],
  addToCart(productPayload) {

    const existItem = this.cartItems.find(
      (item) => item.id === productPayload.id
    );

    if (existItem) {
      this.cartItems = this.cartItems.map((item) =>
        item.id === existItem.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      this.cartItems.push({ ...productPayload, qty: 1 });
    }
  },

  removeFromCart(productId) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
  },

  clearCart() {
    this.cartItems = [];
  },

  getCartValue() {
    return this.cartItems.reduce((acc, cur) => cur.price * cur.qty + acc, 0);
  },

  getTotalCount() {
    return this.cartItems.reduce((acc, cur) => cur.qty + acc, 0);
  },

  getAllItems() {
    return [...this.cartItems];
  },
};

const products = {
  catalog: [],
  addProduct(newProduct = {}) {
    const product = {
      id: uuidv4(),
      image: newProduct.image,
      name: newProduct.name,
      brand: newProduct.brand,
      description: newProduct.description,
      price: newProduct.price,
      countInStock: newProduct.countInStock,
    };
    this.catalog.push(product);

    return product;
  },

  getProducts() {
    return this.catalog;
  },

  getProductById(id) {
    return this.catalog.find((item) => item.id === id);
  },

  removeProduct(id) {
    this.catalog.filter((item) => item.id !== id);
  },

  init() {
    const initialProducts = [
      {
        image: "../assets/img/crimping-tool.jpg",
        name: "Инструмент для обжима",
        brand: "ITK",
        description: "Инструмент ITK (TM1-B11V) для обжима (упак:1шт) красный",
        price: 1320.0,
        countInStock: 10,
      },
      {
        image: "../assets/img/8p8c.jpg",
        name: "Коннектор 8P8C",
        brand: "Lanmaster",
        description:
          "Коннектор Lanmaster (TWT-PL45-8P8C) UTP кат.5e RJ45 (упак.:100шт)",
        price: 580.0,
        countInStock: 10,
      },
      {
        image: "../assets/img/utp.jpg",
        name: "Кабель UTP",
        description:
          "Кабель сетевой HQ UTP, cat.5E, 305м, 4 пары, 24AWG, 0.51мм, медь, одножильный",
        brand: "HQ",
        price: 6324.0,
        countInStock: 10,
      },
      {
        image: "../assets/img/keystone.jpg",
        name: "Модуль Keystone",
        description:
          "Модуль Lanmaster (TWT-OK45UTP/5E-WH) информ. Keystone RJ45 кат.5E UTP бел.",
        brand: "Lanmaster",
        price: 130.0,
        countInStock: 80,
      },
      {
        image: "../assets/img/patch-cord-1.jpg",
        name: "Патч-корд 1м cat5E",
        description: "Патч-корд Lanmaster UTP 4 пары cat5E molded 1м серый",
        brand: "Lanmaster",
        price: 330.0,
        countInStock: 80,
      },
      {
        image: "../assets/img/patch-cord-2.jpg",
        name: "Патч-корд 2м cat5E",
        description: "Патч-корд Lanmaster UTP 4 пары cat5E molded 2м серый",
        brand: "Lanmaster",
        price: 380.0,
        countInStock: 80,
      },
      {
        image: "../assets/img/patch-panel.jpg",
        name: "Патч-панель",
        description:
          'Патч-панель ITK (PP24-1UC5EU-K05-G) 19" 1U 24xRJ45 кат.5e UTP',
        brand: "ITK",
        price: 1380.0,
        countInStock: 10,
      },
    ];

    initialProducts.forEach((item) => {
      products.addProduct(item);
    });
  },
};

const displayProducts = {
  getProductsPage() {
    return `
          <div class="container">
          <div class="row py-1 align-items-center"><h1>Каталог</h1></div>
          <div id="productsList" class="row py-1">
            
          </div>
        </div>`;
  },

  getProductsListItem(item) {
    return `
          <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 product">
              <div class="card my-3">
                  <div class="card-top">
                      <img src="${item.image}" class="img card-img-top" alt="connector" />
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">
                          ${item.description}
                      </p>
                      <button href="#" class="btn btn-primary" data-product_id="${item.id}">Купить</button>
                  </div>
              </div>
          </div>
      `;
  },

  getProductsList(items) {
    return items.length
      ? items.reduce((acc, cur) => acc + this.getProductsListItem(cur), "")
      : `<div class="alert alert-dark" role="alert">
              В каталоге нет товаров!
          </div>`;
  },

  addEventHandler(wrapper, cart) {
    wrapper.addEventListener("click", (event) => this.addToCart(event, cart));
  },

  addToCart(event, cart) {
    if (!event.target.classList.contains("btn")) return;
    const productId = event.target.dataset.product_id;
    const product = products.getProductById(productId);
    cart.addToCart(product);
  },

  render(wrapper, cart) {
    const productsItems = products.getProducts();

    wrapper.insertAdjacentHTML("beforeend", this.getProductsPage());
    const productsList = document.getElementById("productsList");
    productsList.insertAdjacentHTML(
      "beforeend",
      this.getProductsList(productsItems)
    );
    this.addEventHandler(productsList, cart);
  },
};

const displayCart = {
  wrapper: {},
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
                <div class="col-md-3">${item.description}</div>
                <div class="col-md-2">${item.qty}</div>
                <div class="col-md-2">${item.price} <i class="fa fa-ruble-sign"></i> </div>
                <div class="col-md-2">
                    <button class="btn btn-light trash" data-product_id="${item.id}"><i class="fa fa-trash" data-product_id="${item.id}"></i></button>
                </div>
            </div>
        </li>
        `;
  },

  getCart(items) {
    return items.length
      ? items.reduce((acc, cur) => acc + this.getCartItem(cur), "")
      : '<li class="list-group-item">В корзине нет товаров</li>';
  },

  addEventHandler(wrapper) {
    wrapper.addEventListener("click", (event) => this.removeFromCart(event));
  },

  removeFromCart(event) {
      
    if (!event.target.classList.contains("btn") && !event.target.classList.contains("fa")) return;
    const productId = event.target.dataset.product_id;
    cart.removeFromCart(productId)
    shop.renderPage('cart');
  },

  render(wrapper = null) {
    if (wrapper) this.wrapper = wrapper;
    const cartItems = cart.getAllItems();
    this.wrapper.insertAdjacentHTML("beforeend", this.getCartPage());
    const cartItemsList = document.getElementById("cartItemsList");
    cartItemsList.insertAdjacentHTML("beforeend", this.getCart(cartItems));
    this.addEventHandler(cartItemsList);
  },
};

const shop = {
  cart: {},
  wrapper: document.getElementById("wrapper"),
  init(cart) {
    this.cart = cart;
    const navbar = document.querySelector(".navbar");
    navbar.addEventListener("click", (event) => this.goToPage(event));
    this.renderPage('product');
  },

  goToPage(event) {
    if (!(event.target.tagName === "A")) return;
    const page = event.target.dataset.target;
    this.renderPage(page);
  },

  renderPage(page) {
    while (this.wrapper.firstChild) {
      this.wrapper.firstChild.remove();
    }

    switch (page) {
        case "cart":
          displayCart.render(this.wrapper);
          return;
        case "product":
          displayProducts.render(this.wrapper, this.cart);
          return;
      }
  },


};

products.init();
shop.init(cart);
