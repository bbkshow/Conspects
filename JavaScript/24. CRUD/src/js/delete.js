// Id
// Method Delete

let BASE_URL = "http://localhost:4040/books";

function removeBook(BASE_URL, bookId) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    };

    return fetch(BASE_URL + "/" + bookId, options).then((res) => res.json());
}

removeBook(BASE_URL, 6);
