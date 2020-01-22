const jsTodoContainer = document.querySelector('#js-todo-container');
const todoBtn = document.querySelector('#js-btn');
const todoForm = document.querySelector('#js-todo-form');
const todoInput = document.querySelector('#js-todo-input');
const todoLists = document.querySelector('#js-todo-ul');

const TODO_LS = 'ToDo';
let ids = 0;

function idsSort(loadTodoList) {
  const lists = loadTodoList;

  lists.map((list, idx) => (list.id = idx));
  ids = lists.length;
  localStorage.setItem(TODO_LS, JSON.stringify(lists));
}

function storeTodolist(text, id) {
  let todoObj = [];
  if (loadTodoList() !== null) {
    todoObj = JSON.parse(loadTodoList());
    todoObj.push({ text: text, id: id });
  } else {
    todoObj.push({ text: text, id: id });
  }

  localStorage.setItem(TODO_LS, JSON.stringify(todoObj));
}

function loadTodoList() {
  return localStorage.getItem(TODO_LS);
}

function addTodoList() {
  const checkBtn = document.createElement('button');
  checkBtn.textContent = '❌';
  checkBtn.classList.add('button');
  checkBtn.classList.add('button--del');
  const delBtn = document.createElement('button');
  delBtn.textContent = '✔';
  delBtn.classList.add('button');
  delBtn.classList.add('button--check');

  const li = document.createElement('li');
  li.classList.add('todo-list');

  const span = document.createElement('span');
  span.classList.add('todo-list-text');
  span.textContent = todoInput.value;
  storeTodolist(todoInput.value, ids++);

  li.appendChild(checkBtn);
  li.appendChild(delBtn);
  li.appendChild(span);
  todoLists.appendChild(li);

  todoInput.value = '';
  todoInput.focus();
}

function showTodoLists() {
  const loadTodoList = JSON.parse(localStorage.getItem(TODO_LS));
  idsSort(loadTodoList);
  loadTodoList.forEach(list => {
    const checkBtn = document.createElement('button');
    checkBtn.textContent = '❌';
    checkBtn.classList.add('button');
    checkBtn.classList.add('button--del');
    const delBtn = document.createElement('button');
    delBtn.textContent = '✔';
    delBtn.classList.add('button');
    delBtn.classList.add('button--check');

    const li = document.createElement('li');
    li.classList.add('todo-list');

    const span = document.createElement('span');
    span.classList.add('todo-list-text');
    span.textContent = list.text;

    li.appendChild(checkBtn);
    li.appendChild(delBtn);
    li.appendChild(span);
    todoLists.appendChild(li);

    todoInput.focus();
  });
}

const onFormSubmit = e => {
  e.preventDefault();
  addTodoList();
};

const onBtnCloseClickToggle = () => {
  jsTodoContainer.classList.add('disappear');
  todoBtn.addEventListener('click', onBtnOpenClickToggle);
  todoBtn.removeEventListener('click', onBtnCloseClickToggle);
};

const onBtnOpenClickToggle = () => {
  jsTodoContainer.classList.remove('disappear');
  todoBtn.removeEventListener('click', onBtnOpenClickToggle);
  todoBtn.addEventListener('click', onBtnCloseClickToggle);
};

todoBtn.addEventListener('click', onBtnOpenClickToggle);
todoForm.addEventListener('submit', onFormSubmit);

if (jsTodoContainer) {
  showTodoLists();
}
