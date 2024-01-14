// 11. Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

const power = (a, b) => a ** b;

console.log(power(2, 3));

// 2. Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const areaOfHexagon = (length) => ((3 * Math.sqrt(3)) / 2) * length ** 2;
console.log(areaOfHexagon(10));

// 3. Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = (sentence) => sentence.split(" ").length;
console.log(noOfWords("We are neoGrammers"));

// 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

const findMin = (...numbers) => {
  return numbers.reduce((acc, val) => {
    return acc < val ? acc : val;
  });
};

console.log(findMin(13, 5, 9, 13));

// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

const findMax = (...numbers) => {
  return numbers.reduce((acc, val) => {
    return acc > val ? acc : val;
  });
};

console.log(findMax(33, 5, 9, 13));

// 6. Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

const typeOfTriangle = (angle1, angle2, angle3) => {
  if (angle1 === angle3 && angle2 === angle3 && angle3 === angle1) {
    return "Equilateral";
  } else if (
    angle1 === angle2 ||
    angle1 === angle3 ||
    angle2 === angle1 ||
    angle2 === angle3 ||
    angle3 === angle1 ||
    angle3 === angle2
  ) {
    return "Isosceles";
  } else {
    return "Scalen";
  }
};

console.log(typeOfTriangle(30, 60, 90));
