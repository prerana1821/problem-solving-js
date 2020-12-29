let result = 0;
let list = [20, 11, 32, 71, 2, 50];
for (let i = 0; i < list.length; i++) {
    // console.log(list[i]);
    if (list[i] > list[i + 1]) {
        result = list[i];
    }
}
console.log(result);