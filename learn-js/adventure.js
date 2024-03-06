const inputNumber = document.querySelector('#input-num');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

btn.addEventListener('click', guessNumber());

function guessNumber() {
    return function() {
        output.innerText = '';
        let inputNum = inputNumber.value;
        let randNum = Math.floor(Math.random() * 10) + 1;
        // console.log(inputNum, randNum);
        if (randNum.toString() == inputNum) {
            output.innerText = 'You Win';
        } else {
            if (randNum < inputNum) {
                output.innerText = 'You Loss, Your guess was too high';
            } else if (randNum > inputNum) {
                output.innerText = 'You Loss, Your guess was too low';
            }
        }
        inputNumber.value = '';
    };
}