// function typeValidation(variable, type) {
//     return (typeof(variable) === type ? true : false);
// }

// function typeValidation(variable, type) {
//     return (typeof(variable) === type);
// }

const typeValidation = (variable, type) => typeof(variable) === type;

console.log(typeValidation(42, "number"));