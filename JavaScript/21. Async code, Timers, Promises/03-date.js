// let date = new Date();
// console.log(date);

// TimeStamp
// let ts = Date.now();
// console.log(ts);

// 1 jan 00.00 1970

// let date = new Date("March 15, 2021");
// let date = new Date(2021, 07, 07);
// let date = new Date(0025675005720);

// 0,1,2...11
// 0,1,2....6
// console.log(date);

let today = new Date();
console.log(today);

let year = today.getFullYear();
console.log(year);

let montn = today.getMonth() + 1;
console.log(montn);

let day = today.getDay() + 1;
console.log(day);

let hours = today.getHours();
console.log(hours);

let minutes = today.getMinutes();
console.log(minutes);

let sec = today.getSeconds();
console.log(sec);

setInterval(() => {
    console.log(new Date());
}, 1000);
