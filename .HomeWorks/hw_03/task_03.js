// // Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// // Вызовы функции для проверки работоспособности твоей реализации.

// НАЙТИ МАКСИМАЛЬНОЕ ЗНАЧЕНИЕ VALUE в значение
function findBestEmployee(employees) {
  let max = 0;
  let bestEmployee;

  for (let employee in employees) {
    // получили все keys, аналог of Object.keys(employees)
    let numOfTasks = employees[employee]; // получили все values
    if (numOfTasks > max) {
      // если 29 > 0
      max = numOfTasks; //  0 = 29
      bestEmployee = employee; // bestEmployee = 29
    }
  }

  return bestEmployee;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
