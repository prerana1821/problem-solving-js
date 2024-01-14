
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0 && i % 3 === 0) {
                return "FizzBuzz";
            } else {
                return "Fizz";
            }
        } else if (i % 5 === 0 && i % 3 !== 0) {
            if (i % 5 === 0 && i % 3 === 0) {
                return "FizzBuzz";
            } else {
                return "Buzz";
            }
        } else {
            return i;
        }
    }

}

console.log(fizzBuzz(15));

// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0 && i % 3 !== 0) {
//         console.log(i);
//     }
// }

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }