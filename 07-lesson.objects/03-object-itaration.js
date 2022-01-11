let hotel = {
  name: 'Hilton',
  rating: 5,
  persons: 500,
};

// let num = 50;
// console.log(num.constructor);

// let str = 'hello world';
// console.log(str.constructor);

// console.log(hotel.constructor);

//=========================
// Object.keys(); - возвращает массив ключей
// Object.values(); - возвращает массив значений
// Object.entries() - массив с массивами

// let keys = console.log(Object.keys(hotel));
// let values = console.log(Object.values(hotel));
// let entries = Object.entries(hotel);

// for (let entry of entries) {
//   let key = entry[0];
//   let value = entry[1];
//   //   console.log(entry);
//   console.log(`${key}: {value}`);
// }

// for (let key in hotel) {
//   //   console.log(item);
//   //   console.log('key', key);
//   console.log('value', hotel[key]);
// }

// hotel['name'];
// hotel['rating'];

// ==========================
// Correct way

//152
// let feedback = {
//   bad: 10,
//   neutral: 26,
//   good: 117,
// };

// let totalRating = 0;
// let values = Object.values(feedback);
// // console.log(values);

// for (let value of values) {
//   totalRating += value;
// }

// console.log(totalRating);

//=============================================
let feedback = {
  bad: 10,
  neutral: 25,
  good: 117,
};

// let totalRating = 0;
// let values = Object.values(feedback);
// // console.log(values);

// for (let value of values) {
//   totalRating += value;
// }

// console.log(totalRating);

// function getRating(feedbacksArr) {
//   feedbacksArr = Object.values(feedbacksArr);
//   let totalRating = 0;

//   for (let value of feedbacksArr) {
//     totalRating += value;
//   }
//   return totalRating;
// }

// console.log(getRating(feedback));
// console.log(
//   getRating({
//     samsung: 100,
//     apple: 150,
//     lg: 22,
//   })
// );

let cart = {
  tomatos: 150,
  potatos: 60,
  bananas: 25,
};

function getSum(cart) {
  cart = Object.values(cart);
  let sum = 0;

  for (let value of cart) {
    sum += value;
  }
  return sum;
}

console.log(getSum(cart));
