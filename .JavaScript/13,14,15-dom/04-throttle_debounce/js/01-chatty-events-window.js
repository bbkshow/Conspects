/*
 * Window
 */

// _.debounce()
// _.throttle()

// console.log(_);

// window.addEventListener("resize", () => {
//     console.log(innerWidth);
// });

// function checkSize() {
//     console.log(innerWidth);
// }
// window.addEventListener("resize", _.throttle(checkSize, 3000));
// window.addEventListener("resize", _.debounce(checkSize, 3000));

function checkScroll(event) {
    // console.table(event);
    console.log(pageYOffset);
}

window.addEventListener("scroll", _.throttle(checkScroll, 3000));
