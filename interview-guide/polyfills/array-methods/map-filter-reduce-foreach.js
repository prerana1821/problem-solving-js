// Write your code here
let data = [1, 2, 3, 4, 5];

// Map pollyfill
Array.prototype.myMap = function (cb) {
  let output = [];
  this.forEach(function (item) {
    let result = cb(item);
    output.push(result);
  });
  return output;
};
const mapLog = data.myMap((el) => el * 2);
console.log(mapLog);

// Filter pollyfill
Array.prototype.myFilter = function (cb) {
  let output = [];

  this.forEach(function (item) {
    let result = cb(item);
    if (result) {
      output.push(item);
    }
  });

  return output;
};
const filterLog = data.myFilter((el) => el < 4);
console.log(filterLog);

// Reduce pollyfill
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  this.forEach(function (item) {
    let result = acc ? cb(acc, item) : item;
    acc = result;
  });

  return acc;
};
const reduceLog = data.myReduce((el) => el + 4);
console.log(reduceLog);

// forEach pollyfill

Array.prototype.myForEach = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};
