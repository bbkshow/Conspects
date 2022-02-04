// ASYNC /Await

/*
GET
POST
PATCH
DELETE
*/

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
    async get(url, options = {}) {
        try {
            let response = await fetch(url, options);
            let responseData = await response.json();
            return responseData;
        } catch (err) {
            return err;
        }
    }

    async post(url, data) {
        try {
            let options = {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            };

            let response = await fetch(url, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return err;
        }
    }

    async patch(url, data, id) {
        try {
            let options = {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            };

            let response = await fetch(url + "/" + id, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return err;
        }
    }

    async delete(url, id) {
        try {
            let options = {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            };

            let response = await fetch(url + "/" + id, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return err;
        }
    }
}

let http = new HTTP();

// ==============================
// GET
// let url = "http://localhost:3000/users";
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
