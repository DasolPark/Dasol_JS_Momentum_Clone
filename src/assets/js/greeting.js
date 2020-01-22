const whatsYourCon = document.querySelector('#js-whats-your-container');
const nameForm = document.querySelector('#js-name-form');
const nameInput = document.querySelector('#js-name-input');
let userName = '';

const greeting = document.querySelector('#js-greeting-container');
const putName = document.querySelector('#js-name');

if (localStorage.userName) {
  whatsYourCon.classList.add('disappear');
  greeting.classList.remove('disappear');
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
