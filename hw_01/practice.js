// let highFives = 0;
// ++highFives;
// console.log(highFives);

// let score = 10;
// score += 1;
// console.log(score);

//====================================
// length , toUpperCase(), toLowerCase()
// let java = 'Java is impossible';
// console.log(java, java.length);

// let word = 'эЙ, кАК деЛа?';
// let word2 = word.slice(0, 1);
// let word3 = word.slice(1, 13);
// console.log(word2.toUpperCase() + word3.toLowerCase());

// let word = 'эЙ, кАК деЛа?';
// console.log(word.slice(0, 1).toUpperCase() + word.slice(1).toLocaleLowerCase());

// let word = 'эЙ, кАК деЛа?';
// console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());\

// =====================================
// Операторы для Boolean &&(и), ||(или) и !(нет)
// Амперсанд и &&, дает true только если оба значения true
// let headShouder = true;
// let breakfast = false;
// console.log(headShouder && breakfast);

// ||(или) должно как минимум одно значение быть true
// let headShouder = true;
// let breakfast = false;
// console.log(headShouder || breakfast);

// ! значение не, превращает одно в противоположное
// let headShouder = true;
// let breakfast = !headShouder;
// console.log(breakfast);

// Совмещение операторов
// let isWeekend = false;
// let hadShower = true;
// let hasApple = false;
// let hasOrange = true;
// let shouldGoToScholl = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log(shouldGoToScholl);

// let height = 155;
// let heightRestriction = 150;
// console.log(height > heightRestriction);

// let height = 150;
// let heightRestriction = 150;
// console.log(height >= heightRestriction);

// let mySecretNumber = 5;
// let vovaGuess = 7;
// let saraGuess = 5;
// console.log(mySecretNumber === saraGuess);

// let mySecretNumber = 5;
// let saraGuess = '5';
// console.log(mySecretNumber == saraGuess);

// let age = 11;
// let accompanied = true;
// let enterAge = 12;
// console.log(age >= enterAge || accompanied); // сложная задача

// =========================================
// Массивы
// let dino = ['Veloceraptor', 'Bronho', 'Speleo', 'Fly'];
// dino[2] = 'Sara';
// dino[4] = 'Cat';
// console.log(dino);

// как получить последний элемент массива
// console.log(dino[dino.length - 1]);

// добавление в концу массива .push()
// dino.push('Dog', 'Fish');

// добавление к началу массива .unshift()
// dino.unshift('Bird', 'Lion');
// console.log(dino);

// удаление последнего элемента массива .pop()
// let lastAnimal = dino.pop();
// console.log(lastAnimal);
// console.log(dino);

// удаление первого элемента .shift()
// let firstAnimal = dino.shift();
// console.log(firstAnimal);
// console.log(dino);

// склеивание массивов .concat()
// let dino = ['Veloceraptor', 'Bronho', 'Speleo', 'Fly'];
// let animals = ['Bee', 'Dog', 'Cat', 'Fish'];
// let all = dino.concat(animals); // можно добавлять больше массивов, просто записав их в скобках через запятую
// console.log(all);
// console.log(all[all.length - 1]); // получить последний элемент склеенного массива

// получение индекса элемента в массиве .indexOf()
// let colors = ['green', 'yellow', 'blue', 'white', 'black', 'yellow'];
// console.log(colors.indexOf('black'));
// console.log(colors[2]);
// console.log(colors.indexOf('red')); // нет такого, вернет -1
// console.log(colors.indexOf('yellow')); // если 2 таких же элемента в массиве, вернет ближайший

// превращение массива в строку .join()
// let colors = ['green', 'yellow', 'blue', 'white', 'black', 'yellow'];
// console.log(colors.join(' ')); // пробел в скобках разделяет слова массива

// let marks = [];
// marks.push('Будка');
// marks.push('Фонарь');
// marks.push('Аптека');
// marks.push('Мангал');
// marks.push('Туалет');
// marks.pop();
// marks.pop();
// marks.pop();
// marks.pop();
// console.log(marks);

// случайный выбор Math.random()
// let destiny = Math.floor(Math.random() * 99);
// console.log(destiny);
// случайный выбор цвета
// let colors = ['green', 'yellow', 'blue', 'white', 'black', 'yellow'];
// let randomColor = Math.floor(Math.random() * 6);
// console.log(colors[randomColor]);
// console.log(colors[Math.floor(Math.random() * 6)]); // короткий способ без добавления переменной

// Шар судьбы с ответами на вопрос
// let phrases = [
//   'Звучит неплохо',
//   'Успокойся, мать',
//   'Отличное решение',
//   'Думай головой прежде чем такое говорить',
//   'Может не сегодня',
//   'Компьютер говорит НЕТ',
//   ' ',
//   'Татьяна, вырубай прибор',
// ];
// console.log(phrases[Math.floor(Math.random() * 8)]);

// Генератор случайных дразнилок
// let arrFaces = ['нос', 'рот', 'глаза', 'уши'];
// let arrCharacters = ['вонючая', 'дерзкая', 'мерзкая', 'грязная'];
// let arrAnimals = ['змея', 'выдра', 'мартышка', 'собака'];
// let randomFace = arrFaces[Math.floor(Math.random() * 4)];
// let randomCharacter = arrCharacters[Math.floor(Math.random() * 4)];
// let randomAnimal = arrAnimals[Math.floor(Math.random() * arrAnimals.length)]; // лучше брать длину строки с .lenght и тогда она изменится автоматом при добавлении в массив
// // let result =
// //   'У тебя' +
// //   ' ' +
// //   randomFace +
// //   ' ' +
// //   'словно' +
// //   ' ' +
// //   randomCharacter +
// //   ' ' +
// //   randomAnimal +
// //   '!!!';
// let result = [
//   'У тебя',
//   randomFace,
//   'словно',
//   randomCharacter,
//   randomAnimal + '!!!',
// ].join(' '); // короткий способ этой же записи
// console.log(result);

// Как с помощью оператора join превратить массив [3, 2, 1] во фразу "3 больше, чем 2 больше, чем 1"
// let arr = [3, 2, 1];
// let arr2 = 'больше, чем';
// // let result = arr[0] + ' ' + arr2 + ' ' + arr[1] + ' ' + arr2 + ' ' + arr[2];
// let result = [arr[0], arr2, arr[1], arr2, arr[2]].join(' ');
// console.log(result);

// =================================================
// Объекты
// let cat = {
//   legs: 3,
//   name: 'Harmony',
//   color: 'black',
// };
// console.log(cat['legs']); // доступ по ключу в кавычках
// console.log(cat.legs); // доступ по ключу без кавычек

// какие ключи есть у объекта Object.keys()
// console.log(Object.keys(cat));

// добавление к объекту или в пустой объект
// let cat = {};
// cat['name'] = 'Tom'; // способ 1
// cat.name = 'Tom'; // способ 2
// console.log(cat);

// массив объектов или объект массивов
// let dinisaurs = [
//   { name: 'Dino', period: 'Melovoi' },
//   { name: 'Finki', period: 'Mezo' },
//   { name: 'Fishi', period: 'Stone' },
// ];
// console.log(dinisaurs);
// console.log(dinisaurs[0]['period']); // взять значение в конкретном объекте
// console.log(dinisaurs[1].period); // второй способ, точечная нотация, ДЛЯ МАССИВОВ НЕ ПОДХОДИТ!

// let anna = { name: 'Anna', age: 17, luckyNumbers: [1, 3, 15, 19] };
// let dave = { name: 'Dave', age: 9, luckyNumbers: [2, 4, 67, 89] };
// let cate = { name: 'Cate', age: 5, luckyNumbers: [5, 6, 78, 90] };
// let friends = [anna, dave, cate];
// console.log(friends[0].name); // получение значения из объекта
// console.log(friends[1].luckyNumbers[0]); // получение значения из массива в объекте
// console.log(friends[1]);

// let owedMoney = {};
// owedMoney['Jimmy'] = 5;
// owedMoney['Anna'] = 7;
// owedMoney['Jimmy'] += 3;
// console.log(owedMoney);

// let movies = {
//   'Finding Nemo': {
//     releaseDate: 2001,
//     duration: 100,
//     actors: ['Mikkie Roork', 'Leonardo Dicaprio', 'Sandra Bullock'],
//     format: 'DVD',
//   },
//   'Star Wars': {
//     releaseDate: 1987,
//     duration: 200,
//     actors: ['Luc', 'Mech', 'Master Yoda'],
//     format: 'DVD',
//   },
//   'Harry Potter': {
//     releaseDate: 2004,
//     duration: 150,
//     actors: ['Daniel Redclif', 'Genmiona', 'Ron'],
//     format: 'Blue-ray',
//   },
// };
// let findingNemo = movies['Finding Nemo'];
// console.log(findingNemo);

// // добавление массива к массиву
// let cars = {
//   releaseDate: 2009,
//   duration: 120,
//   actors: ['Mikkie Roork', 'Leonardo Dicaprio', 'Sandra Bullock'],
//   format: 'DVD',
// };
// movies['Cars'] = cars;
// console.log(movies);
// console.log(Object.keys(movies)); // посмотреть названия всех объектов

// let scores = {};
// scores.jimmy = 5;
// scores.sara = 0;
// scores.sara += 4;
// scores.jimmy += 8;
// console.log(scores);

// достать строку 123
// let myCrazyObject = {
//   name: 'Crazy object',
//   someArr: [7, 9, { purpose: 'putanica', number: 123 }, 3.3],
//   randomAnimal: 'Banana shark',
// };
// console.log(myCrazyObject.someArr[2].number);

// =====================================================
// Условия if или if ... else
// let name = 'Nick';
// console.log('Hello, ' + name);
// if (name.length > 3) {
//   console.log('What a long name do you have!');
// } //после if в круглых скобках условие которое возвращает true или false

// let name = 'Nick';
// console.log('Hello, ' + name);
// if (name.length > 3) {
//   console.log('What a long name do you have!');
// } else {
//   console.log('You have a short name');
// }

// let lemonChicken = false;
// let beefWithBlackBean = true;
// let sweetAndSourPork = true;

// if (lemonChicken) {
//   console.log('Good! I want it!');
// } else if (beefWithBlackBean) {
//   console.log('Give me bean');
// } else if (sweetAndSourPork) {
//   console.log('Ok, pork');
// } else {
//   console.log('Ok, chiken');
// }

// if (lemonChicken) {
//   console.log('Good! I want it!');
// } else if (beefWithBlackBean) {
//   console.log('Give me bean');
// } else if (sweetAndSourPork) {
//   console.log('Ok, pork');
// } // можно не ставить последний else, тогда если все false, в консоли ничего не будет

// let name = 'Vova';
// let myName = 'Sasha';
// if (name === myName) {
//   console.log('Hello, Sasha!');
// } else {
//   console.log('Hello, another name');
// }

// let name = 'Vova';
// let myName = 'Sasha';
// let fathersName = 'Vova';
// let mothersName = 'Polina';
// if (name === myName) {
//   console.log('Hello, Sasha!');
// } else if (name === fathersName) {
//   console.log('Hello, father!');
// } else if (name === mothersName) {
//   console.log('Hello, mother!');
// } else {
//   console.log('Hello, another name');
// }

//================================
// Цикл while
// let sheepCounted = 0;
// while (sheepCounted < 10) {
//   console.log('Result: ' + sheepCounted + '!');
//   sheepCounted++; // добавляет единицу, иначе цикл будет бесконечным
// }
// console.log('Sleeeep');

// цикл for
// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//   console.log('Result: ' + sheepCounted + '!');
// }
// console.log('Sleeeep');

// let timesToSayHello = 3;
// for (let i = 0; i < timesToSayHello; i++) {
//   console.log('Hello');
// }

// for массивы и строки

// перебор массива циклом for
// let animals = ['lion', 'flamingo', 'white bear', 'phyton'];
// for (let i = 0; i < animals.length; i++) {
//   console.log('In this zoo are ' + animals[i] + '.');
// }

// перебор строки циклом for
// let name = 'Nick';
// for (let i = 0; i < name.length; i++) {
//   console.log('In my name is letter ' + name[i] + '.');
// }

// for (let x = 2; x < 10000; x = x * 2) {
//   console.log(x); // все степени двойки до 10 тыс
// }

// for (let x = 3; x < 10000; x = x * 3) {
//   console.log(x); // все степени тройки до 10 тыс
// }

// то же самое через цикл while
// let x = 3;
// while (x < 10000) {
//   console.log(x);
//   x = x * 3;
// }

// // #1 Напишите цикл for который изменяет массив животных, делая их прекрасными
// let animals = ['Cat', 'Fish', 'Lemur', 'Varan'];
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i] + ' - awesome animal!');
// }

// #2 Напишите генератор случайных строк
// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let randomString = '';
// while (randomString.length < 6) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);

// #хакерский язык
// let input = 'javascript is awesome';
// let output = '';
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === 'a') {
//     output += 4;
//   } else if (input[i] === 'e') {
//     output += 3;
//   } else if (input[i] === 'i') {
//     output += 1;
//   } else if (input[i] === 'o') {
//     output += 0;
//   } else output += input[i];
// }
// console.log(output);

// Пишем игру Виселица
// prompt Ok и ввод возвращает введенные данные, отмена возвращает null
// let name = prompt('Как вас зовут?');
// console.log('Привет, ' + name);

// confirm Да возвращает true, нет возвращает false
// let likesCats = confirm('Тебе нравятся кошки?');
// if (likesCats) {
//   console.log('Ты классная кошка!');
// } else {
//   console.log('Что ж, не проблема. Все равно ты молодец');
// }

// alert просто выводит сообщение
// alert('JavaScript is cool!');

// Игра Виселица
// let words = [
//   'программа',
//   'макака',
//   'прекрасный',
//   'оладушек',
//   'ежевика',
//   'машина',
//   'уроки',
//   'гладиолус',
//   'труба',
//   'жернова',
//   'тюльпан',
// ];
// let word = words[Math.floor(Math.random() * words.length)];

// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = '_';
// }
// let remainangLetters = word.length;

// while (remainangLetters > 0) {
//   alert(answerArray.join(' '));

//   let guess = prompt(
//     'Угадайте букву или нажмите Отмена для выхода'
//   ).toLowerCase();

//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert('Пожалуйста, введите только одну букву.');
//   } else {
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainangLetters--;
//       }
//     }
//   }
// }

// alert(answerArray.join(' '));
// alert('Отлично, было загадано слово ' + word);

// ===============================================
// Функции
// let ourFirstFunction = function () {
//   console.log('Hello, world!');
// };
// ourFirstFunction(); // вызов функции

// let sayHello = function (name) {
//   console.log('Hello, ' + name + '!');
// };
// sayHello('Sara'); // передаем аргумент функции
// sayHello('Anna');

// запись в функцию цикла for
// let drawCats = function (howManyTimes) {
//   for (let i = 0; i < howManyTimes; i++) {
//     console.log(i + ' =>.<= ');
//   }
// };
// drawCats(100);

// передача в функцию нескольких аргументов
let printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + ' ' + whatToDraw);
  }
};
printMultipleTimes(5, ' =>.<= ');
