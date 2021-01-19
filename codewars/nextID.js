// function nextId(ids) {
//     let sortArray = ids.sort((a, b) => a - b);

// }


function nextId(ids) {
    var x = 0;
    while (
        ids.includes(x)
    ) x++;
    return x;
}
console.log(nextId([0, 1, 2, 3, 5]));