/* 
The Promise.race() method returns a promise that fulfills or rejects as
soon as one of the promises in an iterable fulfills or rejects, with the
value or reason from that promise.
*/

/* 
Understanding:
    1. returns single promise
    2.. returns or rejects the promise  that fullfills or gets rejected first

*/

function myPromiseRace(list) {
  return new Promise(function (resolve, reject) {
    list.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

// // Input:
// const test1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, "one");
// });
// const test2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 100, "two");
// });
// const test3 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 200, "three");
// });

// myPromiseRace([test1, test2, test3])
//   .then(function (value) {
//     // first two resolve, 3rd fails, but promise2 is faster
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// // Output:
// // "two"

// Input:
const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 40, "three");
});
myPromiseRace([test1, test2, test3])
  .then(function (value) {
    // first two resolve, 3rd fails, but promise3 is faster
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
// Output: "three";
