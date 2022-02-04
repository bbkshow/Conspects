/**
 * IntersectionObserver
 * Lazy loading
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

// let box = document.querySelector(".js-observe-box");
// let observerInstance = new IntersectionObserver((enties, observer) => {
//     // console.log(enties);
//     // console.log(observer);
//     enties.forEach((entry) => {
//         // console.log(entry);
//         // console.log(entry.target);
//         // entry.target.textContent = "Is intersecting!";
//         // console.log(entry.target.textContent);
//         entry.target.src = entry.target.dataset.src;
//         observer.disconnect();
//     });
// });
// observerInstance.observe(box);

let options = { rootMargin: "0px 0px -200px 0px" };

if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log("entry.isIntersecting");
                entry.target.textContent = "isIntersecting";

                console.log(entry.target.textContent);
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll("img").forEach((img) => {
        observer.observe(img);
    });
} else {
    console.log("Not supported");
}
