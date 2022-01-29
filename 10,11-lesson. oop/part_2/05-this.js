// Не важно где объявили, важно где вызвали.
// this - кто вызвал функцию. Контекст вызова ф-ции.

// Мантра!!!
// Вызови мне метод showUserInfo объекта vova в контексте объекта vova

// Явное указание контеста
// Call - принимает аргументы, возвращает и вызывает ф-цию
// Apply - принимает массив, возвращает и вызывает ф-цию
// Bind - принимает аргументы, возвращает ф-цию, связывает навсегда контекст, ф-цию нужно вызвать

// alert('Hello');
// window.alert('Hello');
// this.alert('Hello');

// function sayHello() {
//     console.log('Sara');
//     console.log(this); // Window
// }

// sayHello();
// window.sayHello();
// this.sayHello();

// ===================================

// let user = {
//     name: 'Vova',
//     age: 30,
//     dispalyThis() {
//         console.log(this);
//         console.log(this.name);
//     }
// };

// console.log(user.name);
// user.dispalyThis();

// let moderator = {
//     name: 'Sara',
//     age: 17,
//     dispalyThis() {
//         console.log(this);
//         // console.log(this.name);

//         // function fn() {
//         //     console.log(this); // Window
//         // }

//         let fn = () => {
//             console.log(this); // moderator
//         };
//         fn();
//     }
// };

// moderator.dispalyThis();

// ======================================
// let fn = () => {
//     console.log(this); // Window
// };
// fn();

// ======================================
// call, apply, bind

// let arrNums = [100, 45, 23, 8];

// let result = Math.min(40, 5, 2);
// let result = Math.min(...arrNums);
// let result = Math.min.apply(Math, arrNums);
// let result = Math.max.call(Math, 40, 5, 100, 2);
// let result = Math.max.bind(Math, 40, 5, 100)();
// let result = Math.min.bind(Math, ...arrNums)();

// console.log(result);

// let vova = {
//     name: 'Vova',
//     age: 30,
//     showUserInfo() {
//         console.log(this.name, this.age);
//     }
// };

// vova.showUserInfo

// let sara = {
//     name: 'Sara',
//     age: 17,
// };

// vova.showUserInfo();
// vova.showUserInfo.bind(sara)();
// vova.showUserInfo.call(sara);
// vova.showUserInfo.apply(sara);

// ============================
// Dom elements

// let btn = document.querySelector('button');
// console.log(btn);

// btn.addEventListener('click', vova.showUserInfo.bind(vova));
// Вызови мне метод showUserInfo объекта vova в контексте объекта vova

// btn.addEventListener('click', (event) => {
//     console.log(this); // Window
//     console.log(event.currentTarget);
// });

// btn.addEventListener('click', function (event) {
//     // console.log(this); // На саму кнопку
//     console.log(event.currentTarget);
// });

// ES5======
// function User(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// User.prototype.getInfo = function () {
//     console.log(`${this.firstName}, ${this.lastName}`);
// };

// User.prototype.sayHello = function () {
//     console.log(`${this.firstName}, ${this.lastName}`);
// };

// let vova = new User('Vova', 'Erickson');
// let sara = new User('Sara', 'Smith');

// console.log(vova);
// console.log(sara);

// ES6 =============================
// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getInfo() {
//         console.log(`${this.firstName}, ${this.lastName}`);
//     };

//     sayHello() {
//         console.log(`${this.firstName}, ${this.lastName}`);
//     };
// }

// let bob = new User('Bob', 'Marley');
// let sveta = new User('Sveta', 'Brown');

// console.log(bob);
// console.log(sveta);
