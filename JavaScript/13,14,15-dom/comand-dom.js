// Выбор элемента
document.querySelector(css selector) - // берёт один элемент
document.querySelectorAll(css selector) -// берёт все элементы
document.querySelectorAll('form')[0] - // берёт первый элемент из всех



// Работа с классами
let h1 = document.querySelector('h1');
h1.classList - // какие есть классы
h1.classList.length - // количество классов
h1.classList.add('green'); - // добавление класса
h1.classList.remove('green'); - // удаление класса
h1.classList.toggle('green'); - // если есть класс, то убирает, если нет, то добавляет
h1.classList.replace('green', 'red'); - // заменяет первое на второе
h1.classList.contains('green'); // проверяет есть ли такой класс, приходит true или false



// Атрибуты
let yahooRef = document.querySelectorAll('a')[1];
yahooRef.setAttribute('target', "_blanck"); // установить атрибут
yahooRef.getAttribute('href'); // взять содержание атрибута

let yahooRef = document.querySelectorAll('a')[1];
yahooRef.target = '_blanck'; // второй (более легкий) способ установить атрибут
images.alt = 'pizza'; // второй (более легкий) способ установить атрибут
images.width = 150; // второй (более легкий) способ установить атрибут



// Inners
let h1 = document.querySelector('h1.heading');
h1.innerText = 'Hello Vova'; // поставить текст, который содержит элемент
let text = h1.innerText;
h1.textContent = 'Hello Sara'; // поставить текст, который содержит элемент



// Стили
h1.style.color = 'magenta';
h1.style.background = 'white';
h1.style.textDecoration = 'underline';
document.body.style.background = 'blue';



// Создание элементов
let aRef = document.createElement('a'); // создание элемента

let ul = document.querySelectorAll('ul')[0];
ul.append(aRef); // добавление в ДОМ в конец детей элемента
ul.prepend(aRef); // добавление в ДОМ в начало детей элемента
ul.before(aRef); // добавление в ДОМ перед элементом
ul.after(aRef); // добавление в ДОМ после элемента

insertAdjacentHTML // второй способ добавления в ДОМ
h1.insertAdjacentElement('afterbegin', ...img); 
h1.insertAdjacentElement('afterbegin', "<p>qweqweqwewe</p>");
h1.insertAdjacentElement('afterend');
h1.insertAdjacentElement('beforebegin');
h1.insertAdjacentElement('beforeend');

// Слушатели событий
mainButton.addEventListener("click", () => {}); // добавить слушатель событий
mainButton.removeEventListener("click", () => {}); // убрать слушатель событий
event.target // элемент на котором произошло событие
event.currentTarget // элемент на котором отлавливаем событие
event.preventDefault() 
inputName.value
inputName.placeholder
inputName.autocomplete
inputName.type
formRef.elements
formRef.elements.name.value

let formRef = event.target;
  let formData = new FormData(formRef);


