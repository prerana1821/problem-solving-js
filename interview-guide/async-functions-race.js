// https://bigfrontend.dev/problem/implement-async-helper-race

function race(funcs) {
  return function (callback, data) {
    let completed = false;
    funcs.forEach((task) => {
      task((error, data) => {
        if (completed) return;
        completed = true;
        if (error) {
          callback(error, undefined);
        } else {
          callback(undefined, data);
        }
      }, data);
    });
  };
}
