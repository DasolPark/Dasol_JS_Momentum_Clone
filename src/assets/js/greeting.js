const nameForm = document.querySelector('#js-name-form');
const nameInput = document.querySelector('#js-name-input');
let userName = '';

nameForm.addEventListener('submit', e => {
  e.preventDefault();
  userName = nameInput.value;
  localStorage.setItem('userName', userName);
});
