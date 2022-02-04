// async / await

// async function sum(a, b) {
//     return a + b;
// }

// let getSum = async function (a, b) {
//     return a + b;
// };

// const getResult = async (a, b) => {
//     return a - b;
// };

// document.body.addEventListener("mouseover", async () => {
//     console.log("qwe");
// });

// function getPosts() {
//     return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()
//     );
// }

// getPosts().then((posts) => console.log(posts));

// async / await
// async function getPosts() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     // console.log(Response);
//     let articles = response.json();
//     console.log("articlespomise", articles);
//     return articles;
// }

// getPosts().then((articles) => console.log(articles));

// async function getPosts() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     // console.log(Response);
//     let articles = await response.json();

//     displayPosts(articles);
// }
// getPosts();

// function displayPosts(posts) {
//     console.log(posts);
// }

//==============================

let delay = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
};

// delay(500).then((date) => {
//     console.log(date);
// });

// let fetchData = async (url) => {
//     await delay(1500);
//     console.log("Hello");

//     let response = await fetch(url);
//     let data = response.json();

//     // console.log(data);
//     return data;
// };

// let url = "https://jsonplaceholder.typicode.com/users";

// fetchData(url).then((users) => console.log(users));

// let fetchData = async (url) => {
//     await delay(1500);
//     console.log("Hello");

//     let response = await fetch(url);

//     console.log("World");
//     let data = await response.json();

//     console.log(data);
// };

// let url = "https://jsonplaceholder.typicode.com/users";

// fetchData(url);

//=====================

// try {
// } catch (error) {}

// console.log("Hello");
// console.log(pizza);
// console.log("World");

// try {
//     console.log("Hello");
//     console.log(pizza);
// } catch (err) {
//     console.log(err);
// }

// try {
//     console.log("Hello");
//     console.log(pizza);
// } catch (err) {
//     throw err;
//     // console.log(err);
// }

// console.log("World");

// if (2 + 2 == 4) {
//     console.log("Vova");
// }

// ===========================
// async /await try {

// } catch (error) {

// }

// let fetchData = async (url) => {
//     try {
//         await delay(1500);
//         console.log("Hello");
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// };

// let url = "https://jsonplaceholder.typicode.com/users";
// fetchData(url);
