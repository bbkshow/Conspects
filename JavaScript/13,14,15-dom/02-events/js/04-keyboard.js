/**
 * keydown, keypress, keyup
 * keypress - only for symbol buttons (doesn't work for - ctrl, shift, alt and so on)
 * keydown - all buttons: symbol buttons, ctrl, shift, alt and so on
 * event.key
 * event.code
 * https://keycode.info/
 */

// window.addEventListener("keypress", (event) => {
//     console.log(event.keyCode);
//     console.log(event.key);
// });

// window.addEventListener("keydown", (event) => {
//     // console.log(event.key);
//     console.log(event.code);
// });

// let outputText = document.querySelector(".js-output");
// let clearBtn = document.querySelector(".js-clear");

// window.addEventListener("keydown", keybListen);

// clearBtn.addEventListener("click", (event) => {
//     outputText.textContent = "";
//     window.removeEventListener("keydown", keybListen);
// });

// function keybListen(event) {
//     outputText.textContent += event.key;
// }

// ===============================
// keyup
// window.addEventListener("keyup", (event) => {
//     // console.log(event.keyCode);
//     // console.log(event.key);

//     console.log("keyup", event.key);
// });
