{
  /* <h1 class="heading main__title" id="title">Main titile</h1>; */
}

let h1 = document.querySelector('h1');
// console.log(h1);
// console.log(h1.classList);
// console.log(h1.classList.length);

// Add class
// h1.classList.add('green');

// Remove class
// h1.classList.remove('green');
// h1.classList.add('red');

// Toggle
// - если есть то убирает
// - если нет то добаляет
// h1.classList.toggle('green');

// Replace class
// h1.classList.replace('green', 'red');

// Contains class
let greenContains = h1.classList.contains('green');
if (greenContains) {
  h1.classList.add('main');
}

console.log(greenContains);
