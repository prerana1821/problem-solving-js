/* 
The Promise.allSettled() method returns a promise that fulfills after all
of the given promises have either fulfilled or rejected, with an array of
objects that each describes the outcome of each promise.

Promise.allSettled() takes an array of promises as input and
returns an array with the result of all the promises whether they
are rejected or resolved.

*/

// Understanding:
/* 
Promise.allSettled()` takes an array of promises as input and
returns a promise object.
1. The returned promise will be resolved when all the
promises in the input array are settled.
2. The returned promise will be resolved with an array of
objects that each describes the status of each promise
(either fulfilled or rejected).

*/

Promise.allSettled = function (promises) {
  const results = [];

  let promiseSettled = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return resolve(results);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
          promiseSettled++;

          if (promiseSettled === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          results[index] = { status: "rejected", error };
          promiseSettled++;

          if (promiseSettled === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

const promise1 = Promise.allSettled([
  Promise.resolve(1),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  Promise.resolve(3),
  Promise.reject(4),
]);

promise1
  .then((value) => console.log("Resolved with", value))
  .catch((value) => console.log("Rejected with", value));

// Resolved with
// [
// { status: 'fulfilled', value: 1 },
// { status: 'fulfilled', value: 2 },
// { status: 'fulfilled', value: 3 },
// { status: 'rejected', reason: 4 }
// ]
