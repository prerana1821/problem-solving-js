function whoTookTheCar(message) {
    return message.map((letter) => String.fromCharCode(parseInt(letter, 2))).join('');
}

console.log(whoTookTheCar(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']));

// for (let i = 0; i < array.length; i++) {
//     return String.fromCharCode(parseInt(array, 2).toString(10));
// }