// const getName = (input) => input.name;
// const getUppercaseName = (input) => input.toUpperCase();
// const getFirstName = (input) => input.split(" ")[0];
// const getReversedName = (input) => input.split("").reverse().join("");

// function pipe(...funcs) {
//   return function (initialArgument) {
//     return funcs.reduce((acc, func) => {
//       return func(acc);
//     }, initialArgument);
//   };
// }

// function asyncPipe(...funcs) {
//   return function (initialArgument) {
//     return funcs.reduce((acc, func) => {
//       return acc.then((value) => func(value));
//     }, Promise.resolve(initialArgument));
//   };
// }

// const data = pipe(getName, getUppercaseName, getFirstName, getReversedName);

// console.log(data({ name: "prerana" }));

// const getUppercaseNameAsync = (input) => {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(input.toUpperCase()), 3000)
//   );
// };

// const pipeAsync = asyncPipe(
//   getName,
//   getUppercaseNameAsync,
//   getFirstName,
//   getReversedName
// );

// pipeAsync({ name: "Async" }).then((result) => console.log(result));

// function pipe(...funcs) {
//   return function (initialArgument) {
//     return funcs.reduce((result, func) => {
//       return func(result);
//     }, initialArgument);
//   };
// }

function pipeObjFunction(obj) {
  return function (...args) {
    for (let key in obj) {
      let val = obj[key];

      if (typeof val === "function") {
        obj[key] = val(...args);
      } else {
        obj[key] = pipeObjFunction(val)(...args);
      }
    }
    return obj;
  };
}

let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(pipeObjFunction(test)(1, 1, 1));

// Output:
// {
//   "a": {
//     "b": 3,
//     "c": 1
//   },
//   "d": -1,
//   "e": 1,
//   "f": true
// }
