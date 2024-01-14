const array = ["Prerana", "Siddhi", "Ritu", "Janaki", "Anjali", "Sruthi"];

console.log(array.map((item) => item));

const ownMap = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
};

console.log(ownMap(array));

Array.prototype.ownMapPol = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    callback(arr.push(this[i]), i, this);
  }
  return arr;
};

console.log(array.ourMap((item) => item));
console.log(array.ownMapPol((item) => item));
