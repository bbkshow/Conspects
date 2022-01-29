// Iterator
// let friendsArr = ["Vova", "Sara", "Bob", "Mike"];

// function friendsIterator(arrFriernds) {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < arrFriernds.length
//                 ? { value: arrFriernds[nextIndex++], done: false }
//                 : { done: true };
//         },
//     };
// }

// let friends = friendsIterator(friendsArr);

// console.log(friends);
// console.log(friends.next().value);
// console.log(friends.next().value);
// console.log(friends.next().value);
// console.log(friends.next().value);
// console.log(friends.next());

// Generator
function* sayName(params) {
    yield [1, 2, 3, 4];
    yield 500;
    yield "Vova";
}

let names = sayName();

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
