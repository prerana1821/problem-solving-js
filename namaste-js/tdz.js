// // console.log(a);
// let a = 10;
// console.log(a);
// console.log(b);
// var b = 30;
// console.log(b);
// console.log(window.a);
// console.log(window.b);

// example 2
// var y = 10;
// if (true) {
//   console.log(y); // What will this output?
//   let y = 20;
// }

// example 3
// function test() {
//   console.log(a); // What will this output?
//   let a = 5;
// }
// test();

// example 4
// var b = 10;
// function foo() {
//   console.log(b); // What will this output?
//   let b = 20;
// }
// foo();

// // example 5
// console.log(func()); // What will this output?
// const func = function () {
//   return "Hello, world!";
// };

function outer() {
  return function inner() {
    console.log(z); // What will this output?
    let z = "I am in TDZ";
  };
}
outer()();
