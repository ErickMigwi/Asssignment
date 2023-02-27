// Question 1
// Base class for all employees
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working.`);
  }
}
let Employee1 =new Employee("Erick", 200000000)
console.log(Employee1);

// Pharmacist class
class Pharmacist extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  writePrescription(patient) {
    console.log(`${this.name} writes a prescription for ${patient}.`);
  }
}
let Pharmacist1 = new Pharmacist("Erick", 40000000)
console.log(Pharmacist1);
// Cashier class
class Cashier extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  collectCash(amount) {
    console.log(`${this.name} collects ${amount} cash.`);
  }

  returnCash(amount) {
    console.log(`${this.name} returns ${amount} cash to the pharmacy.`);
  }
}

// Manager class
class Manager extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.isPharmacist = false;
    this.isCashier = false;
  }

  setPharmacist() {
    this.isPharmacist = true;
  }

  setCashier() {
    this.isCashier = true;
  }

  manageEmployees() {
    console.log(`${this.name} is managing employees.`);
  }

  work() {
    if (this.isPharmacist) {
      console.log(`${this.name} is working as a pharmacist.`);
    } else if (this.isCashier) {
      console.log(`${this.name} is working as a cashier.`);
    } else {
      console.log(`${this.name} is managing employees.`);
    }
  }
}

// Question 2
function reverseStringInGroupsOfFour(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 4) {
    const groupof4 = string.slice(i, i + 4);
    result += groupof4.split('').reverse().join('');
  }
  return result;
}
console.log(reverseStringInGroupsOfFour("Lorem at"));

// Question 3
function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  console.log(sumOfArray([1,2,4,7]));
  // Question 4
let ConstructiveCritisim = "This is a type of feedback given to a person with the intention of improving the person or his/her work. Constructive criticism is not harsh as compared to negative critcism. It's main objective is building a person's selfconfidence and skills rather than tearing them down. Consturctive criticism is considered a  tool for personal growth and development"