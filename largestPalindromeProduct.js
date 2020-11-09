let lastDigit = 0;
let reverse = 0;
let result = 0;
function palindrome(number) {
    let originalNumber = number;
    while (number > 0) {
        lastDigit = number % 10;
        reverse = (reverse * 10) + lastDigit;
        number = parseInt(number / 10);
    }
    if (originalNumber === reverse) {
        return true;
    } else {
        return false;
    }
}
// console.log(palindrome(2002));
let multipleValue = 0;
let largest = 0;
function largestPalindromeProduct(min,max) {
    for (let i = min; i <= max; i++) {
        for (let j = min; j <= max; j++) {
            multipleValue = i * j;
            // console.log(multipleValue);
            if (palindrome(multipleValue)) {
                if (multipleValue > largest) {
                    largest = multipleValue;
                }
                // console.log(multipleValue);
            }
        }
    }
    // console.log(largest);
    return largest;
}
console.log(largestPalindromeProduct(10,99));



// let lastDigit = 0;
// let reverse = 0;
// let result = 0;
// function palindrome(number) {
//     let originalNumber = number;
//     while (number > 0) {
//         lastDigit = number % 10;
//         reverse = (reverse * 10) + lastDigit;
//         number = parseInt(number / 10);
//     }
//     if (originalNumber === reverse) {
//         return true;
//         // result = originalNumber;
//         // console.log(originalNumber + ' is Palindrome');
//     } else {
//         return false;
//         // console.log(originalNumber + ' is Not a Palindrome');
//     }
//     // console.log(result);
//     // return result;
// }
// // console.log(palindrome(2002));
// let multipleValue = 0;
// let largest = 0;
// for (let i = 10; i <= 99; i++) {
//     for (let j = 10; j <= 99; j++) {
//         multipleValue = i * j;
//         // console.log(multipleValue);
//         if (palindrome(multipleValue)) {
//             if (multipleValue > largest) {
//                 largest = multipleValue;
//             }
//             // console.log(multipleValue);
//         }
//     }
// }
// console.log(largest);
