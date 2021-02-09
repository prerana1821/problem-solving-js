var missingNumber = function (nums) {
    const sortArr = nums.sort((a, b) => a - b);
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] !== i) {
            return i;
        }
    }
    return nums.length;
};

