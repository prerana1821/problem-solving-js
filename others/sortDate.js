const array = [
  {
    name: "Prerana",
    date: "2021-08-25T17:02:00.000Z",
  },
  {
    name: "Siddhi",
    date: "2021-08-21T12:54:51.000Z",
  },
  {
    name: "Ritu",
    date: "2021-09-01T19:50:00.000Z",
  },
];

console.log(
  array.sort(function (a, b) {
    let c = new Date(a.date);
    let d = new Date(b.date);
    return c - d;
  })
  // .map((date) => {
  //   return date;
  // })
);

// console.log(new Date("2021-08-25T17:02:00.000Z"));
