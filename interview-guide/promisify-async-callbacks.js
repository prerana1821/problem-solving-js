/* 
Implement a function `promisify()` which converts callback
based async functions to a promisified version.
*/

function promisify(asyncFunction) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      const errorFirstCallback = (error, result) => {
        if (error instanceof Error) {
          reject(error);
        } else {
          resolve(result);
        }

        asyncFunction(errorFirstCallback, ...args);
      };
    });
  };
}

function multiply(a, b, callback) {
  setTimeout(() => callback(null, a * b), 1000);
}

const multiplyPromise = promisify(multiply);
multiplyPromise(1, 2)
  .then((firstResult) => multiplyPromise(firstResult, 3))
  .then((secondResult) => multiplyPromise(secondResult, 4))
  .then((finalResult) =>
    console.log(`Final result is
${finalResult}`)
  )
  .catch((error) => console.log("Found error", error));
// Final result is 24

multiplyPromise(1, 2)
  .then((firstResult) => multiplyPromise(firstResult, 3))
  .then((finalResult) =>
    console.log(`Final result is
${finalResult}`)
  )
  .catch((error) => console.log("Found error", error));
// Final result is 6
