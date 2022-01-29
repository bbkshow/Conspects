// getters / settrs

// get methodName(){ } // ggetter
// set methodName(data){ } // setter

// class Product {
//     constructor(brand, price, discount) {
//         this.brand = brand;
//         this.price = price;
//         this.discount = discount;
//     }

//     get brandName() {
//         return this.brand;
//     }

//     set brandName(value) {
//         this.brand = value;
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

// console.log(apple.brand);

// Getter
// console.log(apple.brandName()); // error
// console.log(apple.brandName);

// Setter
// apple.brandName = 'Apple+';
// console.log(apple);

// =======================================

// class User {
//     constructor(name, salary, overTime, rate) {
//         this.name = name;
//         this._salary = salary;
//         this.overTime = overTime;
//         this.rate = rate;
//     }

//     get salary() {
//         return this._salary;
//     }

//     set salary(value) {
//         this._salary = value;
//     }

//     getInfo() {
//         console.log(`${this.name} ${this.salary} ${this.rate}`);
//     }

// }

// let vova = new User('Vova', 15000, 15, 45);
// // Getter
// // console.log(vova.salary);

// // Setter
// // vova.salary = 20000;
// console.log(vova);

// ====================================
// class User {
//     constructor(name, salary, overTime, rate) {
//         this.name = name;
//         this.salary = salary;
//         this.overTime = overTime;
//         this.rate = rate;
//     }

//     getSalary() {
//         return this.salary;
//     }

//     setSalary(value) {
//         this.salary = value;
//     }

//     getInfo() {
//         console.log(`${this.name} ${this.salary} ${this.rate}`);
//     }

// }

// let vova = new User('Vova', 15000, 15, 45);

// console.log(vova.getSalary());
// vova.setSalary(35000);
// console.log(vova);
