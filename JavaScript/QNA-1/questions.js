// function mult(num1, num2) {
//     console.log(num1 * num2);
// }

// // mult(5, 2); return не указал.Почему нет undefined ?;
// mult(5, 2);
// // window.console.log('dafSDfsdfg');
//==============================================


// // Почему  иногда выпадает undefined? (Если не ошибаюсь undefined = max)
// function range(min, max) {
//     let i;
//     i = Math.floor(Math.random() * max) + min - 1;
//     return i;

//     // if (i >= min && i <= max) {
//     //     return i;
//     // }
// }

// console.log(`${range(2, 5)}`);

// console.log(_.isArray([1, 2]));
// console.log(_.range(4, 10 - 1));

//====================================================

// Home Work №3. Задание 5. Не получается сделать.;
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];


// const getAllPropValues = function (arr, prop) {
//     // твой код
// };





/*
 * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []




let cars = [
    { id: 1, title: 'BMW', year: 1990 },
    { id: 2, title: 'Audi', year: 1995 },
    { id: 3, title: 'Opel', year: 1999 }
];


// let newCars = [];
// for (let car of cars) {
//     console.log(car);
//     newCars.push(car.title);
// }

// console.log(newCars);


function getCarSpecs(carsArr, carSpec) {
    let newCars = [];
    for (let car of carsArr) {
        // console.log(car[carSpec]);
        if (car[carSpec]) {
            newCars.push(car[carSpec]);
        }
    }
    // console.log(newCars);
    // console.log(newCars.length);
    // if (newCars.length === 0) {
    //     return [];
    // } else {
    //     return newCars;
    // }

    return newCars.length === 0 ? [] : newCars;
}

console.log(getCarSpecs(cars, 'title'));
console.log(getCarSpecs(cars, 'year'));
console.log(getCarSpecs(cars, 'pizza'));


// ['BMW', 'Audi', Audi]

// for (let pizza of cars) {
//     // console.log(pizza);
//     console.log(pizza.title);
// }

let vova = { name: 'Vova' };
// // console.log(vova.name);
// // console.log(vova['name']);

vova.age = 20;
vova['status'] = 'admin';
vova['salary'] = 15000;
vova['girlfriend'] = 'Sara';

console.log(vova);