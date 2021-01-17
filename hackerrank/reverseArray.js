// function reverseArray(a) {
//     let result = [];
//     for (let i = a.length - 1; i >= 0; i--) {
//         result.push(a[i]);
//     }
//     return result;
// }

// const reverseArray = (a) => a.reverse();


function reverseArray(array) {
    return array.map((item, index) => {
        console.log(array.length - 1 - index);
        return array[array.length - 1 - index];
    });
}

console.log(reverseArray([1, 4, 3, 2]));

// function reverseArray(a) {
//     const n = a.length;
//     for (let i = 0; i < n / 2; i++) {
//         let temp = a[i];
//         a[i] = a[n - 1 - i];
//         a[n - i - 1] = temp;
//     }
//     return a;
// }