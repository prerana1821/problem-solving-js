function possibleBonus(a, b) {
    return a < b && (a + 6) >= b;
}

console.log(possibleBonus(0, 6));