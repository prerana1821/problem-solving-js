function carTimer(num) {
    let hours = num / 60;
    // let hoursFormat = hours;
    // let hoursFormat = Math.floor((hours + Number.EPSILON) * 100) / 100;
    // toFixed(2).toString().split('.').join("");
    let finalNum = hoursFormat.toString().split('.').join("");
    // console.log(hoursFormat);
    // console.log(finalNum);
    console.log(hours);
    // return sumOfDigits(finalNum);
    // sumOfDigits(hoursFormat);
}

// 1346
// sumOfDigits(1346);

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        sum = sum + lastDigit;
        num = parseInt(num / 10);
    }
    return sum;
}
console.log(carTimer(1439));

// let num = 13.466666666666667;
// console.log(Math.floor((num + Number.EPSILON) * 100) / 100);

// 13.466666666666667

// 00: 00 - 808

// num % 1 != 0

//


// function carTimer(num) {
//     let hours = num / 60;
//     let hoursFormat = hours.toFixed(2).toString().split('.').join("");
//     console.log(hoursFormat);
//     sumOfDigits(hoursFormat);
// }

// // 1346
// // sumOfDigits(1346);

// function sumOfDigits(num) {
//     let sum = 0;
//     while (num > 0) {
//         let lastDigit = num % 10;
//         sum = sum + lastDigit;
//         num = parseInt(num / 10);
//     }
//     console.log(sum);
// }
// carTimer(808);