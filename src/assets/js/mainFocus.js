const questionContainer = document.querySelector('#js-question');
const mainFocusForm = document.querySelector('#js-main-focus-form');
const mainFocusInput = document.querySelector('#js-main-focus-input');

const showingContainer = document.querySelector('#js-focus-showing');
const mainFocusCheckbox = document.querySelector('#js-checkbox-focus');
const mainFocusText = document.querySelector('#js-main-focus-text');
const complimentText = document.querySelector('#js-compliment');

const FOCUS_LS = 'focus';

function storeFocus(focus) {
  const day = new Date().getDate(); // for deleting next day
  const focusObj = { mainFocus: focus, dayChecker: day };
  localStorage.setItem(FOCUS_LS, JSON.stringify(focusObj));
}

function loadFocus() {
  const loadFocus = localStorage.getItem(FOCUS_LS);

  if (loadFocus !== null) {
    const parsedFocus = JSON.parse(loadFocus);
    mainFocusText.textContent = parsedFocus.mainFocus;
    // check & delete next day
    const date = new Date();
    const prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
    if (
      date.getDate() > parsedFocus.dayChecker ||
      (prevMonthLastDay.getDate() === parsedFocus.dayChecker &&
        prevMonthLastDay.getMonth() !== date.getMonth())
    ) {
      localStorage.removeItem(FOCUS_LS);
    }
  }
}

function onFocusFormSubmit(e) {
  e.preventDefault();

  const mainFocus = mainFocusInput.value;
  mainFocusText.textContent = mainFocusInput.value;

  questionAndShowingToggle();
  storeFocus(mainFocus);
}

function questionAndShowingToggle() {
  questionContainer.classList.add('disappear');
  showingContainer.classList.remove('disappear');
}

function onCheckboxClickToggle() {
  if (!mainFocusCheckbox.checked) {
    mainFocusText.style = 'text-decoration: none';
    complimentText.textContent = '';
  } else {
    mainFocusText.style = 'text-decoration: line-through;';
    complimentText.textContent = '고생하셨어요👏';
  }
}

mainFocusCheckbox.addEventListener('click', onCheckboxClickToggle);

if (!localStorage.getItem(FOCUS_LS)) {
  mainFocusForm.addEventListener('submit', onFocusFormSubmit);
} else {
  questionAndShowingToggle();
  loadFocus();
}
