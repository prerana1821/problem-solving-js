// num = 13195;
let count;
let result = 0;
let primeFactor = [];
function largestPrimeFactor(num) {
    for (let i = 1; i <= num; i++) {
        count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            // console.log(i);
            if (num % i == 0) {
                // console.log(i);
                primeFactor.push(i);
            }
        }
    }
    // console.log(primeFactor.pop());
    return primeFactor.pop();
}

console.log(largestPrimeFactor(13195));

// Output = 29

// for (let i = 1; i <= num; i++) {
//     count = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         // console.log(i);
//         if (num % i == 0) {
//             // console.log(i);
//             primeFactor.push(i);
//         }
//     }
// }
// console.log(primeFactor.pop());
//OR
// let largestPrimeFactor = primeFactor[primeFactor.length - 1]
// console.log(largestPrimeFactor);