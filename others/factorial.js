// let num = 5;
// let result = 1;
// for (let i = num; i >= 1; i--) {
//   // console.log(i)
//   result = result * i;
// }
// console.log(result)
function factorial(num) {
  let result = 1;
  if (num === 0 || num === 1) {
    return result;
  } else {
    for (let i = num; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
}
console.log(factorial(5));
