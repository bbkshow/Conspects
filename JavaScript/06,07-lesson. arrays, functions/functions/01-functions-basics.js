// alert('Hello');
// console.log('Test');
// prompt('Enter number');

// if () {

// }

// for () {

// }

//=================================
// Function declaration (classic function)

// function sum(a, b) { // parameters
//   console.log(a + b);
// }

// function getName() {
//   console.log('Vova');
// }

//=================================
// function sum(a, b) {
//   // parameters
//   console.log(a + b);
//   getName();
//   getName();
//   getName();
//   getName();
// }

// function getName() {
//   console.log('Vova');
//   sum(20, 30);
// }

// getName();

// sum(5, 10); // arguments

// Функцию можно вызвать до ее объявления, в любом месте
// getName();
// getName();
// getName();
// getName();

//=======================================
// Function expretion
// Функцию можно вызвать только после ее объявления

// function getUserName() {
//   console.log('Sara');
// }

// let getUserName = function () {
//   console.log('Sara');
// };
// console.log(getUserName);

// function mult(num1, num2) {
//   console.log(num1 * num2);
// }

// let mult = function (num1, num2) {
//   console.log(num1 * num2);
// };
// console.log(mult(10, 30));

// mult(3, 4);
// mult(3, 5);
// mult(10, 5);

//===============================
// Arrow function (они всегда Function expretion)
// Стрелочная функция - самый современный синтаксис

// let getUserName = function () {
//   console.log('Sara');
// };

// let getUserName = () => { }

//Arrow function
// let getUserName = () => {
//   console.log('Sara');
// };

// getUserName();

// let mult = function (num1, num2) {
//   console.log(num1 * num2);
// };

// let mult = (num1, num2) => {
//   console.log(num1 * num2);
// };

// console.log(mult(30, 40));
