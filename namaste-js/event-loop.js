// console.log("Start");
// setTimeout(() => {
//   console.log("Timer");
// }, 5000);
// console.log("End");

// Output:
/*
    start
    end
    timer
*/

// console.log("start");
// document.getElementById("clickMe").addEventListener("click", () => {
//   console.log("callback");
// });
// console.log("End");

// console.log("start");
// setTimeout(function cbT() {
//   console.log("callback timeout");
// }, 5000);
// fetch("https://api.netflix.com").then(function cbF() {
//   console.log("callback netflix");
// });
// console.log("end");

console.log("begins"); //1

setTimeout(() => {
  console.log("setTimeout 1"); // 3
  Promise.resolve().then(() => {
    console.log("promise 1"); //4
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2"); //2
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});

// *****************************

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");
