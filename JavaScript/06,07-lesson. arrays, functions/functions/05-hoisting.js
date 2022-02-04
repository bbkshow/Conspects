// Hoisting - поднятие переменной
// Хойстится не на всех, на стрелочной не работает если перед ней объявить

// lap 1
// name
// num
// getUserName

// lap 2
// name = 'Vova'
// num = 100
// getUserName = function getUserName() {
//     console.log('Sara');
//   }

// getUserName();
// getUserName();

let name = 'Vova';
let num = 100;

// Hoisting работает
// function getUserName() {
//   console.log('Sara !!');
// }

// Hoisting не работает
// let getUserName = () => {
//   console.log('Sara !!');
// };

// Hoisting не работает
// let getUserName = function () {
//   console.log('Sara !!');
// };

// getUserName();
