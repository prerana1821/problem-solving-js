// n$
// function isLastCharacterN(word) {
//     let regEx = /n$/i;
//     return regEx.test(word);
// }

// const isLastCharacterN = (word) => {
//     let regEx = /n$/i;
//     return regEx.test(word);
// }

// const isLastCharacterN = word => {
//     let regEx = /n$/i;
//     return regEx.test(word);
// }

// const regEx = /n$/i;
// const isLastCharacterN = word => regEx.test(word);


const isLastCharacterN = word => /n/.test(word);

console.log(isLastCharacterN('Preran'));