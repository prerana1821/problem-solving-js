function addComma(num) {
  let [integer, float] = String(num).split(".");
  const fraction = float ? `.${float}` : "";

  for (let i = integer.length - 3; i > 0; i = i - 3) {
    integer = integer.slice(0, i) + "," + integer.slice(i);
  }

  return `${integer}${fraction}`;
}

console.log(addComma(1)); // '1'
console.log(addComma(1000)); // '1,000'
console.log(addComma(-12345678)); // '-12,345,678'
console.log(addComma(12345678.12345)); // '12,345,678.12345'
