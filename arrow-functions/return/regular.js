// Implicit Return
function myFunction() {
  return 42;
}

myFunction(); // => 42

function myEmptyFunction() {
  42;
}

function myEmptyFunction2() {
  42;
  return;
}

myEmptyFunction(); // => undefined
myEmptyFunction2(); // => undefined
