let BOOKS_URL = "http://localhost:4040/books";

function fetchBooks() {
    return fetch(BOOKS_URL).then((res) => res.json());
}

function fetchBooksById(BOOKS_URL, bookId) {
    return fetch(BOOKS_URL + "/" + bookId).then((res) => res.json());
}

fetchBooks().then((books) => displayBooks(books));
fetchBooksById(BOOKS_URL, 3).then((book) => displayBooks(book));

function displayBooks(books) {
    console.log(books);
}
