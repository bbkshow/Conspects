let items = ["Home", "About", "Contacts", "Shop"];

let root = document.querySelector("#root");
let btn = document.querySelector("#menu");

let list = document.createElement("ul");

list.classList.add("hide");

function createLi(text) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    li.classList.add("menu__item");
    a.classList.add("link__item");

    a.href = "/" + text.toLowerCase();
    a.textContent = text;

    li.append(a);
    return li;
}

// console.log(createLi("hello"));

let menu = items.map((menuItem) => {
    return createLi(menuItem);
});

// console.log(menu);

list.append(...menu);
root.append(list);

btn.addEventListener("click", () => {
    list.classList.toggle("show");
});
