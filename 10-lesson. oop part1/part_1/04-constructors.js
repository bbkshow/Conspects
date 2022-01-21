// ES5 Constructors

// let product = function () {};

// Constructor function, Class
// function Product() { };
// new Product();

// =====================================

// function Product() {
//     // 1. { };
//     // 2. привязка this;
//     // 3. return { with this };
// };

// // объект, экземпляр класса, сущьность,
// let apple = new Product(); // instance
// let samsung = new Product(); // instance
// let lg = new Product(); // instance

// console.log(apple instanceof Product);
// console.log(samsung);
// console.log(lg);

// ==================================================

function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;

  this.showBrandInfo = function () {
    console.log(`${this.brand}, ${this.price}, ${this.discount}`);
  };

  this.getDiscounPrice = function () {
    let result = (this.price * (100 - this.discount)) / 100;
    console.log(result);
  };
}

let apple = new Product('Apple', 1000, 12);
let samsung = new Product('Samsung', 800, 15);

// { }
// console.table(apple);
// console.table(samsung);
// console.log(apple.brand);
// console.log(apple.price);
// apple.showBrandInfo();
// apple.getDiscounPrice();

// samsung.getDiscounPrice();
// samsung.showBrandInfo();

// console.log(apple === samsung);

console.log(apple);
// console.table(samsung);

// let arr1 = [1, 3, 4, 5, 6];
// let arr2 = ['vova', 'sara', 'bob'];
// let arr3 = [false, true];

//  Check instance =======================
// console.log(apple instanceof Product);

// ES6
// class User {

// }
