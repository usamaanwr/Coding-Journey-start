let timer = 60;
let score = 0;
let hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function runTimer() {
    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            document.querySelector
            clearInterval(timerInt);
        }
    }, 1000);
};


function makeBubble() {
    let bbl = "";

    for (let i = 0; i < 160; i++) {
        let rn = Math.floor(Math.random() * 10);
        bbl += `<div class="bubble">${rn}</div>`;
    };
    document.querySelector(".panBtm").innerHTML = bbl;
}

document.querySelector(".panBtm").addEventListener("click", function (dets) {
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    } else {

    }
})

runTimer();
// makeBubble();
// getNewHit();