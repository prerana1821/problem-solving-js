const getData = () => {
  console.log("throttling data", Math.round(Math.random() * 5));
};

function throttling(func, delay) {
  let flag = true;
  let timer = null;
  return function () {
    if (flag) {
      func.apply(this, arguments);
      flag = false;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

window.addEventListener("resize", throttling(getData, 1000));
