// Axios

/*
GET
POST
PATCH vs PUT
DELETE
*/

// axios.get()
// axios.post()

class HTTP {
    get(url, options = {}) {
        return new Promise((resolve, reject) => {
            return fetch(url, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            let options = {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            };
            return fetch(url, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    patch(url, data, id) {
        return new Promise((resolve, reject) => {
            let options = {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            };
            return fetch(url + "/" + id, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    delete(url, id) {
        return new Promise((resolve, reject) => {
            let options = {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            };
            return fetch(url + "/" + id, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
}

let http = new HTTP();

// ==============================
// GET
// let url = "https://jsonplaceholder.typicode.com/users";
// // http.get(url).then((users) => console.log(users));
// http.get(url).then((users) => displayData(users));

// function displayData(data) {
//     console.log(data);
// }

// ========================
// POST
// let newUser = {
//     name: "Dracula",
//     email: "dracula@i.ua",
// };

// let url = "http://localhost:3000/users";

// http.post(url, newUser);

// ========================
// // PATCH
// let updateUser = {
//     name: "Sauron",
//     email: "sauron@i.ua",
// };

// let url = "http://localhost:3000/users";

// http.patch(url, updateUser, 3);

// ==========================
// DELETE

let url = "http://localhost:3000/users";
http.delete(url, 3);
