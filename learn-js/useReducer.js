// const numList = [1, 3, 55, 22, 44];

// function oddAndEvenSumReducer(accumulator, value) {
//   return value % 2 === 0
//     ? { ...accumulator, evenSum: accumulator.evenSum + value }
//     : { ...accumulator, oddSum: accumulator.oddSum + value };
// }

// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, {
//   oddSum: 0,
//   evenSum: 0,
// });

// console.log(oddAndEvenSum);

const numList = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 },
];

// function oddAndEvenSumReducer(accumulator, value) {
//   return value.type === "even"
//     ? { ...accumulator, evenSum: accumulator.evenSum + value.payload }
//     : { ...accumulator, oddSum: accumulator.oddSum + value.payload };
// }

// function oddAndEvenSumReducer(accumulator, value) {
//   switch (value.type) {
//     case "even":
//       return { ...accumulator, evenSum: accumulator.evenSum + value.payload };
//     case "odd":
//       return { ...accumulator, oddSum: accumulator.oddSum + value.payload };
//     default:
//       return "Something went wrong";
//   }
// }

// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, {
//   oddSum: 0,
//   evenSum: 0,
// });

// console.log(oddAndEvenSum);

// Practice 2

// function oddAndEvenSumReducer(accumulator, value) {
//   return value % 2 === 0
//     ? { ...accumulator, evenSum: accumulator.evenSum + value }
//     : { ...accumulator, oddSum: accumulator.oddSum + value };
// }

// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, {
//   oddSum: 0,
//   evenSum: 0,
// });

// console.log(oddAndEvenSum);
// { oddSum: 59, evenSum: 66 }

// function oddAndEvenSumReducer(accumulator, value) {
//   return value.type === "even"
//     ? { ...accumulator, evenSum: accumulator.evenSum + value.payload }
//     : { ...accumulator, oddSum: accumulator.oddSum + value.payload };
// }

const oddAndEvenSumReducer = (accumulator, value) => ({
  ...accumulator,
  [value.type]: accumulator[value.type] + value.payload,
});

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, {
  odd: 0,
  even: 0,
});
//  { odd: 59, even: 66 }

// function oddAndEvenSumReducer(accumulator, value) {
//   switch (value.type) {
//     case "even":
//       return { ...accumulator, evenSum: accumulator.evenSum + value.payload };
//     case "odd":
//       return { ...accumulator, oddSum: accumulator.oddSum + value.payload };
//     default:
//       console.log("Something went wrong");
//       break;
//   }
// }

// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, {
//   oddSum: 0,
//   evenSum: 0,
// });

console.log(oddAndEvenSum);
