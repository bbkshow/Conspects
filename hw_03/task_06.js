// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

function calculateTotalPrice(arr, productName) {
  let total = 0; // объявляем переменную куда будет считать

  for (let item of arr) {
    // получаем отдельные объекты из массива
    let name = item.name; // заносим объекты в переменную name

    if (productName === name) {
      // если значение name совпадает с name
      total += item.price * item.quantity; // перемоножить и сложить
    }
  }

  return total;
}
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
