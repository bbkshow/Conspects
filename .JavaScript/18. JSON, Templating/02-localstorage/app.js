// Localstorage

// Add
// Get
// Remove
// Clear Storage

// window.localStorage();
// localStorage()

// ==================

let bob = {
    name: "bob",
    age: "30",
    status: "moderator",
};

// Add
let user = localStorage.setItem("user", "vova");
let admin = localStorage.setItem("admin", "sara");
localStorage.setItem("moderator", JSON.stringify(bob));

// ===============================
// GET item

// console.log(typeof localStorage.getItem("admin"));
// console.log(typeof localStorage.getItem("moderator"));

// let adminKey = localStorage.getItem("admin");

// if (adminKey) {
//     console.log("Нашли");
// }
// console.log(typeof localStorage.getItem("pizza"));
// console.log(typeof null);

// ===============================
// Remove item
// localStorage.removeItem("admin");

// ===============================
// Clear localstorage
// localStorage.clear();

// Session storage
// ==============================
// sessionStorage.setItem();
// sessionStorage.getItem();
// sessionStorage.removeItem();
// sessionStorage.clear();
