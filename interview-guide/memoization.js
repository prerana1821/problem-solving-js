const product = (num1, num2) => {
  // Expensive function.
  for (let i = 0; i < 400000; i++);
  return num1 * num2;
};

const memo = (func) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
};

const memoProduct = memo(product);

const first = performance.now();
console.log(`Result: `, memoProduct(123893, 1299123));
console.log("Time: ", performance.now() - first);

const second = performance.now();
console.log(`Result:`, memoProduct(123893, 1299123));
console.log("Time: ", performance.now() - second);
