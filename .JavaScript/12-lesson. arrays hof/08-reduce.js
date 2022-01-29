// Formula
// [].method((elem, index, arr)=>{});

// [].reduce(callback, accumulator);
// [].reduce((acc, elem, index, arr) => {

// }, acc);

// accumulator - String;
// accumulator - Number;
// accumulator - [];
// accumulator - {};
// accumulator - Boolean;

// let nums = [10, 20, 30, 40, 50]; // 150

// let total = nums.reduce((acc, elem, index, arr) => {
//     console.log('accmulator', acc);
//     console.log(elem);
//     // console.log(index);
//     // console.log(arr);
//     // return acc + elem;

// }, 0);

// let total = nums.reduce((acc, elem, index, arr) => {
//     return acc + elem;
// }, 0);

// console.log(total);

// import friends from './friends.js';
// console.table(friends);

// let totalBudget = friends.reduce((total, friend) => {
//     return total + friend.budget;
// }, 0);

// console.log(totalBudget);

let cart = [
  { id: 1, product: 'Apple', price: 1200, qty: 2 },
  { id: 2, product: 'Samsung', price: 800, qty: 1 },
  { id: 3, product: 'LG', price: 1000, qty: 3 },
];

// 1200 * 2 + 800 * 1 + 1000 * 3 = 6200

// let cartSum = cart.reduce((sum, cartItem) => {
//     return sum + cartItem.price * cartItem.qty;
// }, 0);

// console.log(cartSum);

// let cartProducts = cart.reduce((title, cartItem) => {
//     title.push(cartItem.product);
//     return title;
// }, []);

// console.log(cartProducts);
