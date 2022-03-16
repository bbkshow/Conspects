// Запись объекта в стиле JSX, это шаблонизатор реакта

let product = (
  <div>
    <h3>Kebab</h3>
    <img
      src="https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="kebab"
      width="450"
    />
    <p>'Price 10$'</p>
    <button type="button">'Add to cart'</button>
  </div> // обязательно нужно обернуть в родительский элемент //
);

ReactDom.render(product, document.querySelector('#root')); // это рендерит в виртульный дом

// ==============================================================
// Компоненты, это функция, которая возвращает JSX. Они начинаются с большой буквы
// Как аргумент функция получает props, на примере сразу сделана деструктуризация props

let Product = ({ name, imageUrl, price }) => (
  <div>
    <h3>{name}</h3>
    <img src={imageUrl} alt="kebab" width="450" />
    <p>'Price {price}$'</p>
    <button type="button">'Add to cart'</button>
  </div>
);

ReactDom.render(<Product />, document.querySelector('#root')); // рендерим компонент в треугольных скобках

// Здесь в компоненте можно рендерить другой компонент и передавать ему атрибуты. Эти атрибуты попадают в props компонента
let App = (props) => {
  return (
    <>
      <Product
        imageUrl="https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Kebab"
        price="10"
      />
    </>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));

// Это компонент секция и за ней собраны ее потомки, обязательно в конце {children}
// Секция объединяет несколько компонентов с продуктами
const Section = (props) => {
  let { title, children } = props;

  return (
    <section>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};

// =====================================
// Для обязательных полей нужно делать валидацию. Можно установить по дефолту
Section.defaultProps = {
  title: 'Default section title',
};

// можно установить propTypes и задавать через него
Section.propTypes = {
  title: PropTypes.string.isRequired, // это стринга и isRequired значит обязательно вводить данные
  children: PropTypes.node, // когда неизвестно какой тип данных будет, пишут что node
};

// defaultProps и propTypes расписываются в домашке на каждый компонент!!!

// ===========================================
// так выводятся коллекции через метод map
let Booklist = ({ books }) => {
  return (
    <ul>
      {books.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

// ================================================

// Каждый компонент нужно разнести по отдельным папкам
// Структура index.html - index.js - App.js и его компоненты Product.js и Booklist.js
