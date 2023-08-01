// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Max";
//   constructor() {
//     super();
//     this.age = 30;
//   }
//   greet = () => {
//     console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
//   };
//   greet() {
//     console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function greet() {
//     console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// Person.describe = function () {
//   console.log("Creating Persons...");
// };

// console.dir(Person);
// const p = new Person();

// p.greet();
// p.printAge();
// console.log(p.__proto__);

// const p2 = new p.__proto__.constructor();

// console.log(p.toString());
// console.dir(Object);

// const p = new Person();
// console.log(p);
// p.greet();
// const p2 = new Person();

// const btn = document.getElementById("btn");
// btn.addEventListener("click", p.greet);
// btn.addEventListener("click", p.greet.bind(p));

const course = { title: "Complete JS Guide", rating: 5 };
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: true,
    },
  }
);

// student.name = "Max";
Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 1.2,
  writable: false,
});

course.printRating();
student.printProgress();
console.log(student);
