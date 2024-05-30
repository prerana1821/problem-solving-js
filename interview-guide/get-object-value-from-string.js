const get = (obj, path) => {
  path = path.replaceAll("[", ".");
  path = path.replaceAll("]", "");

  const keys = path.split(".").filter(Boolean);

  let current = obj;

  for (let key of keys) {
    current = current[key];

    if (current === undefined) {
      return undefined;
    }
  }

  return current;
};

console.log(get({ developer: "Software Engineer" }, "developer"));
console.log(
  get(
    { developer: { firstName: "Tom", lastName: "Cruz" } },
    "developer.lastName"
  )
);
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"));
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]"));
console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]"));
