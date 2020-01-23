const whatsYourContainer = document.querySelector('#js-whats-your-container');
const nameForm = document.querySelector('#js-name-form');
const nameInput = document.querySelector('#js-name-input');
let userName = '';

const greetContainer = document.querySelector('#js-greeting-container');
const greetText = document.querySelector('#js-greet-text');
const nameText = document.querySelector('#js-name');

function greetingMessage(hour) {
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

function whatsyourGreetContainerToggle() {
  whatsYourContainer.classList.add('disappear');
  greetContainer.classList.remove('disappear');
}

if (localStorage.userName) {
  // has user name
  whatsyourGreetContainerToggle();
  nameText.textContent = localStorage.userName;
} else {
  // don't have user name
  nameForm.addEventListener('submit', e => {
    e.preventDefault();

    userName = nameInput.value;
    localStorage.setItem('userName', userName);
    whatsyourGreetContainerToggle();
    nameText.textContent = localStorage.userName;
  });
}
