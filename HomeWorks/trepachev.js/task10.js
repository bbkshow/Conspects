// Задача
// Задача. Сделайте функцию, которая возвращает куб числа. Число передается параметром.

// Решение:

// function cube(num) {
//   return num * num * num;
// }
// console.log(cube(2));

// Задачи для решения
// Простые функции
//  Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function sqrt(num) {
//   return num * num;
// }

// console.log(sqrt(3));

//  Сделайте функцию, которая возвращает сумму двух чисел.

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(2, 5));

//  Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function calc(num1, num2, num3) {
//   return (num1 - num2) / num3;
// }
// console.log(calc(10, 4, 2));

//  Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function week(day) {
//   if (day == '1') {
//     console.log('понедельник');
//   } else if (day == '2') {
//     console.log('вторник');
//   } else if (day == '3') {
//     console.log('среда');
//   } else if (day == '4') {
//     console.log('четверг');
//   } else if (day == '5') {
//     console.log('пятница');
//   } else if (day == '6') {
//     console.log('суббота');
//   } else if (day == '7') {
//     console.log('воскресенье');
//   } else {
//     console.log('ошибка');
//   }
// }
// week(7);

// function week(day) {
//   switch (day) {
//     case 1:
//       return 'mon';
//     case 2:
//       return 'thu';
//     case 3:
//       return 'wed';
//     case 4:
//       return 'the';
//     case 5:
//       return 'fri';
//     case 6:
//       return 'sat';
//     case 7:
//       return 'sun';
//     default:
//       return 'error';
//   }
// }
// console.log(week(3));
