// Incapsulation
// Object.seal(objA);
// Object.freeze(ObjB);
// window.prototype.alert = null;
// alert('Hello');

// function sayHello(name) {
//     console.log(name);
// }

// sayHello.pizza = function () {
//     console.log('Pizza!!!');
// };

// // sayHello('Sara');
// sayHello.pizza();

let arr = [10, 30, 5, 7];
let result = Math.min.call(Math, ...arr);
console.log(result);

Math.pizza = function () {
  console.log('Pizza!!!');
};

console.log(Math.pizza());
