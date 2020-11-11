let num1 = 0;
let num2 = 1;
let result;
let sum = 0;
// console.log(num1);
// console.log(num2);
function fibonacci(num) {
  for (i = num1; i <= num; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
    if (result < 4000000 && result % 2 == 0) {
      sum = sum + result;
      // console.log(result);
    }
  }
  console.log(sum);
}

fibonacci(200);

// Output = 4613732

// Optimal Solution
// function fiboEvenSum(n) {
//   let a = 1;
//   let b = 2;
//   let sum = b;

//   while (b <= n) {
//     let temp = a + b;
//     a = b;
//     b = temp;

//     if (b % 2 == 0) {
//       sum += b;
//     }
//   }
//   return sum;
// }
