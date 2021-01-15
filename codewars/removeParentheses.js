// function removeParentheses(sentence) {
//     let i, j;
//     if (sentence.indexOf('(') === -1 || sentence.indexOf(')') === -1) {
//         return sentence;
//     } else {
//         i = sentence.lastIndexOf('(');
//         j = sentence.slice(i + 1).indexOf(')');
//         return removeParentheses(
//             sentence.slice(0, i) + sentence.slice(i + 1 + j + 1)
//         );
//     }
// }

function removeParentheses(s) {
    let r = 0;
    let x = '';
    for (let c of s) {
        if (c == '(') r++;
        if (r == 0) x += c;
        if (c == ')') r--;
    }
    return x;
}

console.log(removeParentheses("example(unwanted thing)example"));