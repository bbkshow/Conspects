// innerText
// innerHtml
// textContent

{
  /* <h1 class="heading main__title green" id="title">Main titile</h1> */
}

// let h1 = document.querySelector('h1.heading');
// console.log(h1);

// h1.innerText = 'Hello Vova';
// let text = h1.innerText;

// h1.textContent = 'Hello Sara';
// console.log(h1.textContent);

// innerHtml ==================
// h1.innerHTML = '<span>Hello World</span>';

let users = [
  { id: 1, name: 'Vova', status: 'Admim' },
  { id: 2, name: 'Sara', status: 'Guest' },
  { id: 3, name: 'Mike', status: 'Moderator' },
  { id: 4, name: 'Bob', status: 'Admin' },
];

let html = '';

users.forEach(({ name, status }) => {
  html += `<li class='item'>${name}: ${status}</li>`;
});

let ul = document.querySelectorAll('ul')[2];
console.log(ul);
console.log(html);
ul.innerHTML = html;

// Good ====================
// function crateUsers(usersArr, domElem) {
//     let html = '';
//     usersArr.forEach(({ name, status }) => {
//         html += `<li class='item'>${name}: ${status}</li>`;
//     });
//     domElem.innerHTML = html;
//     return domElem;
// }

// crateUsers(users, ul);

// IEEF
// "ФУНКЦИЯ МОМЕНТАЛЬНОГО ВЫНОСА ОСТАВШИГОСЯ МОЗГА"
// (function (params) { })();
// (() => {})();

// ((a, b) => {
//     console.log(a + b);
// })(10, 20);

// ((usersArr, domElem) => {
//     let html = '';
//     usersArr.forEach(({ name, status }) => {
//         html += `<li class='item'>${name}: ${status}</li>`;
//     });
//     domElem.innerHTML = html;
//     return domElem;
// })(users, ul);

((param1, param2) => {
  console.log(param1 * param2);
})(30, 40);
