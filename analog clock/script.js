const HOURHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

function runTheClock() {
    var date = new Date;
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    // console log to confirm
    // console.log("Hour: " + hour + " Minute: " + min + " Second: " + sec);

    let hrPosition = hour*(360/12) + ((min*(360/60))/18);
    let minPosition = min*(360/60) + (sec*(360/60)/60);
    let secPosition = sec*(360/60);
       
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECHAND.style.transform = "rotate(" + secPosition + "deg)";
}

setInterval(runTheClock, 1000);