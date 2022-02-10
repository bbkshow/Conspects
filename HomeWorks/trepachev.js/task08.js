// Задача 
// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// Решение: объединим эти массивы с помощью метода concat:

// var a = ['a', 'b', 'c'];
// var b = [1, 2, 3];

// // //Вариант 1:
// var c = a.concat(b);
// console.log(c); //получится массив ['a', 'b', 'c', 1, 2, 3]

// //Вариант 2:
// var c = b.concat(a);
// alert(c); //получится массив [1, 2, 3, 'a', 'b', 'c']
// =========================

// Задача 
// Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// Решение: воспользуемся методом push:

// var arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr); //получится массив ['a', 'b', 'c', 1, 2, 3]
// ======================================

// Задачи для решения
// Работа с concat
// Для решения задач данного блока вам понадобятся следующие методы: concat.
//  Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// console.log(arr1.concat(arr2));
// =============================

// Работа с reverse
// Для решения задач данного блока вам понадобятся следующие методы: reverse.
//  Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let arr = [1, 2, 3]
// console.log(arr.reverse());

// Работа с push, unshift
// Для решения задач данного блока вам понадобятся следующие методы: push, unshift.
//  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1, 2, 3]
// arr.push(4,5,6)
// console.log(arr);

//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr);

//==================================

// Работа с shift, pop
// Для решения задач данного блока вам понадобятся следующие методы: shift, pop.
//  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq']
// console.log(arr.shift());

//  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq']
// let arrNew = arr.pop()
// console.log(arrNew);

// ==================================

// Работа с slice
// Для решения задач данного блока вам понадобятся следующие методы: slice.
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5]
// let arrNew = arr.slice(0, 3)
// console.log(arrNew);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5]
// let arrNew = arr.slice(3)
// console.log(arrNew);

// =============================

// Работа с splice
// Для решения задач данного блока вам понадобятся следующие методы: splice.
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5]
// let arrNew = arr.splice(1, 2)
// console.log(arr);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let arr = [1, 2, 3, 4, 5]
// let arrNew = arr.splice(1, 3)
// console.log(arrNew);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5]
// let arrNew = arr.splice(3, 'a', 'b', 'c')
// console.log(arr);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 1, 'a', 'b', 2, 3, 4, 'c', 5, 'e')
// console.log(arr);

// Работа с sort
// Для решения задач данного блока вам понадобятся следующие методы: sort.
//  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// let arr = [3, 4, 1, 2, 7]
// arr.sort()
// console.log(arr);


// Работа с Object.keys
// Для решения задач данного блока вам понадобятся следующие методы: Object.keys.
//  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// let obj = {js:'test', jq: 'hello', css: 'world'}
// let arrKeys = Object.keys(obj)
// console.log(arrKeys);