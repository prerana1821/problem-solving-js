// const array = [1, 3, 10, 11, 14];
// // output: 13
// // input: sumBasedOnIndex(1,2)

// function isValidIndex(arrayLength, index) {
//   return arrayLength > index;
// }

// function sumBasedOnIndex(array, index1, index2) {
//   // check if the indexes are valid (indexes should be within the range of the array length)
//   if (
//     isValidIndex(array.length, index1) &&
//     isValidIndex(array.length, index2)
//   ) {
//     return array[index1] + array[index2];
//   } else {
//     throw new Error("Invalid Index");
//   }
// }

// console.log(sumBasedOnIndex(array, 1, 4));

// const array = [1, 3, 10, 11, 14];
// // input: 13
// // output:1,2

// function indexBasedOnSum(array, sum) {}

// console.log(indexBasedOnSum(array, 13));

let products = [
  { product: "Milk", quantity: 1, Price: 1.5 },
  { product: "Eggs", quantity: 5, Price: 2.5 },
  { product: "Apples", quantity: 3, Price: 0.75 },
];

const getTotalPrice = (products) => {
  return products.reduce((acc, value) => {
    return acc + value.Price * value.quantity;
  }, 0);
};

console.log(getTotalPrice(products));
