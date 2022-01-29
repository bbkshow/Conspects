import fetchNews from "./js/fetch-news";
import createMarcup from "./js/makcup";

fetchNews("football").then((articles) => {
    console.log(articles);
    createMarcup(articles);
});
