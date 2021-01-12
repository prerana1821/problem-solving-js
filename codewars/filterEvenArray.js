// function getEvenNumbers(array) {
//     let evenArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             evenArray.push(array[i]);
//         }
//     }
//     return evenArray;
// }

// function getEvenNumbers(array) {
//     let evenArray = [];
//     array.forEach(element => {
//         (element % 2 === 0) ? evenArray.push(element): '';
//     });
//     return evenArray;
// }

// const getEvenNumbers = (array) => array.filter(even => even % 2 === 0);

// const getEvenNumbers = arr =>
//     arr.filter(x => !(x & 1));

// getEvenNumbers = numbersArray => numbersArray.filter(x => !(x % 2))


// function getEvenNumbers(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             array.splice(i, 1);
//         }
//     }
//     return array;
// }

function getEvenNumbers(arr) {
    function check(i, a) {
        if (arr[i]) {
            if (!(arr[i] & 1)) {
                return check(i + 1, [...a, arr[i]])
            }
            return check(i + 1, a)
        } else {
            return a
        }
    }
    return check(0, [])
}
console.log(getEvenNumbers([2, 4, 5, 6]));