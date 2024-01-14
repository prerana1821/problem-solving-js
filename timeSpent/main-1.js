let count = 0;
let myInterval;

function timerHandler() {
    count++;
    document.getElementById("seconds").innerHTML = secondsToHms(count);
}


document.onvisibilitychange = function () {
    if (document.visibilityState == "hidden") {
        window.clearInterval(myInterval);
    }
    if (document.visibilityState == "visible") {
        myInterval = window.setInterval(timerHandler, 1000);
    }
};

function getTime() {
    if (document.visibilityState == "visible") {
        myInterval = window.setInterval(timerHandler, 1000);
    }
}

getTime();

function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    return (
        ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2)
    );
}
