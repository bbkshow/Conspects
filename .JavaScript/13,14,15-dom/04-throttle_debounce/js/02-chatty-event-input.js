/*
 * Input
 */

// _.debounce()
// _.throttle()

let inputRef = document.querySelector(".js-input");
let outputRef = document.querySelector(".js-output");

console.log(inputRef);

// inputRef.addEventListener("input", (event) => {
//     console.log(event.target.value);
// });

function inputCheck(event) {
    // console.log(event.target.value);
    outputRef.textContent = event.target.value;
}

inputRef.addEventListener("input", _.debounce(inputCheck, 1500));
