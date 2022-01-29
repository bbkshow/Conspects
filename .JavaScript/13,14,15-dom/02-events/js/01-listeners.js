/*
  https://devdocs.io/dom_events/
  Event listeners
  Callback identity
  Event Object
*/

let mainButton = document.querySelector('.js-target-btn');
let addListenerButton = document.querySelector('.js-add-listener');
let removeListenerButton = document.querySelector('.js-remove-listener');

// console.log(mainButton);
// console.log(addListenerButton);
// console.log(removeListenerButton);

// Add listener
// mainButton.addEventListener("click", () => {
//     console.log("mainButton click");
// });

// mainButton.addEventListener("click", () => {
//     console.log("Hello");
// });

// mainButton.addEventListener("click", () => {
//     console.log("Vova");
// });

// ===================
// Ссылочная идентичность колбеков
// addListenerButton.addEventListener("click", () => {
//     console.log("add listener");
//     mainButton.addEventListener("click", doOnClick);
// });

// removeListenerButton.addEventListener("click", () => {
//     console.log("remove listener");
//     mainButton.removeEventListener("click", doOnClick);
// });

// function doOnClick() {
//     console.log("Click to main button");
// }

// console.log(doOnClick === doOnClick);

// Event
// event
// evt
// e

// mainButton.addEventListener("click", (even) => {
//     console.log(event);
//     console.log("mainButton click!!!");
// });

// mainButton.addEventListener("click", console.log);

// mainButton.addEventListener("click", logEvent);

// function logEvent(evt) {
//     console.log(evt);
// }

// =============================

// mainButton.addEventListener("click", (even) => {
//     console.log(event.target); //  элемент на котором произошло событие
//     console.log(this);
// });

// mainButton.addEventListener("click", (even) => {
//     console.log(event.currentTarget); //  элемент на котором отлавливаем событие
// });

// Never use this
// mainButton.addEventListener("click", function (even) {
//     console.log(event.target); //  элемент на котором произошло событие
//     console.log(this);
// });
