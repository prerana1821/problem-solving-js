// 1. Convert this ES5 code into ES6.
function getValue() {
    return 9
}

const getValue1 = () => 9

// 2. Convert this function into ES6 with least amount of characters.
function multiply10AndReturn(num) {
    var result = num * 10;
    return result;
}

console.log(multiply10AndReturn(20))

const multiply10AndReturn1 = (num) => num * 10
console.log(multiply10AndReturn1(2));

// 3. Convert this function into ES6 with least amount of characters.

function defaultParamsFunc(a, b, c) {
    if (c === undefined) {
        c = 4;
    }
    return a * b * c;
};
console.log(defaultParamsFunc(3, 1));

const defaultParams1 = (a, b, c = 4) => a * b * c
console.log(defaultParams1(1, 2));
console.log(defaultParams1(1, 2, 5));


// 3. Convert this function into ES6 with least amount of characters.

function add(a = 30, b = 0) {
    return a + b;
}

console.log(add(2, 3));

const add1 = (a = 30, b = 0) => a + b
console.log(add(9, 30));
console.log(add(undefined, 30));

// 3. Convert this function into ES6 with least amount of characters.

function defaultParamsFunc(a, b, c) {
    if (b === undefined) {
        b = 4;
    }
    console.log(a * b);
    console.log(c * b);
};
defaultParamsFunc(3, undefined, 2);

const defaultParams = (a, b = 5, c) => a * b * c
console.log(defaultParams(2, undefined, 10));

// 4. Convert this function into ES6 with least number of characters.

function combineObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Output: {a: 1, b: 2, c: 3, d: 4}

const combineObjs1 = (obj1, obj2) => ({ ...obj1, ...obj2 })
console.log(combineObjs1(obj1, obj2));

// 5. Convert this function into ES6 with least number of characters.

function getArray(...rest) {
    return rest;
}
console.log(getArray(1, 2, 3, 5, 5));

const getArray1 = (...rest) => rest
console.log(getArray1(1, 2, 3, 4, 5, 6));

// 5. Convert this function into ES6 with least number of characters.

function spreadExample({ a, b, ...c }) {
    console.log(a, b, c);
}

const obj = { a: 1, b: 2, c: [1, 2, 3, 4, 5] }
spreadExample(obj);


function getData(person) {
    const name = person.name;
    const address = person.address.city
    console.log(name); // John Doe
    console.log(address); // New York
}

const person = {
    name: 'John Doe',
    address: {
        city: 'New York',
        state: 'NY',
    },
};
getData(person);

const getData1 = (person) => {
    const { name, address: { city } } = person
    console.log(name);
    console.log(city);
}

console.log(getData1(person));












