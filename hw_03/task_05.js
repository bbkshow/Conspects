// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. Возвращает массив значений определенного поля prop из каждого объекта в массиве.

// Вызовы функции для проверки работоспособности твоей реализации.

function getAllPropValues(arr, prop) {
  let values = []; // создаем массив, в который пойдут значени
  for (let item of arr) {
    // перебираем массив
    let value = item[prop]; // получаем значения из всех объектов name

    if (value != undefined) {
      // если значения не undefined
      values.push(value); // пушим значения в массив
    }
  }
  return values; // возвращаем массив
}

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
