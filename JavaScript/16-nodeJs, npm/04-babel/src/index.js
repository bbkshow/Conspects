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
import Customer from "./customerES.js";

// let vova = new Customer("Vova", 25);
let vova = new Customer("Vova", 25);

// console.log(vova);
console.log(vova.sayHello());
