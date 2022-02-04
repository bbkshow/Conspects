// Получить массив имен всех пользователей (поле name).

import users from './users.js';
// console.log(users);

let getUserNames = users.map((user) => {
  return user.name;
});

// let getUserNames = users.map(({ name }) => name);

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
