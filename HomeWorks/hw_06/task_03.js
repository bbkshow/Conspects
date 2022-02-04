// Получить массив имен пользователей по полу (поле gender)

// const getUsersWithGender = (users, gender) => {
//   // твой код
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// ============================================
import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => {
      return user.gender === gender;
    })
    .map((user) => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
