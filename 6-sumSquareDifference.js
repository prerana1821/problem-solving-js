function sumSquareDifference(start, end) {
    let temp = 0;
    let sumOfSquares = 0;
    for (let i = start; i <= end; i++) {
        temp = i * i;
        sumOfSquares += temp;
    }
    // console.log(sumOfSquares);

    let temp1 = 0;
    for (let i = start; i <= end; i++) {
        // console.log(i);
        temp1 += i;
        squareOfSum = temp1 * temp1;
    }
    // console.log(squareOfSum);

    return squareOfSum - sumOfSquares;

}

console.log(sumSquareDifference(1, 100));

// Output = 25164150
