let refs = {
    gallery: document.querySelector(".js-gallery"),
    largeImage: document.querySelector(".js-large-image"),
};

console.log(refs);

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    // console.log(event.target);
    // console.log(event.target.nodeName);

    if (event.target.nodeName !== "IMG") {
        return;
    }

    let imageRef = event.target;
    // console.log(imageRef);
    // console.log(imageRef.dataset);
    // console.log(imageRef.dataset.source);

    setLargeSrc(imageRef.dataset.source);
}

function setLargeSrc(url) {
    refs.largeImage.src = url;
}
