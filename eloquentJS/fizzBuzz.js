for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 5 == 0 && i % 3 != 0) {
        console.log(i, 'Buzz');
    } else if (i % 3 == 0) {
        console.log(i, 'Fizz');
    } else {
        console.log(i);
    }

    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i, 'FizzBuzz');
    }
}

// for (let i = 1; i <= 100; i++) {
//     switch (true) {
//         case (i % 5 == 0 && i % 3 == 0):
//             console.log(i, 'FizzBuzz');
//         case (i % 5 == 0 && i % 3 != 0):
//             console.log(i, 'Buzz');
//             break;
//         case (i % 3 == 0):
//             console.log(i, 'Fizz');
//             break;
//         default:
//             console.log(i);
//             break;
//     }
// }