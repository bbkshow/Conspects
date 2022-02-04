// Create any element algorythm

// 1. document.createElement()
// 2. document.setAtribute
// 3. add Text;
// 4. Insert into dom

// // 1.
// let aRef = document.createElement('a');

// // 2
// aRef.href = 'https://translate.google.ru/';

// // 3.
// aRef.textContent = 'Google translate';
// console.log(aRef);

// // 4
// let ul = document.querySelectorAll('ul')[0];
// console.log(ul);
// // append
// // prepend
// // before
// // after
// ul.append(aRef);
// // ul.prepend(aRef);
// // ul.before(aRef);
// // ul.after(aRef);

// Create image
let img = document.createElement('img');

img.src =
  'https://images.pexels.com/photos/3846156/pexels-photo-3846156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
img.alt = 'girl';
img.width = 300;

let h1 = document.querySelector('.main__title');
console.log(h1);

// h1.append(img);
// h1.after(img);
console.log(img);

// insertAdjacentHTML
// h1.insertAdjacentHTML('afterbegin', ...img);
// h1.insertAdjacentHTML('afterbegin', "<p>qweqweqwewe</p>");
// h1.insertAdjacentHTML('afterend');
// h1.insertAdjacentHTML('beforebegin');
// h1.insertAdjacentHTML('beforeend');

// h1.insertAdjacentElement('afterbegin', img);
// innerHTML vs insertAdjacentHTML;
