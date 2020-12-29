let lastDigit = 0;
let reverse = 0;
let result = 0;
let originalNumber = 101;
let number = originalNumber;
while (number > 0) {
    lastDigit = number % 10;
    reverse = (reverse * 10) + lastDigit;
    number = parseInt(number / 10);
}
// console.log(reverse);
// console.log(number);
// console.log(originalNumber);
if (originalNumber === reverse) {
    result = originalNumber;
    console.log(originalNumber + ' is Palindrome');
} else {
    console.log(originalNumber + ' is Not a Palindrome');
}
console.log(result);


