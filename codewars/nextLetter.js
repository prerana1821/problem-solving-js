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

// function nextLetter(str) {
//     const letters = 'abcdefghijklmnopqrstuvwxyz';
//     return str.split('').map((letter) => {
//         if (letter.indexOf(letters.toLowerCase()) > 0) {
//             if (letter === letter.toUpperCase() && letter === 'Z') {
//                 return 'A';
//             } else if (letter === letter.toUpperCase()) {
//                 return letter[letter.indexOf(letter.toLowerCase()) + 1].toUpperCase();
//             } else if (letter === letter.toLowerCase() && letter === 'a') {
//                 return 'z';
//             } else if (letter === letter.toLowerCase()) {
//                 return letter[letter.indexOf(letter.toLowerCase()) + 1].toLowerCase();
//             }
//         } else return letter;
//     }).join('');
// }

console.log(nextLetter('Hello '));

// function nextChar(c) {
//     return String.fromCharCode(c.charCodeAt(0) + 1);
// }
// console.log(nextChar('a'));