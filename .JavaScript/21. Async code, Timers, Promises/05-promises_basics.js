// Promises - они следят за состоянием асинхронной операции

// setTimeout(() => {
//     console.log("THE PROBLEME!!!");
// }, 1500);

// resolve - function
// reject - function

// catch: ƒ catch()
// constructor: ƒ Promise()
// finally: ƒ finally()
// then: ƒ then()

// Успех
// "pending" - ждет
// "fulfilled" - дождался

// Ошибка в промисе
// "rejected"

// let promise = new Promise((resolve, reject) => {
// resolve("Vova");
// resolve(5);
// resolve({ user: "Sara", age: 58 });
// resolve([1, 2, 3, 4]);

// reject("Server error");
// });
// console.log(promise);

//================================
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(["vova", "sara", "bob", "mike"]);
//     }, 2000);
// });

// console.log(promise);
// console.log(
//     promise.then((users) => {
//         console.log(users);
//     })
// );

// promise.then((data) => {
//     console.log(data);
// });

// promise.then((data) => console.log(data));
//=========================================================

// let promise = new Promise((resolve, reject) => {
//     let success = Math.random() > 0.3;
//     // console.log(success);

//     setTimeout(() => {
//         if (success) {
//             resolve({ user: "Sara", age: 17 });
//         } else {
//             reject("Some server error...");
//         }
//     }, 1500);
// });

// promise.then((data) => console.log(data)).catch((err) => console.log(err));
//==========================================

// let sara = "100";

// let promise = new Promise((resolve, reject) => {
//     let success = Math.random() > 0.3;
//     if (success) {
//         resolve({ user: "Sara", age: 17 });
//     } else {
//         reject("Some server error...");
//     }
// });

// promise
//     .then((user) => {
//         console.log("from then", user);
//         sara = user;
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// console.log(sara);

// Chaining
// promise
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .then()
//     .catch()

let promise = new Promise((resolve, reject) => {
    // resolve(5);
    reject("Error!!!");
});
console.log(promise);

promise
    .then((value) => {
        console.log(value);
        return value * 2;
    })
    .then((number) => {
        console.log(number);
        return number * 3;
    })
    .then((num) => {
        console.log(num);
    })
    .catch((err) => {
        console.log(err);
    });

// promise
// .then()
// .then()
// .then()
// .catch()
// finally()
