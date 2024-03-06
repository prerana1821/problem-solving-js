const arr = [1, 2, 3, 4, 5];

// const odd = (num) => num % 2 === 1;
// console.log(odd(1)); // true

// const sum = (num, initialValue) => num + initialValue;

// const sumOfOdds = arr.reduce(sum(odd), 0);

// const sumOfOdds = (arr) => {
//     return arr.reduce((num, init) => {
//         if (num % 2 === 1) {
//             return num + init;
//         } return;
//     }, 0);
// }

// const sumOfOdds = (arr) => {
//     return arr.filter((num) => {
//         if (num % 2 === 1) {
//             return arr.reduce();
//         } return;
//     });
// }


// console.log(sumOfOdds(arr));


// const birthday = (obj) => {
// //     return { ...obj, age: obj.age + 1 };
// // }

// const birthday = obj => ({ ...obj, age: obj.age + 1 });

// const prerana = { name: 'Prerana', age: 20 };

// console.log(birthday(prerana));


// // function lessThan10(num) {
// //     return num < 10;
// // }

// const lessThan10 = (num) => num < 10;

// const numArr = [1, 2, 5, 78, 10, 10, 22, 3];
// const numArr2 = [1, 2, 5];

// console.log(lessThan10(2));

// console.log(numArr.filter(lessThan10));

// const arrayOfObj = (arr) => {
//     return arr.map(ele => {
//         return ({ num: ele });
//     });
// }
// console.log(arrayOfObj(numArr));

// const itemToObj = ele => ({ num: ele });
// const itemToObj2 = ele => ({ ele });
// const itemToObj3 = ele => ({ [ele]: ele });
// // const itemToObj4 = ele => ({ [ele] }); // error
// const itemToObj5 = ele => ({ [`${ele}-${ele}`]: ele });
// console.log(numArr2.map(itemToObj5));

// const sum = (arr) => {
//     return arr.reduce(ele => {
//         return;
//     });
// }

// console.log(sum(numArr2));

// polyfill the array methods

