import fetchNews from './js/fetch-news';
import createMarcup from './js/marcup';

fetchNews('sports').then((articles) => {
  console.log(articles);
  createMarcup(articles);
});
