// function cvArray(array) {
//     for (var i = 0, l = array.length; i < l; i++) {
//         if (array[i] instanceof Array) {
//             array[i] = array[i].join("`");
//         }
//     }
// }

function toCsvText(array) {
    var csvData = '';
    for (let i = 0; i < array.length; i++) {
        let arr = array[i];
        if (!(j === row.length - 1)) {
            csvData += '\n';
        }
    }
    return csvData;
}

function toCsvText(array) {
    var csvData = '';
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        for (let j = 0; j < row.length; j++) {
            if (!(j === row.length - 1)) {
                csvData += '\n';
            }
        }
        csvData += '\n';
    }
    return csvData.slice(0, csvData.length - 1);
}


console.log(toCsvText([
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
]));