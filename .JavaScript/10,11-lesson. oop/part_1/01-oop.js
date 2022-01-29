let salary = 15000;
let overTime = 15;
let rate = 45;

function paySalary(salary, rate, overtimeWork) {
  return (salary + overtimeWork) * rate;
}

// ==============================

let vova = {
  name: 'Vova',
  salary: 15000,
  overTime: 15,
  rate: 45,
  paySalary() {
    return (this.salary + this.overTime) * this.rate;
  },
};

let sara = {
  name: 'Sara',
  salary: 25000,
  overTime: 50,
  rate: 45,
  paySalary() {
    return (this.salary + this.overTime) * this.rate;
  },
};

let bob = {
  ...sara,
  name: 'bob',
};
console.log(bob);
