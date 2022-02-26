// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterValue = document.querySelector('#value');
const buttons = document.querySelectorAll('#counter button');

const decrementBtn = buttons[0];
const incrementBtn = buttons[1];

const step = 1;
let calcValue = 0;

decrementBtn.addEventListener('click', () => {
  calcValue -= step;
  counterValue.innerHTML = calcValue;
});

incrementBtn.addEventListener('click', () => {
  calcValue += step;
  counterValue.innerHTML = calcValue;
});
