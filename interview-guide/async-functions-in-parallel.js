/* 
    Implement a function that takes a list of async functions as input and a callback function and executes the input tasks in parallel i.e all at once and invokes the callback after every task is finished.

    Understanding:
        1.  input - an array of async functions, callback to be executed after all the tasks are finished  executing

*/

function asyncParallel(array, callback) {
  const results = [];
  let tasksComplete = 0;

  array.forEach((task) => {
    task((value) => {
      results.push(value);
      tasksComplete++;

      if (tasksComplete >= array.length) {
        callback(results);
      }
    });
  });
}

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];
asyncParallel(taskList, (result) => {
  console.log("results", result);
});
// Output: "results"[(1, 6, 7, 7, 9, 9)]; // [object Array] (6)
