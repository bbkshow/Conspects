import users from './users.js';
// console.log(users);

// HW 6
// Task 1
// let cars = [
//     { id: 1, name: 'BMW', year: 1990 },
//     { id: 2, name: 'Audi', year: 1995 },
//     { id: 3, name: 'Opel', year: 1999 }
// ];

// const getCars = cars => cars.map((car) => {
//     return car.name;
// });
// const getCars = cars => cars.map((car) => car.name);
// const getCars = cars => cars.map(({ name }) => name);

// console.log(getCars(cars));

// let car = { id: 1, name: 'BMW', year: 1990 };
// let { name, year } = car;
// console.log(name);
// console.log(year);
//===================================================
// Задание 3;
// Получить массив имен пользователей по полу(поле gender).;
// const getUsersWithGender = (users, gender) => {
//     // твой код
// };

// const getUsersWithGender = (users, gender) => {
//     let sex = users.filter((user) => {
//         return user.gender === gender;
//     });
//     sex.map((user) => {
//         return user.name;
//     });
//     return sex;
// };


// const getUsersWithGender = (users, gender) => {
//     // let sex = users.filter((user) => user.gender === gender);
//     // sex.map((user) => user.name);
//     // return sex;


//     // let sex = users
//     //     .filter((user) => user.gender === gender)
//     //     .map((user) => user.name);
//     // return sex;

//     return users
//         .filter((user) => user.gender === gender)
//         .map((user) => user.name);
// };


// const getUsersWithGender = (users, gender) =>
//     users.filter((user) => user.gender === gender).map((user) => user.name);


// const getUsersWithGender = (users, searchSex) =>
//     users.filter(({ gender }) => gender === searchSex).map(({ name }) => name);


// console.table(getUsersWithGender(users, 'male'));

// ====================================================================================
// Задание 8;
// Массив имен всех пользователей у которых есть друг с указанным именем.;
// const getUsersWithFriend = (users, friendName) => {
//     // твой код
// };


// const getUsersWithFriend = (users, friendName) => {
//     let friends = users.filter((user) => {
//         return user.friends.includes(friendName);
//     });
//     let names = friends.map((friend) => {
//         return friend.name;
//     });
//     return names;
// };

// const getUsersWithFriend = (users, friendName) => {
//     return users.reduce((acc, user) => {
//         if (user.friends.includes(friendName)) {
//             acc.push(user.name);
//         }
//         return acc;
//     }, []);
// };


// const getUsersWithFriend = (users, friendName) => {
//     return users.reduce((acc, user) => {
//         user.friends.includes(friendName) ? acc.push(user.name) : null;
//         return acc;
//     }, []);
// };

// console.table(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]



// const getUsersWithFriend = (users, friendName) =>
//     users
//         .filter((user) => user.friends.includes(friendName))
//         .reduce((acc, { name }) => [...acc, name], []);
// console.table(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]

// =======================================================================
// Задание 9;
// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends);
// const getNamesSortedByFriendsCount = users => {
//     // твой код
// };
// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const getNamesSortedByFriendsCount = users => {
//     return users.sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);
// };
// console.log(getNamesSortedByFriendsCount(users));

// let nums = [10, 100, 110, 111, 5, 50, 20, 2];
// // console.log(nums.sort((a, b) => {
// //     return a - b;
// // }));
// console.log(nums.sort((a, b) => {
//     return b - a;
// }));


// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// =============================================================
// Задание 10;
// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.;
// const getSortedUniqueSkills = users => {
//     // твой код
// };
// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
// * /



// const getSortedUniqueSkills = users => {
//     return users
//         .reduce((acc, { skills }) => acc.concat(skills), [])
//         .sort()
//         .filter((skill, index, skills) => index === skills.indexOf(skill));
// };


// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]




/*
Задание 1;
Получить массив имен всех пользователей(поле name).;
const getUserNames = users => {
    // твой код
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
Задание 2;
Получить массив объектов пользователей по цвету глаз(поле eyeColor).;
const getUsersWithEyeColor = (users, color) => {
    // твой код
};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
Задание 3;
Получить массив имен пользователей по полу(поле gender).;
const getUsersWithGender = (users, gender) => {
    // твой код
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
Задание 4;
Получить массив только неактивных пользователей(поле isActive).;
const getInactiveUsers = users => {
    // твой код
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
Задание 5;
Получить пользоваля(не массив) по email(поле email, он уникальный).;
const getUserWithEmail = (users, email) => {
    // твой код
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
Задание 6;
Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).;
const getUsersWithAge = (users, min, max) => {
    // твой код
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
Задание 7;
Получить общую сумму баланса(поле balance) всех пользователей.;
const calculateTotalBalance = users => {
    // твой код
};
console.log(calculateTotalBalance(users)); // 20916
Задание 8;
Массив имен всех пользователей у которых есть друг с указанным именем.;
const getUsersWithFriend = (users, friendName) => {
    // твой код
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
Задание 9;
Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends);
const getNamesSortedByFriendsCount = users => {
    // твой код
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
Задание 10;
Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.;
const getSortedUniqueSkills = users => {
    // твой код
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
*/