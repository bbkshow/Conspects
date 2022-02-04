export default function fetchNews(search) {
    let API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";

    let URL = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;

    return fetch(URL)
        .then((res) => res.json())
        .then(({ articles }) => {
            // console.log(articles);
            return articles;
        });
}
