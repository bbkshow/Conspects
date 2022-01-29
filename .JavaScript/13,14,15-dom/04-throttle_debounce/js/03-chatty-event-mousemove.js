/*
 * Mousemove
 */

// _.debounce()
// _.throttle()

let pRef = document.querySelector(".js-coords");
// console.log(pRef);

// pRef.addEventListener("mousemove", (event) => {
//     console.log(event);
// });

function onMoueseMove(event) {
    // console.log(event);
    console.log(event.screenX, event.screenY);
}

// pRef.addEventListener("mousemove", _.debounce(onMoueseMove, 1500));
pRef.addEventListener("mousemove", _.throttle(onMoueseMove, 1500));
