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
  if (event.target === modalRef) {
    event.target.style.display = 'none';
  }
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    modalRef.style.display = 'none';
  }
});
