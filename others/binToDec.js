// console.log(2 ** 3);
let num = '1010110';
// arrayOfNum = Array.from(String(num), Number);
// console.log(arrayOfNum);

// for (let i = 0; i < arrayOfNum.length; i++) {
//     console.log(2 + ' ** ' + i);
// }
let dec = 0;
for (let i = num.length - 1; i >= 0; i--) {
    dec = dec + num[i] * Math.pow(2, num.length - 1 - i);
}
console.log(dec);