const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    //console.log(data);
    speed.textContent = Math.round(data.coords.speed);
    console.log(data.coords.speed, data.coords.heading);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.error(err);
}); 