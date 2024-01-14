// let obj = { firstName: "Prerana", lastName: "Nawar" }
// let first = obj.firstName;
// let last = obj.lastName;

// // to avoid above repetation we use destructuring

// const [firstName, lastName] = [true, false]
// console.log(firstName); // true
// console.log(lastName); // false

// const [c, d, e] = [true, false];
// console.log(c); // true
// console.log(d); // false
// console.log(e); // undefined

// // c = 5  // SyntaxError: Assignment to constant variable. 

// const j = { a: 1, b: 2 }
// j.a = 5
// console.log(j);  // { a: 5, b: 2 }

// // to make prope rties const

// Object.freeze(j);

// j.b = 10; // won't give an error but will freeze the properties

// console.log(j); // { a: 5, b: 2 }


// // With objects

// const { a, b } = { b: 2, a: 1 }
// console.log(a); // 1
// console.log(b); // 2

// // order doesn't matter with objects

// const { x, y } = { r: 2, q: 1 }
// console.log(x); // undefined
// console.log(y); // undefined

// const { weapon, room: location } = { name: "John", room: "Kitchen", weapon: "candle" }

// console.log(weapon); // candle
// console.log(location); // Kitchen

// // -----------------------------

// // Examples of destructuring

// const [a1, b1] = [1, 2]
// console.log(a1, b1); // 1 2 

// // Omit certain values
// const [a2, , b2] = [1, 2, 3]
// console.log(a2, b2); // 1 3

// // Combine with spreed/rest operator (accumulates the rest of the values)
// const [a3, ...b3] = [1, 2, 3]
// console.log(a3); // 1 
// console.log(b3); // [ 2, 3 ]

// // Swap variables
// let a4 = 9
// let b4 = 6
// console.log(a4);
// console.log(b4);
// [b4, a4] = [a4, b4]
// console.log(a4);
// console.log(b4);

// Advance deep array
let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]
console.log(a); // 1
console.log(b); // 2
console.log(c); // [[3,4], 5]
console.log(d); // 6
