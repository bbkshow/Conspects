// Rest / Spred
// ...
// ... Rest = ... Spred

//================================
//Spred operator
// let citiesOfUcraine = ['Kyiv', 'Lviv', 'Odessa'];
// console.log(citiesOfUcraine);
// let citiesOfEurope = ['London', 'Paris', 'Milan'];

// let cities = citiesOfUcraine.concat(citiesOfEurope);
// console.log(cities);

// let cities = [...citiesOfUcraine];
// console.log(cities[0]);
// console.log(cities);
// console.log(cities === citiesOfUcraine);

//==========================================
// let citiesOfUcraine = ['Kyiv', 'Lviv', 'Odessa'];
// console.log(citiesOfUcraine);
// let citiesOfEurope = ['London', 'Paris', 'Milan'];

// // let cities = citiesOfUcraine.concat(citiesOfEurope);
// // console.log(cities);

// let cities = [
//   'Dnipro',
//   ...citiesOfUcraine,
//   'Berlin',
//   ...citiesOfEurope,
//   'Ottava',
// ];
// console.log(cities);

// ============================
// Spred for objects
// let vova = {
//   name: 'Vova',
//   age: 30,
//   contacts: 120,
// };

// let sara = {
//   ...vova,
//   name: 'sara',
//   age: 17,
// };

// console.log(sara);
// console.log(sara === vova);

//=============================================
// Rest operator
// Как убрать элементы из массива

// let cities = ['Kyiv', 'Lviv', 'Odessa', 'London', 'Paris', 'Milan'];

// let [Kyiv, Lviv, ...pizza] = cities;
// console.log(pizza);

//=====================

// let cities = ['Kyiv', 'Lviv', 'Odessa', 'London', 'Paris', 'Milan'];

// let [city_0, city_1, city_4, ...rest] = cities;

// console.log(city_0);
// console.log(rest);
// console.log(city_4);

//============================
// Rest в функции arguments

// function sum(a, b, ...rest) {
//   console.log(arguments);
//   let agsArr = [...arguments];
// }

// sum(10, 20, 30, 40);
