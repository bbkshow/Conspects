// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const rangeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const onChangeInput = (event) => {
  const textSize = event.currentTarget.value;
  text.style.fontSize = `${textSize}px`;
};

rangeControl.addEventListener('input', onChangeInput);
