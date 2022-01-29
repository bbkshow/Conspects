let horses = [
    "Mustang",
    "White",
    "Mango",
    "Dark spawn",
    "Eclipse",
    "Lilu",
    "England",
];

let getRandomTime = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
// console.log(getRandomTime(2, 5));

let run = (horse) => {
    return new Promise((resolve, reject) => {
        let time = getRandomTime(2000, 5000);

        setTimeout(() => {
            resolve({ horse, time });
        }, time);
    });
};

// run(horses[1]).then((horse) => console.log(horse));

// let promises = horses.map((horse) => {return run(horse)});
let promises = horses.map(run);
// let promises = horses.map((data) => {
//     console.log(data);
// });
// console.table(promises);

Promise.all(promises).then((horse) => console.table(horse));
Promise.race(promises).then((horse) => console.table(horse));

// ДЗ
// Реализовать игру Букмекер

// let horses2 = ["Mustang", "White", "Mango"];
// let koef = [1.37, 2.45, 3.16];

// {
//     Mustang: 1.37,
//     White:
//  }

//  horse[name] = koef
