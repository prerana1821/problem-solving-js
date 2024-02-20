function deeperExample() {
  let outerValue1 = 900;

  return function () {
    let outerValue2 = 7;

    function innerFunction() {
      console.log(outerValue2, outerValue1);
    }

    innerFunction();
  };
}

const deepClosure = deeperExample();
deepClosure(); // Output: 7 900

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
