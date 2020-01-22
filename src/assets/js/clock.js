const currentTime = document.querySelector('#js-current-time');
const greetText = document.querySelector('#js-greet-text');

function getCurrentTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  currentTime.textContent = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;

  if (hour > 5 && hour < 11) {
    greetText.textContent = '좋은 아침이에요.';
  } else if (hour >= 11 && hour < 14) {
    greetText.textContent = '벌써 점심이에요.';
  } else if (hour >= 14 && hour < 17) {
    greetText.textContent = '좋은 오후네요.';
  } else if (hour >= 17 && hour < 23) {
    greetText.textContent = '좋은 저녁이에요.';
  } else {
    greetText.textContent = '오늘도 고생 많았어요.';
  }
}

if (currentTime) {
  getCurrentTime();
  setInterval(getCurrentTime, 1000);
}
