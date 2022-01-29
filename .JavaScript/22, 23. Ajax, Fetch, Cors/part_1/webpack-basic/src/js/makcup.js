import articlesTpl from "../templates/articlesTpl.hbs";

let root = document.querySelector("#root");

export default function createMarcup(articles) {
    let markup = articlesTpl(articles);
    root.insertAdjacentHTML("beforeend", markup);
}
