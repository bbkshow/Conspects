// function sayHello() {
//   console.log('Vova');
// }

// sayHello();

// Отложенный вызов функции

// setInterval
// setTimeout
// setTimeout(function () {}, 500);
// setTimeout(() => {}, 500);
// setTimeout(sayHello, 2500);
// setInterval(sayHello, 1500);

// Эти функции вызываются отложенно, это асинхронный код

// setTimeout(() => {
//   console.log('From timeout 0');
// }, 2000);

setTimeout(() => {
  console.log('From timeout 0');
}, 0);
setTimeout(() => {
  console.log('From timeout 500');
}, 500);
setTimeout(() => {
  console.log('From timeout 1500');
}, 1500);

// Эта все равно будет первой, потому что она не отложена
function sayHello() {
  console.log('Vova');
}

sayHello();
