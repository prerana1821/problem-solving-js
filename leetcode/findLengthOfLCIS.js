var findLengthOfLCIS = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let answer = 1;
    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            count++;
            answer = Math.max(answer, count);
        } else {
            count = 1;
        }
    }
    return answer;
};

console.log(findLengthOfLCIS([2, 4, 6, 5, 8]));
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
