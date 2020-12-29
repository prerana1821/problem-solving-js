let num1 = 4;
let num2 = 6;

for (let i = num1 > num2 ? num1 : num2; i <= num1 * num2; i++) {
    if (i % num1 == 0 && i % num2 == 0) {
        console.log(i);
        break;
    }
}
