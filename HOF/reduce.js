const array = [1, 2, 3, 4, 5, 6];

console.log(array.reduce((acc, n) => acc + n, 0));

const ownReducer = (array, acc = 0) => {
  for (let i = 0; i < array.length; i++) {
    acc = array[i] + acc;
  }
  return acc;
};

console.log(ownReducer(array, 0));

Array.prototype.ownReducePol = (callback, initialValue = 0) => {
  if (initialValue) {
  }
  for (let i = 0; i < this.length; i++) {
    callback(initialValue, this[i], i, this);
  }
};

console.log(array.ownReducePol((acc, val) => acc + val, 0));
