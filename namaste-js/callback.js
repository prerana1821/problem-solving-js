// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// // document.getElementById("clickMe").addEventListener("click", function xyz() {
// //   //when event click occurs, this callback function (xyz) is called into callstack
// //   console.log("Button clicked");
// // });

// function attachEventList() {
//   //creating new function for closure
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button clicked", ++count); //now callback function forms closure with outer scope(count)
//   });
// }
// attachEventList();

function printData(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printData("A", () => {
    printData("B", () => {
      printData("C", () => {});
    });
  });
}


printAll();

// javascript output based interview questions on callback?
