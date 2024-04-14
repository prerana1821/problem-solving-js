// function deeperExample() {
//   let outerValue1 = 900;

//   return function () {
//     let outerValue2 = 7;

//     function innerFunction() {
//       console.log(outerValue2, outerValue1);
//     }

//     innerFunction();
//   };
// }

// const deepClosure = deeperExample();
// deepClosure(); // Output: 7 900

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log("Count incremented:", count);
//   }

//   function decrement() {
//     count--;
//     console.log("Count decremented:", count);
//   }

//   function getCount() {
//     return count;
//   }

//   return {
//     increment,
//     decrement,
//     getCount,
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1.increment(); // Output: Count incremented: 1
// counter1.increment(); // Output: Count incremented: 2
// counter2.decrement(); // Output: Count decremented: -1

// console.log(counter1.getCount()); // Output: 2
// console.log(counter2.getCount()); // Output: -1

// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// console.log(z);
// z();

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// function x() {
//   // var a = function y() {
//   //   console.log(a);
//   // };
//   // y();
// }
// x(function y() {
//   console.log(a);
// });

// function x() {
//   var a = function y() {
//     console.log(a);
//   };
//   y();
// }
// x();

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function x(a) {
//   function y(b) {
//     function z(c) {
//       console.log(a, b, c);
//       return a + b + c;
//     }
//     return z;
//   }
//   return y;
// }

// let a = x(10);
// let c = a(20);
// let b = c(30);

// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello World");
// }

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namaste Javascript");
// }
// x();

function x() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Hello");
}

x();
