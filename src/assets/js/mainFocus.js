const mainFocusForm = document.querySelector('#js-main-focus-form');
const mainFocusInput = document.querySelector('#js-main-focus-input');

const questionContainer = document.querySelector('#js-question');

const showingContainer = document.querySelector('#js-focus-showing');
const checkBoxFocus = document.querySelector('#js-checkbox-focus');
const mainFocusText = document.querySelector('#js-main-focus-text');
const complimentText = document.querySelector('#js-compliment');

function onFocusFormSubmit(e) {
  e.preventDefault();

  const mainFocus = mainFocusInput.value;
  localStorage.setItem('mainFocus', mainFocus);
  questionContainer.classList.add('disappear');

  mainFocusText.textContent = localStorage.mainFocus;
  showingContainer.classList.remove('disappear');
}

function onCheckboxClick() {
  if (!checkBoxFocus.checked) {
    mainFocusText.style = 'text-decoration: none';
    complimentText.textContent = '';
  } else {
    mainFocusText.style = 'text-decoration: line-through;';
    complimentText.textContent = '고생하셨어요👏';
  }
}

checkBoxFocus.addEventListener('click', onCheckboxClick);

if (!localStorage.mainFocus) {
  mainFocusForm.addEventListener('submit', onFocusFormSubmit);
} else {
  questionContainer.classList.add('disappear');
  showingContainer.classList.remove('disappear');
  mainFocusText.textContent = localStorage.mainFocus;
}
