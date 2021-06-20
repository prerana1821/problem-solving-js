import { sayHi } from "./say.js";
// works = "Prerana";
// document.body.innerText = "Hello";

const globalScope = () => {
  console.log("Accessible");
};

// console.log(this);

globalScope();
