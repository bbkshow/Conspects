// v.14.15.3

// 14- minor / major
// 15 - addition fiatures
// 3 - pathch

// console.log("Hello from NodeJs");

// let getSum = (a, b) => {
//     return a + b;
// };
// console.log(getSum(5, 10));
// console.log(getSum(100, 10));

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello = () => {
//         console.log(this.name);
//     };
// }

// let vova = new User("Vova").sayHello();
// let sara = new User("Sara").sayHello();

// alert("hello!!!");
// console.log(window);
// console.log(document);

// console.log(process);
// console.log(process.env);

// __dirname
// __filename

// console.log(__dirname);
// console.log(__filename);

const http = require("http");

const hostname = "127.0.0.1";
const port = 8081;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
