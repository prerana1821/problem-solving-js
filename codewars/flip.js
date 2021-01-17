// const flip = (d, a) => {
//     if (d === 'L') {
//         return a.sort((a, b) => b - a);
//     } else if (d === 'R') {
//         return a.sort((a, b) => a - b);
//     }
// }

// const flip = (d, a) => {
//     return d === 'L' ? a.sort((a, b) => b - a) : d === 'R' ? a.sort((a, b) => a - b) : '';
// }

const flip = (d, a) => {
    return a.sort((a, b) => d == 'R' ? a - b : b - a);
}


console.log(flip('R', [3, 2, 1, 2]));
console.log(flip('L', [1, 4, 5, 3, 5]));