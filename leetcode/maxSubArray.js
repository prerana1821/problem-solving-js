// var maxSubArray = function (nums) {
//     let newArray = nums.slice();

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             console.log(nums.slice(i, j + 1));
//             newArray.push(sum(nums.slice(i, j + 1)));
//         }
//     }
//     return Math.max(...newArray);
// };

// function sum(arr) {
//     return arr.reduce((sum, ele) => sum + ele);
// }

// var maxSubArray = function (nums) {
//     var maxSum = nums[0]
//     for (var i = 1; i < nums.length; i++) {
//         if (nums[i - 1] > 0) {
//             nums[i] += nums[i - 1]
//         }
//         maxSum = Math.max(maxSum, nums[i])
//     }
//     return maxSum
// };

function maxSubArray(arr) {
    let maxSoFar = Number.MIN_SAFE_INTEGER,
        maxEnd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxEnd + arr[i] < arr[i]) {
            maxEnd = arr[i];
        } else {
            maxEnd = maxEnd + arr[i];
        };
        if (maxEnd > maxSoFar) {
            maxSoFar = maxEnd;
        }
    }
    return maxSoFar;
}

// var maxSubArray = function (nums) {
//     let sum = 0;
//     let maxSum = Number.MIN_SAFE_INTEGER;
//     // console.log(maxSum);
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] + sum < nums[i]) {
//             // console.log(sum);
//             sum = nums[i];
//         } else {
//             sum += nums[i];
//         }
//         if (sum > maxSum) {
//             maxSum = sum
//             // console.log(sum);
//             // console.log(maxSum);
//         };
//     }
//     return maxSum;
// };

// console.log(maxSubArray([-2, -3, -1, -5]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));