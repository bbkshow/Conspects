//Global scope
// Область видимости

// var, let, const

// let a = 'a';
// const b = 'b';
// var c = 'c';

// console.log(a);
// console.log(b);
// console.log(c);

// Block level scope
{
  //   let a = 100;
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
}

// {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// if () {
//     // Block level scope
// }

// for () {
// // Block level scope
// }

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
//         // Block level scope
// }

// function getData() {
//     // Function scope
// }

// function getData () {

// }

//=========================
// Function scope

// Global scope
let x = 10;
let y = 20;

function getData(x, y) {
  //   let x = 1000;
  //   let y = 2000;

  console.log(x);
  console.log(y);
}

// getData();
// getData(100, 200);
