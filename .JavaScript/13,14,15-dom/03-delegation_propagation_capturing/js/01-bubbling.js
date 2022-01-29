/*
 * Event Bubbling
 * event.target
 * event.currentTarget
 */

let refs = {
    parent: document.querySelector("#parent"),
    child: document.querySelector("#child"),
    innerChild: document.querySelector("#inner-child"),
};

refs.parent.addEventListener("click", (evt) => {
    console.log("parent click");
    console.log("target", evt.target);
    console.log("current target", evt.currentTarget);
});

refs.child.addEventListener("click", (evt) => {
    console.log("child click");
    console.log("target", evt.target);
    console.log("current target", evt.currentTarget);
});

refs.innerChild.addEventListener("click", (evt) => {
    console.log("innerChild click");
    console.log("target", evt.target);
    console.log("current target", evt.currentTarget);
    evt.preventDefault(); // отменяет стандартное поведение
    evt.stopPropagation();
});
