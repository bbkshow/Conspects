// by ID
// Method PUT
// Method PATCH

let BASE_URL = "http://localhost:4040/books";

function updateById(BASE_URL, bookToUpdate, bookId) {
    let options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(bookToUpdate),
    };

    return fetch(BASE_URL + "/" + bookId, options).then((res) => res.json());
}

// let bookToUpdate = {
//     title: "HTML",
//     author: "W3 agency",
//     genres: ["it"],
//     rating: 10.0,
// };

// Put
// {
//     "title": "HTML",
//     "author": "W3 agency",
//     "id": 5
//   }

// Patch
// {
//     "id": 2,
//     "title": "JS",
//     "author": "JS Books author",
//     "genres": [
//       "фантастика"
//     ],
//     "rating": 8.51
//   },

let bookToUpdate = {
    title: "JS",
    author: "JS Books author",
};

updateById(BASE_URL, bookToUpdate, 2);
