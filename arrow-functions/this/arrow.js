const myObject = {
  myMethod(items) {
    const callback = () => {
      console.log(this);
    };
    items.forEach(callback);
  },
};

myObject.myMethod([1, 2, 3]);
