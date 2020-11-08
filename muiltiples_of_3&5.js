// let result = 0;
// for (let i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         result += i;
//     }
// }
// console.log(result);


function multiplesOf3and5(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(multiplesOf3and5(1000));
