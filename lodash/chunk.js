/* 
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

 */

function chunk(array, size = 1) {
  //   size = Math.max(toInteger(size), 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));
  console.log(result);
  //   while (index < length) {
  //     result[resIndex++] = slice(array, index, (index += size));
  //   }
  return result;
}

console.log(chunk(["a", "b", "c", "d"], 2));

