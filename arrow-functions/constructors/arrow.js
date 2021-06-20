// arrow function cannot be used as a constructor.
const Colors = (color) => {
  this.color = color;
};

const redColor = new Colors("red");
