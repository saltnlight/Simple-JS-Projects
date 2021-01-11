const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timerStart = [0,0,0,0];
var interval;
var timerRunning =  false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    // the mathematics for convertion
    timerStart[0] = Math.floor((timerStart[3]/100)/60);
    timerStart[1] = Math.floor((timerStart[3]/100) - (timerStart[0]*60));
    timerStart[2] = Math.floor(timerStart[3] - (timerStart[1]*100) - (timerStart[0]*6000));

    let currentTime = leadingZero(timerStart[0]) + ":" + leadingZero(timerStart[1]) + ":" + leadingZero(timerStart[2]);
    theTimer.innerHTML = currentTime;
    timerStart[3]++;
}

// Match the text entered with the provided text on the page:
function spellChecker() {
    let enteredText = testArea.value;
    let originTextMatch = originText.substring(0, enteredText.length);

    if (enteredText == originText) {
        testWrapper.style.borderColor = "#429890";
        clearInterval(interval);
    } else if (enteredText == originTextMatch) {
        testWrapper.style.borderColor = "#0D1B2E";
    } else {
        testWrapper.style.borderColor = "red"
    }
    // console.log(enteredText + ":" + originTextMatch);   as sanity check
}

// Start the timer:
function startTimer() {
    let enteredTextLen = testArea.value.length;
    if (enteredTextLen === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval( runTimer, 10);
        console.log(interval);
    }
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timerStart = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00"
    testWrapper.style.borderColor = "grey";
}

testArea.addEventListener("keypress", startTimer, false);
testArea.addEventListener("keyup", spellChecker, false);
resetButton.addEventListener("click", reset, false);