//  Dynamic fields in Object
const key = 'ram';
const obj = { [key]: 123 } //computed peoperty syntax
console.log(obj); // { ram: 123 }

// Object Literals 
const aaloo = 1;
const bhaloo = 22;
let obj2 = { aaloo: aaloo, bhaloo: bhaloo } //previous es6
obj2 = { aaloo, bhaloo }; //es6 Shorthand object assignment
console.log(obj2);
// same output: { aaloo: 1, bhaloo: 22 }

// Template Literals
const name = 'Prerana';
let strTemp = `Hellooo ${name}`;
console.log(strTemp); // Hellooo Prerana

const getMyAge = () => '17';
let strTemp2 = `Hello Everyone, I'm ${name}, my age is ${getMyAge()} years old!`;
console.log(strTemp2);
// Hello Everyone, I'm Prerana, my age is 17 years old!

//  Functions are first class citizens if something can be done with functions it can be done with anything else.

// functions can be added to objects
obj.sum = (a, b) => a + b;
console.log(obj.sum(1, 2)); // 3
console.log(obj);

// functions can be added to arrays
let arr = [1, 2, () => 'Hey! I am 3 in an array', 4, 5];
console.log(arr[2]()); // Hey! I am 3 in an array

// Object oriented programming constructs the entire world using objects & functional programming constructs the entire world using functions

// Principles of functional programming
// Immutability
// Pure Functions 
// Higher Order Functions

// What is pass by value & pass by reference ? 

objX = { x: 1, y: 1 };
const inc = (obj) => {
    obj.x = obj.x + 1;
    return obj
}

console.log(inc(objX)); //{ x: 2, y: 1 }
console.log(objX); //{ x: 2, y: 1 }
// original object is also changed!

const prerana = { mother: 'Snehal', age: 17 };
const age = (obj) => {
    return ({ ...obj, age: obj.age - 6 })
}
const bhargav = age(prerana);
console.log(bhargav);
// { mother: 'Snehal', age: 11 } 
console.log(prerana);
// { mother: 'Snehal', age: 17 }


const color = ['red', 'pink', 'black', 'blue'];
const colorss = [...color, 'green', 'orange'];
console.log(color);
// ['red', 'pink', 'black', 'blue'] 
console.log(colorss);
// [ 'red', 'pink', 'black', 'blue', 'green', 'orange' ]

// shallow copy & deep copy?

// const birthday = (obj) => {
//     return ({ ...obj, age: obj.age + 1 });
// }

const birthday = obj => ({ ...obj, age: obj.age + 1 })

console.log(birthday(prerana));
// { mother: 'Snehal', age: 18 }

const lessThan10 = (num) => {
    return num < 10;
}

const num = [1, 2, 3, 456, 78, 853, 22, 9];
console.log(lessThan10(2));
console.log(num.filter(lessThan10));
// [ 1, 2, 3, 9 ]

console.log(num.filter(num => !lessThan10(num)));
// [ 456, 78, 853, 22 ] 

const arrToObj = (arr) => {
    return arr.map((num) => {
        return { num }
    });
}
console.log(arrToObj(num));
// [ { num: 1 },
// { num: 2 },
// { num: 3 },
// { num: 456 },
// { num: 78 },
// { num: 853 },
// { num: 22 },
// { num: 9 } ] 

const itemOfObj = (item) => ({ item });
console.log(num.map(itemOfObj));
// [{ item: 1 },
//     { item: 2 },
//     { item: 3 },
//     { item: 456 },
//     { item: 78 },
//     { item: 853 },
//     { item: 22 },
//     { item: 9 }] 

const itemOfObj2 = (item) => ({ [item]: item });
console.log(num.map(itemOfObj2));
// [{ 1: 1 },
//     { 2: 2 },
//     { 3: 3 },
//     { 456: 456 },
//     { 78: 78 },
//     { 853: 853 },
//     { 22: 22 },
//     { 9: 9 }] 

