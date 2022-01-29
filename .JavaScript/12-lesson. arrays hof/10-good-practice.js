let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false },
];

// let friendsNames = friends.map((friend) => {
//   return friend.name;
// });

// let friendsNames = friends.map((friend) => friend.name);

// let friendsNames = friends.map(({ name }) => name);

// let friendsNames = friends.map((friend) => ({
//   name: friend.name,
//   age: friend.age
// }));

// let friendsNames = friends.map(({ name, age }) => ({
//   name,
//   age
// }));

// let friendsNames = friends.filter(({ budget }) => budget > 500);

let friendsNames = friends.filter(
  ({ budget, isComplete }) => budget > 500 && isComplete
);

console.log(friendsNames);
