function positiveToNegative(binary) {
    let onesCom = [];
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === 0) {
            onesCom.push(1);
        } else {
            onesCom.push(0);
        }
    }

    console.log(onesCom);
    let twosCom = onesCom.join('');
    console.log(twosCom);
    for (let i = onesCom.length - 1; i >= 0; i--) {
        if (onesCom[i] === 1) {
            twosCom = twosCom.substring(0, i) + '0' + twosCom.substring(i + 1);
        } else {
            twosCom = twosCom.substring(0, i) + '1' + twosCom.substring(i + 1);
            break;
        }
    }
    console.log(twosCom);
    return [...twosCom].map((ele) => +ele);
}

console.log(positiveToNegative([0, 0, 1, 0]));
// 1 1 0 1
// 0 0 0 1
// 1 1 1 0

// 0011
// 1100
// 0001
// 1101

// 1 1 => 0
// 0 0 => 0

// 1 0 => 1
// 0 1 => 1