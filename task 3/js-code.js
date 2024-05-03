const wsUrl = 'wss://echo-ws-service.herokuapp.com';
const websocket = new WebSocket(wsUrl);
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const chat = document.querySelector('.chat');


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