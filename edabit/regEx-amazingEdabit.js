// function amazingEdabit(sentence) {
//     if (/edabit/gi.test(sentence)) {
//         return sentence;
//     } else {
//         return sentence.replace('amazing', 'not amazing')
//     }
// }

// function amazingEdabit(sentence) {
//     return (/edabit/gi.test(sentence) ? sentence : sentence.replace('amazing', 'not amazing'));
// }

const amazingEdabit = sentence =>
    /edabit/gi.test(sentence) ? sentence : sentence.replace('amazing', 'not amazing');


console.log(amazingEdabit("edabit is amazing."));