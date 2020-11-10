//LCM in Range
let array =[1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];
let lcm = array[0];
for (let i = 1; i < array.length; i++) {
    lcm = (lcm * array[i]) / (gcd(lcm, array[i]))
}
console.log(lcm);

function gcd(num1, num2) {
    for (let i = num1 < num2 ? num1 : num2; i >= 1; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            return i;
        }
    }
}
// Output = 2520



// function smallestMultiple(n) {
//     let array = [];
//     let lcm = array[0];
//     for (let i = 1; i < n; i++) {
//         lcm = (lcm * array[i]) / (gcd(lcm, array[i]))
//     }
//     console.log(lcm);

//     function gcd(num1, num2) {
//         for (let i = num1 < num2 ? num1 : num2; i >= 1; i--) {
//             if (num1 % i == 0 && num2 % i == 0) {
//                 return i;
//             }
//         }
//     }
// }

// smallestMultiple(10);

