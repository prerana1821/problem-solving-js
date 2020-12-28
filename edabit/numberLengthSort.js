let arrayOfNumbers = [1, 54, 1, 2, 463, 2];
let sortedArray = [];

function numberLenSort(arrayOfNumbers) {
    // for (let i = 0; i < arrayOfNumbers.length; i++) {
    //     // console.log(arrayOfNumbers[i]);
    //     // if (String(arrayOfNumbers[i]).length < String(arrayOfNumbers[i + 1]).length) {
    //     //     sortedArray.push(arrayOfNumbers[i]);
    //     // }   
    // }

    // arrayOfNumbers.sort(function(a, b) {
    //     sortedArray.push(String(a).length - String(b).length);
    // })

    // for (let i = 0; i < arrayOfNumbers.length; i++) {
    //     if (arrayOfNumbers[i] < arrayOfNumbers[i + 1]) {
    //         sortedArray.push(arrayOfNumbers[i]);
    //     }
    // }

    arrayOfNumbers.sort(function(a, b) {
        return String(a).length - String(b).length;
    });
    return arrayOfNumbers;
}

let result = numberLenSort(arrayOfNumbers);
console.log(result);
// console.log(sortedArray);
// console.log(arrayOfNumbers);