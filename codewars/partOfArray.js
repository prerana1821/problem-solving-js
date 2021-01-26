// function partlist(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             newArr.push(arr.splice(i,j))            
//         }
//     }
//     return newArr;
// }

// function partList(arr) {
//     let arrLists = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i == 0) {
//             let remaining = buildArray(arr)
//             arrLists.push([arr[i], remaining]);
//         } else {
//             let remaining = buildArray(arr, i + 1);
//             let otherRemaining = buildArray(arr, i + 1);
//             arrLists.push([remaining, otherRemaining]);
//         }
//     }
//     arrLists.splice(arrLists.length - 1, 1);
//     return arrLists;
// }

function buildArray(arr) {
    return arr
        .toString()
        .replace(/\[|]/g, '')
        .replace(/,/g, ' ');
}

function partlist(arr) {
    let arrLists = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            let remaining = buildArray(arr.slice(1));
            console.log(remaining);
            arrLists.push([arr[i], remaining]);
        } else {
            let remaining = buildArray(arr.slice(0, i + 1));
            let otherRemaining = buildArray(arr.slice(i + 1));
            arrLists.push([remaining, otherRemaining]);
        }
    }
    arrLists.splice(arrLists.length - 1, 1);
    return arrLists;
}

let a = ["az", "toto", "picaro", "zone", "kiwi"];
let result = partlist(a);
console.log(result);