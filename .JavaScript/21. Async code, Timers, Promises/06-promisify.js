// Promisify

// let fetchUser = (userName) => {
//     let success = Math.random() > 0.3;
//     let user = { user: userName, age: 17 };
//     let err = "Server error....";

//     return success ? user : err;
// };
// console.log(fetchUser("Bob"));
//==================================================

//  Call back Api = HELL
// let fetchUser = (userName, onSucces, onError) => {
//     setTimeout(() => {
//         let success = Math.random() > 0.3;

//         if (success) {
//             let user = { user: userName, age: 17 };
//             onSucces(user);
//         } else {
//             let err = "Server error....";
//             onError(err);
//         }
//     }, 1000);
// };

// function onSucces(user) {
//     console.log(user);
// }

// function onError(err) {
//     console.log(err);
// }

// fetchUser("Sveta", onSucces, onError);

// =======================================

// Promisify
// let fetchUser = (userName) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = Math.random() > 0.3;

//             if (success) {
//                 let user = { user: userName, age: 17 };
//                 resolve(user);
//             } else {
//                 let err = "Server error....";
//                 reject(err);
//             }
//         }, 1000);
//     });
// };

// fetchUser("Sara")
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// setTimeout(() => {
//     console.log(2000);
// }, 2000);

let makeDelay = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
};

makeDelay(2000).then((time) => {
    console.log(time);
});

makeDelay(3000).then((time) => {
    console.log(time);
});

makeDelay(500).then((time) => {
    console.log(time);
});
