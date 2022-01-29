// let model = 'X5';

// let car = {
//   speed: 180,
//   model: model,
//   manufacturer: 'BMW',
//   engiens: ['200', '250', '350'],
//   carData: {
//     vin: 23131213232,
//     city: 'Munich',
//     year: 2021,
//     color: 'blue',
//     tyresOptions: {
//       radius: 22,
//       season: 'summer',
//     },
//   },

//   getCarSpecs() {
//     console.log(this.carData);
//   },
// };

// console.log(car.model);
// console.log(car.manufacturer);
// console.log(car.engiens[2]);
// console.log(car.carData.year);
// console.log(car.carData.tyresOptions.season);
// car.getCarSpecs();

// car.manufacturer = 'Audi';
// car.sport = true;
// console.log(car);

// console.log(car['speed']);
// console.log(car['manufacturer']);

// let feedback = {
//   bad: 10,
//   neutral: 25,
//   good: 117,
// };

// let stars = ['bad', 'neutral', 'good'];

// function getFeedback(arrOfFeedBacks, stars) {
//   let feedBack = {};

//   for (let rate of arrOfFeedBacks) {
//     feedBack[rate] = stars;
//   }

//   return feedBack;
// }

// console.log(getFeedback(stars, feedback));

// ===========================
// function handleInput(name, value) {
//   let obj = {
//     [name]: value,
//   };

//   return obj;
// }

// let passwordObj = handleInput('pass', '1234');
// let userObj = handleInput('email', 'vova@i.ua');
// let loginObj = handleInput('login', 'Vova');

// // console.log(passwordObj);
// // console.log(userObj);

// let user = {
//   password: passwordObj,
//   user: userObj,
//   login: loginObj,
// };

// console.log(user);
// console.log(user.login);
// console.log(user['login']);

// ES6 shortland короткая запись объектов

function handleInput(name, value) {
  let obj = {
    [name]: value,
  };

  return obj;
}

let password = handleInput('pass', '1234');
let user = handleInput('email', 'vova@i.ua');
let login = handleInput('login', 'Vova');

// console.log(passwordObj);
// console.log(userObj);

// let userObj = {
//   password: password,
//   user: user,
//   login: login,
// };

// Если ключ и значение совпадают, их можно писать просто так
let userObj = {
  password,
  user,
  login,
};

console.log(userObj);
// console.log(user.login);
// console.log(user['login']);
