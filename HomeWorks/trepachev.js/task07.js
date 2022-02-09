// Задача . Поиск и замена
// Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

// Решение: в данном случае необходимо воспользоваться методом replace, который выполняет поиск и замену. Однако, при простом варианте использования, эта метод найдет и заменит только первое совпадение:

// var str = 'aaa@bbb@ccc';
// alert(str.replace('@', '!')); //получим 'aaa!bbb@ccc'
// Чтобы заменить все совпадения, воспользуемся глобальным поиском с помощью регулярного выражения:

// var str = 'aaa@bbb@ccc';
// alert(str.replace(/@/g, '!')); //получим 'aaa!bbb!ccc'
// Задача . Методы substr, substring, slice
// Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

// Решение: слово 'bbb' начинается с символа номер 4 (нумерация с нуля), а заканчивается символом номер 6. Воспользуемся указанными методами:

// var str = 'aaa bbb ccc';
// alert(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
// alert(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
// alert(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать)
// Обратите внимание на то, что в методах substring и slice второй параметр должен быть на 1 больше того символа, который мы хотим забрать (то есть, если указать число 7 - то отрезание произойдет до 6 символа включительно).
// ==========================

// Задача . Преобразование формата даты
// Задача. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

// Решение: с помощью метода split разобьем нашу строку '2025-12-31' в массив по разделителю '-', при этом в нулевом элементе окажется год, в первом - месяц, во втором - день:

// var str = '2025-12-31';
// var arr = str.split('-');
// console.log(arr); //получим массив ['2025', '12', '31']
// Теперь, обращаясь к разным элементам массива по их ключам, сформируем нужную нам строку:

// var str = '2025-12-31';
// var arr = split('-');

// var newStr = arr[2] + '/' + arr[1] + '/' + arr[0];
// var newStr = `${arr[2]}/${arr[1]}/${arr[0]}`;
// console.log(newStr); //получим строку '31/12/2025'

// Задачи для решения
// Работа с регистром символов
// Для решения задач данного блока вам понадобятся следующие методы: toUpperCase, toLowerCase.

//  Дана строка 'js'. Сделайте из нее строку 'JS'.
// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

//  Дана строка 'JS'. Сделайте из нее строку 'js'.
// let str = 'JS';
// str = str.toLowerCase();
// console.log(str);

//==============================================

// Работа с length, substr, substring, slice. Работа с indexOf
// Для решения задач данного блока вам понадобятся следующие методы: length, substr, substring, slice, indexOf.

//  Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
// let str = 'я учу javascript!';
// console.log(str.length);

//  Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
// let str = 'я учу javascript!';
// let newStr = str.slice(2, 5);
// console.log(newStr);
// let newStr2 = str.slice(6, 16);
// console.log(newStr2);
// let newStr3 = str.substr(2, 3);
// console.log(newStr3);
// let newStr4 = str.substr(6, 10);
// console.log(newStr4);

//  Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// let str = 'я учу javascript!';
// console.log(str.indexOf('учу'));

//  Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

// let str =
//   'В этом доме жили только те, кто купил квартиру на первом и втором этажах';
// let n = 30;
// if (str.length > n) {
//   console.log(`${str.slice(0, n)}...`);
//   //   var result = str.slice(0, n) + '...';
//   //   console.log(result);
// } else {
//   console.log(str);
// }
// ==============================

// Работа с replace
// Для решения задач данного блока вам понадобятся следующие методы: replace.
//  Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

// let str = 'Я-учу-javascript!';
// let newStr = str.replace(/-/g, '!');
// console.log(newStr);
// ==================================

// Работа с split
// Для решения задач данного блока вам понадобятся следующие методы: split.
//  Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// let str = 'Я учу javascript!';
// let arr = str.split(' ');
// console.log(arr);

//  Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// let str = 'Я учу javascript!';
// let arr = str.split('');
// console.log(arr);

//  В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

// let date = '2025-12-31';
// let arrDate = date.split('-').reverse().join('.');
// console.log(arrDate);
// второй способ
// let arrDate = date.split('-');
// console.log(`${arrDate[2]}.${arrDate[1]}.${arrDate[0]}`);
// =====================================

// Работа с join
// Для решения задач данного блока вам понадобятся следующие методы: join.
//  Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

// let arr = ['я', 'учу', 'javascript', '!'];
// let str = arr.join('+');
// console.log(str);

// Задачи
//  Преобразуйте первую букву строки в верхний регистр.

// console.log(str[0].toUpperCase() + str.slice(1));

//  Преобразуйте первую букву каждого слова строки в верхний регистр.

// let str = 'я люблю javascript!';
// let arrStr = str.split(' ');

// for (let i = 0; i < arrStr.length; i++) {
//   arrStr[i] = arrStr[i].slice(0, 1).toUpperCase() + arrStr[i].slice(1);
// }

// console.log(arrStr.join(' '));

//  Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

// let str = 'var_test_text';
// let newStr = str.split('_');

// for (let i = 1; i < newStr.length; i++) {
//   newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1);
// }

// console.log(newStr.join(''));

// function textConvert(text) {
//   let newStr = text.split('_');
//   for (let i = 1; i < newStr.length; i++) {
//     newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1);
//   }
//   return newStr.join('');
// }

// // console.log(textConvert('var_test_text'));
// // console.log(textConvert('mama_sasha_lover'));
