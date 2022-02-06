// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b

// let a = 10;
// let b = 3;
// console.log(a % b);

// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления

// let a = 10;
// let b = 3;
// let rest = a % b;

// if (rest == 0) {
//   console.log(a / b);
// } else {
//   console.log(`Делится с остатком ${rest}`);
// }

// =====================================
// Работа со степенью и корнем

// Для решения задач данного блока вам понадобятся следующие методы: Math.pow, Math.sqrt.

//  Возведите 2 в 10 степень. Результат запишите в переменную st.

// let st = Math.pow(2, 10);
// console.log(st);

//  Найдите квадратный корень из 245.

// console.log(Math.sqrt(245));

//  Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += Math.pow(arr[i], 3);
// }

// let result = Math.sqrt(sum);
// console.log(result);

// ===================================

// Работа с функциями округления

// Для решения задач данного блока вам понадобятся следующие функции: Math.round, Math.ceil, Math.floor, toFixed, toPrecision.

//  Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let result = Math.sqrt(379);
// result = Math.round(result);
// result = Math.ceil(result);
// result = Math.floor(result);
// result = result.toFixed(1);
// result = result.toFixed(2);
// result = result.toPrecision(3);
// result = result.toPrecision(4);

// console.log(result);

//  Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let sqrt = Math.sqrt(587);
// let obj = { floor: Math.floor(sqrt), ceil: Math.ceil(sqrt) };
// console.log(obj);

// ================================

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let arr = [4, -2, 5, 19, -130, 0, 10];

// let min = Math.min.apply(null, arr);
// console.log(min);
// let max = Math.max.apply(null, arr);
// console.log(max);
// ================================

// Работа с рандомом
// Для решения задач данного блока вам понадобятся следующие методы: Math.random.

//  Выведите на экран случайное целое число от 1 до 100.

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(1, 100));

//  Заполните массив 10-ю случайными целыми числами.

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// console.log(arr);
