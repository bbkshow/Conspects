// window.document;

// console.log(window.document);
// console.log(document);
// console.log(document.body);

// Select Element ============
// document.querySelector(css selector) - single element
// document.querySelectorAll(css selector) - all elements
// https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048

{
  /* <h1 class="heading main__title" id="title">Main titile</h1> */
}

// =========== querySelector
// If cant find gives NULL
// let h1 = document.querySelector('#title');
// h1 = document.querySelector('.main__title');
// h1 = document.querySelector('h1');
// h1 = document.querySelector('.heading.main__title');
// console.log(h1);

// let ul = document.querySelector('ul.list');
// console.log(ul);

// =============== querySelectorAll
// let ul = document.querySelectorAll('ul'); // NodeList
// let form = document.querySelectorAll('form');
// // console.log(ul);
// console.log(form);

// let formSignIn = document.querySelectorAll('form')[1];
// let formSignUp = document.querySelectorAll('form')[0];
// console.log(formSignIn);
// console.log(formSignUp);

// let p = document.querySelectorAll('p')[0];
// console.log(p);

// OLD SCHOOL ========================
// HTMLCollection
// let ulHtmlCollection = document.getElementsByClassName('list');
// console.log(ulHtmlCollection);

// Convet to Array ============
// let ul = document.getElementsByClassName('list');
// let ulArr = Array.from(ul);
// console.log(ulArr);

// Spred to Array
// let ul = document.getElementsByClassName('list');
// let ulArr = [...ul];
// console.log(ulArr);

// let h1 = document.getElementById('title');
// let h1 = document.getElementsByName
// let h1 = document.getElementsByTagNameNS

// console.log(h1);

// document.querySelector()
// document.querySelectorAll()

// Looping elements ====================
// let images = document.querySelectorAll('img');
// // console.log(images);
// images.forEach((image) => {
//     // console.log(image);
//     image.style.display = "none";
// });

// ====================================
// let ulRef = document.querySelectorAll('ul.list')[1];
// let liRef = ulRef.querySelectorAll('li');

// liRef.forEach((li) => {
//     console.log(li.textContent);
// });

// // console.log(ulRef);
// // console.log(liRef);
