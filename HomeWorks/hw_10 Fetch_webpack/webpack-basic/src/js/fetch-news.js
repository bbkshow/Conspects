export default function fetchNews(search) {
  let API_KEY = '1eb723e484b242c787f68f36acdc2b84';
  let URL = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;

  return fetch(URL)
    .then((res) => res.json())
    .then(({ articles }) => {
      // console.log(articles);
      return articles;
    });
}
