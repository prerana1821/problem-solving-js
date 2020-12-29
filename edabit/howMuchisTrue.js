function countTrue(array) {

    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            counter++;
        }
    }
    return counter;
}
console.log(countTrue([true, false, false, true, false]));

// const countTrue = (arr) => arr.filter(Boolean).length;