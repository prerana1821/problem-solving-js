let userName = {
  firstName: "Prerana",
  lastName: "Nawar",
  printFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

function printFullName(homeTown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${homeTown}, ${state}`);
}
// userName.printFullName();

let userName2 = {
  firstName: "pre",
  lastName: "codes",
};

// to print the full name of userName2, we can do function borrowing using call, apply, bind method.
// function borrowing is a concept where in we can borrow functions from other objects and use it with the data of some other objects

// userName.printFullName.call(userName2);

// printFullName.call(userName2); // Prints pre codes
// printFullName.call(userName2, "Mumbai"); // Prints pre codes from Mumbai
printFullName.call(userName2, "Mumbai", "Maharashtra"); // Prints pre codes from Mumbai, Maharashtra

// the only difference between call and apply method is the way we pass arguments. we pass arguments in apply in an array

printFullName.apply(userName2, ["Mumbai", "Maharashtra"]); // Prints pre codes from Mumbai, Maharashtra

// the difference between call and bind is bind gives the copy of the function which can be invoked later.

let printMyName = printFullName.bind(userName2, ["Mumbai", "Maharashtra"]);

printMyName(); //Prints pre codes from Mumbai, Maharashtra
