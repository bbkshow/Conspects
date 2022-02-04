let refs = {
    tags: document.querySelector(".js-tags"),
    activeTag: document.querySelector(".js-active-tag"),
    body: document.querySelector("body"),
};

// console.log(refs);

refs.tags.addEventListener("click", onTagsClick);
// refs.body.addEventListener("click", onTagsClick);

function onTagsClick(event) {
    // console.log("event.target", event.target);
    // console.log("event.currentTarget", event.currentTarget);

    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    let currentActiveTag =
        event.currentTarget.querySelector(".tags__btn--active");

    console.log(currentActiveTag);

    if (currentActiveTag) {
        currentActiveTag.classList.remove("tags__btn--active");
    }

    let nextAtiveTag = event.target;
    nextAtiveTag.classList.add("tags__btn--active");

    // console.log(event.target.dataset);
    // console.log(event.target.dataset.pizza);
    // console.log(event.target.dataset.vova);

    refs.activeTag.textContent = nextAtiveTag.dataset.value;
}
