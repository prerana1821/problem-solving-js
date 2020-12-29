function redundant(str) {
    function displayStr() {
        return str;
    }
    return displayStr;
}

console.log(redundant('apple'));