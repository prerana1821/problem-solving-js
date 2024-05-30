function snakeToCamel(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || i === string.length - 1) {
      result += string[i];
    } else if (string[i] === "_" && string[i + 1] === "_") {
      result += "__";
      i++;
    } else if (string[i] === "_" && string[i + 1] !== "_") {
      if (i === 1 && string[i - 1] === "_") {
        result += string[i] + string[i + 1];
      } else {
        result += string[i + 1].toUpperCase();
      }
      i++;
    } else {
      result += string[i];
    }
  }
  return result;
}

// function snakeToCamel(str) {
//   let result = str[0]; // in any case we want to keep first char as it is

//   for (let i = 1; i < str.length; i++) {
//     // begin from i=1 as we already have 0th index char

//     /** main logic: Details explanation is coming soon.
//     1. current char `i` must be '_'
//     2. previous char must not be '_'
//     3. next char must not be '_'
//     4. current char must less than 2nd last of string
//     **/
//     if (
//       str[i] == "_" &&
//       str[i - 1] != "_" &&
//       str[i + 1] != "_" &&
//       i < str.length - 1
//     ) {
//       result += str[i + 1].toUpperCase();
//       i++; // increment because we already consider i+1 in previous line.
//     } else {
//       result += str[i]; // else just add in the result string
//     }
//   }
//   return result; // 🍻 return the camelCase because that's the way
// }

console.log(snakeToCamel("__first_underscore"));
// '__firstUnderscore'

console.log(snakeToCamel("snake_case"));
// 'snakeCase'
console.log(snakeToCamel("is_flag_on"));
// 'isFlagOn'
console.log(snakeToCamel("is_IOS_or_Android"));
// 'isIOSOrAndroid'
console.log(snakeToCamel("_first_underscore"));
// '_firstUnderscore'
console.log(snakeToCamel("last_underscore_"));
// 'lastUnderscore_'
console.log(snakeToCamel("_double__underscore_"));
// '_double__underscore_'
console.log(snakeToCamel("__first_underscore"));
// .toBe("__firstUnderscore");
