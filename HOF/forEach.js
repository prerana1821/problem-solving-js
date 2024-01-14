const array = ["Prerana", "Siddhi", "Ritu", "Janaki", "Anjali", "Sruthi"];

array.forEach((item) => {
  console.log(item);
});

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

Array.prototype.ownForEach = function (callback) {
  for (let i = 0; i < array.length; i++) {
    console.log(callback(this[i], i, this));
  }
};

array.ownForEach((item) => {
  console.log(item);
});
