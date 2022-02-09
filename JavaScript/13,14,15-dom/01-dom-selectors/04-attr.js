let yahooRef = document.querySelectorAll('a')[1];
// console.log(yahooRef);

// Set Attribute
// yahooRef.setAttribute('target', "_blanck");
// yahooRef.setAttribute('target', '_self');

// let images = document.querySelectorAll('img');
// images.forEach((image) => {
//     image.setAttribute('alt', 'no image');
//     image.setAttribute('width', 300);
//     image.classList.add('image-main');
// });
// console.log(images);

// Get Attribute
let attr = yahooRef.getAttribute('href');
console.log(attr);
let images = document.querySelectorAll('img')[0];

// let attr = images.getAttribute('src');
// console.log(attr);

// Simple way ========================
// let yahooRef = document.querySelectorAll('a')[1];
// yahooRef.target = '_blanck';
// console.log(yahooRef);

// let images = document.querySelectorAll('img')[0];
// images.alt = 'pizza';
// images.width = 150;
// console.log(images);
