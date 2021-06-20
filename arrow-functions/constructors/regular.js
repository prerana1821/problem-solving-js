// regular function can easily construct objects.

function Car(color) {
  this.color = color;
}

const redCar = new Car("red");
console.log(redCar instanceof Car); // => true
