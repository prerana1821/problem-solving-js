var thirdMax = function (nums) {
    if (nums.length < 3) {
        return Math.max(...nums);
    } else {
        const setArr = new Set(nums);
        const newArr = Array.from(setArr);
        newArr.sort((a, b) => b - a);
        if (newArr.length <= 2) {
            return newArr[0];
        } else {
            return newArr[2] != undefined ? newArr[2] : newArr[1];
        }
    }
};

console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 3, 3, 1, 5, 4]));
console.log(thirdMax([1, 1, 2]));
console.log(thirdMax([1, 1, 1]));
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));

// [3, 4, 0,]
// [0, 3, 4]
// [3, 4, 0]