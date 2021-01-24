// var removeDuplicates = function (nums) {
//     let result = [];
//     for (i = 0; i < nums.length; i++) {
//         if (result.indexOf(nums[i]) === -1) {
//             result.push(nums[i]);
//         }
//     }
//     return result;
// };

// var removeDuplicates = function (nums) {
//     return nums.filter((num,index)=> nums.indexOf(num) === index);
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var removeDuplicates = function (nums) {
    let i = 0;
    let j = 1;
    
    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));