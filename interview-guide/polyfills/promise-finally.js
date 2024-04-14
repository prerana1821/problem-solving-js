/* 

`.finally()` method of promises accepts a callback function to
be called when the promise is settled (either fulfilled or
rejected). The `.finally()` method also returns a new Promise
object which ultimately allows you to chain calls of other
promise methods like `.then()` and `.catch()`

*/

/* 
    Understanding:
    1. finally takes a callback function as input
    2. returns a new Promise object wherein it will wait for the promise to be fulfilled (either resolved or rejected)
*/

Promise.finally = function (callback) {
  return new Promise((resolve, reject) => {
    let value = null;
    let isRejected = false;

    this.then(
      (val) => {
        isRejected = false;
        value = val;
        return callback();
      },
      (error) => {
        isRejected = true;
        value = error;
        return callback();
      }
    )
      .then(() => {
        if (isRejected) {
          return reject(value);
        }
        return resolve(value);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

Promise.resolve(10)
  .then((value) => console.log("Resolved with", value))
  .catch((error) => console.log("Rejected with", error))
  .finally(() => console.log("Perform some cleanup (or) handling"));

Promise.finally = function (callback) {
  return new Promise((resolve, reject) => {
    let value = null;
    let isRejected = false;

    this.then(
      (val) => {
        isRejected = false;
        value = val;
        return callback();
      },
      (error) => {
        isRejected = true;
        value = error;
        return callback();
      }
    )
      .then(() => {
        if (isRejected) {
          return reject(value);
        }
        return resolve(value);
      })
      .catch((err) => reject(err));
  });
};
