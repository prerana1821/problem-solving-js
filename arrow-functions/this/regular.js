// 1. simple invocation

// function func() {
//   console.log(this); // window
// }

// // Simple invocation
// func();

// // 2. method invocation
// const obj = {
//   method() {
//     console.log(this);
//   },
// };

// // Method invocation
// obj.method(); // logs method

// 3. constructor invocation
// function func() {
//   console.log(this);
// }

// new func(); // logs an instance of func

// 4. indirect invocation
// function func() {
//   console.log(this);
// }

// const myContext = { value: "A" };

// func.call(myContext); // logs { value: 'A' }
