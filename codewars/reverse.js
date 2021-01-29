// let array = [1, 2, 3];
// let arrLen = array.length;

// const reverse = {
//     next: function () {
//         arrLen--;
//         return {
//             value: array[arrLen],
//             done: arrLen < 0,
//         };
//     },
// };
let object;
let reverse = function (array) {
    let arrLen = array.length;
    object = {
        next: () => {
            arrLen--;
            return {
                value: array[arrLen],
                done: arrLen < 0,
            };
        },
    };
    return object;
};

object[Symbol.iterator] = function () {
    return this;
};
let newArray = [];
for (let ele of object) {
    newArray.push(ele);
}
console.log(newArray);
// return newArray;
console.log(reverse([1, 2, 3]));

// return newArray;

// console.log(newArray);