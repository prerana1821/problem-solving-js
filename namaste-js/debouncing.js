const getData = () => {
  console.log("fetching data", Math.round(Math.random() * 5));
};

function debounce(fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return fn.apply(this, arguments);
    }, delay);
  };
}

// using arrow functions
function debounceWithArrow(fn, delay) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return fn(...args);
    }, delay);
  };
}

// debounce with immediate flag

const debounceImmediate = (func, wait, immediate) => {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    console.log(timeout);
    timeout = setTimeout(function () {
      //  allows the function to be executed immediately again if immediate is set to true. Without resetting timeout to null, subsequent immediate invocations wouldn't execute immediately.
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
    if (callNow) func.apply(context, args);
  };
};

// function debouneWithFlag(func, delay, immediate) {
//   let timer = null;
//   return (...args) => {
//     let callNow = immediate && !timer;

//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       timer = null;
//       if (!immediate) {
//         return func(...args);
//       }
//     }, delay);

//     if (callNow) {
//       return func(...args);
//     }
//   };
// }

document
  .getElementById("input")
  .addEventListener("input", debounceImmediate(getData, 300, true));
