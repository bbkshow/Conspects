// Не важно где объявили, важно где вызвали.
//this - кто вызвал функцию. Контекст вызова функции.

// Явное указание контекста
// Call - принимает аргументы, возвращает и вызывает функцию.
// Apply - принимает массив, возвращает и вызывает функцию.
// Bind - принимает аргументы, возвращает функцию , связывает навсегда контекст, функцию нужно вызвать.

// Тот, кто стоит слева от точки, вызывает функцию

// 3 одинаковых способа вызывть функцию
// alert('Hello');
// window.alert('Hello');
// this.alert('Hello');

// function sayHello() {
//   console.log('Sara');
//   console.log(this); // Window
// }

// sayHello();
// window.sayHello();
// this.sayHello();

//===============================================
// let user = {
//   name: 'Vova',
//   age: 30,
//   displayThis() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// console.log(user.name);
// user.displayThis();

// let moderator = {
//   name: 'Sara',
//   age: 17,
//   displayThis() {
//     console.log(this);
//     // console.log(this.name);

//     // function fn() {
//     //   console.log(this); // Window
//     // }

//     let fn = () => {
//       console.log(this); // moderator
//     };

//     fn();
//   },
// };

// moderator.displayThis();

//============================
// let fn = () => {
//   console.log(this); // Window
// };

// fn();

//====================================
// call, apply, bind - позволяет использовать методы из другого объекта
// Bind - основной инструмент, потому что привязку можно сделать сейчас, а вызвать потом
let arrNums = [100, 3, 14, 5, 67, 1];

// let result = Math.min(40, 5);
// let result = Math.min(...arrNums); // не читает массив, его надо распылить ...

// let result = Math.min.apply(Math, arrNums); // работает с массивом, функция возвращается в результ и сразу вызывается
// let result = Math.max.call(Math, 40, 5, 100); // работает с данными, функция возвращается в результ и сразу вызывается
// let result = Math.min.bind(Math, 40, 5, 100)(); функция возвращается в результ, ее надо вызвать отдельно
// let result = Math.max.bind(Math, ...arrNums)();
// console.log(result);

// let vova = {
//   name: 'Vova',
//   age: 30,
//   showUserInfo() {
//     console.log(this.name, this.age);
//   },
// };

// let sara = {
//   name: 'Sara',
//   age: 17,
// };

// vova.showUserInfo();
// vova.showUserInfo.bind(sara)(); // возьми метод showUserInfo на объекте Вова и вызови его на объекте Сара

// vova.showUserInfo.call(sara);
// vova.showUserInfo.apply(sara);

//==============================
// Dom elements

let btn = document.querySelector('button');
// console.log(btn);

btn.addEventListener('click', vova.showUserInfo.bind(vova));
// Вызови мне метод showUserInfo объекта vova в контексте объекта vova

// btn.addEventListener('click', () => {
//   console.log(this); // Window
// });

btn.addEventListener('click', function () {
  console.log(this); // button
});
