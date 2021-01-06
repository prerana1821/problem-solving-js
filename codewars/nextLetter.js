function nextLetter(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (/^[A-Z]+$/i.test(string[i])) {
            if (string[i] === 'z') {
                result = result + 'a';
            } else if (string[i] === 'Z') {
                result = result + 'A';
            } else {
                result = result + String.fromCharCode(string[i].charCodeAt(0) + 1);
            }
        } else if (/\s/.test(string[i])) {
            result = result + string[i];
        } else {
            result = result + string[i];
        }
    }
    return result;
}
console.log(nextLetter('Hello '));

// function nextChar(c) {
//     return String.fromCharCode(c.charCodeAt(0) + 1);
// }
// console.log(nextChar('a'));