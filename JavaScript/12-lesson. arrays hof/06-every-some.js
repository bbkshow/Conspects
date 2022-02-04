import friends from './friends.js';
console.table(friends);

// Every returns true если каждый
// let friendsBudget = friends.every((friend) => {
//   return friend.budget > 200;
// });

// console.log(friendsBudget);

// Some returns true хотябы одни
let friendsBudget = friends.some((friend) => {
  return friend.budget > 500;
});
console.log(friendsBudget);

// console.log(friends);
