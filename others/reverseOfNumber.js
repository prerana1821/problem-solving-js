let lastDigit = 0;
let reverse = 0;
let originalNumber = 1014;
let number = originalNumber;
while (number > 0) {
    lastDigit = number % 10;
    reverse = (reverse * 10) + lastDigit;
    number = parseInt(number / 10);
}
console.log(reverse);
// console.log(number);
// console.log(originalNumber);

