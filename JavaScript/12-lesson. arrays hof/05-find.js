// Если не находит возвращает undefind
// Если находит возвращает первое найденное

let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false },
  { id: 5, name: 'Sara', age: 35, budget: 17000, isComplete: false },
];

// let fundUser = 'Sara';

// let findUser = friends.find((friend) => {
//   return friend.name === fundUser;
// });

// console.log(findUser);

function findUser(friendsArr, fundUser) {
  return friendsArr.find((friend) => {
    return friend.name === fundUser;
  });
}

let fundUser = 'Lenny';
let user = findUser(friends, fundUser);

// console.log(user);

// if (user) {
//   console.log('Hашли');
// } else {
//   console.log('Не нашли');
// }
