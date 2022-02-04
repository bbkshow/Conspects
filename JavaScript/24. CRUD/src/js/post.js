let BASE_URL = "http://localhost:4040/books/";

function addBook(BASE_URL, newBook) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newBook),
    };

    return fetch(BASE_URL, options).then((res) => res.json());
}

let book = {
    title: "Властелин Колец",
    author: "Толкиен",
    genres: ["фэнтези, сказка"],
    rating: 10,
};

addBook(BASE_URL, book);
