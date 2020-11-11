const PLAYER = document.querySelector("#player");
const ALI1 = document.querySelector("#ali1");
const MUSICLIST = document.querySelectorAll(".class");

srcList = ["./music/Ali Gatie - What If I Told You That I Love You.mp3", 
            "./music/bob-marley-africa-unite.mp3",
            "./music/Micheal Smith-Ancient words.mp3"
];

// add data- attribute in musicList that will match the index number in scrList

function play() {
    
    //if (xxx.dataset.musicNum){
        PLAYER.src = srcList[0];        //or   PLAYER.setAttribute("src", srcList[0]);
    }
    // change button to pause
    // use a toggle so on click ->
    // somehow effect a pause 
    // use a toggle so on click ->
    // somehow effect a play
}

// reason shuffle
//toggle attribute loop
//use flex to reorder the appearance of musicList

NodeList.MUSICLIST.addEventListener = function(click, getDataValue) {
    
}

ALI1.addEventListener("click", function(){play()}, false);