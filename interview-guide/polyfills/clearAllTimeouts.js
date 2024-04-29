// /*
//     Understanding:
//         - Implement a function `clearAllTimers()` which clears out all of the timeouts scheduled by `setTimeout`.
//         - Output: Nothing prints out since all the timers are cleared.
// */

(function () {
  const timerMap = {};

  const nativeSetTimeout = window.setTimeout;
  const nativeClearTimeout = window.clearTimeout;

  window.setTimeout = function (callback, delay, ...args) {
    const id = nativeSetTimeout(callback, delay, ...args);

    timerMap[id] = true;
    return id;
  };

  window.clearTimeout = function (id) {
    nativeClearTimeout(id);

    delete timerMap[id];
  };

  window.clearAllTimers = function () {
    for (const id in timerMap) {
      clearTimeout(id);
    }
  };
})();

const startTime = Date.now();
const print = () => {
  console.log(`Timer executed after ${Date.now() - startTime} ms`);
};

const timer1 = setTimeout(print, 750);
const timer2 = setTimeout(print, 1000);
const timer3 = setTimeout(print, 1500);

console.log("Hello");
clearAllTimers();

// setTimeout(print, 750);
// setTimeout(print, 1000);
// setTimeout(print, 1250);
// setTimeout(print, 1500);
// setTimeout(() => clearAllTimers(), 1200);
