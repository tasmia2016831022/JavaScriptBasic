const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    //===SECOND HAND===//
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //===MINUTE HAND===//
    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    //===HOUR HAND===//
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


   
   
    
    console.log(seconds);
    
}
setInterval(setDate,1000);