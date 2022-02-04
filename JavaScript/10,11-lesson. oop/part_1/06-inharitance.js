// ES5 Inheritance

function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;

  this.getDiscounPrice = function () {
    let result = (this.price * (100 - this.discount)) / 100;
    console.log(result);
  };
}

Product.prototype.showBrandInfo = function () {
  console.log(`${this.brand}, ${this.price}, ${this.discount}`);
};

let apple = new Product('Apple', 1000, 12);

console.log(apple);

// =========================================

// let vova = {
//     name: 'Vova',
//     salary: 15000,
//     overTime: 15,
//     rate: 45,
//     paySalary() {
//         return (this.salary + this.overTime) * this.rate;
//     }
// };

// Class
// function User(name, salary, overTime, rate) {
//     this.name = name;
//     this.salary = salary;
//     this.overTime = overTime;
//     this.rate = rate;
// }

// User.prototype.paySalary = function () {
//     return (this.salary + this.overTime) * this.rate;
// };

// To instantiate
// let vova = new User('Vova', 15000, 15, 45);
// let sara = new User('Sara', 25000, 20, 50);
// console.log(vova);
// console.log(sara);

// Interface
// vova.name = 'Pizza';
// vova.salary;
// vova.paySalary();
// vova.prototype = 'Qwe';

// console.log(vova);

// ===========================
// Inheritance

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getInfo = function () {
  console.log(`${this.firstName}, ${this.lastName}`);
};

User.prototype.sayHello = function () {
  console.log(`${this.firstName}, ${this.lastName}`);
};

let vova = new User('Vova', 'Erickson');

// console.log(vova);
// vova.getInfo();

function Customer(firstName, lastName, membership) {
  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.membership = membership;
  User.apply(this, arguments); // ЭТО НАСЛЕДОВАНИЕ (INHARITANCE) ОТ ОБЪЕКТА USER <==============
  this.membership = membership;
}

// Передать прототип <===================
Customer.prototype = Object.create(User.prototype);
// Привязать конструктор <===================
Customer.prototype.constructor = Customer;

Customer.prototype.getAllData = function () {
  console.log(`${this.firstName}, ${this.lastName}, ${this.membership}`);
};

// User.prototype.sayHello = function () {
//     console.log('Hello Sara');
// };

let sara = new Customer('Sara', 'Smith', 'Basic');
// console.log(sara);
// sara.getAllData();
// sara.getInfo();
// sara.sayHello();

//===============================================================
// Functional inheritance
function Moderator(firstName, lastName, membership, status) {
  Customer.apply(this, arguments);
  this.status = status;
}

// Prototype inheritance
Moderator.prototype = Object.create(Customer.prototype);
Moderator.prototype.constructor = Moderator;

let moderator = new Moderator('Bob', 'Sponge', 'Advansed+', 'moderator');
console.log(moderator);
moderator.getAllData();

// ES6
class User {}
