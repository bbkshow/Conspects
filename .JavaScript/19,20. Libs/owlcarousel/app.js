// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel();
// });

let options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        },
    },
};

$(".owl-carousel").owlCarousel(options);
