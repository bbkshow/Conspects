let menu = ["Home", "About", "Shop", "Contact us"];
let list = document.querySelector(".list");

// console.log(list);

// 1.
// menu.forEach((li) => {
//     list.innerHTML += `<li class="list__item">${li}</li>`;
// });

// 2.
let markup = menu.map((li) => `<li class="list__item">${li}</li>`).join("");
// list.innerHTML = markup;
list.insertAdjacentHTML("beforeend", markup);
