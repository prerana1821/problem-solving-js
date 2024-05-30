const MY_TIMER = {
  timerId: 1,
  queue: [],

  setTimeout: function (cb, time, ...args) {
    const id = this.timerId++;
    this.queue.push({
      id,
      cb,
      time: Date.now() + time,
      args,
    });
    this.queue.sort((a, b) => a.time - b.time);
    return id;
  },

  clearTimeout: function (removeId) {
    this.queue = this.queue.filter(({ id }) => id !== removeId);
  },

  run: function () {
    while (true) {
      const entry = this.queue.shift();
      const { cb, time, args } = entry;
      if (Date.now() > time) {
        cb(...args);
      } else {
        this.queue.unshift(entry);
      }
      if (this.queue.length === 0) {
        break;
      }
    }
  },
};

MY_TIMER.setTimeout(() => {
  console.log(1);
}, 2500);
MY_TIMER.setTimeout(() => {
  console.log(2);
}, 2000);
MY_TIMER.setTimeout(() => {
  console.log(3);
}, 2500);
MY_TIMER.setTimeout(() => {
  console.log(4);
}, 3000);
MY_TIMER.run();
