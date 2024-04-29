Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  let output = false;

  if (searchElement !== searchElement) {
    for (
      let i = fromIndex >= 0 ? fromIndex : this.length + fromIndex;
      i < this.length;
      i++
    ) {
      if (this[i] !== this[i]) {
        output = true;
        break;
      }
    }
  } else {
    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (searchElement === this[i]) {
          output = true;
        }
      }
    } else {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if (searchElement === this[i]) {
          output = true;
        }
      }
    }
  }

  return output;
};

const array1 = [1, 2, 3];

console.log(array1.myIncludes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.myIncludes("cat"));
// Expected output: true

console.log(pets.myIncludes("at"));
// Expected output: false

console.log([1, 2, 3].myIncludes(2)); // true
console.log([1, 2, 3].myIncludes(4)); // false
console.log([1, 2, 3].myIncludes(3, 3)); // false
console.log([1, 2, 3].myIncludes(3, -1)); // true
console.log(["1", "2", "3"].myIncludes(3)); // false

console.log([1, 2, NaN].myIncludes(NaN)); // true
