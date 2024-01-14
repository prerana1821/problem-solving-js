//  1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const add = (...numbers) => {
  return numbers.reduce((acc, value) => acc + value, 0);
};

console.log(add(4, 5, 5, 6, 6));

// 2. Write a program to take a number input from user and determine whether the number is odd or even.

const checkEvenOrOdd = (number) => {
  return number % 2 === 0 ? "even" : "odd";
};

console.log(checkEvenOrOdd(3));

// 3. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const checkMaxOfThree = (...numbers) => {
  console.log(numbers)
  return numbers.reduce((acc, val) => {
    return acc > val ? acc : val;
  }, 0);
};

console.log(checkMaxOfThree(8, 23, 17));
