// [] массив
// {} объект

// let users = ["Vova", "Sara", "Mike"];
// console.log(users[0]);

// console.log(typeof {});

// Properties поля объекта
// Функция в объекте называется метод

// let user = {
//   name: 'Vova',
//   age: 30,
//   contects: 120,

//   // Old Syntax
//   // sayName: function (name) {
//   //   console.log(name);
//   // }

//   // Modern Syntax
//   sayName(name) {
//     console.log(name);
//   },
//   getUserData() {
//     console.log(this.name, this.age, this.contacts);
//   },
// };

// let user = {
//   name: 'Vova',
//   age: 30,
//   contacts: 120,

//   sayName(name) {
//     console.log(name);
//   },
//   getUserData() {
//     console.log(this.name, this.age, this.contacts);
//   },
// };

let user2 = {
  name: 'Sara',
  age: 17,
  contacts: 500,

  sayName(name) {
    console.log(name);
  },

  getUserData() {
    console.log(this.name, this.age, this.contacts);
  },

  getUserData() {
    console.log(this.name, this.age, this.contacts);
    // console.log(this.name.toUpperCase());
    this.sayName('Bob');
  },
};

user2.getUserData();

// Доступ к полям объекта
// console.log(user.name);
// console.log(user.contacts);
// user.sayName('Sara');

// user.name = 'Sara';
// user.age = 40;
// user.status = 'admin';
// user.status = 'moderator';
// console.log(user.name);
// console.log(user);

// user.getUserData();

// console.log(user);

// function sayName(name) {
//   console.log(name);
// }

// console.log(sayName('Bob'));
