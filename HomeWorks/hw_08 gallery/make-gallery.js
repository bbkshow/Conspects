import images from './gallery-items.js'; // импорт данных с фото

let gallery = document.querySelector('ul.js-gallery');
let bigImg = document.querySelector('img.lightbox__image');

// make gallery

let makeGalleryItemMarkup = (image) => {
  let { description, original, preview } = image; // деструктуризация в переменной
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href= ${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
};

let makeGalleryMarkup = images.map(makeGalleryItemMarkup).join('');
gallery.insertAdjacentHTML('beforeend', makeGalleryMarkup);

// open and close modal

let modal = document.querySelector('.js-lightbox');
let button = document.querySelector('.lightbox__button');
let openModal = () => modal.classList.add('is-open');
let closeModal = () => modal.classList.remove('is-open');
let overlay = document.querySelector('.lightbox__overlay');

gallery.addEventListener('click', imageEnlarge);

function imageEnlarge(evt) {
  evt.preventDefault(); // чтобы не было всплытия события на ссылку

  let imgClick = evt.target;
  if (imgClick.nodeName !== 'IMG') {
    return;
  }
  console.log('IMG click'); // проверяем работает ли отмена всплытия
  openModal(); // добавляем класс для CSS
  console.log(imgClick.src); // проверяем приходит ли ссылка на картинку
  bigImg.src = imgClick.dataset.source;
  bigImg.alt = imgClick.dataset.alt;

  overlay.addEventListener('click', closeModalByClick); // закрытие по клику на бэкдроп
  document.addEventListener('keydown', closeModalByEsc); // закрытие по ESC
}

button.addEventListener('click', imageClose); // закрытие по клику на крестик

function imageClose() {
  closeModal(); // убираем класс для CSS
  bigImg.src = ''; // убираем ссылку на большое фото

  overlay.removeEventListener('click', closeModalByClick); // снимаем слушатель с бэкдропа
  document.removeEventListener('keydown', closeModalByEsc); // снимаем слушатель с ESC
}

function closeModalByClick(e) {
  if (e.target === e.currentTarget) {
    imageClose();
  }
}

function closeModalByEsc(e) {
  if (e.key === 'Escape') {
    imageClose();
  }
}
