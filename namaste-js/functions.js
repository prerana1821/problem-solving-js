// // how functions work?

// var x = 1;
// a();
// b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
// console.log(x); // 3

// function a() {
//   var x = 10; // localscope because of separate execution context
//   console.log(x); // 1
// }

// function b() {
//   var x = 100;
//   console.log(x); // 2
// }

// // difference between a function statement and experssion - HOISTING

// greet();
// // greetExperssion(); // ERROR - becuase in function experssion, functions are treated as values and greetExperssion in undefined.

// // function statement === function declaration

// function greet() {
//   console.log("Hello");
// }
// greet();

// // function experssion

// const greetExperssion = function () {
//   console.log("Hello by precodes");
// };
// greetExperssion();

// // anonymous functions

// // error: because function statement requires function name
// // function () {

// // }

// // correct way to define anonymus function
// const anonymousFunction = function () {}; // also a function expression

// // named function expression
// var namedfunction = function xyz() {
//   console.log("called");
//   console.log(xyz);
// };

// namedfunction();
// // xyz();: ERROR: since xyz is not defined in global scope

// // functions passed as arguements

// var functionAsArg = function (param1) {
//   console.log(param1);
// };
// function xyz() {}
// functionAsArg(xyz);

// // functions returned with function

// var functionReturned = function (param1) {
//   return function () {
//     console.log("Hello");
//     return "New";
//   };
// };
// console.log(functionReturned()());

// IIFE

// (function () {
//   console.log("Hello");
// })();

// (() => {
//   console.log("nice");
// })();

// (function iifeFunc() {
//   console.log("good");
//   // You can call iifeFunc() here if you want
// })();

// // iifeFunc(): ERROR because it is not in global space

// // pure functions
// const add = (x, y) => x + y;
// console.log(add(2, 3)); // 5

// // impure functions
// let counter = 0;

// const incrementCounter = () => {
//   counter++;
//   return counter;
// };

// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// // higher order functions
// function abc() {
//   console.log("abc");
// }

// function def(param) {
//   param();
// }

// def(abc);
// // def is  a higher order function
// // abc is a callback function

// const calculate = function (array, callback) {
//   let output = [];
//   array.forEach((radius) => {
//     const result = callback(radius);
//     output.push(result);
//   });
//   return output;
// };

// console.log(
//   calculate([1, 2, 3, 4], (radius) => {
//     return Math.PI * radius ** 2;
//   })
// );

// Array.prototype.calculate = function (callback) {
//   let output = [];
//   this.forEach((radius) => {
//     const result = callback(radius);
//     output.push(result);
//   });
//   return output;
// };

// Array.prototype.calculate = function (operation) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(operation(this[i]));
//   }
//   return output;
// };

// console.log(
//   [1, 2, 3, 4].calculate((radius) => {
//     return Math.PI * radius ** 2;
//   })
// );

// function hello() {
//   console.log("Hii");
// }
// hello();

// var hello2 = function () {
//   console.log("Nice");
// };

// hello2();

// // named function expression
// var good = function nice() {
//   console.log("nice called");
//   console.log(nice);
// };
// good();
// // nice();

// Array.prototype.calculate = function (callback) {
//   const result = [];

//   this.forEach((item) => {
//     let output = callback(item);
//     result.push(output);
//   });

//   return result;
// };

// console.log(
//   [1, 2, 3, 4].calculate((radius) => {
//     return Math.PI * radius ** 2;
//   })
// );

console.log(
  [1, 2, 3, 4, 5, 6].filter((item) => {
    return item % 2 === 0;
  })
);

Array.prototype.myFilter = function (callback) {
  let results = [];

  this.forEach((item) => {
    const output = callback(item);
    if (output) {
      results.push(item);
    }
  });

  return results;
};

console.log(
  [1, 2, 3, 4, 5, 6].myFilter((item) => {
    return item % 2 === 0;
  })
);

console.log(
  [1, 2, 3, 4, 5, 6].reduce((acc, item) => {
    return acc + item;
  }, 0)
);

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;

  this.forEach((item) => {
    const result = callback(acc, item);
    acc = result;
  });

  return acc;
};

console.log(
  [1, 2, 3, 4, 5, 6].myReduce((acc, item) => {
    return acc + item;
  }, 0)
);
