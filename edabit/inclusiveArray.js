function inclusiveArray(startNum, endNum) {
    let resultArray = [];
    if (startNum > endNum) {
        resultArray.push(startNum);
        return resultArray;
    } else {
        for (let i = startNum; i <= endNum; i++) {
            resultArray.push(i);
        }
        return resultArray;
    }
}

console.log(inclusiveArray(17, 5));