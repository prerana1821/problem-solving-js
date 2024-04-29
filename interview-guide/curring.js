let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(5)());

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

function sum(num) {
  function helper(num2) {
    return sum(num + num2);
  }
  helper.toString = () => num;
  return helper;
}

const sum1 = sum(1);
sum1(2) == 3; // true
sum1(3) == 4; // true
sum(1)(2)(3) == 6; // true
sum(5)(-1)(2) == 6; // true
