// Если не находит возвращает пустой массив
// Если находит возвращает все совпадения

let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false },

  { id: 5, name: 'Sara', age: 35, budget: 17000, isComplete: false },
];

// budget > 300

// let filteredFriends = friends.filter((friend) => {
//   return friend.budget > 300;
// });

// let filteredFriends = friends.filter((friend) => {
//   return friend.isComplete;
// });

// let filteredFriends = friends.filter((friend) => {
//   return !friend.isComplete;
// });

// Сатанизм!
// let filteredFriends = friends.filter((friend) => {
//   return friend.isComplete === true;
// });

// let filteredFriends = friends.filter((friend) => {
//   return friend.isComplete !== true;
// });

// let filteredFriends = friends.filter((friend) => {
//   if (friend.isComplete === true)
// });

// let userToFind = 'Lenny';
let userToFind = 'Sara';
let filteredFriends = friends.filter((friend) => {
  return userToFind === friend.name;
});

// console.log(filteredFriends);
