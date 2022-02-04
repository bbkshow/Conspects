class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello = () => {
        console.log(`Hello ${this.name}, ${this.age}`);
    };
}

export default Customer;
