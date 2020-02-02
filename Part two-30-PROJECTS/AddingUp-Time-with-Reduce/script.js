const timeNodes = [...document.querySelectorAll('[data-time]')];
//const test = document.querySelectorAll('[data-time]');

const seconds = timeNodes
                .map(node => node.dataset.time)
                .map(timeCode =>{
                    const [mins, secs] = timeCode.split(':').map(parseFloat);
                   // console.log(mins, secs);
                    return (mins*60)+secs;
                }).reduce((total , vidSeconds) => total+vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);

secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);

secondsLeft = secondsLeft % 60;

console.log(hours,minutes,secondsLeft);


