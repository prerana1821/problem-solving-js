// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers.includes(target - numbers[i])) {
//             return [i, numbers.lastIndexOf(target - numbers[i])];
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     var answer = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 answer.push(i);
//                 answer.push(j);
//                 // return [i, j];
//             }
//         }
//     }
//     return answer;
// };

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

var twoSum = function(numbers, target) {
    const object = {};
    for (let i = 0; i < numbers.length; i++) {
        if (object.hasOwnProperty(target - numbers[i])) {
            return [object[target - numbers[i]], i];
        }
        object[numbers[i]] = i;
    }
};
console.log(twoSum([2, 8, 11, 21], 10));