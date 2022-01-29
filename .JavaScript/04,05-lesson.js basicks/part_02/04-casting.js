// let postText =
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ea possimus, ipsum natus cumque optio recusandae explicabo facilis beatae? spamder Accusamus quisquam consectetur cum molestiae excepturi consequuntur minima id ullam quae!";

// let spamWord = "spam";

// if (postText.includes(spamWord)) {
//   console.log("Need to moderate");
// } else {
//   console.log("Good to go");
// }

// Type hinting - динамическое приведение типов

// ================================================
// Casting - сами приводим типы

// Приоритетность
// 1. String
// 2. Number
// 3. Boolean

// ====================================
// To String Преобразование к строке
// let num = 100;
// let isAdmin = true;
// let arr = ["apple", "pear"];

// console.log(typeof num);
// console.log(typeof isAdmin);
// console.log(typeof arr);

// let result = String(num);
// result = String(isAdmin);
// result = String(arr);
// console.log(typeof result);

// console.log(num, typeof num.toString());
// console.log(isAdmin, typeof isAdmin.toString());
// console.log(arr, typeof arr.toString());

//===============================
// To Number Преобразование к числу
// Number();
// parseInt;
// parseFloat;

// let str = "345";
// console.log(str, typeof str);

// let result = Number(str);
// console.log(result, typeof result);

// let str = "uioihj";
// console.log(str, typeof str);

// let result = Number(str);
// console.log(result, typeof result);

// let isAdmin = "2323";
// isAdmin = true
// isAdmin = null
// isAdmin = undefined
// let arr = ["apple", "pear"];

// let result = Number(isAdmin);
// console.log(result, typeof result);

// console.log(typeof (10 / 5));
// console.log(typeof ("10" / 5));
// console.log("1riririr0" / 5);
// console.log("120px" / "5");

//===============================
// parseFloat оставляет десятичный остаток числа
// parseInt отсекает десятичный остаток числа

// let val = "400.55";
// console.log(val, typeof val);

// // let result = parseInt(val);
// // console.log(result, typeof result);

// let result = parseFloat(val);
// console.log(result, typeof result);

///=======================================

// isNan Проверка на НаН

// let val = "fghfhfh" + 5;

// let result = isNaN(val);
// console.log(result);

//=======================
// isFinite Проверка на бесконечность

// let val = 10 / 3;

// let result = isFinite(val);
// console.log(result);

//=================================
// to Boolean

// 0
// Nan
// null
// undefined
// '' empty string
// false

// let num = 1;
// let result = Boolean(num);
// console.log(result, typeof result);

// let str = "ptptp";
// let result = Boolean(str);
// console.log(result, typeof result);

// ! // Logical NOT Логическая инверсия, нет
// console.log(!"Hello!"); // string
// console.log(!!"Hello!"); // Boolean false
// console.log(!!!"Hello!"); // Boolean true

// if (" ") {
//   console.log("Hello!");
// }
