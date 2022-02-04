// Regular expretions

// let re = /hello/;

// console.log(re);
// console.log(typeof re);
// console.log(re instanceof RegExp);
// console.log(re.source);

// RegExp Methods
// ==================================
// exec() null or arr
// let result = re.exec("this is hello world");
// console.log(result);

// test() true / false
// let result = re.test("pizza");
// console.log(result);

// String
//=================================
// match(); null or arr
// let str = "to be or not to be";
// let result = str.match(re);
// console.log(result);

// search() index or -1
// let str = "hello this is hello world";
// let result = str.search(re);
// console.log(result);

// replace()
// let str = "this is hello world";
// // let result = str.replace("is", "are");
// let result = str.replace(re, "pizza");
// console.log(result);

// /\.m?js$/,  mjs, js

// /\.css$/i,

// /\.s[ac]ss$/i, sass scss

// /\.hbs$/

// /\.json$/

// /\.css$/i

// Квантификаторы
// let re = /hello/i;
// let re = /hello/g;
// let re = /hello/gi;
// let re = /^hello/;
// let re = /hello$/;
// let re = /h.llo/;
// let re = /h*llo/;
// let re = /h*llo/;
// let re = /gra?e?y/;
// let re = /gra?e?y/;
// let re = /hello[A-Za-z]world/;
let re = /\.css/;

let result = re.test("css");
console.log(result);

/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
