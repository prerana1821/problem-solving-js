// function rotateLeft(d, arr) {
//     let temp
//     for (let i = 0; i < d; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             temp = arr[0];
//             arr[j] = arr[j + 1];
//             // arr.push(arr.shift());
//         }
//         arr[i] = temp;
//     }
//     return arr;
// }

// function rotateLeft(d, arr) {
//     let temp;
//     let i, j;
//     for (i = 0; i < d; i++) {
//         temp = arr[0];
//         for (j = 0; j < arr.length - 1; j++) {
//             arr[j] = arr[j + 1];
//         }
//         arr[j] = temp;
//     }
//     return arr;
// }

function rotateLeft(d, arr) {
    let temp;
    let i, j;
    for (i = 0; i < d; i++) {
        // temp = arr[0];
        for (j = 0; j < arr.length - 1; j++) {
            arr.push(arr.shift());
        }
        // arr[j] = temp;
    }
    return arr;
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]));