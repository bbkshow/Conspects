let outputTextMain = document.querySelector('.keycode-display');
let outputTextCode3 = document.querySelector('.code3');
let outputTextCode1 = document.querySelector('.code1');
let outputTextCode4 = document.querySelector('.code4');
let outputTextCode2 = document.querySelector('.code2');
let start = document.querySelector('p.text-display');
let divHide = document.querySelector('.cards');

window.addEventListener('keydown', (event) => {
  start.classList.add('hide');
  divHide.classList.replace('hide', 'active');
  outputTextMain.textContent = event.keyCode;
  outputTextCode3.textContent = event.keyCode;
  outputTextCode1.textContent = event.key;
  outputTextCode4.textContent = event.code;
  outputTextCode2.textContent = event.location;
});

let tableBtn = document.querySelector('.toggle-button');
let table = document.querySelector('.table-display');

tableBtn.addEventListener('click', () => {
  table.style.display = 'block';
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    table.style.display = 'none';
  }
});
