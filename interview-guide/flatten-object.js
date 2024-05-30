const response = {
  name: "Manu",
  age: 21,
  characteristics: {
    height: "6 feet",
    complexion: "dark",
    hair: "black",
  },
  techStack: {
    language: "Javascript",
    framework: {
      name: "Nextjs",
      version: "12",
    },
  },
};

const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const flattenObj = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const nestedObj = flattenObj(obj[key]);
      for (let nestedKey in nestedObj) {
        acc[`${key}.${nestedKey}`] = nestedObj[nestedKey];
      }
    } else {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

console.log(flattenObj(response));
console.log(flattenObj(obj));
