function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();

// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// var b = 10;
// a();
