let sum = function (a) {
  return function (b) {
    console.log(a, b);
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(5)());

// function curry(fn) {
//   const helper = function (...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return (...args2) => helper.call(this, ...args, ...args2);
//     }
//   };
//   return helper;
// }

// let join = (a, b, c) => {
//   return `${a}_${b}_${c}`;
// };

// let curriedJoin = curry(join);

function curry(func) {
  const helper = function (...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return helper.call(this, ...args, ...args2);
      };
    }
  };

  return helper;
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

let curriedJoin = curry(join);

console.log(curriedJoin(13)(42)(3));
