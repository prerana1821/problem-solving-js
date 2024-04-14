let person = {
  firstname: "Kirtesh",
  lastname: "bansal",
};

let printName = function (country) {
  return this.firstname + " " + this.lastname + " from " + country;
};

Function.prototype.mycall = function (obj, ...args) {
  let sym = Symbol();
  obj[sym] = this;
  let res = obj[sym](...args);
  delete obj[sym];
  return res;
};

console.log(printName.mycall(person, "India"));

// Output: "Kirtesh bansal from India";
