// https://jsonplaceholder.typicode.com/posts/50
// URI - https://www.youtube.com/watch?v=LsE7sfh28u0
// URL - https://www.youtube.com/
// URN - /watch/movie?v=LsE7sfh28u0

// https - протокол передачи данных
// www.youtube.com - доменное имя
// watch?v=LsE7sfh28u0 - строка запроса
// /watch/movie - конечная точка запроса (endpoint)
// /watch - статический параметр
// /movie- динамический параметр
// ?v=LsE7sfh28u0 - строка запроса (query string)

// // google.com
// // (IP 47.125.254.05)

// // Status codes
// https://httpstatuses.com/
// 100 - imnforamtion
// 200 - ok, succes
// 300 - redirect
// 400 - cleent error
// 500 - server erro

// let serverFetchData = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => {
//         // console.log(response.json());
//         return response.json();
//     })
//     .then((data) => console.log(data));
// console.log(serverFetchData);
//=============================================

// let data = "";
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//     .then((response) => response.json())
//     .then((todos) => {
//         data = todos;
//         console.log("Внутри промиса", todos);
//     });

// console.log("Код после http запроса");
// console.log("За промисом", data);

// ======================================
// let URL = "https://jsonplaceholder.typicode.com/todos/2";
// let options = {
//     method: "GET",
//     headers: {
//         // "Content-Type": "application/json; charset=utf-8",
//         // "Content-Type": "text/html; charset=utf-8",
//     },
// };

// fetch(URL, options)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });

// ================================
// algolia
// https://hn.algolia.com/api

// let URL = "http://hn.algolia.com/api/v1/search?query=coronavirus&tags=story";

// fetch(URL, {})
//     .then((res) => res.json())
//     .then((story) => {
//         console.log(story);
//     });

// fetch(URL, {})
//     .then((res) => res.json())
//     .then(({ hits }) => {
//         console.log(hits);
//     });

// =====================================
// news
// let API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";

// let URL = `https://newsapi.org/v2/everything?q=react&apiKey=${API_KEY}`;

// fetch(URL, {})
//     .then((res) => res.json())
//     .then((news) => {
//         console.log(news.articles);
//     });

// let options = {
//     method: "GET",
//     headers: {
//         // "X-Api-Key": API_KEY,
//         Authorization: API_KEY,
//     },
// };
// let URL = `https://newsapi.org/v2/top-headlines?country=de&category=sports`;
// fetch(URL, options)
//     .then((res) => res.json())
//     .then((news) => {
//         console.log(news.articles);
//     });

// ===========================================================
// let API_KEY = "16847035-2769300c76d48561bbb060e95";

// let URL = `https://pixabay.com/api/?key=${API_KEY}&q=dog&image_type=photo&category=animals`;

// fetch(URL)
//     .then((res) => res.json())
//     .then((img) => {
//         // console.log(img);
//         randerGallery(img.hits);
//     });

// let root = document.querySelector("#root");
// console.log(root);

// function createImg(objImg) {
//     return `<img src="${objImg.webformatURL}" alt="${objImg.tags}"/>`;
// }

// function randerGallery(imgArr) {
//     let markup = imgArr.reduce((acc, elem) => {
//         return createImg(elem) + acc;
//     }, "");

//     root.insertAdjacentHTML("beforeend", markup);
// }

// CORS
// fetch("http://itpride.net/useful/")
//     .then((res) => res.json())
//     .then((story) => {
//         console.log(story);
//     });
//     No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

// REST API
// Endpoint
// /user
// /search

// CRUD
// C - create
// R - read
// U - update
// D - delete

// GET - read
// POST - create
// /user

// Обращение к отдельной странице
// /user/10
// /article/50

// HTTP-метод — определяет какую операцию выполнять.
// Заголовок — позволяет клиенту передавать информацию о запросе.
// Путь — путь к ресурсу. Доступные пути описываются в документации бекенда.
// Тело — дополнительный блок запроса, содержащий данные.
