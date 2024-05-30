let merge = (...arguments) => {
  let target = {};

  let merger = (obj) => {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        target[prop] = obj[prop];
      }
    }
  };

  for (let i = 0; i < arguments.length; i++) {
    merger(arguments[i]);
  }

  return target;
};

let obj1 = {
  name: "prashant",
  age: 23,
};

let obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
};

// let merge = { ...obj1, ...obj2 };
// let merge = Object.assign({}, obj1, obj2);;

let merged = merge(obj1, obj2);

console.log(merged);
