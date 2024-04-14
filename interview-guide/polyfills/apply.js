let person = {
  firstname: "Kirtesh",
  lastname: "bansal",
};

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " + country);
};

Function.prototype.myapply = function (obj, argsArray) {
  let sym = Symbol();
  obj[sym] = this;
  let res = obj[sym](...argsArray);
  delete obj[sym];
  return res;
};

printName.myapply(person, ["India"]);
