const lati = document.querySelector('.lati');
const long = document.querySelector('.long');
const button = document.querySelector('button');

function showPosition(position) {
    const lattitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    lati.innerHTML = `X: ${lattitude}`;
    long.innerHTML = `Y: ${longtitude}`;
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