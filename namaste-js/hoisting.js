// var x = 7;

// function getName() {
//   console.log("Namaste Pre");
// }

// console.log(x);
// getName();

// function calculateSum(a, b) {
//   let result = a + b;

//   function multiplyByTwo(num) {
//     return num * 2;
//   }

//   let doubleResult = multiplyByTwo(result);

//   return doubleResult;
// }

// let finalResult = calculateSum(3, 5);

// function outer() {
//   var outerVar = "I am outer!";

//   function inner() {
//     var innerVar = "I am inner!";
//     console.log(outerVar); // Output: I am outer!
//   }

//   inner();
//   console.log(innerVar); // Error: innerVar is not defined
// }

// outer();

// console.log(movie); // Output: Inception
// console.log(getDirector()); // Output: Christopher Nolan

// var movie = "Inception";

// function getDirector() {
//   return "Christopher Nolan";
// }

// console.log(movie); // Output: Inception
// console.log(getDirector()); // Output: Christopher Nolan

// console.log("Initial x:", x); // Output: Initial x: undefined

// if (true) {
//   console.log("Inside if, y:", y); // Output: Inside if, y: undefined
//   var x = 10;
//   let y = 20;
//   console.log("Inside if, x:", x); // Output: Inside if, x: 10
//   console.log("Inside if, y:", y); // Output: Inside if, y: 20
// }

// console.log("Outside if, x:", x); // Output: Outside if, x: 10
// console.log("Outside if, y:", y); // Output: Uncaught ReferenceError: y is not defined

// console.log("Before function declaration - magicFunction:", magicFunction);
// // Output: Before function declaration - magicFunction: undefined

// magicFunction();
// // Output: Magic in action!

// function magicFunction() {
//   console.log("Magic in action!");
// }

// console.log("After function declaration - magicFunction:", magicFunction);
// // Output: After function declaration - magicFunction: function magicFunction() { console.log("Magic in action!"); }

console.log(
  "Before arrow function declaration - arrowFunction:",
  arrowFunction
);
// Output: Before arrow function declaration - arrowFunction: undefined

arrowFunction();
// Output: Uncaught TypeError: arrowFunction is not a function

let arrowFunction = () => {
  console.log("Arrow function magic!");
};

console.log("After arrow function declaration - arrowFunction:", arrowFunction);
// Output: After arrow function declaration - arrowFunction: () => { console.log("Arrow function magic!"); }
