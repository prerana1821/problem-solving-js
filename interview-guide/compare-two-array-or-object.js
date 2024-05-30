let compare = (current, other) => {
  // Get the inputs  type
  let currentType = Object.prototype.toString.call(current);

  // Get the other type
  let otherType = Object.prototype.toString.call(other);

  // If items are not an object or array, return false
  if (
    ["[object Array]", "[object Object]"].indexOf(currentType) < 0 ||
    ["[object Array]", "[object Object]"].indexOf(otherType) < 0
  )
    return false;

  // If the two inputs are not the same type, return false
  if (currentType !== otherType) return false;

  // Compare the length of the length of the two items
  let currentLen =
    currentType === "[object Array]"
      ? current.length
      : Object.keys(current).length;
  let otherLen =
    otherType === "[object Array]" ? other.length : Object.keys(other).length;
  if (currentLen !== otherLen) return false;

  //Helper function to check the equality
  let equal = (item1, item2) => {
    // Get the object type
    let itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
      if (!compare(item1, item2)) return false;
    } else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // If it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === "[object Function]") {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  // Compare properties
  if (currentType === "[object Array]") {
    for (var i = 0; i < currentLen; i++) {
      // Compare the item
      if (equal(current[i], other[i]) === false) return false;
    }
  } else {
    for (var key in current) {
      if (current.hasOwnProperty(key)) {
        // Compare the item
        if (equal(current[key], other[key]) === false) return false;
      }
    }
  }

  //If all tests are passed then
  return true;
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 2, 4, 5];
console.log(compare(arr1, arr2));
// returns false

let arrObj1 = [
  1,
  2,
  {
    a: 1,
    b: 2,
    c: 3,
    d: function () {
      console.log("abcd");
    },
  },
  4,
  5,
];
let arrObj2 = [
  1,
  2,
  {
    c: 3,
    b: 2,
    a: 1,
    d: function () {
      console.log("abcd");
    },
  },
  4,
  5,
];
console.log(compare(arrObj1, arrObj2));
// returns true

let arr4 = [
  [1, 2],
  [3, 4, 5],
];
let arr3 = [
  [1, 2],
  [3, 4, 5],
];
console.log(compare(arr4, arr3));
// returns true
