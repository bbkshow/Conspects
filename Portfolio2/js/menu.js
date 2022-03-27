// import keyCodeList from "./keyCodeList.js";
let btnRef = document.querySelector("#header__menuBtn");
let menuRef = document.querySelector(".menu__content");
let spanRef = document.querySelector("#header__closeMenuBtn");
// let contentRef = document.querySelector(".m__content");

// let list = keyCodeList.reduce((acc, key) => [...acc, key], []);
// console.log(list);

btnRef.addEventListener("click", () => {
  menuRef.style.display = "block";
  btnRef.style.display = "none";
  btnRef.removeEventListener("click", btnRef);
  //   contentRef.textContent = list;
});

spanRef.addEventListener("click", () => {
  menuRef.style.display = "none";
  btnRef.style.display = "block";
  spanRef.removeEventListener("click", spanRef);
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    menuRef.style.display = "none";
    btnRef.style.display = "block";
  }
  window.removeEventListener("keydown", window);
});
