function countSyllables(string) {
    // return /\w{2}/gi.test(string);
    var counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (/\w{2}/gi.test(string)) {
            counter++;
        }
    }

    return counter;
}

console.log(countSyllables("Hehehehehehe"));