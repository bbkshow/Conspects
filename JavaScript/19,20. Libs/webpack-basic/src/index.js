import "./css/base.css";

// import menuTemplate from "./tempaltes/menu.hbs";
// import menuData from "./js/menu-data";
// import refs from "./js/refs";

// let markup = menuTemplate(menuData);
// refs.root.innerHTML = markup;

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(
//     `
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <a>Close</a>
//     </div>
// `,
//     {
//         onShow: (instance) => {
//             instance.element().querySelector("a").onclick = instance.close;
//         },
//     }
// );

// instance.show();

import { testSuccess } from "./js/pnotify";

if (2 + 2 == 4) {
    testSuccess();
}
