const whatsYourCon = document.querySelector('#js-whats-your-container');
const nameForm = document.querySelector('#js-name-form');
const nameInput = document.querySelector('#js-name-input');
let userName = '';

const greeting = document.querySelector('#js-greeting-container');
const putName = document.querySelector('#js-name');

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

if (localStorage.userName) {
  whatsYourCon.classList.add('disappear');
  greeting.classList.remove('disappear');

  putName.textContent = localStorage.userName;
} else {
  nameForm.addEventListener('submit', e => {
    e.preventDefault();

    userName = nameInput.value;
    localStorage.setItem('userName', userName);

    whatsYourCon.classList.add('disappear');
    greeting.classList.remove('disappear');

    putName.textContent = localStorage.userName;
  });
}
