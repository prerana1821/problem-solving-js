function multiply(a, b) {
  return a * b;
}

const multiplyBy2 = multiply.bind(this, 3);
console.log(multiplyBy2(4)); // will refer to b
// when we call the bind method is actually gives a copy of the muptiple method and it doesn't invoke it directly.

const multiplyBy3 = multiply.bind(this, 3, 5); // will refer to a and b
console.log(multiplyBy3());

// using closures
const curringWithClosures = (a) => {
  return function (b) {
    return a + b;
  };
};

const add = curringWithClosures(10);
console.log(add(20));

console.log(curringWithClosures(2)(5));

// Interview Question
function curry(func) {
  function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...more) {
        return curried(...args, ...more);
      };
    }
  }
  return curried;
}

function multiplyByThree(a, b, c) {
  return a * b * c;
}
// To get the curried version of multiply we pass it to our above curry function.
let curried = curry(multiplyByThree);
console.log(curried(2)(3)(4)); // 24
console.log(curried(2, 3)(4)); // 24
console.log(curried(2, 3, 4)); // 24
console.log(curried(5)(6, 7)); // 210

// Interview Question 2

// sum(1)(2)(3)…(n)- A very common question which uses the above concept and can also be solved in a similar way to the above solution.

// function sum(...args) {
//   function inner(...more) {
//     return sum(...args, ...more);
//   }
//   let total = args.reduce((a, b) => a + b, 0);
//   inner.toString = () => total;

//   return inner;
// }
// console.log(sum(1)(2)(2)(3)); // 8
// console.log(sum(1, 2)(2, 3)); //8

// what is helper.toString in the below code?
// the helper.toString property is used as a way to return the current value of the num variable as a string.
function sum(num) {
  const helper = (num2) => {
    return sum(num2 + num);
  };
  helper.toString = () => num;
  return helper;
}
console.log(sum(1)(3)(6) == "10"); // true
