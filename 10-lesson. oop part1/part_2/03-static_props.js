// Static

// console.log(Math);
// console.log(Date.now()); // timestamp

// let date = new Date.now();
// console.log(date);

// console.log(Math.min(5, 10));
// let result = new Math.min(5, 10);
// console.log(result);

class Calc {
  static PI = 3.14;

  static sum(a, b) {
    return a * b;
  }

  static mult(a, b) {
    return a * b;
  }

  static min(a, b) {
    return a > b ? b : a;
  }
}

// console.log(Calc.PI);
// let pi = Calc.PI;
// console.log(pi);

// console.log(Calc.sum(4, 5));
console.log(Calc.min(4, 5));
console.log(Math.min(4, 5));

// ДЗ
/*
Написать аналог клaсса Math;
- min
- max
- power;
- sqrt
- range
*/

// Целое рендомное число от a до b (включая a и b)
function range(a, b) {}
range(2, 9); // 2, 9, 8, 7, 6, 5, 4, 3
