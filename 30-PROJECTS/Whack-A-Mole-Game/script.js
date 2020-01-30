const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

function randTime(min, max){
    return Math.round(Math.random()* (max-min) + min);
}

function randHole(holes){
    const indx = Math.floor(Math.random()*holes.length);
    const hole = holes[indx];
    if(hole === lastHole){
        return randomeHole(holes);
    }
    console.log(hole);

    lastHole = hole;
    return hole;
}