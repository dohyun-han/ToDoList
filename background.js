const background = document.querySelector("body");

function randomBg(){
    const rnd = parseInt(Math.random()*4)+1;
    const img = new Image();
    img.src = `imgs/${rnd}.jpg`;
    img.classList.add("bgImg");
    background.appendChild(img);
}


function init(){
    randomBg();
}


init();