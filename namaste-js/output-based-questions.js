// var x = 20;
// function foo() {
//   console.log(x);
//   var x = 10;
// }
// foo();

// ********************************
// for (var i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// ********************************
// {
//   let a = 10;
//   let b = 20;
//   var c = 30;
//   console.log(a);
//   console.log(b);
// }

// console.log(c);
// console.log(a);
// console.log(b);

// ********************************
// function anyName() {
//   let a = 10;
//   let b = 20;
//   var c = 30;
//  d=40
//   console.log(a);
//   console.log(b);
// }

// console.log(d);
// console.log(c);
// console.log(a);
// console.log(b);

// ********************************
// console.log(0123);

// ********************************
// // foo();
// var foo = 10;
// function foo() {
//   console.log("Calling foo");
// }

// foo();

// ********************************
// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// // OR
// for (var i = 0; i <= 3; i++) {
//   function foo(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
//   foo(i);
// }

// ********************************

// async function test() {
//   return "Hello World!";
// }

// let result = test();
// console.log(result);
// if await is not used it returns a promise

// async function getResult() {
//   const value = await test();
//   console.log(value);
//   console.log("Hi");
//   console.log("Hello");
// }

// getResult();
// the await keyword causes the function to pause until the promise resolves, but it doesn't prevent other synchronous code within the function from executing. Once the awaited promise resolves, the function continues its execution from where it was paused.

// ********************************
// function abc() {
//   // this={}
//   console.log("Hii");
//   // return this
// }

// const value = new abc();
// console.log(value);
// console.log(typeof value);
// new abc() creates a new object instance by invoking the abc function as a constructor.
// Inside abc, this refers to the newly created empty object (denoted by {}),
// When new abc() is called, it executes the abc function.
// The console.log("Hii") statement within abc logs "Hii" to the console.
// new abc() creates a new instance of abc. Since abc doesn't have any properties or behaviors associated with this, the newly created object is essentially an empty object {}.

// ********************************

// let userObj = {
//   "user-name": "Prerana",
//   age: 21,
// };

// let { "user-name": username, age } = userObj;
// console.log(username);
// console.log(age);

// ********************************

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   return (
//     <div>
//       <div className='container'>
//         <h1>{count}</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//             setCount(count + 1);
//             console.log(count);
//           }}
//         >
//           Increment
//         </button>
//       </div>
//     </div>
//   );
// }

// ********************************

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const timerRef = React.useRef(null);

//   const startInterval = () => {
//     timerRef.current = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//     // timerRef.current = setInterval(() => {
//     //   setCount(count + 1);
//     //   console.log(count);
//     // }, 1000);
//   };

//   const stopInterval = () => {
//     clearInterval(timerRef.current);
//   };
//   return (
//     <div>
//       <div className='container'>
//         <h1>{count}</h1>
//         <button onClick={() => startInterval()}>Start</button>
//         <button onClick={() => stopInterval()}>Stop</button>
//       </div>
//     </div>
//   );
// }

// ********************************

// export default function App() {
//   const countRef = React.useRef(0);

//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <div className='container'>
//         <h1>{countRef.current}</h1>
//         <button
//           onClick={() => {
//             countRef.current += 1;
//    //            updates the value but doesn't trigger a rerender
//           }}
//         >
//           Start Count Ref
//         </button>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Start Count</button>
//       </div>
//     </div>
//   );
// }

// for (var i = 1; i <= 3; i++) {
//   (function (index) {
//     setTimeout(function () {
//       console.log(index);
//     }, i * 1000);
//   })(i);
// }

// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 1, j = 1; i <= 3; i++, j++) {
//   setTimeout(
//     function () {
//       console.log(this);
//     }.bind(i),
//     j * 100
//   );
// }

// function foo() {
//   console.log(a);
//   var a = 10;
// }
// foo();
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();
