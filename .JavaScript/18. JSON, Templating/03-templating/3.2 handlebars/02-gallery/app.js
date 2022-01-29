let galleryItems = [
    {
        img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "pizza",
    },
    {
        img: "https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "kebab",
    },
    {
        img: "https://media.istockphoto.com/photos/american-food-picture-id1005290646?s=612x612",
        text: "gamburger",
    },
];

let gallery = document.querySelector("#gallery").innerHTML;
let root = document.querySelector("#root");

let templateScript = Handlebars.compile(gallery);
let markup = templateScript(galleryItems);

root.innerHTML = markup;
