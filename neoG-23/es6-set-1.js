// 1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

const isEligibleToVote = (age) => age >= 18 ? "Eligible to vote" : "Not eligible to vote"

console.log(isEligibleToVote(20))
console.log(isEligibleToVote(18))
console.log(isEligibleToVote(17))

// 2. Write a function that takes two numbers as input and determines which one is greater.

const isGreater = (num1, num2) => num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`;

console.log(isGreater(2, 5))
console.log(isGreater(10, 5))

// 3. Write a function that takes a number as input and determines if it is positive or negative.

const checkNum = (num) => num >= 0 ? "Positive Number" : "Negative Number"

console.log(checkNum(9)) // Positive Number
console.log(checkNum(-8)) // Negative Number
console.log(checkNum(22)) // Positive Number

// 4. Write a function that takes a number as input and determines if it is even or odd.

const isEvenOdd = (num) => num % 2 === 0 ? "Even Number" : "Odd Number"

console.log(isEvenOdd(5)) // Odd Number
console.log(isEvenOdd(8)) // Even Number
console.log(isEvenOdd(10)) // Even Number

// 5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

// const checkForAlphabetA = (string) => string.includes("a") || string.includes("A") ? "Includes a" : "Does not include a"

const checkForAlphabetA = (word) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "A") return "Includes a"
    }
    return "Does not include a"
}


console.log(checkForAlphabetA("Tanay")) // Includes a 
console.log(checkForAlphabetA("Jeep")) // Does not include a 
console.log(checkForAlphabetA("Aney")) // Includes a 

// 6. Write a function that takes a string as input and determines if it is longer than 5 characters.

// const checkLength = (string) => string.length > 5 ? "more than 5  characters" : "less than 5 characters"

const checkLength = (word) => {
    let count = 0
    for (const i in word) {
        count++
    }
    return count > 5 ? "more than 5 characters" : "less than 5 characters"
}

console.log(checkLength("Programming")) // more than 5 characters 
console.log(checkLength("Jeep")) // less than 5 characters 

// 7. Write a function that takes a number as input and determines if it is between 1 and 10.

const isBetweenOneAndTen = (num) => num > 0 && num <= 10

console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false


// 8. Write a function that takes a string as input and determines if it contains the word "hello".

const isHelloPresent = (string) => string.includes("hello") || string.includes("Hello")

console.log(isHelloPresent("Hello World")) // true
console.log(isHelloPresent("hello World")) // true
console.log(isHelloPresent("World")) // false

// 9. Write a function that takes a number as input and determines if it is a multiple of 3.

const isMultipleOfThree = (num) => num % 3 === 0

console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true

// 10. Write a function which takes in a number as input and returns it after multiplying by 10.

const multiplyByTen = (num) => num * 10

console.log(multiplyByTen(20)) // 200
console.log(multiplyByTen(40)) // 400

// 11. Console individual values of the product object using object destructuring.

const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
}

const { title, price, description } = product;
console.log(title); // iPhone
console.log(price); // 5999
console.log(description); // The iPhone is a smartphone developed by Apple


// 12. Create an object book with properties title, author, and pages.Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const book = { title: 'Build', author: "Prerana Nawar", pages: 101 }
const book1 = { title: 'Build II', author: "Prerana Nawar", pages: 50 }

const getBookDetails = ({ pages }) => pages > 100

console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book1)) // logs 'false' if the pages are 100 or below

// 13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

let person = { name: 'Amit', age: 25, occupation: 'Software Engineer' }

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
const changeOccupation = (person1, newOccupation) => {
    person = { ...person1, occupation: newOccupation }
}
changeOccupation(person, 'Product Manager');
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console

// 14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console

// 15. Convert the given function into ES6 with least amount of characters.

function defaultParamsFunc(a, b, c) {
    if (c === undefined) {
        c = 4;
    }
    return a * b * c;
};

console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120

const defaultParamsFunc1 = (a, b, c = 4) => a * b * c

console.log(defaultParamsFunc1(3, 1)); // 12
console.log(defaultParamsFunc1(3, 10)); // 120

// Learn: what is the difference between for of and for in?