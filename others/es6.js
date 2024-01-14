// const defaultExample = (a, b) => {
//     if (b === undefined) {
//         b = 5;
//     }
//     return a + b;
// };

// const defaultExample2 = (a, b = 5) => a + b

// console.log(defaultExample(1, 2));
// console.log(defaultExample(1));

// const defaultExample3 = (a, b, c) => a + b + c
// console.log(defaultExample3(1, 2, 3));
// // console.log(defaultExample3(1, , 3));

// // rest
// const restExample = (a, ...rest) => {
//     console.log(a, rest);
// }

// console.log(2, 3, 4, 5, 6, 7, 8, 9, 10);

// // spread
// const spreadExample = ({ a, b }) => {
//     console.log(a, b);
// }

// const obj = { a: 1, b: 2, }
// spreadExample(obj);

// // spread with array
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const spreadExample2 = ([first, second, ...rest]) => {
//     console.log(first, second, rest);
// }

// console.log(spreadExample2(array));
// // rest with spread
// console.log(spreadExample2([...array, 11, 12, 13]));

// let key = "ram";
// const obj = { [key]: 122 }
// console.log(obj);

// let aaloo = 1
// let bhaaloo = 2

// const obj1 = { aaloo: aaloo, bhaaloo: bhaaloo }
// console.log(obj1);
// const obj2 = { aaloo, bhaaloo }
// console.log(obj2);


// let name = 'Tanay'
// let line = "Helloo " + name + " !"
// console.log(line);

// const helloTemp = `Hello ${name} !`
// console.log(helloTemp);

// const giveMeFive = () => 5
// const line2 = `Hey, my roll is ${giveMeFive()}`

// console.log(line2);

export const add = (a, b) => a + b
export const square = (a) => a * a;

import { add, square } from "./utils";

console.log(add(1, 2));
console.log(square(2));