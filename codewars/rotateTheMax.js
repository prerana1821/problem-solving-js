function rotateToTheMAx(num) {
    // let reverse = 0;
    // while (num > 0) {
    //     let lastDigit = num % 10;
    //     reverse = (reverse * 10) + lastDigit;
    //     num = parseInt(num / 10);
    // }
    // return reverse;
    let result = num.split('')
    let output = 0;

    while (result > num) {

    }

    for (let i = 0; i < result.length; i++) {
        if (i === result.length - 1) {
            i = 0;
        } else {
            if (result[i] > result[i + 1]) {
                output = output + result[i];
            }
        }
        // console.log(result[i]);
        console.log('result + 1 = ', result[i + 1]);
        // console.log(result);
    }
    // return result
    console.log(output);
    // console.log(result);
}

rotateToTheMAx('135');