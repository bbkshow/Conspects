let express = require("express");
let app = express();

let chalk = require("chalk");

// let hello = "Hello world";
// console.log(chalk.yellow.bold.italic(hello));

app.use(express.static("public"));

app.get("/", (reques, response) => {
    response.send("Hello from nodejs");
});

app.get("/home", (req, res) => {
    res.send({ id: 1, name: "Vova", age: 25 });
});

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

app.get("/friends", (req, res) => {
    res.status(200).send(friends);
});

let PORT = 8081;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    // console.log(`Listening on port: ${PORT}... `);
    console.log(chalk.green.bold.italic(`Listening on port: ${PORT}... `));
});
