// var containsNearbyDuplicate = function (nums, k) {
//     let sortArr = nums.sort((a, b) => a - b);
//     console.log(sortArr);
//     for (let i = 0; i < sortArr.length; i++) {
//         if (sortArr[i] === sortArr[i + 1]) {
//             let absDiff = Math.abs(sortArr[i] - sortArr[i + 1]);
//             if (absDiff <= k) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

const containsNearbyDuplicate = (nums, k) => {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if ((hash[nums[i]] !== undefined) && (Math.abs(hash[nums[i]] - i) <= k)) {
            return true;
        } else {
            hash[nums[i]] = i;
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
