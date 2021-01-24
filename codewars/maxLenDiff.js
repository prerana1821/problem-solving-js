// function mxdiflg(a1, a2) {
//     let result = [];
//     if (a1.length == undefined || a2.length == undefined ) {
//         return -1;
//     } else{
//         for (let i = 0; i < a1.length; i++) {
//             for (let j = 0; j < a2.length; j++) {
//                 // console.log(a1[i]);
//                 // console.log(a2[j]);
//                 result.push(Math.abs(a1[i].length - a2[j].length));
//             }
//         }
//         // console.log(result);
//         return Math.max(...result);
//     }
// }

function mxdiflg(a1, a2) {
    let result = [];
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    } else {
        for (let i = 0; i < a1.length; i++) {
            for (let j = 0; j < a2.length; j++) {
                result.push(Math.abs(a1[i].length - a2[j].length));
            }
        }
        return Math.max(...result);
    }
}

// a1 = ['ccct','tkkeeeyy','ggiikffsszzoo','nnngssddu','rrllccqqqqwuuurdd','kkbbddaakkk']
// a2 = ['tttxxxxxxgiiyyy','ooorcvvj','yzzzhhhfffaaavvvpp','jjvvvqqllgaaannn','tttooo','qmmzzbhhbb']
a1 = ['nsss', 'llllttttkkhhhh'];
a2 = ['qkkkk', 'bbbppttuu', 'uuutttzu'];
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
console.log(mxdiflg(a1, a2));


// function mxdiflg(a1, a2) {
//     if (a1 === undefined || a2 === undefined) return -1;
//     else {
//         const arrLenA1 = lenArr(a1);
//         const arrLenA2 = lenArr(a2);
//         const maxLenOfA1 = Math.max(...arrLenA1);
//         const minLenOfA1 = Math.min(...arrLenA1);
//         const minLenOfA2 = Math.min(...arrLenA2);
//         const maxLenOfA2 = Math.max(...arrLenA2);
//         const firstPossibility = Math.abs(maxLenOfA2 - minLenOfA1);
//         const secondPossibility = Math.abs(maxLenOfA1 - minLenOfA2);

//         return firstPossibility > secondPossibility
//             ? firstPossibility
//             : secondPossibility;
//     }
// }

// function lenArr(arr) {
//     return arr.map((str) => str.length);
// }

