// ES6

// class Product {
//     constructor(brand, price, discount) {
//         this.brand = brand;
//         this.price = price;
//         this.discount = discount;
//     }

//     showBrandInfo() {
//         console.log(`${this.brand}, ${this.price}, ${this.discount}`);
//     };

//     getDiscounPrice() {
//         let result = (this.price * (100 - this.discount)) / 100;
//         console.log(result);
//     };
// }

// let apple = new Product('Apple', 1000, 12);
// let samsung = new Product('Samsung', 800, 15);

// console.log(apple);
// console.log(samsung);

// ==================================
// Methods new Syntax

// class Product {
//     constructor(brand, price, discount) {
//         this.brand = brand;
//         this.price = price;
//         this.discount = discount;
//     }

//     showBrandInfo() {
//         console.log(`${this.brand}, ${this.price}, ${this.discount}`);
//     };

//     getDiscounPrice() {
//         let result = (this.price * (100 - this.discount)) / 100;
//         console.log(result);
//     };

//     // showBrandInfo = function () {
//     //     console.log(`${this.brand}, ${this.price}, ${this.discount}`);
//     // };

//     // getDiscounPrice = function () {
//     //     let result = (this.price * (100 - this.discount)) / 100;
//     //     console.log(result);
//     // };

// Public field не нужно bind
//     // showBrandInfo = () => {
//     //     console.log(`${this.brand}, ${this.price}, ${this.discount}`);
//     // };

//     // getDiscounPrice = () => {
//     //     let result = (this.price * (100 - this.discount)) / 100;
//     //     console.log(result);
//     // };
// }

// ======================================

class User {
  constructor(name, salary, overTime, rate) {
    this.name = name;
    this.salary = salary;
    this.overTime = overTime;
    this.rate = rate;
  }

  getInfo() {
    console.log(`${this.name} ${this.salary} ${this.rate}`);
  }

  paySalary() {
    return (this.salary + this.overTime) * this.rate;
  }
}

let vova = new User('Vova', 15000, 15, 45);

console.log(vova.name);
console.log(vova.overTime);
console.log(vova.paySalary());
console.log(vova.getInfo());
