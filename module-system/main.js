import { sayHi } from "./say.js";
// works = "Hello";
document.body.innerHTML = sayHi("Prerana");

const ownScope = () => {
  console.log("Not Accessible");
};

console.log(window);
console.log(this);

ownScope();
// globalScope();
