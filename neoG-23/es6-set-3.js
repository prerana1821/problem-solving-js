// 1. Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

const formatArray = (array) => {
    return `The array has ${array.length} items, and the first item is "${array[0]}", and the last item is "${array[array.length - 1]}".`
}

const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".

// 2. Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const formatProduct = (product) => {
    return `${product.name} costs INR ${product.price} and is ${product.inStock ? "in" : "not in"} stock.`
}

const product = {
    name: 'Socks',
    price: 249,
    inStock: false,
};

const message1 = formatProduct(product);
console.log(message1);
// Socks costs INR 249 and is in stock.

// 3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

// const findPerson = (array, name) => {
//     let object;
//     array.forEach(element => {
//         object = element.name === name ? element : null
//     });
//     return object
// }
const findPerson = (array, name) => {
    return array.find(element => element.name === name) || null
}

console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))

// 4. Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

const pickFirstAndSecond = ([first, second, ...rest]) => ({ first, second })


console.log(pickFirstAndSecond(["orange", "banana", "apple"]))
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]))
// {first: 'red', second: 'blue'}

// 5. Convert the following code to ES6 + syntax with minimum number of characters.

// function startsWithA(str) {
//     if (str.charAt(0) === 'A') {
//         return true;
//     } else {
//         return false
//     }
// }

const startsWithA = (str) => str.charAt(0) === 'A'

console.log(startsWithA("Akshita"))
// true
console.log(startsWithA("Jeena"))
// false

// 6. Write an ES6 function to return only the first character of the given array.

const printFirstCharacter = ([first]) => first

console.log(printFirstCharacter([1, 2, 3, 5, 8]))
// 1

// 7. Write a function to return the last 5 characters as an array from the given array.
const printLastFive = ([first, sec, ...rest]) => rest

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))
// [1, 2, 3, 5, 8]

// 8. Write an ES6 function to return the second element of the given array by multiplying 20 to it.

const printSecondCharacter = ([_, second]) => second * 20

console.log(printSecondCharacter([1, 2, 3, 5, 8]))
// 40

// 9. Write an ES6 function to return the second element of the given array by adding “Hello” before it.

const sayHello = ([_, second]) => `Hello ${second}`

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))
// Hello Rakesh

// 10. Write an ES6 function to return sum of all numbers at even indices of the given array.

const sumOfEvenIndices = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            result += array[i]
        }
    }
    return result;
}

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6

console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30

// 11. Write an ES6 function to return the sum of only first 2 elements of the array.

const sumFirstTwoElements = ([first, second]) => first + second;

console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26

// 12. Write an ES6 function to return the first element which is a multiple of 5 in the given array.

const printMultipleOfFive = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            return array[i];
        }
    }
}

console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5

// 13. Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

const getAddress = ({ postalCode, city }) => ({ postalCode, city })


const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
}

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}

// 14. Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.

const printData = (obj) => `${obj.name} lives in ${obj.country}`


const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
}
console.log(printData(userData1)); // Gaurav lives in Japan

const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
}
console.log(printData(userData2)); // Pritam lives in India

// 15. Create a function which takes a product object and returns a sentence about the product using ES6 features.

const printProductDetails = (obj) => `${obj.name} which is of ${obj.specification.size}, has a capacity of ${obj.specification.capacity}.s`

const product1 = {
    name: "Apple MacBook Air 2020",
    specification: {
        capacity: "256GB",
        size: "13.3 Inch"
    },
    price: 82900
}
console.log(printProductDetails(product1)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.s