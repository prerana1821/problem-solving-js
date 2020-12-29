//HCF OR GCD
let num1 = 4;
let num2 = 6;

for (let i = num1 < num2 ? num1 : num2; i >= 1 ; i--) {
    if (num1 % i == 0 && num2 % i == 0) {
        console.log(i);
        break;
    }
}