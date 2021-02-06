// var merge = function (nums1, m, nums2, n) {
//     let result = nums1.concat(nums2);
//     return result.sort((a, b) => a - b).filter(num => num != 0);
// };

// var merge = function (nums1, m, nums2, n) {
//     var j = 0;
//     if (nums1.length == 1 && nums2.length === 1) {
//         return nums1[0] > nums2[0] ? nums1 : nums2;
//     } else {
//         for (let i = nums1.length - 1; i >= n; i--) {
//             if (nums1[i] === 0) {
//                 nums1[i] = nums2[j];
//                 j++;
//             }
//             else
//                 break;
//         }
//         for (let i = 0; i < nums1.length; i++) {
//             for (let j = i + 1; j < nums1.length; j++) {
//                 if (nums1[i] > nums1[j]) {
//                     let temp = nums1[i];
//                     nums1[i] = nums1[j];
//                     nums1[j] = temp;
//                 }
//             }
//         }
//         return nums1;
//     }
// };


var merge = function (nums1, m, nums2, n) {
    let ans = [];
    let ansLen = 0;
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j])
            ans[ansLen++] = nums1[i++];
        else
            ans[ansLen++] = nums2[j++];
    }
    if (i < m)
        for (let k = i; k < m; k++)
            ans[ansLen++] = nums1[k];
    if (j < n)
        for (let k = j; k < n; k++)
            ans[ansLen++] = nums2[k];
    for (let k = 0; k < ans.length; k++)
        nums1[k] = ans[k];
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 3, [1, 2, 2], 3));
// console.log(merge([-1, -1, 0, 0, 0, 0], 3, [-1, 0], 2));
console.log(merge([0], 0, [1], 1));
console.log(merge([1], 0, [0], 1));
// [-1,-1,0,0,-1,0]
// [-1, -1, -1, 0, 0, 0]
// [-1, -1, -1, 0, 0, 0, 0, 0]