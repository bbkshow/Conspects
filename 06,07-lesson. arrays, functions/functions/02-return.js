// let mult = function (num1, num2) {
//   console.log(num1 * num2);
// };
// console.log(mult(10, 30));

// JavaScript работает в два круга, если не находит, дает undefined
// lap 1
// userName;
// isAdmin;
// pizza
// mult;

// lap 2
// userName = 'Vova';
// isAdmin = true;
// pizza = undefined

let userName = 'Vova';
const isAdmin = true;
let pizza;

// console.log(userName);
// console.log(isAdmin);
// console.log(pizza);

//Return в функции есть всегда, иначе будет undefined
function mult(num1, num2) {
  return num1 * num2;
  console.log(num1 * num2);
  return undefined;
}
// console.log(mult);

function sub(a, b) {
  return a - b;
  //   console.log(a - b);
}

let result = sub(mult(4, 5) + 50, 5);
console.log(result);

// console.log(mult(15, 30));
// console.log(mult(15, 30));

// Function declaration - return
// Function expretion - return
// Arrow function - return
