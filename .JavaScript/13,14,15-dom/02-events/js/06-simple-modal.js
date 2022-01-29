/*
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 */

let btnRef = document.querySelector('#myModalBtn');
let modalRef = document.querySelector('#myModal');
let spanRef = document.querySelector('.close');

btnRef.addEventListener('click', () => {
  modalRef.style.display = 'block';
});

spanRef.addEventListener('click', () => {
  modalRef.style.display = 'none';
});

spanRef.addEventListener('mouseover', (event) => {
  event.target.style.cursor = 'pointer';
});

window.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target === modalRef) {
    event.target.style.display = 'none';
  }
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    console.log('Нажал Escape');
    modalRef.style.display = 'none';
  }
});
