// Anything that uses a dot notation in javascript is a object. 

// primitive values are pass by value
// non-primitive values are pass by reference

let person = {}

person.name = "John"

let who = person.name

console.log(who); // John

person.name = "Prerana"

console.log(who); // John // pass by value
console.log(person.name); // Prerana // pass by reference

// ----------------------------

function callByValue(varOne, varTwo) {
    console.log("Inside Call by Value Method");
    varOne = 100;
    varTwo = 200;
    console.log("varOne = " + varOne + " varTwo = " + varTwo);
}
let varOne = 10;
let varTwo = 20;
console.log("Before Call by Value Method");
console.log("varOne = " + varOne + " varTwo = " + varTwo);
callByValue(varOne, varTwo)
console.log("After Call by Value Method");
console.log("varOne = " + varOne + " varTwo = " + varTwo);

//  In Javascript objects and arrays follows pass by reference.

function callByReference(varObj) {
    console.log("Inside Call by Reference Method");
    varObj.a = 100;
    console.log(varObj);
}
let varObj = { a: 1 };
console.log("Before Call by Reference Method");
console.log(varObj);
callByReference(varObj)
console.log("After Call by Reference Method");
console.log(varObj);

// https://javascript.info/object-copy


let message = "Hello!";
let phrase = message;
console.log(message); // Hello
console.log(phrase); // Hello

let user = {
    name: "John"
};
let admin = user;

admin.name = "Prerana";

console.log(user.name); // Prerana
console.log(admin.name); // Prerana

// Reference comparison

let a = { name: "John" };
let b = a;

console.log(a == b); // true // both variables reference the same object
console.log(a === b); // true

let c = { name: "John" }
let d = { name: "John" }

console.log(c == d); // false
console.log(c === d); // false

// with Arrays

let arr = [];
arr.name = "John";
arr[0] = 1
arr[1] = "Prerana"
arr[3] = 40
arr.new = 'newjii'
console.log(arr); // [ 1, 'Prerana', undefined, 40, name: 'John', new: 'newjii' ]

let current = arr.name
console.log(current); // John

// arrays are objects in js so rules are similar

console.log(typeof arr === "array"); // false
console.log(typeof arr === "object"); // true


let newVar = "newVariable";

arr[newVar] = "newValue";
console.log(arr); // [ 1, 'Prerana', undefined, 40, name: 'John', new: 'newjii', newVariable: 'newValue' ]

// arr[newVarUndefined] = "undefinedValue"; // ReferenceError: newVarUndefined is not defined. Since newVarUndefined is not defined, it will throw an error.
console.log(arr);

arr["newVar"] = "newValue1";

console.log(arr); // [ 1, 'Prerana', undefined, 40, name: 'John', new: 'newjii', newVariable: 'newValue', newVar: 'newValue1' ]

console.log(arr.newVar); // newValue1

// Interesting

let array = [];

array[0] = "Prerana";

console.log(array); // [ 'Prerana' ]
console.log(array.length); // 1

array.hello = "goodbye";

console.log(array); // [ 'Prerana', hello: 'goodbye' ]
console.log(array.length); // 1 // it doesn't count non numeric indexing

array[10] = "John";

console.log({ array }); // { array: [ 'Prerana', <9 empty items>, 'John', hello: 'goodbye' ] }

console.log(array.length); // 11

// In application code we don't usually use ( array.hello = "goodbye"; ) but in libraries we use it sometimes. But it is important to know this just so you understand that the rules are consistent, that arrays are objects.


// ----------------------------

let object = {}
object.murderer = "??"
object["weapons"] = [{ type: "knife" }, "lasers"]

console.log(object);

// Slides https://slides.com/bgando/f2f-final-day-1#/1

// What is an object ?
// What is the difference between dot and bracket notation ?
// How do you add a property with a key that contains special characters ?
// How do you add a property whose key and value are stored in different variables ?
// How do we loop through objects to access the values ?
// When can you only use dot notation and not bracket ?
// When can you only use brackets and not dot ?
// How do you add a property with a key that is stored in a variable ?
// How do you access an object that is inside another object ?
// How do you create an object that is nested inside another object ?








