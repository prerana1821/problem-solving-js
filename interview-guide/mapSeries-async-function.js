const mapSeries = (array, callback) => {
  return new Promise((resolve, reject) => {
    let output = [];

    const finalResult = array.reduce((acc, current) => {
      return acc.then((value) => {
        return new Promise((resolve, reject) => {
          callback(current, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve([...value, result]);
            }
          });
        });
      });
    }, Promise.resolve([]));

    finalResult
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
  // i am async iteratee function
  // do async operations here
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    // throw error
    if (num === 12) {
      callback(true);
    } else {
      callback(null, num);
    }
  }, 1000);
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));

// // each number will be printed after a delay of 2 seconds
// Output: 2;
// 4;
// 6;
// 8;
// 10;
// ("success:2,4,6,8,10"); // this will be printed immediately after last
