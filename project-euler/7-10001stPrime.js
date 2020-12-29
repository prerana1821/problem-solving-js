function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(2));

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

console.log(nthPrime(6));

// Output: 104743


function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(2));

// let num = 14;
// let count = 0;
// let inc = 2;
// while (count < num) {
//     if (isPrime(inc)) {
//         count++;
//     }
//     inc++;
// }
// console.log(inc - 1);

function nthPrime(num) {
    let count = 0;
    let inc = 2;
    while (count < num) {
        if (isPrime(inc)) {
            count++;
        }
        inc++;
    }
    // console.log(inc - 1);
    return inc - 1;
}

console.log(nthPrime(14));