let count = 0;
let myInterval;

// // Active
// window.addEventListener("focus", startTimer);

// // Inactive
// window.addEventListener("blur", stopTimer);

function timerHandler() {
  count++;
  document.getElementById("seconds").innerHTML = secondsToHms(count);
}

console.log(window.location.origin);

// window.addEventListener("load", getTime);

console.log({ doc: document.visibilityState });

document.onvisibilitychange = function () {
  if (document.visibilityState == "hidden") {
    window.clearInterval(myInterval);
  }
  if (document.visibilityState == "visible") {
    myInterval = window.setInterval(timerHandler, 1000);
  }
};

function getTime() {
  console.log(document.visibilityState);
  if (document.visibilityState == "visible") {
    myInterval = window.setInterval(timerHandler, 1000);
  }
}

getTime();

// document.addEventListener(
//   "visibilitychange",
//   function () {
//     if (document.visibilityState == "hidden") {
//       window.clearInterval(myInterval);
//     }
//     if (document.visibilityState == "visible") {
//       myInterval = window.setInterval(timerHandler, 1000);
//     }
//   },
//   false
// );

// // Start timer
// function startTimer() {
//   myInterval = window.setInterval(timerHandler, 1000);
// }

// // Stop timer
// function stopTimer() {
//   window.clearInterval(myInterval);
// }

function secondsToHms(d) {
  d = Number(d);

  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  return (
    ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2)
  );
}

// https://www.samanthaming.com/tidbits/86-window-location-cheatsheet/


// function timeSpent() {
//   var startTime = new Date();
//   var endTime = new Date();
//   var timeSpent = endTime - startTime;
//   return timeSpent;
// }

// https://stackoverflow.com/questions/41306943/measure-time-spent-by-a-user-during-a-website-visit





