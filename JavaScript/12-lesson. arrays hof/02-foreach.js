/*
forEach()
map()
filter()
find()
every()
some()
sort()


reduce()
*/

// function callback(elem, index, arr) {}
// [].method(callback)
// [].method(function (elem, index, arr) { });
// [].method((elem, index, arr) => { });

// let friends = ['vova', 'sara', 'mike', 'bob'];

// friends.forEach((elem, index, arr) => {
//     // console.log(elem);
//     // console.log(index);
//     // console.log(arr);
// });

// friends.forEach((pizza, kiwi, kebab) => {
//     // console.log(pizza);
//     // console.log(kiwi);
//     // console.log(kebab);
// });

// function showFiends(elem, index, arr) {
//     console.log(elem);
// }

// friends.forEach(showFiends);

// Foreach ничего не возвращает!!!!!!!!!!!!!!!!!!!!!!!!
let friends = ['vova', 'sara', 'mike', 'bob'];

let friensArr = friends.forEach((friend) => {
  // console.log(friend.toUpperCase());
  return friend;
});

console.log(friensArr);
