const currentTime = document.querySelector('#js-current-time');
const greetText = document.querySelector('#js-greet-text');

function getCurrentTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  currentTime.textContent = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;

  greetingMessage(hour); // greeting.js
}

if (currentTime) {
  getCurrentTime();
  setInterval(getCurrentTime, 1000);
}
