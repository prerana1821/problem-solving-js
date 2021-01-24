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

var maxSubArray = function (nums) {
    var maxSum = nums[0]
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
        maxSum = Math.max(maxSum, nums[i])
    }
    return maxSum
};

console.log(maxSubArray([-2,-3, -1, -5]));