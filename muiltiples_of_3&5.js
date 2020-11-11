// let result = 0;
// for (let i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         result += i;
//     }
// }
// console.log(result);


// function multiplesOf3and5(number) {
//   let result = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result = result + i;
//     }
//   }
//   return result;
// }

function multiplesOf3and5Optimal(number) {
  return [...Array(number).keys()]
    .filter(n => n % 3 === 0 || n % 5 === 0)
    .reduce((acc, n) => acc + n);

}

console.log(multiplesOf3and5Optimal(1000));

// Output = 233168

// console.log(Array.from(Array(1000).keys())
//   .filter(n => n % 3 === 0 || n % 5 === 0)
//   .reduce((acc, n) => acc + n));

// [...Array(1000).keys()]
//   .filter(n => n % 3 === 0 || n % 5 === 0)
//   .reduce((acc, n) => acc + n)
