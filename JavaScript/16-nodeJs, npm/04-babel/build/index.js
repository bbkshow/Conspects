"use strict";

var _customerES = _interopRequireDefault(require("./customerES.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// CommonJs Modules
// let PI = require("./user");\
// let { PI, greet, vova, customer } = require("./user");
// let user = require("./user");
// console.log(user);
// console.log("Index.js");
// console.log(PI);
// console.log(greet([1, 2, 3, 4]));
// console.log(vova);
// console.log(customer);
// ===================================
// ES modules
// let vova = new Customer("Vova", 25);
var vova = new _customerES["default"]("Vova", 25); // console.log(vova);

console.log(vova.sayHello());