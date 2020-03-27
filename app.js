const lati = document.querySelector('.lati');
const long = document.querySelector('.long');
const button = document.querySelector('button');

function showPosition(position) {
    const lattitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    lati.innerHTML = `X: ${lattitude}`;
    long.innerHTML = `Y: ${longtitude}`;
}

function errorHandling(err) {
    console.log(err);
}

function getLocation() {
    if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition, errorHandling, { enableHighAccuracy: true });
    } else {
        communicate.innerHTML = `Twoje urządzenie nie wspiera geolokalizacji`;
    }
}

button.addEventListener('click', getLocation);