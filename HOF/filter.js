const array = ["Prerana", "Siddhi", "Ritu", "Janaki", "Anjali", "Sruthi"];

console.log(
  array.filter((item) => {
    return item !== "Siddhi";
  })
);

const ownFilter = (array, removeName) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== removeName) {
      arr.push(array[i]);
    }
  }
  return arr;
};

console.log(ownFilter(array, "Siddhi"));

Array.prototype.ownFilterPol = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log(
  array.ownFilterPol((item) => {
    return item !== "Siddhi";
  })
);
