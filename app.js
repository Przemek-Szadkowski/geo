const lati = document.querySelector('.lati');
const long = document.querySelector('.long');
const button = document.querySelector('button');
const point = document.querySelector('.point');

function showPosition(position) {
    let lattitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    lati.innerHTML = `X: ${lattitude}`;
    long.innerHTML = `Y: ${longtitude}`;
    setLocation(lattitude, 0);
}

function errorHandling(err) {
    console.log(err);
}

function getLocation() {
    if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition, errorHandling, { enableHighAccuracy: true });
       console.log(id);
    } else {
        communicate.innerHTML = `Twoje urządzenie nie wspiera geolokalizacji`;
    }
}

function setLocation(lati, long) {
    const top = (51.503503 - lati) * (100 / (51.503503 - 51.502744));
    document.documentElement.style.setProperty('--top', `${top}%`);
    document.documentElement.style.setProperty('--left', `${long}%`);
}

button.addEventListener('click', getLocation);