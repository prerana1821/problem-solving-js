const arr = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
];

function myFlat(arr, depth = 1, output = []) {
  if (depth < 0) {
    output.push(arr);
    return output;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        myFlat(arr[i], depth - 1, output);
      } else {
        output.push(arr[i]);
      }
    }
  }

  return output;
}

console.log(myFlat(arr, Infinity));

const arr1 = [1, [2], [3, [4]]];

console.log(myFlat(arr1));
// [1, 2, 3, [4]]

console.log(myFlat(arr1, 1));
// [1, 2, 3, [4]]

console.log(myFlat(arr1, 2));
// [1, 2, 3, 4]

// console.log(arr1.flat(2));
