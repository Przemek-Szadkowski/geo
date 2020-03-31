const lati = document.querySelector('.lati');
const long = document.querySelector('.long');
const button = document.querySelector('button');
const point = document.querySelector('.point');
const coordinates = document.querySelector('.coordinates');

let isOnTheMap = true;

function showPosition(position) {
    let lattitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    setLocation(lattitude, longtitude);
    if(isOnTheMap) {
        lati.innerHTML = `X: ${lattitude}`;
        long.innerHTML = `Y: ${longtitude}`;
    } else {
        coordinates.innerHTML = '<h2>Znajdujesz się poza obszarem mapy!</h2>';
        point.style.display = "none";
    }
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
    let top = 100 - ((lati - 51.502744) * 100) / (51.503503 - 51.502744);
    let left = 100 - ((long - 19.1629098) * 100) / (19.1634806 - 19.1629098);
    console.log(top, left);
    if((top < 0 || top > 100) || (left < 0 || left > 100)) {
        isOnTheMap = false;
        top = -1;
        left = -1;
    }
    document.documentElement.style.setProperty('--top', `${top}%`);
    document.documentElement.style.setProperty('--left', `${left}%`);
}

button.addEventListener('click', getLocation);