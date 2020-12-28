function extendVowels(word, num) {
    // console.log(word, num);
    // let array = word.split('');
    // console.log(array);
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i]) {

    //     }
    // }

    // let vowels = ['a', 'e', 'i', 'o', 'u'];

    // if (word.indexOf('a') > -1 || word.indexOf('e') > -1 || word.indexOf('i') > -1 || word.indexOf('o') > -1 || word.indexOf('u') > -1) {
    //     console.log('Hello');
    //     ''.repeat(num);

    // }
    // for (let i = 0; i < word.length; i++) {
    if (word.indexOf('a') > -1) {
        let result = word.replace('a', 'a'.repeat(num));
        console.log(result);
    }
    // }
    // console.log(word);
}

// function isVowel(c) {
//     console.log(['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1);
// }

// isVowel('Hello');

// extendVowels('Prerana', 5)