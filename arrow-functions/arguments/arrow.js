// const myArrowFunction = () => {
//   console.log(arguments);
// };

// myArrowFunction("c", "d");

// function myRegularFunction() {
//   const myArrowFunction = () => {
//     console.log(arguments);
//   };

//   myArrowFunction("c", "d");
// }

// myRegularFunction("a", "b");

function myRegularFunction() {
  const myArrowFunction = (...args) => {
    console.log(args);
  };

  myArrowFunction("c", "d");
}

myRegularFunction("a", "b");
