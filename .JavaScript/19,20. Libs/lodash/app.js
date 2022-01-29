// console.log(_);

// console.log(_.isArray(5));
// console.log(_.isArray([0, 2]));

// Array.isArray()

// _.forEach([1, 2, 3, 4, 5], (elem) => {
//     console.log(elem);
// });

// _.each([1, 2, 3, 4, 5], function (elem) {
//     console.log(elem);
// });

// =============================
// let arr = [10, 1, 2, "apple", "pear", 1, 2, 3, 4, "apple", "banana"];

// console.log(arr);

// let filteredArr = _.uniq(arr);
// console.log(filteredArr);

// ======================
// map

// let arr = [10, 1, 2, "apple", "pear", 3, 4, "banana"];

// let newArr = _.map(arr, (el) => {
//     return el * 2;
// });

// console.log(newArr);

// let users = [
//     { id: 1, name: "Vova", likes: 5 },
//     { id: 2, name: "Sara", likes: 5500 },
//     { id: 3, name: "Bob", likes: 20 },
//     { id: 4, name: "Sveta", likes: 5600 },
//     { id: 5, name: "Mike", likes: 100000 },
//     { id: 6, name: "Anna", likes: 12000 },
// ];

// let names = _.map(users, (user) => {
//     return user.name;
// });

// let newArr = _.map(users, "name");
// let newArr = _.map(users, "id");

// console.log(newArr);

// ['Vova', 'Sara']

// let userFiltered = _.filter(users, (user) => {
//     return user.name === "Sara";
// });
// let userFiltered = _.filter(users, { name: "Bob" });

// let userFiltered = _.filter(users, { id: 4 });
// console.log(userFiltered);

// let findUser = _.filter(users, { id: 5 });
// console.log(findUser);

// let sorted = _.sortBy(users, "likes");
// let sorted = _.sortBy(users, "name");
// console.log(sorted);

// let grouped = _.groupBy(users, "likes");
// let grouped = _.groupBy(users, "name");
// console.log(grouped);

// let arr = [10, 1, 2, "apple", "pear", 1, 2, 3, 4, "apple", "banana"];
// console.log(arr.length);

// let chunkArr = _.chunk(arr, 3);
// console.log(chunkArr);

var array = [1, 2, 3, 4];
var evens = _.remove(array, function (n) {
    return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]

_.size({ a: 1, b: 2 });
// => 2
