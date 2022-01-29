// Sync
// console.log("First");
// console.log("Second");
// console.log("Last");

// Async
// setTimeout
// setInterval
// clearTimeout
// clearInterval

// console.log("First");
// console.log("Second");

// setTimeout(function () {
//     console.log("from Timeout 500");
// }, 500);

// console.log("Last");

// setTimeout(function () {
//     console.log("from Timeout 2500");
// }, 2500);

// setInterval(function () {
//     console.log(new Date());
// }, 5000);
// ===============================
// let timer = setTimeout(function () {
//     console.log("From setTimeout 1500");
// }, 1500);

// let timer2 = setTimeout(function () {
//     console.log("From setTimeout 2500");
// }, 2500);

// let pizzaInterval = setTimeout(function () {
//     console.log("From setTimeout 500");
// }, 500);

// console.log(timer);
// console.log(timer2);
// console.log(pizzaInterval);
// console.log(timerInterval);

// To Stop
// let timerInterval = setInterval(function () {
//     console.log(new Date());
// }, 1000);

// clearInterval(timerInterval);

// ==================================

setTimeout(function () {
    console.log("from Timeout 0");
}, 0);

console.log("First");
console.log("Second");

setTimeout(function () {
    console.log("from Timeout 500");
}, 500);

console.log("Last");

setTimeout(function () {
    console.log("from Timeout 2500");
}, 2500);
