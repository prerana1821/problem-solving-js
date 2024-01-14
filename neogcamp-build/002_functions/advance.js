// 1, Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// const alphabets = "abcdefghijklmnopqrstuvwxyz";
const encodeString = (string, num) => {
  let result = "";
  let charcode = 0;

  for (let i = 0; i < string.length; i++) {
    charcode = string[i].charCodeAt() + num;
    result += String.fromCharCode(charcode);
  }
  return result;
};

console.log(encodeString("neogcamp", 2));

// 2 Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

const toSentenceCase = (sentence) => {
  const words = sentence.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let capWords = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    result += capWords + " ";
  }
  return result;
};

console.log(toSentenceCase("we are neoGrammers"));

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const sortArray = (array) => {
  return array.sort((a, b) => {
    return a - b;
  });
};

console.log(sortArray([100, 83, 32, 9, 45, 61]));

// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseCharactersOfWord = (sentence) => {
  const sentArr = sentence.split(" ");
  let result = "";

  for (let i = 0; i < sentArr.length; i++) {
    result += sentArr[i].split("").reverse("").join("") + " ";
  }

  return result;
};

console.log(reverseCharactersOfWord("we are neoGrammers"));
