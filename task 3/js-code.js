const wsUrl = 'wss://echo-ws-service.herokuapp.com';
const websocket = new WebSocket(wsUrl);
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const chat = document.querySelector('.chat');

const geoBtn = document.querySelector('.geo-btn');
const mapLink = document.querySelector('.map-link');


function writeToScreen(message) {
    const p = document.createElement('p');
    p.innerHTML = message;
    p.classList.add('user-message');
    p.classList.add('cloud');
    chat.appendChild(p);
}

btn.addEventListener('click', ()=> {
    const message = input.value;
    writeToScreen(message);
    websocket.send(message);
    input.value = '';
})


  websocket.onmessage = function(evt) {
    writeToScreen(
      '<div class="response">' + evt.data+'</div>'
    );
  };
  websocket.onerror = function(evt) {
    writeToScreen(
      '<span style="color: red;">ERROR:</span> ' + evt.data
    );
  };

geoBtn.addEventListener('click', ()=> {
    if (!navigator.geolocation) {
        alert('Геолокация не поддерживается вашим браузером');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
})

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude,longitude);
    mapLink.setAttribute('href', `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
    mapLink.textContent = 'Открыть карту';
    mapLink.style.display = 'block';
}

const error = () => {
    alert('Не удалось получить геолокацию');
}