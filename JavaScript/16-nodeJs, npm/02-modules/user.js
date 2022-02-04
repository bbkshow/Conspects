let customer = require("./customer");
const PI = 3.14;

let greet = (obj) => {
    return obj;
};

let vova = "Vova";

// module.exports = PI;
module.exports = {
    PI,
    greet,
    vova,
    customer,
};
