const BOX = document.querySelector("#box");   
const YOURTIME = document.querySelector("#reactionTime");

// create variables used to store time box is created, time its clicked and its difference
var createdTime; var createdTime; var reactionTime;

// tracks the time for the first creation of the box 
createdTime = Date.now();
console.log("created time "+createdTime);

// generates a random color for the box 
var boxColor = function () {
    var randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
    return randomColor; 
}

// function that  creates the box on different time intervals 
function makeBox() { 
    BOX.classList.toggle("hide");
    
    var counter = Math.floor(Math.random() * 5000);  
    
    // interval for box reappearing function
    setTimeout(function () {
        if (BOX.classList.contains("hide")) {
            BOX.classList.remove("hide");
            createdTime = Date.now();
        }
    }, counter)

    BOX.style.backgroundColor = boxColor();     //randomly change box color

    if (Math.random() <= 0.5) {         //randomly change box shape
        BOX.classList.toggle("square");
    }else{
        BOX.classList.toggle("circle");   
    }

    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var top = (Math.random()*winHeight);
    var left = (Math.random()*winWidth);
    BOX.style.top = top + "px";
    BOX.style.left = left + "px";
}

// handles the click of the box
BOX.addEventListener("click", function() {
    makeBox();
    
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime)/1000;
    YOURTIME.innerHTML = reactionTime + "s";
});