// Функция высшего порядка - все в JS
// HOF

// 1. Принимает как параметр другую функцию
// 2. Функция возвращзает из себя другую функцию

// let sum = (a, b) => a + b;
// function sum(a, b) {
//   return a + b;
// }
// let sub = (a, b) => a - b;
// let div = (a, b) => a / b;
// let mult = (a, b) => a * b;

// console.log(sub(10, 2)); // 8
// console.log(mult(10, 2)); // 20

// let calculator = (a, b, callback) => {
//   return callback(a, b);
//   //   sum(a, b);
// };

// let result = calculator(10, 2, sub);
// let result = calculator(10, 2, mult);
// console.log(result);

// function sayName() {
//   console.log('Vova');
// }
// console.log(sayName());

//=========================
function logName() {
  console.log('Vova');
}

function logDate() {
  //   console.log(Date.now());
  console.log(Date.now());
}

// setInterval(logDate, 3000);
// setInterval(() => {
//   console.log(Date.now());
// }, 3000);
