// It overrides the 'a' value
// function app() {
//     let a = 42;
//     {
//         let a = 100;
//     }
//     console.log(a); // 42
// }

// app()

// function app1() {
//     let a = 42;
//     {
//         a = 100;
//     }
//     console.log(a); // 100
// }

// app1()

// *************************************************

// {} is block scope
// let is block scope
// var is function scope

// function app() {
//     if (true) {
//         var a = 2;
//     }
//     console.log(a); // 2
// }
// app()

// function app1() {
//     if (true) {
//         let a = 2;
//     }
//     console.log(a); // a is not defined 
// }
// app1()

// ***********************************************

// let a = 100;
// function app() {
//     // console.log(a); // Cannot access 'a' before initialization 
//     let a = 42;
//     console.log(a); //42
//     {
//         a = 100;
//     }
//     console.log(a); //100
// }
// app()

// Temporal Dead Zone (TDZ)
// console.log(aVar); // undefined
// console.log(aLet); // Cannot access 'aLet' before initialization
// var aVar = 1;
// let aLet = 1;

// ********************************************
// console.log(a); // Cannot access 'a' before initialization 
// let a = 10;

// *********************************************
// This zone is called as temporal dead zone (TDZ)
// function some() {
//     console.log(a); // Cannot access 'a' before initialization 
//     let a = 42;
// }
// some();

// Hoisting
// function some() {
//     console.log(a); // undefined
//     var a = 42;
// }
// some();

// **********************************************
// const tanay = 2;
// tanay = 3; //Assignment to constant variable. 

// **************************************
// const obj = { a: 1, b: 2 };
// obj.a = 22; // no error
// console.log(obj); //{ a: 22, b: 2 } 

// const obj2 = { a: 33, b: 9 };
// obj = obj2 // Assignment to constant variable.


// ***************************************
// const arr = [1, 2, 3, 4, 5];
// arr.push(6); // no error
// console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// arr = arr.push(7); // error Assignment to constant variable.

// ********************************************
// Arrow functions
// const isOne = num => num === 1;
// console.log(isOne()); // false

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(2, 3)); //5

// const square = num => {
//     console.log(num);
//     return num * num;
// }
// console.log(square(2)); //4

// const hello = () => console.log('Hello');
// hello(); //Hello

// isOneCopy = isOne;
// console.log(isOneCopy(22)); //false

// returning an object
// const giveMeAnObject = a => { a: 2 };
// console.log(giveMeAnObject('Prerana')); // won't return an object
// const giveMeAnObject = a => ({ a: 2 });
// console.log(giveMeAnObject('Prerana')); // { a: 2 }
// const giveMeAnObject2 = a => ({ value: a });
// console.log(giveMeAnObject2('Prerana')); // { value: 'Prerana' }


// ***************************************
// Default Parameters

// const defaultExample = (a, b) => {
//     if (b === undefined) {
//         b = 5;
//     } return a + b;
// }

// const defaultExample = (a, b = 5) => a + b;

// console.log(defaultExample(2, 4)); // 6
// console.log(defaultExample(2)); // 7

// const defaultExample2 = (a, b = 5, c = 6) => {
//     return a + b + c;
// }
// // console.log(defaultExample2(2, , 4)); // Can't do default parameters in middle of two parameters
// console.log(defaultExample2(2)); // 13 (unless c as a default parameter you can't give be as a default parameter)

// REST & SPREAD & DESTRUCTING
// const restExample = (a, ...rest) => {
//     console.log(a, rest); // rest becomes an array
// }
// restExample(1, 2, 3, 5, 6, 7, 8, 9); // 1 [ 2, 3, 5, 6, 7, 8, 9 ] 
// restExample(1, 2);// 1 [ 2 ]

// const restExample2 = (_, a, ...rest) => {
//     console.log(a, rest); // first is getting ignored
// }
// restExample2(1, 2, 3); // 2 [ 3 ] 

// const spreadExample = ({ a, b }) => { // we are spreading the object
//     console.log(a, b); // 1 22
// }
// const obj = { a: 1, b: 22 }
// spreadExample(obj);

// const spreadObj2 = ({ a: aaloo, b: bhujiya }) => { // we are spreading the object
//     console.log(aaloo, bhujiya); // 99 66
// }
// const obj2 = { a: 99, b: 66 }
// spreadObj2(obj2);

// const spreadAray = ([first, second, ...rest]) => {
//     console.log(first, second, rest);
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 5];
// spreadAray(array); // 1 2 [ 3, 4, 5, 6, 7, 5 ] 
// spreadAray([...array, 23, 4, 56, 7, 78, 321]); // 1 2 [ 3, 4, 5, 6, 7, 5, 23, 4, 56, 7, 78, 321 ] 

// const spreadAray2 = (args) => {
//     [first, second, ...rest] = args;
//     console.log(first, second, rest);
// }

// spreadAray2([...array, 23, 4, 56, 7, 78, 321]);

// let obj3 = { a: 77, b: 44 };
// let { a, b } = obj3  // we are destructing the values from obj3
// console.log(a, b); // 77 44

// // Dynamic fields in Objects.
// const key = 'ram';
// const dynamicKeyObj = { [key]: 123 };
// console.log(dynamicKeyObj);
// // { ram: 123 }


// // Object literals
// const aaloo = 1;
// const bhaloo = 2;
// const objLiteralPrev = { aaloo: aaloo, bhaloo: bhaloo };
// console.log(objLiteralPrev);
// // { aaloo: 1, bhaloo: 2 }

// const objLiteral = { aaloo, bhaloo }; // es6 way
// console.log(objLiteral);
// // { aaloo: 1, bhaloo: 2 }

// // Template Literals
// const name = 'Prerana';
// const helloWorld = 'Hello ' + name + '!'; // old way
// console.log(helloWorld);
// // Hello Prerana!

// const helloWorldTemp = `Hello ${name}!`;
// console.log(helloWorldTemp);
// Hello Prerana!

// // Giving functions in template literals
// const num = () => 2;
// const myStr = `Hey! Here's my num ${num()}`;
// console.log(myStr);
// // Hey! Here's my num 2

// const age = () => 18;
// const myAge = `Hey! My age is ${age()}`;
// console.log(myAge);
// // Hey! My age is 18

// // Functions can be added to objects
// let obj = { name: 'Prerana', surname: "Nawar" };
// obj.sum = (a, b) => a + b;
// console.log(obj); //{ name: 'Prerana', surname: 'Nawar', sum: [λ] } 
// console.log(obj.sum(2, 3)); // 5

// Functions can be added to arrays
let array = [1, 2, 3, () => 'Hey Im 4', 5];
console.log(array[3]()); //Hey Im 4 ​​​​​