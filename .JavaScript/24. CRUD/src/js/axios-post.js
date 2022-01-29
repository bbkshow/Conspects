import axios from "axios";

let BOOKS_URL = "http://localhost:4040/books";
let options = {
    firstName: "Fred",
    lastName: "Flintstone",
};

axios
    .post(BOOKS_URL, options)
    .then((res) => res.data)
    .then((books) => console.log(books));
