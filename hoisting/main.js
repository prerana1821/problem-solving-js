function func() {
  console.log(answer);
  var answer = 2;
}
func();

var temp = "works";
function display() {
  console.log(temp);
  var temp = "not working";
}
display();

function foo(a) {
  a();
  function a() {
    console.log("yay");
  }
}

// foo(function () {
//   console.log("prerana");
// });
// foo();
// foo(undefined);

// This might sound weird but javascript is considering variable a to be "function" because it is defined as such in foo's function declaration.
// -Now as to why function a() is able to return the output of console.log even though it is called before it is declared in function foo() is due to the fact that the JavaScript interpreter "looks ahead" to find all the declarations (it's called function hoisting.
// http://adripofjavascript.com/blog/drips/variable-and-function-hoisting.html

// TypeError: undefined is not a function
// funcName();

// varName();
// var varName = function funcName() {
//   console.log("Definition not hoisted!");
// };

// prerana();

// function prerana() {
//   console.log("Hello");
// }

// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {
//     console.log("Hello");
//   }
// }
// b();
// console.log(a);

// function foo() {
//   function bar() {
//     return 3;
//   }
//   return bar();
//   function bar() {
//     return 8;
//   }

// }
// console.log(foo());

// function parent() {
//   var hoisted = "I'm a variable";
//   function hoisted() {
//     return "I'm a function";
//   }
//   return hoisted();
// }
// console.log(parent());

// console.log((foo()));
// function foo() {
//   var bar = function () {
//     return 3;
//   };
//   return bar();
//   var bar = function () {
//     return 8;
//   };
// }

// var myVar = "foo";
// (function () {
//   console.log("Original value was: " + myVar);
//   var myVar = "bar";
//   console.log("New value is: " + myVar);
// })();

// https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript
// https://www.freecodecamp.org/news/function-hoisting-hoisting-interview-questions-b6f91dbc2be8/
// https://www.freecodecamp.org/news/function-hoisting-hoisting-interview-questions-b6f91dbc2be8/
// https://gist.github.com/getify/11336871
// http://adripofjavascript.com/blog/drips/variable-and-function-hoisting.html
