const throttle = (task, count = task.length, callback, delay = 1000) => {
  let lastFunc;
  let lastRan;

  let queue = [];

  return function () {
    if (!lastRan) {
      queue = [...queue, ...task];
      const execute = queue.splice(0, count);
      callback(execute);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= delay) {
          queue = [...queue, ...task];
          const execute = queue.splice(0, count);
          callback(execute);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
};

btn.addEventListener(
  "click",
  throttle(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    2,
    (task) => {
      console.log(task);
    },
    2000
  )
);
