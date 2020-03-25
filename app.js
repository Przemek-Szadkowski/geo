const lati = document.querySelector('.lati');
const long = document.querySelector('.long');
const button = document.querySelector('button');

function showPosition(position) {
    lati.innerHTML = `X: ${position.coords.latitude}`;
    long.innerHTML = `Y: ${position.coords.longitude}`;
    console.log(position);
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        communicate.innerHTML = `Twoje urządzenie nie wspiera geolokalizacji`;
    }
}

button.addEventListener('click', getLocation);

console.log(communicate);