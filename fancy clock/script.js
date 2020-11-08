const HOURHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

// Get the current date independent of the function
var date = new Date;
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

// Cal. the hr, min, sec position
let hrPosition = hour*(360/12) + ((min*(360/60))/12);
let minPosition = min*(360/60) + (sec*(360/60)/60);
let secPosition = sec*(360/60);

function runTheClock() {
    // to get the excat date, add 1second to what the fuction is using to change the hr, min and sec hands 
    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;
       
    HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    MINHAND.style.transform = `rotate(${minPosition}deg)`;
    SECHAND.style.transform = `rotate(${secPosition}deg)`;
}

setInterval(runTheClock, 1000);