// arguments is a special array-like object containing the list of arguments with which the function has been invoked.

function myFunction() {
  console.log(arguments);
  return arguments;
}

console.log(myFunction("a", "b"));
