const users = [
  { firstname: "Mohammad", lastname: "Noushad", age: 22 },
  { firstname: "Aniket", lastname: "Bhalla", age: 45 },
  { firstname: "Prerana", lastname: "Bhalla", age: 45 },
  { firstname: "Bidhi", lastname: "Chand", age: 21 },
  { firstname: "Bidhi", lastname: "Chand", age: 21 },
  { firstname: "Saif", lastname: "Siddiqi", age: 67 },
  { firstname: "Nabil", lastname: "Siddiqi", age: 67 },
  { firstname: "Nabil", lastname: "Siddiqi", age: 67 },
];

// Output: { 21: 1, 22: 1, 45: 2, 67: 2 }

console.log(
  users.reduce((acc, cur) => {
    return { ...acc, [cur.age]: acc[cur.age] ? acc[cur.age] + 1 : 1 };
  }, {})
);

// firstname of all the people who's age is less than 30

console.log(
  users
    .filter((user) => {
      if (user.age < 30) {
        return user.firstname;
      }
    })
    .map((user) => {
      return user.firstname;
    })
);

console.log(
  users.reduce((acc, cur) => {
    return cur.age < 30 ? [...acc, cur.firstname] : acc;
  }, [])
);

const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

// {
// 1: [1.1, 1.2, 1.3],
// 2: [2.2, 2.3, 2.4]
// }

console.log(
  arr.reduce((acc, cur) => {
    const floored = Math.floor(cur);

    if (!acc[floored]) {
      acc[floored] = [cur];
    } else {
      acc[floored].push(cur);
    }

    return acc;
  }, {})
);

const groupByProperty = (array, property) => {
  return array.reduce((acc, cur) => {
    let key = cur[property];

    if (!acc[key]) {
      acc[key] = [cur];
    } else {
      acc[key].push(cur);
    }

    return acc;
  }, {});
};

console.log(
  groupByProperty(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Doe", age: 30 },
    ],
    "age"
  )
);

// {25: [{name: 'Jane', age: 25}], 30: [{name: 'John', age: 30}, {name: 'Doe', age: 30}]}

const flattenArray = (array) => {
  return array.reduce((acc, cur) => {
    return [...acc, ...cur];
  }, []);
};

console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

const factorial = (num) => {
  const array = [num];

  for (let i = 1; i < num; i++) {
    array.push(num - i);
  }

  return array.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
};

console.log(factorial(5));

// Input: countOccurrences(['a', 'b', 'a', 'c', 'b', 'a'])
// Output: { 'a': 3, 'b': 2, 'c': 1 }

const countOccurrences = (array) => {
  return array.reduce((acc, cur) => {
    // if (!acc[cur]) {
    //   acc[cur] = 1;
    // } else {
    //   acc[cur] = acc[cur] + 1;
    // }

    return !acc[cur] ? { ...acc, [cur]: 1 } : { ...acc, [cur]: acc[cur] + 1 };

    // return acc;
  }, {});
};

console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));

// Input: countOccurrencesInArrays([[1, 2], [1, 2, 3], [4, 5]])
// Output: { 1: 2, 2: 2, 3: 1, 4: 1, 5: 1 }

const countOccurrencesInArrays = (array) => {
  const flatArray = flattenArray(array);
  return countOccurrences(flatArray);
};

console.log(
  countOccurrencesInArrays([
    [1, 2],
    [1, 2, 3],
    [4, 5],
  ])
);

// Input: partitionArray([1, 2, 3, 4, 5], num => num % 2 === 0)
// Output: { true: [2, 4], false: [1, 3, 5] }

const partitionArray = (array, func) => {
  return array.reduce((acc, cur) => {
    let key = func(cur);

    if (!acc[key]) {
      acc[key] = [];
    }

    if (func(cur)) {
      acc["true"].push(cur);
    } else {
      acc["false"].push(cur);
    }

    return acc;
  }, {});
};

console.log(partitionArray([1, 2, 3, 4, 5], (num) => num % 2 === 0));

// Input: sumByProperty([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }], 'category', 'value')
// Output: { 'A': 40, 'B': 20 }

const sumByProperty = (array, property1, property2) => {
  return array.reduce((acc, cur) => {
    let key = cur[property1];

    if (!acc[key]) {
      acc[key] = cur[property2];
    } else {
      acc[key] += cur[property2];
    }

    return acc;
  }, {});
};

console.log(
  sumByProperty(
    [
      { category: "A", value: 10 },
      { category: "B", value: 20 },
      { category: "A", value: 30 },
    ],
    "category",
    "value"
  )
);

// functions
const upperCase = (str) => {
  return str.toUpperCase();
};
const reverse = (str) => {
  return str.split("").reverse().join("");
};
const append = (str) => {
  return "Hello " + str;
};
// array of functions to be piped
const array = [upperCase, reverse, append];
// initial value
const initialValue = "learnersbucket";

console.log(
  array.reduce((acc, cur) => {
    return cur(acc);
  }, initialValue)
);

const asyncTask = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

const asyncSeriesExecuter = function (promises) {
  return promises.reduce((acc, curr) => {
    // return when previous promise is resolved
    return acc.then(() => {
      // run the current promise
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
};

console.log(asyncSeriesExecuter(promises));
// ("Completing 3");
// ("Completing 1");
// ("Completing 7");
// ("Completing 2");
// ("Completing 5");
