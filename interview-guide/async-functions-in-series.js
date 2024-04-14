/* 

Implement a function that takes a list of async functions as input and
executes them in a series that is one at a time. The next task is
executed only when the previous task is completed.

*/

async function asyncSeriesExecuter(promises) {
  for (let promise of promises) {
    try {
      const value = await promise;
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  }
}

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];
asyncSeriesExecuter(promises);
// Output: "Completing 3";
// ("Completing 1");
// ("Completing 7");
// ("Completing 2");
// ("Completing 5");
