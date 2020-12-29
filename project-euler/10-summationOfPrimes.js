function primeNumberGen(param) {
    if (param === 1) {
        return false;
    }
    if (param === 2) {
        return true;
    }
    if (param % 2 === 0) {
        return false;
    }
    var ceil = Math.ceil(Math.sqrt(param));
    for (var i = 3; i <= ceil; i += 2) {
        if (param % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(primeNumberGen(17));
// console.log(primeNumberGen(18));

function sumPrimes(param) {
    var array = [];
    for (var j = 2; j <= param; j++) {
        if (primeNumberGen(j)) {
            array.push(j);
        }
    }
    var sumArray = array.reduce(function add(a, b) {
        return a + b;
    }, 0);
    var answer = function () {
        return sumArray;
    }
    return answer();
}

var answer = function (param) {
    return sumPrimes(param);
}

console.log(answer(10)); 