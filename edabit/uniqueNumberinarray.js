function findSingleNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === -1) {
            console.log(array[i]);
        }
    }
}



// console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4]));
findSingleNumber([2, 2, 2, 3, 4, 4, 4]);

//not working