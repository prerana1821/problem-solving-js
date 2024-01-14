//  1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".  Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

const fizzBuzz = () => {
  let array = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }
  return array;
};

// console.log(fizzBuzz());

//  2. Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *

const starPattern = () => {
  let str = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
      str = str + "* ";
    }
    str += "\n";
  }
  return str;
};

// console.log(starPattern());

//  3. Write a program to take a number input from user and print multiplication table 12 times for that number.

const multiplicationTables = (number) => {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str = str + `${number} * ${i} = ${number * i} \n`;
  }
  return str;
};

// console.log(multiplicationTables(6));

//  4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibonacciSeries = (num) => {
  let f1 = 0,
    f2 = 1,
    f3;
  for (let i = 1; i < num; i++) {
    console.log(f1);
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
};

fibonacciSeries(21);

// 5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// console.log(factorial(5));

// 6. Write a Program to take a number input from user and find if the number is Prime or not.

const prime = (num) => {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime ? "Prime" : "No Prime";
};

// console.log(prime(3));

// 7. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const checkDay = (userInputDay) => {
  if (userInputDay === "Sunday" || userInputDay === "Saturday") {
    return "Weekend";
  } else {
    return "Weekday";
  }
};

// console.log(checkDay("Tuesday"));
