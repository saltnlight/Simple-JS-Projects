const AREA = document.body;
const CIR1 = document.querySelector("#circle1");

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
// console.log(`width:${winWidth}, height:${winHeight}`)   sanity check

function mouseCoordinates(e){
    xPosition = (winWidth - e.clientX - 10);
    yPosition = (winHeight - e.clientY - 10);
    
    CIR1.style.left = xPosition + 'px';
    CIR1.style.top = yPosition + 'px';
}

function mouseIn() {
    CIR1.style.backgroundColor = "green"
    CIR1.style.borderColor = "green"
}
AREA.addEventListener("mousemove", mouseCoordinates, false);

CIR1.addEventListener("mouseenter", mouseIn, false);

CIR1.addEventListener("mouseleave", function(){CIR1.removeAttribute("style")})