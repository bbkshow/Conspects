// На флаги
//  Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

// function find(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//       return console.log('да');
//     }
//   }
//   return console.log('нет');
// }
// find([1, 5, 7, 89, 9, 0, 55, 4]);

//  Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

// function checkPrime(num) {
//   if (num % 2 == 0) return console.log('true');
//   for (let i = 3; i < num; i++) {
//     if (num % i == 0) return console.log('true');
//   }
//   return console.log('false');
// }
// checkPrime(30);

//  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

function checkSimilar(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) return console.log('да');
  }
  return console.log('нет');
}
checkSimilar([1, 4, 65, 66, 543, 4, 4, 5]);
