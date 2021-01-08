// function isEven(num) {
//     // console.log(Math.abs(num));
//     let num2 = Math.abs(num - 2);
//     // console.log(num2);
//     if (num2 === 1) {
//         return false;
//     } else if (num2 === 0) {
//         return true;
//     } else {
//         return isEven(num2);
//     }
// }

// function isEven(num) {
//     num = Math.abs(num - 2);
//     if (num === 1) return false;
//     else if (num === 0) return true;
//     else return isEven(num);
// }

function isEven(num) {
    if (num === 1) return false;
    else if (num === 0) return true;
    else return isEven(Math.abs(num - 2));
}

console.log(isEven(-10));