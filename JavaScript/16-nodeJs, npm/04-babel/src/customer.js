let customer = "John Doe";

class User {
    #status;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.#status = "Admin";
    }

    sayHello = () => {
        console.log(`Hello ${this.name}, ${this.age}, ${this.#status}`);
    };
}

export default Customer;

module.exports = {
    customer,
    User,
};
