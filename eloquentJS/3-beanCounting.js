// function countBs(string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === 'B') {
//             count++;
//         }
//     }
//     return count;
// }

function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (/B/.test(string[i])) {
            count++;
        }
    }
    return count;
}

// console.log(countBs("BBC"));

// function countChar(string, letter) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }


function countChar(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        let regexp = new RegExp(`${letter}`);
        if (regexp.test(string[i])) {
            count++;
        }
    }
    return count;
}

console.log(countChar("kakkerlak", "a"));