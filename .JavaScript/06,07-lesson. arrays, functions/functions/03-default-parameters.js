let sayHello = function (
  msg = 'Please login',
  name = 'John Doe',
  status = 'Guest'
) {
  return `${msg} - ${name}. You are the ${status}`;
};

// let sayHello = function (a, b) {
//   return `${a} - ${b}`;
// };

let greetMessage = 'Hello';
let userName = 'Vova';

console.log(sayHello(greetMessage, userName));

// console.log(sayHello('Welcome to the site', 'Barbara', 'Moderator'));
// console.log(sayHello(greetMessage, 'Mike', 'Admin'));
// console.log(sayHello('Welcome to the site', 'Sara'));
