// function extendVowels(word, num) {
//     // console.log(word, num);
//     // let array = word.split('');
//     // console.log(array);
//     // for (let i = 0; i < array.length; i++) {
//     //     if (array[i]) {

//     //     }
//     // }

//     // let vowels = ['a', 'e', 'i', 'o', 'u'];

//     // if (word.indexOf('a') > -1 || word.indexOf('e') > -1 || word.indexOf('i') > -1 || word.indexOf('o') > -1 || word.indexOf('u') > -1) {
//     //     console.log('Hello');
//     //     ''.repeat(num);

//     // }
//     for (let i = 0; i < word.length; i++) {
//         if (word.indexOf('a') > -1) {
//             let result = word.replace('a', 'a'.repeat(num));
//             console.log(result);
//         }

//     }


//     // console.log(word);
// }

// function isVowel(c) {
//     console.log(['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1);
// }

// isVowel('Hello');

// extendVowels('Prerana', 5)
// function extendVowels(word, num) {
//     let result = '';
//     if (num == 0) {
//         return word;
//     } else if (num < 0 || num % 1 != 0) {
//         return "invalid";
//     } else {
//         const regexVowels = /[aeiou]/gi;
//         for (let i = 0; i < word.length; i++) {
//             // console.log(word[i]);
//             if (regexVowels.test(word[i])) {
//                 // result += word.replace(word[i], word[i].repeat(num));
//                 result += word[i].repeat(num + 1);
//                 // console.log(result);
//             } else {
//                 result += word[i];
//             }
//         }
//     }
//     return result;
// }

function extendVowels(word, num) {
    if (num < 0 || num % 1) return "invalid";
    return word.replace(/[aeiou]/gi, v => v.repeat(num + 1));
}

console.log(extendVowels('Hello', 5));