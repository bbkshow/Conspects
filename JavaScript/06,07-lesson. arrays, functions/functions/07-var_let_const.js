// console.log(userName); // впереди не работает
// let userName = 'Sara';
// userName = 'Vova'; // можно переопределить
// console.log(userName);

// console.log(PI); // впереди не работает
// const PI = 3.14;
// PI = 1000; // нельзя переопределить
// console.log(PI);

// console.log(fruits); // хойстится, но undefined
var fruits = 'apple'; // можно переназначить переменную
var fruits = 'banana';
var fruits = 'Vova';
var fruits = 'Sara';
console.log(fruits);

// var function scope
// let z = 0;
// var b = 20;
// function myFunc() {
//   z = 10;
//   //   let a = 20;
//   //   var b = 200;
// }

// myFunc();

// console.log(z);
// console.log(a);
// console.log(b);
