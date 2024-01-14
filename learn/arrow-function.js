function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

//  Simple arrow function
const sumArrow = (a, b) => a + b;

console.log(sumArrow(1, 2));

const isOne = (a) => a == 1;

// == vs ===

console.log(isOne(2));

const max = (a) => {
  console.log(a);
};

console.log(max(1, 2));

const getObj = () => ({ a: 10 });

const obj = { a: 10 };

console.log(getObj());

//  this keyword

const getArray = () => [1, 2, 3];

console.log(getArray());

//  Default parameters

const summation = (a, b) => {
  console.log(a, b);
  if (b === undefined) {
    return a;
  } else {
    return a + b;
  }
};

const defaultParams = (a, b = 5) => {
  return a + b;
};

console.log(summation(1));
console.log(defaultParams(1));

const sumof3 = (a, b = 1, c = 1) => a + b + c;

console.log(sumof3(2, 3));

//  REST & SPREAD

const restEx = (a, b, ...rest) => {
  console.log(a, b, rest);
  const sumOfArray = rest.reduce((value, arr) => {
    console.log(value);
    return arr * b + value;
  }, 0);
  console.log(sumOfArray);
  return sumOfArray * a * b;
};

const words = ["How", "are", "you", "doing?"];

const sentence = words.reduce((acc, word) => {
  return acc + word + " ";
}, "");

console.log(sentence);

//  0 + 3 = 3
//  3 + 4 = 7
//  ....

const name = "Prerana";

const stringConcat = "Hello" + " " + name;
const templateLiteral = `Hello ${name}`;

console.log(templateLiteral);

console.log(restEx(1, 2, 3, 4, 45, 6, 7, 889, 99, 0, 8, 7, 65));

const spreadEx = ({ a, b, c, ...rest }) => {
  //   console.log(obj.b);
  console.log(a, b, c, rest);
  return a + b * c;
};

const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

console.log(spreadEx(obj1));

const arrSpread = ([first, second]) => {
  //   console.log(first, second);
  return a + b;
};

console.log(arrSpread([1, 2]));

const obj2 = { a: 1, b: 2 };
