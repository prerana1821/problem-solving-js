// 1. Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value.Initial age should be 30.

const person12 = { name: 'John', age: 30 }

person12.age = 35

console.log(person12.age); // Output: 35

// 2. Write a function that takes an object car and returns true if the car is a sports car(i.e.has a horsepower property greater than or equal to 300)

const isSportsCar = ({ horsepower }) => horsepower >= 300


const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

// 3. Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false.

const isEligible = ({ age }, num) => age + num > 21

const person1 = { name: 'Ajay', age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true

// 4. Write a function that takes an object blog and returns true if the blog has more than 1000 views(i.e.has a views property greater than 1000)

const getViews = ({ views }) => views > 1000

const blog1 = { title: 'How to Learn JavaScript', author: 'John Doe', views: 1430 };
const blog2 = { title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500 };
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false

// 5. Swap the values of two variables using array destructuring.

let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a) // 2
console.log(b) // 1

// 6. Convert this function into ES6 with least amount of characters.

function add(a = 30, b = 0) {
    return a + b;
}

console.log(add(2, 3));

const add1 = (a = 20, b = 0) => a + b

console.log(add1(2, 3));

// 7. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

const combineObjects = (a, b) => ({ ...a, ...b })

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}

// 8. Convert the function getData, into an ES6 function with last amount of characters.

// Hint: Destructuring

function getData(person) {
    const name = person.name;
    const address = person.address.city
    console.log(name); // John Doe
    console.log(address); // New York
}

const getData1 = ({ name, address: { city } }) => {
    console.log(name); // John Doe
    console.log(city); // New York
}

const person = {
    name: 'John Doe',
    address: {
        city: 'New York',
        state: 'NY',
    },
};
getData(person);
getData1(person);

// 9. Write a function that takes a string as input and returns the string in all uppercase letters.

// const stringToUpperCase = (word) => word.toUpperCase();

const alphabets = { a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G", h: "H", i: "I", j: "J", k: "K", l: "L", m: "M", n: "N", o: "O", p: "P", q: "Q", r: "R", s: "S", t: "T", u: "U", v: "V", w: "W", x: "X", y: "Y", z: "Z" }

const stringToUpperCase = (word) => {
    let upperCase = "";
    for (let i = 0; i < word.length; i++) {
        upperCase += alphabets[word[i]]
    }
    return upperCase
}

console.log(stringToUpperCase("hello")); // "HELLO"

// 10. Write a function that takes two strings as input and concatenates them together.

const concatenateStrings = (string1, string2) => `${string1}${string2}`;
const concatenateStrings1 = (string1, string2) => string1 + string2

console.log(concatenateStrings("hello", "world")); // "helloworld"
console.log(concatenateStrings1("hello", "world")); // "helloworld"

// 11. Write a function that takes an array and returns the last element in the array.

const lastElement = (array) => array[array.length - 1]

console.log(lastElement([1, 2, 3, 4, 5])); // 5
console.log(lastElement([10, 20, 30, 40, 50])); // 5

// 12. Write a function that takes an array and returns the first element of the array.

const firstElement = (array) => array[0]


console.log(firstElement([1, 2, 3, 4, 5])); // 1
console.log(firstElement([9, 2, 3, 4, 5])); // 1

// 13. Write a function that takes an array and a number and returns the sum of first element and the number.

const sumFirstElement = (array, number) => array[0] + number

console.log(sumFirstElement([1, 2, 3], 5)); // 6

// 14. Write a function that takes an array and returns the sum of first and last element.

const sumFirstAndLast = (array) => array[0] + array[array.length - 1]

console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

// 15. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const personInfo = ({ name, age }) => `${name} is ${age} years old.`

const person11 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person22 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
console.log(personInfo(person11)) // Expected output: "John is 25 years old."
console.log(personInfo(person22)) // Expected output: "Jane is 45 years old."