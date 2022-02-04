let friends = [
  { id: 1, name: 'Vova', age: 20, budget: 2400, isComplete: true },
  { id: 2, name: 'Sara', age: 25, budget: 3500, isComplete: false },
  { id: 3, name: 'Mike', age: 30, budget: 300, isComplete: true },
  { id: 4, name: 'Bob', age: 18, budget: 200, isComplete: false },
];

let arrChaining = friends
  .filter((friend) => {
    return friend.budget > 500;
  })
  .map((friend) => {
    return {
      info: `Name: ${friend.name} age: ${friend.age}`,
      budget: friend.budget,
    };
  })
  .reduce((total, friend) => {
    return total + friend.budget;
  }, 0);

console.table(arrChaining);

// split
// reverse
// join

// let str = 'abcdefg';
// let result = str.split('').reverse().join('');
// console.log(result);

// let str = 'hello world';
// function reverse(str) {
//   return str.split('').reduce((rev, char) => {
//     return char + rev;
//   }, '');
// }

// console.log(reverse(str));
