import axios from "axios";

// axios.get();
// axios.post();
// axios.patch();
// axios.delete();

let BOOKS_URL = "http://localhost:4040/books";
axios
    .get(BOOKS_URL)
    .then((res) => res.data)
    .then((books) => console.log(books));
