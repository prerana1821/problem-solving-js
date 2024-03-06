// Promise.any() takes an iterable of Promise objects. It returns a single
// promise that fulfills as soon as any of the promises in the iterable
// fulfills, with the value of the fulfilled promise. If no promises in the
// iterable fulfill (if all of the given promises are rejected), then the
// returned promise is rejected with an AggregateError, a new subclass of
// Error that groups together individual errors..

/* 
  Understanding:
    1. returns one promise that fulfills first
    2. if all the promises are rejected then an array of errors is returned

*/

function myPromiseAny(list) {
  const promiseErrors = new Array(list.length);
  let count = 0;

  return new Promise(function (resolve, reject) {
    list.forEach((promise) => {
      promise
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          promiseErrors[count] = error;
          count += 1;

          if (count === promiseErrors.length) {
            reject(promiseErrors);
          }
        });
    });
  });
}

// function myPromiseAny(list) {
//   const promiseErrors = new Array(list.length);
//   let count = 0;

//   return new Promise(function (resolve, reject) {
//     list.forEach((promise) => {
//       Promise.resolve(promise) //  when dealing with values that might be promises or non-promises.
//         .then(resolve)
//         .catch((error) => {
//           promiseErrors[count] = error;
//           count += 1;

//           if (count === promiseErrors.length) {
//             reject(promiseErrors);
//           }
//         });
//     });
//   });
// }

// TEST CASE 1
// // Input:
// const test1 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 500, "one");
// });
// const test2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 600, "two");
// });
// const test3 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 200, "three");
// });

// myPromiseAny([test1, test2, test3])
//   .then(function (value) {
//     // first and third fails, 2nd resolves
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// // Output: "two";

// TEST CASE 2
const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 600, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});
myPromiseAny([test1, test2, test3])
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    // all three fails
    console.log(err);
  });
// Output: ["three", "one", "two"];
