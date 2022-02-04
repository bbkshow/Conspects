// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = (users) => {
//   // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

import users from './users.js';
// ==========================
// const getSortedUniqueSkills = (users) => {
//   let skillsNotUnique = users.reduce(
//     (acc, { skills }) => [...acc, ...skills],
//     []
//   );

//   skillsNotUnique = skillsNotUnique.sort();

//   return [...new Set(skillsNotUnique)];
// };

// =======================================
const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc, { skills }) => acc.concat(skills), [])
    .sort()
    .filter((skill, index, skills) => index === skills.indexOf(skill));
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Повторить деструктуризация!
