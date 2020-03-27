const lati = document.querySelector('.lati');
const long = document.querySelector('.long');
const button = document.querySelector('button');
const point = document.querySelector('.point');

function showPosition(position) {
    const lattitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    lati.innerHTML = `X: ${lattitude}`;
    long.innerHTML = `Y: ${longtitude}`;
    setLocation(lattitude, 50);
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

function setLocation(lati, long) {
    const top = (lati / 100) * 51.5027447;
    document.documentElement.style.setProperty('--top', `${top}%`);
    document.documentElement.style.setProperty('--left', `${long}%`);
}

// setLocation(25, 10);

button.addEventListener('click', getLocation);