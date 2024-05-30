function compress(str) {
  let currentChar = "";
  let currentCount = 0;

  let result = "";

  for (let i = 0; i < str.length + 1; i++) {
    let char = str.charAt(i);
    if (currentChar === char) {
      currentCount++;
    } else {
      result +=
        currentCount === 0
          ? ""
          : currentCount === 1
          ? currentChar
          : currentChar + currentCount;
      currentChar = char;
      currentCount = 1;
    }
  }

  return result;
}

console.log(compress("a")); // 'a'
console.log(compress("aa")); // 'a2'
console.log(compress("aaa")); // 'a3'
console.log(compress("aaab")); // 'a3b'
console.log(compress("aaabb")); // 'a3b2'
console.log(compress("aaabba")); // 'a3b2a'
