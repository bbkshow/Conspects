// // Array Массив - это коллекция переменных
// let arr = []; // новый синтаксис
// let arr2 = new Array("ghghg"); // старый синтаксис

// let userName = "Vova";
// let isAdmin = true;
// let num = 2345;
// let login = undefined;
// let user = { name: "Sara", age: 34 };

// let arr = [1, 2, 3, 4, 5];
// let arrUsers = ["Vova", "Sara", "Bob"];
// console.log(arr);
// console.log(arrUsers);

// let arrData = [20, "Vova", userName, isAdmin, login, user, true, undefined];
// console.log(arrData);

// arrData[0];
// arrData[1];
// arrData[2];
// arrData[3];
// arrData[4];

// console.log(arrData[0]);
// console.log(arrData[5]);

// let fruits = ["apple", "banana", "potato", "melon"];

// console.log(fruits[1]);
// console.log(fruits[3]);

// let users = ["Vova", "Sara", "Mike"];
// console.log(users[2]);
// console.log(users[0]);

// Check isArray - проверка на массив
// console.log(typeof users);
// console.log(Array.isArray(users));

// console.log(users.constructor);

//===========================
// Length - длина массива, проверяет пустой массив или нет

// let users = ["Vova", "Sara", "Mike", "Sveta"];
// let users = [];
// console.log(users.length);

// if (users.length) {
//   console.log(users);
// }

//============================
// Find last index - берет последний индекс
// let users = ["Vova", "Sara", "Mike", "Sveta"];
// console.log(users[1]);
// console.log(users[3]);
// console.log(users[users.length]);
// console.log(users[users.length - 1]);

//===============================
// Find in array - найти индекс массива

// let users = ["Vova", "Sara", "Mike", "Sveta", "Bob"];

// let res = users.indexOf("Mike");
// let res = users.indexOf("Vova");
// let res = users.indexOf("Bob");
// console.log(res);

// if (users.indexOf("Bob") !== -1) {
//   console.log(users);
// }

// Includes to find in arr
// console.log(users.includes("Mike")); // true

//====================================
// Менять массив
// let users = ["Vova", "Sara", "Mike", "Sveta", "Bob"];

// [].push(); - добавляет в конец массива
// [].pop() - убирает последний
// [].shift() - убирает первый
// [].unshift() - добавляет в начало

// users.push("hello");
// users.unshift("pizza");
// console.log(users);

//=============================
// Splice - удаляет индексы с начала массива, меняет исходный массив

// let numbers = [10, 20, 30, 40, 50];
// let result = numbers.splice(); // возвращает пустой массив
// result = numbers.splice(1); // [20, 30, 40, 50]
// result = numbers.splice(2); // [30, 40, 50]
// result = numbers.splice(0); // [10, 20, 30, 40, 50]
// result = numbers.splice(1, 1); // [20]
// result = numbers.splice(1, 2); // [30, 40]
// let result = numbers.splice(1, 1); // [40, 50]
// console.log(result);
// console.log(numbers);

// console.log(result.length);

// delete numbers[1];
// console.log(numbers);

//=========================
// Slice - срезает и не меняет исходный массив

// let numbers = [10, 20, 30, 40, 50];
// let result = numbers.slice(); // [10, 20, 30, 40, 50]
// let result = numbers.slice(0); // [10, 20, 30, 40, 50]
// let result = numbers.slice(1); // [20, 30, 40, 50]
// let result = numbers.slice(0, 2);

// console.log("result", result);
// console.log("numbers", numbers);

//============================
// Слияние массивов
// let numbers = [10, 20, 30, 40, 50];
// let users = ["Vova", "Sara", "Mike", "Sveta", "Bob"];
// let resultArr = numbers.concat(users);

// Spred operator - тоже слияние массивов
// let resultArr = [...users, ...numbers];
// console.log(resultArr);

//============================
// Array to string / String to array

// split() - делит строку на слова через делиметр
// reverce() - разворачивает массив
// join() - соединяет

// let msg = "hello from javascript";
// let resArr = msg.split(" "); // string to array (в скобках ДЕЛИМЕТР)
// console.log(typeof msg);
// console.log(Array.isArray(resArr));
// console.log(resArr.length);
// console.log(resArr);

// let reversedArr = resArr.reverse();
// console.log(reversedArr);
// let reversedString = reversedArr.join(" ");

// console.log(typeof reversedString);
// console.log(reversedString);

//==============================
// Converts to array - преобразовать в массив

// let arr = Array.from("hello world");
// let arr = Array.from('345');
// Spred operator

// console.log(arr);
