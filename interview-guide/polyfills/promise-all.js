// The Promise.all() accepts an array of promises and returns a promise
// that resolves when all of the promises in the array are fulfilled or when
// the iterable contains no promises. It rejects with the reason of the first
// promise that rejects.

// Understanding:
// 1. returns a promise
// 2. reject the promise even if one promise gets rejected
/// 3. wait for all the promises to be fulfilled to return the result in sequence

function myPromiseAll(list) {
  let allResults = [];
  let promiseCount = 0;

  return new Promise(function (resolve, reject) {
    list.forEach((promise, index) => {
      promise
        .then((val) => {
          allResults[index] = val;
          promiseCount += 1;

          if (promiseCount === list.length) {
            resolve(allResults);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
// Output:
//"got results" [1000,5000,3000]

function task1(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}
const taskList1 = [task1(1000), task1(5000), task1(3000)];
//run promise.all
myPromiseAll(taskList1)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
// Output: "Rejected";
