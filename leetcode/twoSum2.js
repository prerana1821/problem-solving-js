// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i + 1, j + 1];
//             }
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i + 1, j + 1];
//             }
//         }
//     }
// };

// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers.includes(target - numbers[i])) {
//             return [i + 1, numbers.lastIndexOf(target - numbers[i]) + 1];
//         }
//     }
// };


var twoSum = function(num, target) {
    let i = 0;
    let j = num.length - 1;
    while (i < j) {
        if (num[i] + num[j] > target) {
            j--;
        } else if (num[i] + num[j] < target) {
            i++;
        } else {
            return [i + 1, j + 1];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

// var twoSum = function(numbers, target) {
//     const object = {};
//     for (let i = 0; i < numbers.length; i++) {
//         if (object.hasOwnProperty(target - numbers[i])) {
//             return [object[target - numbers[i]] + 1, i + 1];
//         }
//         object[numbers[i]] = i;
//     }
// };