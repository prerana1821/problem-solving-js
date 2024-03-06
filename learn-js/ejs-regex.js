// // Creating a regular expression

// const regexConst = new RegExp("constructor", "i");
// console.log(regexConst.test("Constructor"));
// // true

// // Static
// const regexLiteral = /literal/i;
// console.log(regexLiteral.test("Literal"));
// // true

// // The main difference between these two syntaxes is that pattern using slashes /.../ does not allow for expressions to be inserted (like string template literals with ${...}). They are fully static.

// // Slashes are used when we know the regular expression at the code writing time – and that’s the most common situation. While new RegExp is more often used when we need to create a regexp “on the fly” from a dynamically generated string.

// // For eg 1
// // let tag = prompt("What tag do you want to find?", "h2");
// // let regexp = new RegExp(`<${tag}>`); // same as /<h2>/ if answered "h2" in the prompt above

// // For eg 2
// // VS code search

// const regexWithSlash = /go\/od/;
// console.log(regexWithSlash.test("go/od"));
// // true

// const regexWithSlashPreserved = /go\od/;
// console.log(regexWithSlashPreserved.test("good"));
// const regexWithSlashPreserved2 = /we\nt/;
// console.log(regexWithSlashPreserved2.test("we\nt"));

// const eighteenPlus = /eighteen\+/;
// console.log(eighteenPlus.test("eighteen+"));

// // Testing for matches

// console.log(/abc/.test("abc")); // true
// console.log(/abc/.test("xyzabc")); // true
// console.log(/abc/.test("xyzabe")); // false

// // Sets of characters

// console.log(/[0123456789]/.test("Birthdate : 18"));
// console.log(/[0-9]/.test("Prerana 18"));
// console.log(/\d/.test("Prerana 18"));

// console.log(/[a-z]/.test("Prerana"));
// console.log(/\w/.test("Prerana"));

// console.log(/ /.test(" "));
// console.log(/\s/.test(" "));

// console.log(/\D/.test("Prerana"));
// console.log(/\W/.test("@"));

// console.log(/./.test("Prerana"));
// console.log(/./.test("\n"));
// console.log(
//   /./.test(`
// `)
// );

// console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test("01-30-2003 15:20"));
// console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test("JAN-30-2003 15:20"));

// console.log(/[\d.]/.test("1\n"));

// // think after ^, we don't won't that
// console.log(/[^ex]/.test("Prerana"));

// let notBinary = /[^01]/;
// console.log(notBinary.test("1100100010100110"));
// // → false
// console.log(notBinary.test("1100100010200110"));
// // → true

// // Repeating parts of a pattern
// console.log(/\d+/.test("123"));
// console.log(/\d+/.test(""));
// console.log(/\d*/.test("123"));
// console.log(/\d*/.test(""));

// console.log(/prera?na/i.test("Prerana"));
// console.log(/prera?na/i.test("Prerna"));

// console.log(/\d{1,2}-\w{3,}-\d{4}/.test("02-Jan-2003"));
// console.log(/\d{1,2}-\w{3,}-\d{4}/.test("02-Jn-2003"));
// console.log(/\d{1,2}-\w{3,}-\d{4}/.test("000-Jan-2003")); // ?
// console.log(/\d{1,2}-\w{3,}-\d{4}/.test("00-Jan-20033")); // ?

// // Grouping subexpressions
// console.log(/boo+(hoo+)+/i.test("Booohooohooo"));
// console.log(/boo+(hoo+)+/i.test("Booohoohoo"));
// console.log(/boo+(hoo+)+/i.test("Booohohoo"));

// // Matches and groups
// console.log(/\d+/.exec("Prerana 18 2003"));
// console.log("Prerana 18 2003".match(/\d+/));

// console.log(/'([^']*)'/.exec("she said 'hello'"));

// console.log(/bad(ly)?/.exec("bad"));
// // → ["bad", undefined]
// console.log(/(\d)+/.exec("123"));
// // → ["123", "3"]

// // The Date class

// console.log(new Date());
// // Thu Apr 08 2021 11:22:35 GMT+0530 (India Standard Time)
// console.log(new Date().getTime());
// // 1617861143491
// console.log(new Date(1617861143491));
// // Thu Apr 08 2021 11:22:23 GMT+0530 (India Standard Time)

// const getDate = (string) => {
//   let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
//   console.log(month, year, day, _);
//   return new Date(year, month - 1, day);
// };

// console.log(getDate("18-3-2003"));

// // Word and string boundaries
// console.log(getDate("100-1-30000"));

// console.log(/^\d+$/.test('3'));

// console.log(/^!\d+$/.test('!3'));

// console.log(/x^\d+$/.test(''));


let str='hello world hello neog';
let p=/hello/g;
console.log(p.exec(str))
console.log(p.lastIndex)
console.log(p.exec(str))