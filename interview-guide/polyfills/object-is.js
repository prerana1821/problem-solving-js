function is(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (Number.isNaN(a) && Number.isNaN(b)) {
      return true;
    }

    // 1/0 equals `Infinity` and 1/-0 equals `-Infinity`.
    if (a === 0 && b === 0) {
      return 1 / a === 1 / b;
    }
  }

  return a === b;
}

console.log(is(10, "10"));
// false
console.log(is("1", 1));
// false
console.log(is(10, 10));
// true
console.log(is({ a: 1 }, { a: 1 }));
// false

const obj = { b: 2 };
console.log(is(obj, obj));
// true
console.log(is(NaN, NaN));
// true
const val = NaN;
console.log(is(val, val));
// true
console.log(is(-0, +0));
// false
console.log(is(-0, 0));
// false
console.log(is(-0, -0));
// true
console.log(is(0, +0));
// true
