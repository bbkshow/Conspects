// Imprative
let fruits = ['apples', 'pears', 'bananes'];
let fruitsUpdate = [];

for (let i = 0; i < fruits.length; i++) {
  fruitsUpdate.push(fruits[i]);
}

console.log(fruitsUpdate);
console.log(fruits);
console.log(fruits === fruitsUpdate);

// let fruits = ['apples', 'pears', 'bananes'];

// function createFruirsArr() {
//     let fruitsUpdate = [];

//     for (let i = 0; i < fruits.length; i++) {
//         fruitsUpdate.push(fruits[i]);
//     }

//     console.log(fruitsUpdate);
//     console.log(fruits);
//     console.log(fruits === fruitsUpdate);

//     return fruitsUpdate;
// }

// createFruirsArr(fruits);

// Declarative
// let nums = [100, 200, 300, 400, 500];

// let filtered = nums.filter((num) => {
//     return num > 200;
// });

// console.log(filtered);
