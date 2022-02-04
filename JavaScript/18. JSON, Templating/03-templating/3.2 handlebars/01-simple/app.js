let menu = ["Home", "About", "Shop", "Contact us"];

let temlateRef = document.querySelector(".tempale-usage").innerHTML;
let divRef = document.querySelector("#root");

// console.log(Handlebars);

let templateScript = Handlebars.compile(temlateRef);

let markup = templateScript(menu);
divRef.insertAdjacentHTML("beforeend", markup);
