const mainFocusForm = document.querySelector('#js-main-focus-form');
const mainFocusInput = document.querySelector('#js-main-focus-input');

const questionContainer = document.querySelector('#js-question');

const showingContainer = document.querySelector('#js-focus-showing');
const checkBoxFocus = document.querySelector('#js-checkbox-focus');
const mainFocusText = document.querySelector('#js-main-focus-text');
const complimentText = document.querySelector('#js-compliment');

const FOCUS_LS = 'focus';

function storeFocus(focus) {
  const day = new Date().getDate();
  const focusObj = { mainFocus: focus, dayChecker: day };
  localStorage.setItem(FOCUS_LS, JSON.stringify(focusObj));
}

function loadFocus() {
  const loadFocus = localStorage.getItem(FOCUS_LS);

  if (loadFocus !== null) {
    const parsedFocus = JSON.parse(loadFocus);
    mainFocusText.textContent = parsedFocus.mainFocus;
    if (new Date().getDate() > parsedFocus.dayChecker) {
      localStorage.removeItem(FOCUS_LS);
    }
  }
}

function onFocusFormSubmit(e) {
  e.preventDefault();

  const mainFocus = mainFocusInput.value;
  storeFocus(mainFocus);
  questionContainer.classList.add('disappear');
  showingContainer.classList.remove('disappear');
  loadFocus();
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

if (!localStorage.getItem(FOCUS_LS)) {
  mainFocusForm.addEventListener('submit', onFocusFormSubmit);
} else {
  questionContainer.classList.add('disappear');
  showingContainer.classList.remove('disappear');
  loadFocus();
}
