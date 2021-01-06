// function nonsense(string) {
// let newString = string.charAt(0).toUpperCase() + string.slice(1);
//     // console.log(newString);
//     // charAt(todoTitle.str.length - 1)
//     // let newString = '';
//     // let finalString = '';
//     // if (/trex/ig.test(string)) {
//     //     newString += string.replace('trex', '')
//     // }
//     // if (/raptor/ig.test(newString)) {
//     //     finalString += newString.replace('raptor', '')
//     // }
//     // let capital = finalString.charAt(0).toUpperCase() + finalString.slice(1);
//     // console.log(capital);
//     // let full = `${capital.substring(0, capital.length - 1)}${capital.charAt(capital.length - 1)}.`;
//     // console.log(full);

//     let vowels = 'aeiou';

//     let result = '';
//     let regex = /trex|raptor/ig;
//     string = string.replace(regex, '')
//     for (let i = 0; i < string.length; i++) {
//         if (vowels.indexOf(string[i]) != -1) {
//             result += string.replace(string[i], vowels[i]);
//         } else {
//             result += string;
//         }
//     }
//     console.log(result);
// }

function nonsense(str) {
    const regex = /trex|raptor/ig;
    const regex2 = /\si\s/ig;
    str = str.replace(regex, '').replace(regex, '');
    const vowels = {
        '0': 'a',
        '1': 'e',
        '2': 'i',
        '3': 'o',
        '4': 'u',
    };
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (vowels.hasOwnProperty(str[i])) {
            newStr += vowels[str[i]];
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    let result = newStr.charAt(0).toUpperCase() + newStr.slice(1)
    if (result[result.length - 1] !== '.') {
        result += '.';
    }
    let finalstr = result.replace(regex2, ' I ');
    return finalstr;
}
console.log(nonsense('d2n3S04Rs 0r1 c33L'));
console.log(nonsense('i think therefore i am'));