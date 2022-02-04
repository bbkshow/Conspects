// Прототипы
// Object.create

// let arr1 = [1, 3, 4, 5, 6];
// let arr2 = ['vova', 'sara', 'bob'];
// let arr3 = [false, true];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// __proto__

// let str = new String('Vova');
// console.log(str);

// let objA = {
//     a: 1,
//     b: 2
// };

// console.log(objA);

// Этот обьект будет прототипом для objA
let objB = {
  x: 10,
  y: 20,
  z: 300,
  sayHello() {},
};

// console.log(objB);;

let objA = Object.create(objB); // СОЗДАЕТ ПРОТОТИП <================
objA.a = 1; // ДОБАВЛЯЕТ СВОЙСТВО КЛЮЧ-ЗНАЧЕНИЕ В ОБЪЕКТ <================
objA.b = 2;
objA.pizza = 'Pizza';
// objA.z = 1000;

console.log(objA);
// console.log(objA.z);
// console.log(objA.x);
// console.log(objA.toString());
// console.log(objA.constructor);

/*
__proto__
    __proto__
        __proto__
            __proto__
                __proto__
                */

// hasOwnProperty ====================
let own = objA.hasOwnProperty('pizza'); // ПРОВЕРЯЕТ ЕСТЬ ЛИ СВОЙСТВО НА САМОМ ОБЪЕКТЕ, А НЕ В ПРОТО <================
own = objA.hasOwnProperty('x');
console.log(own);