const itemToObj3 = ele => ({ num: ele });
console.log(num.map(itemToObj3));
// [{ num: 1 },
//     { num: 2 },
//     { num: 3 },
//     { num: 456 },
//     { num: 78 },
//     { num: 853 },
//     { num: 22 },
//     { num: 9 }] 

// const itemToObj4 = ele => ({ [ele] }); // error

const itemToObj5 = ele => ({ [`${ele}-${ele}`]: ele });
console.log(num.map(itemToObj5));
// [{ '1-1': 1 },
//     { '2-2': 2 },
//     { '3-3': 3 },
//     { '456-456': 456 },
//     { '78-78': 78 },
//     { '853-853': 853 },
//     { '22-22': 22 },
//     { '9-9': 9 }] 


const num2 = [1, 2, 3, 9];
const sumOfArr = (item, cur) => { return item + cur };
console.log(num2.reduce(sumOfArr, 0));
// 15
// const sumOfArr = (previousValue, currentValue) => previousValue + currentValue;
// console.log(num2.reduce(sumOfArr, 0));
// 15

const sum = (arr) => {
    return arr.reduce(num => {
        return num + (num + 1);
    });
}
console.log(sum(num2));
// 15

// Curring
// const add = (num1, num2) => num1 + num2;
// console.log(add(2, 3));
// 5

// const addLater = num1 => num2 => num1 + num2; using arrow function
// const numAdd = addLater(2);
// console.log(numAdd(3));
// // 5

function addLater(nowValue) {
    return function addLater2(laterValue) {
        return nowValue + laterValue;
    }
}

const num1 = addLater(2);
console.log(num1(5)); // 7

// call directly
console.log(addLater(2)(5)); // 7

// console.dir(addLater2); run on browser console

// Homework

// const giveName = (name) => {
//     return (lastName) => {
//         return `Hello ${name} ${lastName}`;
//     }
// }

const giveName = (name) => (lastName) => `Hello ${name} ${lastName}`;

console.log(giveName('Prerana')('Nawar'));
// Hello Prerana Nawar

const name1 = giveName('Prerana');
console.log(name1('Nawar'));
// Hello Prerana Nawar

// Composition

const add = (num1, num2) => num1 + num2;
const square = (num) => num * num;
console.log(add(2, 2)); // 4
console.log(square(4)); // 16
console.log(square(add(2, 2))); // 16
console.log(add(square(3), square(4))); // 25

// Homework
const userName = (name) => `Hellooii ${name}`;
const userID = (id) => `Your userID is ${id}`;

// const compose = (name, id) => {
//     console.log(`Welcome ${name('Prerana')}, ${id(18)} `);
// }
// compose(userName, userID);
// Welcome Hellooii Prerana, Your userID is 18 (works in browser console)

const compose2 = (name, id) => {
    console.log(`Welcome ${name}, ${id} `);
}
compose2(userName('Siddhi'), userID(21));
// Welcome Hellooii Siddhi, Your userID is 21  

// Doesn't Work 👇
// const compose2 = (name, id) => {
//     console.log(`Welcome ${name()}, ${id()} `);
// }
// compose2(userName('Siddhi'), userID(21));
// Uncaught TypeError: name is not a function


// Different Way
const userNameWithText = (name) => `Welcome to the room ${name}`;
const userIdwithText = (id, userNameText) => `Here is your ID : ${id} & your Room UserName : ${userNameText}`;

function logger(extraText) {
    console.log(`${extraText} ${userIdwithText(21, 'Tanay')}`);
};
logger('Entered the server:')
// Entered the server: Here is your ID : 21 & your Room UserName : Tanay

function loggerWithCurring(userIdwithText) {
    return function curring(extraText) {
        return `${extraText} ${userIdwithText}`;
    }
};

const logg = loggerWithCurring(userIdwithText(15, 'Ritu'));
console.log(logg('You have entered the server!'));
// You have entered the server! Here is your ID : 15 & your Room UserName : Ritu

