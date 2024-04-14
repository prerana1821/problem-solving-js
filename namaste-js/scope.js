function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();

// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// var b = 10;
// a();

// How does JavaScript handle scope in asynchronous code execution, such as with callbacks or Promises?

// let message = "Hello JavaScript world!";
// function printMessageAfterDelay(delay, callback) {
//   setTimeout(() => {
//     console.log(message);
//     callback();
//   }, delay);
// }

// printMessageAfterDelay(1000, () => {
//   let message = "Hello Pre world!";
//   console.log(message);
// });

let message = "Hello, World!";

function printMessageAfterDelay(delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

message = "Goodbye, World!";

printMessageAfterDelay(1000);
