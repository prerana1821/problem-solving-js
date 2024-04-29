Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
  if (fromIndex >= this.length) {
    return -1;
  } else if (fromIndex >= 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }
  } else {
    for (let i = this.length + fromIndex; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }
  }

  return -1;
};

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.myIndexOf("bison"));
// Expected output: 1

console.log(beasts.myIndexOf("bison", 2));
// Expected output: 4

console.log(beasts.myIndexOf("giraffe"));
// Expected output: -1

var array = [2, 9, 9];
console.log(array.myIndexOf(2)); // 0
console.log(array.myIndexOf(7)); // -1
console.log(array.myIndexOf(9, 2)); // 2
console.log(array.myIndexOf(2, -1)); // -1
console.log(array.myIndexOf(2, -3)); // 0
