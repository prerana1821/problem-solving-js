const person = {};

// console.log(person.fullName?.fistName);

// let element = document.querySelector(".p")?.innerHTML;
// console.log(element);

// Don’t overuse the optional chaining
// fullName is optional
// console.log(person.fullName?.fistName);
// console.log(person?.fullName?.fistName);

// If user (object) exists then call
// let user = null;
// let user = {
// //   sayHi() {},
// };
// let x = 0;

// user?.sayHi(x++); // doesn't reach x++

// console.log(x); // 0

// // If admin (method) exits then call
// let userAdmin = {
//   //   admin() {
//   //     return "I am admin";
//   //   },
// };

// let userGuest = {};
// // console.log(userAdmin.admin );
// console.log(userAdmin.admin?.()); // I am admin
// console.log(userGuest.admin?.()); // nothing (no such method)

// with square brackets to access props
// let key = "firstName";
// let user1 = {
//   firstName: "John",
// };

// let user2 = null;

// console.log(user1?.[key]); // John
// console.log(user2?.[key]); // undefined

// const user = {
//   name: "",
// };

// delete user?.name; // delete user.name if user exists

// We can use ?. for safe reading and deleting, but not writing
// The optional chaining ?. has no use at the left side of an assignment.

let user = {};
// user?.name = "John"; // Error, doesn't work
console.log(user);
