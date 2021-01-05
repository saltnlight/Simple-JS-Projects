const PLAYER = document.querySelector("#player");
const MUSICLIST = document.querySelectorAll(".music");
const LOOP = document.querySelector("#loop");
const NEXT = document.querySelector("#next");
const PREV = document.querySelector("#prev")

srcList = ["./music/Ali Gatie - What If I Told You That I Love You.mp3", 
            "./music/bob-marley-africa-unite.mp3",
            "./music/Micheal Smith-Ancient words.mp3"
];

MUSICLIST.forEach((music) => {
    music.addEventListener("click", (e) => {
       index = music.dataset.musicNum;
       PLAYER.src = srcList[index - 1];
   });

   function nextSong(index) {
        PLAYER.src = srcList[index + 1];
   }
});

let songsNum = MUSICLIST.length;
function songEnded() {
    for (index = index; index <= songsNum; index++) {
        PLAYER.src = srcList[index + 1];
    }
}

function loopSong() {
    PLAYER.toggleAttribute("loop");
    if (PLAYER.hasAttribute('loop')){
        LOOP.innerHTML = 'on';
    } else {
        LOOP.innerHTML = "&infin;"
    }    
}
        
// function nextSong(params) {
//     pass;
// }

// function prevSong(params) {
//     pass;
// }

LOOP.addEventListener("click", loopSong);
NEXT.addEventListener("click", nextSong)
// PREV.addEventListener("click", prevSong)

// reason next, prev
//use flex to reorder the appearance of musicList

// for (let i = 0; i < MUSICLIST.length; i++) {
//     console.log(MUSICLIST[i].getAttribute('data-music-num'));
//     MUSICLIST[i].addEventListener("click", play);
//     console.log("got here");    
// }

