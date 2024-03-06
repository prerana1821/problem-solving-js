// Immutability

const prerana = { mother: "Snehal", age: 18 };
const bhargav = { ...prerana, age: prerana.age - 6 };
console.log(prerana);
// { mother: 'Snehal', age: 18 }
console.log(bhargav);
// { mother: 'Snehal', age: 12 }

const colors = ['blue', 'green', 'yellow', 'pink', 'grey'];
const lotOfColors = [...colors, 'orange', 'cyan'];
console.log(colors);
// ['blue', 'green', 'yellow', 'pink', 'grey']
console.log(lotOfColors);
// [ 'blue', 'green', 'yellow', 'pink', 'grey', 'orange', 'cyan' ]

// Pure Funcions
const birthday = (person) => ({ ...person, age: person.age + 1 });
console.log(birthday(prerana));
// { mother: 'Snehal', age: 19 }

// Higher Order functions
const array = [1, 2, 45, 6, 10, 2, 10];
const lessThan10 = (num) => num < 10;
console.log(lessThan10(2));
console.log(array.filter(lessThan10)); // not a callback function
// [ 1, 2, 6, 2 ]

// if you want more than
// console.log(array.filter(!lessThan10)); // can't do like this will give an error
console.log(array.filter(num => !lessThan10(num))); // can do this way
// [ 45, 10, 10 ]

const arrayToObj = (num) => ({ num: num });
console.log(arrayToObj(2));
console.log(array.map(arrayToObj));
const itemToObj2 = ele => ({ ele });
const itemToObj3 = ele => ({ [ele]: ele });
// const itemToObj4 = ele => ({ [ele] }); // error
const itemToObj5 = ele => ({ [`${ele}-${ele}`]: ele });
console.log(array.map(itemToObj3));

const array2 = [1, 2, 3, 4, 5, 10, 20, 30];
const sum = (a, b) => a + b;
console.log(array2.reduce(sum, 0));
// 6

// Homework Questions

// Array of Integers

// 1. sum of odds
const oddNum = (num) => num % 2 !== 0;
const oddArr = array2.filter(oddNum);
// const sum = (previ, current) => previ + current;
// console.log(oddArr.reduce(sum, 0));
// 9

// 2. sum of nums at odd indices
const sumOfOddInd = (previ, current, index) => oddNum(index) ? current + previ : previ;
console.log(array2.reduce(sumOfOddInd, 0));

// 3. Biggest number in an array
const biggestNum = (previ, current) => previ > current ? previ : current;
console.log(array2.reduce(biggestNum));
// 30

// 4. numbers divisible by 10
const divisibleBy10 = (num) => num % 10 === 0;
console.log(array2.filter(divisibleBy10));
// [ 10, 20, 30 ]


// 5. array of nums where odd nums are incremented by one & even are decremented by one
const evenNum = (num) => num % 2 === 0;

const evenOdd = (num) => oddNum(num) ? num - 1 : num + 1;
console.log(array2.map(evenOdd));
// [0, 3, 2, 5, 4, 11, 21, 31]

const evenOdd2 = (num) => oddNum(num) ? num - 1 : evenNum(num) && num + 1;
console.log(array2.map(evenOdd2));
// [0, 3, 2, 5, 4, 11, 21, 31]

// 6. object with sum of all odd nums and even nums separately.

// const oddEvenSum = (previ, current) => {
//     if (current % 2 === 0) {
//         return { ...previ, evenSum: previ.evenSum + current }
//     } else {
//         return { ...previ, oddSum: previ.oddSum + current }
//     }
// };
// { oddSum: 9, evenSum: 66 }

// const oddEvenSum = (previ, current) => evenNum(current) ?
//     ({ ...previ, evenSum: previ.evenSum + current })
//     :
//     ({ ...previ, oddSum: previ.oddSum + current });
// { oddSum: 9, evenSum: 66 } 

const oddEvenSum = (previ, current) => evenNum(current) ?
    ({ ...previ, evenSum: sum(previ.evenSum, current) })
    :
    ({ ...previ, oddSum: sum(previ.oddSum, current) });

console.log(array2.reduce(oddEvenSum, { oddSum: 0, evenSum: 0 }));
// { oddSum: 9, evenSum: 66 }


// // Array of Strings

const arrOfStr = ['apple', 'orange', 'mango', 'papaya', 'mm', 'qq'];

// 1. num of strings with similar num of characters

const lengthOfStr = (str) => str.length;
console.log(lengthOfStr('Prerana'));

// const strChar = (prev, current) => {
//     if (lengthOfStr(current) in prev) {
//         return { ...prev, [lengthOfStr(current)]: prev[current.length] + 1 };
//     } else {
//         return { ...prev, [lengthOfStr(current)]: 1 };
//     }
// }

const strChar = (prev, current) => lengthOfStr(current) in prev ?
    ({ ...prev, [lengthOfStr(current)]: prev[current.length] + 1 })
    :
    ({ ...prev, [lengthOfStr(current)]: 1 });

console.log(arrOfStr.reduce(strChar, {}));

// 2. array with strings which have vowels

const findVowels = (str) => (/[aeiou]/gi).test(str);
console.log(arrOfStr.filter(findVowels));

// 3. key as items and value as num of characters in the string
console.log(arrOfStr.map((item) => ({ [item]: lengthOfStr(item) })));
// [ { apple: 5 }, { orange: 6 }, { mango: 5 }, { papaya: 6 } ]


// Currying

// normal
const add = (num1, num2) => num1 + num2;
console.log(add(2, 5)); // 7

// with currying
// const addLater = num1 => num2 => num1 + num2;
// console.log(addLater(2)(5)); // 7

const addLater = (num1) => {
    return function addLater2ndPart(num2) {
        return num1 + num2;
    }
}

const add2Later = addLater(2);
console.log(add2Later(5)); // 7
// calling entire function at once
console.log(addLater(2)(5)); // 7

// console.dir(add2Later); // works in browser contains closure outter function value.

const takeName = (name) => (input) => `${input}- ${name}`;
const giveName = takeName('Prerana');
console.log(giveName('My name :'));

// Composition
const multi = (num1, num2) => num1 * num2;
const sq = num => num * num;
console.log(add(2, 2)); // 4 (normal)
console.log(sq(4)); // 16 (normal)
console.log(sq(add(2, 2))); // 16 (with composition)
console.log(add(sq(2), sq(2))); // 8 (with composition)

const logName = (name) => `My name is ${name}`;
const logID = (id) => `My ID is ${id}`;

const composeNameID = (text) => `${text}, ${logName('Prerana')} & ${logID('13')}`;

console.log(composeNameID('Hello Everyone'));
// Hello Everyone, My name is Prerana & My ID is 13

const textWithID = (name, id) => `Hello everyone, I'm ${name}, my id is ${id}`;

const giveMeALogger = (textWithID) => (moreText) => `${moreText}, ${textWithID}`;

const logger = giveMeALogger(textWithID('Prerana', '18'));
console.log(logger('Welcome to the Server'));
// Welcome to the Server, Hello everyone, I'm Prerana, my id is 18



// The One Homework

// const compose = (...functions) => {
//     return function innerFunc(args) {
//         return functions.reduce(funct, current => {
//             return funct(current(args));
//         }, () => {});
//     }
// }


const compose = (...functions) => {
    return (args) => {
        return functions.reduce((funct, current) => {
            return current(funct);
        }, args);
    }
}

const increment = num => num + 1;
const square = num => num * num;

const func = compose(increment, square);
console.log(func(2));
