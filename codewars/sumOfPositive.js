// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             sum = sum + arr[i];
//         }
//     }
//     return sum;
// }

// function positiveSum(arr) {
//     let sum = 0;
//     arr.forEach(num => {
//         num >= 0 ? sum += num : sum;
//     });
//     return sum;
// }


// function positiveSum(arr) {
//     arr.reduce((sum, start) => {
//         return sum + start
//     }, 0);
// }

// function positiveSum(arr) {
//     return arr.reduce((total, num) => {
//         num > 0 ? total + num : total, 0
//     });
// };

function positiveSum(arr) {
    return arr.reduce((total, num) => num > 0 ? total + num : total, 0);
}
console.log(positiveSum([1, -2, 3, 4, 5]));