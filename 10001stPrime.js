function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function nthPrime(n) {
    let count = 0;
    inc = 2;
    while (count < n) {
        if (isPrime(inc)) {
            count++;
            // console.log(count);
        }
        inc++;
    }
    return inc - 1;
}

console.log(nthPrime(10001));

// Output: 104743


// let len = 20;
// let a = 0;
// let primes = [];
// let count;
// for (let i = 1; i <= 20; i++) {
//     count = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         primes.push(i);
//         // a++;
//         // console.log(a + '=' + i);
//     }
// }
// var keys = primes.keys();

// for (x of keys) {
//     console.log(x)
// }

// // console.log(primes);

// function final(num) {
//     for (let i = 2; i <= num; i++) {
//         count = 0;
//         for (let j = 1; j <= i; j++) {
//             if (i % j == 0) {
//                 count++;
//             }
//         }
//         if (count == 2) {
//             primes.push(i);
//         }
//     }
//     var keys = primes.keys();

//     for (x of keys) {
//         console.log(x)
//     }
// }
