// for (let i = 1; i <= 200; i++) {
//     if (i % 2 == 1) {
//         a = i;
//         b = ((i * i) / 2 - 0.5);
//         c = ((i * i) / 2 + 0.5);
//         if (a + b + c == 1000) {
//             console.log(a + ' ' + b + ' ' + c);
//         }
//     } else {
//         a = i;
//         b = ((i / 2) * (i / 2)) - 1;
//         c = ((i / 2) * (i / 2)) + 1;
//         // console.log(a + ' ' + b + ' ' + c);
//         if (a + b + c == 1000) {
//             console.log(a + ' ' + b + ' ' + c);
//         }
//     }
// }


/* Solution Function */
let pythagoreanTriplet = (value) => {

    let product    
    let a
    let b
    for(a = 1; a < value - 2; a ++){
        for(b = a + 1; b < value - 1; b++){
            let square = Math.pow(a, 2) + Math.pow(b, 2)
            let c = Math.sqrt(square)
            if(Number.isInteger(c) && (a + b + c) === value){
                product = a * b * c
                console.log('a is ' + a)
                console.log('b is '+ b)
                console.log('c is ' + c)
                return product
            }
        }
    }

    return product
}

console.log(pythagoreanTriplet(1000))

// Output:
// a is 200
// b is 375
// c is 425
// 31875000



// let a = 1;
// let b = 2;
// let c = Math.sqrt(a * a + b * b);
// let sum = a + b + c;
// while (sum != 1000) {
//     if (sum > 1000) {
//         a++;
//         b = a + 1;
//     } else {
//         b++;
//     }
//     c = Math.sqrt(a * a + b * b);
//     sum = a + b + c;
// }

// console.log('a:' + a + '  b:' + b + '  c:' + c);
// console.log(a * b * c);


// console.log(abc);
// N, (N2 / 2 - 0.5), (N2 / 2 + 0.5)
// N, (N / 2)2 - 1, (N / 2)2 + 1