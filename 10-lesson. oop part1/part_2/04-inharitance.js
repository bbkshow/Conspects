// Inharitance
// class Parent { }
// class Dog { }

// // Inharitance

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getInfo() {
    console.log(`User ${this.firstName}, ${this.lastName}`);
  }

  sayHello() {
    console.log(`${this.firstName}, ${this.lastName}`);
  }
}

class Customer extends User {
  constructor(firstName, lastName, membership) {
    super(firstName, lastName);
    this.membership = membership;
  }

  // getInfo() {
  //     super.getInfo();
  // }

  // getInfo() {
  //     console.log(`Customer ${this.firstName}, ${this.lastName}`);
  // };
}

let sara = new Customer('Sara', 'Smith', 'Basic');
console.log(sara);

console.log(sara.getInfo());
