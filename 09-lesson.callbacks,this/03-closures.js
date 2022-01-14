//Замыкания

// Это когда функция имеет доступ к внешним переменным

// function calcFunction(n) {
//   return function () {
//     console.log(10 * n);
//   };
//   //   return 5;
// }

// let result = calcFunction(5)();
// console.log(result);
// // console.log(result());

//===============================
// function incrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// let addOne = incrementor(1)(3);
// console.log(addOne);
// // console.log(addOne(10));

// let addTen = incrementor(1)(10);
// console.log(addTen);
//==========================
// function domainGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// let netUrl = domainGenerator('net');
// console.log(netUrl('unian'));

// let comUrl = domainGenerator('com');
// console.log(comUrl('facebook'));

//==========================================
// function frameWorkGenerator() {
//   let framevorks = ['Vue', 'Angular'];

//   return {
//     showInfo() {
//       console.log(framevorks);
//     },

//     addFrameWork(newFramework) {
//       framevorks.push(newFramework);
//     },
//   };
// }

// let generator = frameWorkGenerator();
// // console.log(generator);
// generator.showInfo();
// generator.addFrameWork('React');
// generator.showInfo();
