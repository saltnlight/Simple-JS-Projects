const IMGS = document.querySelectorAll("img");

const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 700px) 100vw, 372px",
    feature: "(max-width: 700px) 100vw, 550px",
    story: "(max-width: 700px) 100vw, 660px"
}

function makeSrcset(imgSrc) {
    let markup = [];
    let width = 400;

    for (let i = 0; i < 5; i++) {
        markup[i] = imgSrc+ "-" + width + ".jpg " + width + "w";
        width+=400;
    }
    return markup.join();
}

for (let i = 0; i < IMGS.length; i++) {
    let imgSrc = IMGS[i].getAttribute("src");
    imgSrc = imgSrc.slice(0, -8);
    let srcset = makeSrcset(imgSrc);
    IMGS[i].setAttribute("srcset", srcset);
    
    let imgType = IMGS[i].getAttribute("data-type");
    let sizes = SIZES[imgType];
    IMGS[i].setAttribute("sizes", sizes);
    console.log(sizes);
}
