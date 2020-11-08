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
