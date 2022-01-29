/**
 * 
 * Change Event
 * Input Event
 *
 * Focus Event
 * Blur Event
 *

 * Checkboxes
 * Checked property
 * */

// let inputRef = document.querySelector(".js-input");
let inputRef = document.querySelector('input[type="text"]');
let licenseRef = document.querySelector('.js-license');
let btnRef = document.querySelector('.js-button');
let nameRef = document.querySelector('.js-button > span');

// Input Event
// inputRef.addEventListener("input", (event) => {
//     console.log("From input");
//     console.log(event.target.value);
// });

// Change event
// inputRef.addEventListener("change", (event) => {
//     console.log("From input");
//     console.log(event.target.value);
// });

// Checkbox checked
// licenseRef.addEventListener("change", (event) => {
//     console.log(event.target.checked);
//     true / false;
// });

// licenseRef.addEventListener("change", (event) => {
//     console.log("disabled", btnRef.disabled);
//     btnRef.disabled = !event.target.checked;
// });

// inputRef.addEventListener("input", (event) => {
//     // console.log(event.target.value);
//     // nameRef.textContent;
//     // console.log(nameRef.textContent);
//     nameRef.textContent = event.target.value;
// });

// inputRef.addEventListener("input", (event) => {
//     let inputValue = event.target.value;
//     licenseRef.addEventListener("change", (event) => {
//         console.log("disabled", btnRef.disabled);
//         btnRef.disabled = !event.target.checked;
//         nameRef.textContent = inputValue;
//     });
// });

// Focus Event
// Blur Event

// inputRef.addEventListener("focus", (event) => {
//     console.log("focus");
//     event.target.style.border = "2px solid green";
// });

// inputRef.addEventListener("blur", (event) => {
//     console.log("blur");
//     event.target.style.border = "2px solid magenta";
// });
