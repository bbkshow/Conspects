// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 9;
// if (a == 10) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// =============================
// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// let min = 45;
// if (min >= 0 && min <= 14) {
//   console.log('В первую четверть');
// } else if (min >= 15 && min <= 29) {
//   console.log('Во вторую четверть');
// } else if (min >= 30 && min <= 44) {
//   console.log('В третью четверть');
// } else if (min >= 45 && min <= 59) {
//   console.log('В четвертую четверть');
// }

// ====================================
// Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.

// let lang = 'en';
// let arr = [];
// if (lang == 'ru') {
//   arr = [
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота',
//     'Воскресенье',
//   ];
// }
// if (lang == 'en') {
//   arr = [
//     'Monday',
//     'Thursday',
//     'Wednesday',
//     'Thathday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];
// }

// switch (lang) {
//   case 'ru':
//     arr = [
//       'Понедельник',
//       'Вторник',
//       'Среда',
//       'Четверг',
//       'Пятница',
//       'Суббота',
//       'Воскресенье',
//     ];

//   case 'en':
//     arr = [
//       'Monday',
//       'Thursday',
//       'Wednesday',
//       'Thathday',
//       'Friday',
//       'Saturday',
//       'Sunday',
//     ];
// }

// console.log(arr);

// let lang = 'ru';
// let arr = {
//   ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//   en: ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
// };
// console.log(arr[lang]);

// ===================================
// Работа с if-else
//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;
// if (a == 0) {
//   console.log('Верно');
// } else console.log('Не верно');

//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;
// if (a > 0) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = 1;
// if (a < 0) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = 0;
// if (a >= 0) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;
// if (a <= 0) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = 0;
// if (a !== 0) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

// let a = 3;
// if (a == 'test') {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

// let a = 1;
// if (a === '1') {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// ================================
// Работа с логическими переменными
//  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// let test = true;
// if (test) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// test ? console.log('Верно') : console.log('Неверно');

//  Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// let test = false;
// if (!test) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// !test ? console.log('Верно') : console.log('Неверно');

// ===========================================

// Работа с && (и) и || (или)
//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = -3;
// if (a > 0 && a < 5) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 2;
// if (a === 0 || a === 2) {
//   console.log(a + 7);
// } else {
//   console.log(a / 10);
// }

//  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = 3;
// let b = 1;
// if (a <= 3 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 11;
// let b = 12;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// ===============================

// На switch-case
//  Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// let num = 4;
// let result;
// switch (num) {
//   case 1:
//     result = 'зима';
//     break;
//   case 2:
//     result = 'весна';
//     break;
//   case 3:
//     result = 'лето';
//     break;
//   case 4:
//     result = 'осень';
//     break;
// }
// console.log(result);
// ================================

// Задачи
//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = 3;

// if (day <= 10) {
//   console.log('В первой декаде');
// } else if (day > 10 && day <= 20) {
//   console.log('Во второй декаде');
// } else if (day > 20 && day <= 31) {
//   console.log('В третьей декаде');
// }

//  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month = 12;
// if (month == 12 || (month >= 1 && month <= 2)) {
//   console.log('зима');
// } else if (month > 2 && month <= 5) {
//   console.log('весна');
// } else if (month > 5 && month <= 8) {
//   console.log('лето');
// } else if (month > 8 && month <= 11) {
//   console.log('осень');
// }

//  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = 'abcde';
// if (str[0] == 'a') {
//   console.log('да');
// } else {
//   console.log('нет');
// }

//  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = '12345';
// if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
//   console.log('да');
// } else {
//   console.log('нет');
// }

//  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// let str = '123';
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// console.log(sum);

//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = '123456';
// let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// if (sum1 === sum2) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }
