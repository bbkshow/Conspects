// 2020
// 2021 - not

// Вычислить какой год високосный

// function leapYear(year) {
//     if (year % 4 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// Другой способ через тернарный оператор
// function leapYear(year) {
//   return year % 4 === 0 ? true : false;
// }

// console.log(leapYear(2020));
// console.log(leapYear(2021));
// console.log(leapYear(2022));

// Найти в массиве
// let emails = ['vova@i.ua', 'sara@mail.ru', 'bob@yahoo.com'];

// function checkEmail(emailsArray, email) {
//   if (emailsArray.includes(email)) {
//     return 'Нашли';
//   } else {
//     return 'Не нашли';
//   }
// }

// let result = checkEmail(emails, 'sara@mail.ru');
// console.log(result);

//============================
//Найти в массиве, если нет, то добавить
// let emails = ['vova@i.ua', 'sara@mail.ru', 'bob@yahoo.com'];

// function checkEmail(emailsArray, email) {
//   if (emailsArray.includes(email)) {
//     console.log('Нашли');
//     return emailsArray;
//   } else {
//     emailsArray.push(email);
//   }
//   return emailsArray;
// }

// let result = checkEmail(emails, 'sara@mail.ru');
// let result = checkEmail(emails, 'mike@mail.ru');
// console.log(result);

//================

// let input = prompt('Enter Number');
// let total = 0;

// for (let i = 0; input !== null; i += 1) {
//     if (isNaN(input)) {
//       alert('Введено не число');
//       input = prompt('Enter Number');
//     } else {
//       total += Number(input);
//       input = prompt('Enter Number');
//     }
//   }

//   alert(`Общая сумма равна, ${total}`);

// Улучшение верхнего кода через функцию

/*
function userHandle() {
  let total = 0;
  let input = getUserInput();
  for (let i = 0; input !== null; i += 1) {
    if (isNaN(input)) {
      getMsg('Введено не число');
      input = getUserInput();
    } else {
      total += Number(input);
      input = getUserInput();
    }
  }

  getMsg(`Общая сумма равна, ${total}`);
}

userHandle();

function getUserInput() {
  return prompt('Enter Number');
}

function getMsg(msg) {
  return alert(msg);
}
*/
