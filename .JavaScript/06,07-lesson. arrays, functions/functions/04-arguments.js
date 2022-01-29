// ArrayLikeObject - Arguments - псевдомассив

// Object
// Object - Array
// Object - ArrayLikeObject - обрезанный массив, у которого нет всех методов массивов

function sayHello(msg, userName) {
  //   console.log(arguments);
  //   let argArr = Array.from(arguments);
  //   console.log(argArr);

  let argArrSpred = [...arguments];
  console.log(argArrSpred);

  console.log(argArrSpred.length);

  let total = 0;
  for (let elem of argArrSpred) {
    total += 1;
  }
  console.log(total);

  //   console.log(`${msg} - ${userName}`);
}

// let sayHello = (msg, userName) => {
// console.log(arguments); // в стрелочной его нет
//     console.log(`${msg} - ${userName}`);
//   };

sayHello('Hello', 'Sara', 'Pizza', 100, true);
