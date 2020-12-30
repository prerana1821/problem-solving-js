function inclusiveArray(startNum, endNum) {
    let resultArray = [];
    if (startNum > endNum || startNum === endNum) {
        resultArray.push(startNum);
        return resultArray;
    } else {
        resultArray.push(startNum);
        let newStartNum = startNum + 1;
        if (newStartNum <= endNum) {
            inclusiveArray(newStartNum, endNum)
        }
        return resultArray;
    }
}

console.log(inclusiveArray(2, 8));