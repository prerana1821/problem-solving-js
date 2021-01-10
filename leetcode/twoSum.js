function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i], nums[i + 1]);
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1];
        }
    }
}

console.log(twoSum([3, 2, 3], 6));