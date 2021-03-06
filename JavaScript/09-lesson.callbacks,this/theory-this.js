// Значение контекста внутри функции определяется не в момент ее создания, а в момент вызова.
// То есть значение this определяется тем, как вызывается функция, а не где она была объявлена.

const showThis = () => {
  console.log('this in showThis: ', this);
};

// function showThis() {
//     console.log('this in showThis: ', this);
// }

// showThis(); // this in showThis: window

const hotel = {
  name: 'Resort hotel',
  showThis() {
    const fn = () => {
      // стрелки запоминают контекст во время объявления, из родительской области видимисти
      console.log('this in fn: ', this);
    };

    fn();
    console.log('this in showThis: ', this);
  },
};

hotel.showThis();
