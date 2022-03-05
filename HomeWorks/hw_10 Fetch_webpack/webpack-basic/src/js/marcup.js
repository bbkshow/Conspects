import articlesTpl from '../templates/articlesTpl.hbs';

let root = document.querySelector('#root');

export default function createMarcup(articles) {
  let marcup = articlesTpl(articles);
  root.insertAdjacentHTML('beforeend', marcup);
}
