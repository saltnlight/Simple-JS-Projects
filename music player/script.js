const PLAYER = document.querySelector("#player");
const MUSICLIST = document.querySelectorAll(".music");

srcList = ["./music/Ali Gatie - What If I Told You That I Love You.mp3", 
            "./music/bob-marley-africa-unite.mp3",
            "./music/Micheal Smith-Ancient words.mp3"
];

// function play() {
    
// }
        
MUSICLIST.forEach((music) => {
     music.addEventListener("click", () => {
        let i = music.dataset.musicNum;
        PLAYER.src = srcList[i - 1];
    });
});

// reason stop, next, prev
//toggle attribute loop
//use flex to reorder the appearance of musicList

// for (let i = 0; i < MUSICLIST.length; i++) {
//     console.log(MUSICLIST[i].getAttribute('data-music-num'));
//     MUSICLIST[i].addEventListener("click", play);
//     console.log("got here");    
// }

