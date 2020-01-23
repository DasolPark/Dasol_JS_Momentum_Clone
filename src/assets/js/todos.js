const todoBtn = document.querySelector('#js-btn'); // in greeting block

const todoContainer = document.querySelector('#js-todo-container');
const todoForm = document.querySelector('#js-todo-form');
const todoInput = document.querySelector('#js-todo-input');
const todoLists = document.querySelector('#js-todo-ul');

const TODO_LS = 'ToDo';
let continueId = 0;
let initialId = 0;

function idSort(loadTodoList) {
  const lists = loadTodoList;

  lists.map((list, idx) => (list.id = idx));
  continueId = lists.length;
  localStorage.setItem(TODO_LS, JSON.stringify(lists));
}

function storeTodoList(text, id) {
  let todoObj = [];
  const loadTodoList = JSON.parse(localStorage.getItem(TODO_LS));
  if (loadTodoList !== null) {
    todoObj = loadTodoList;
    todoObj.push({ text: text, id: id });
  } else {
    todoObj.push({ text: text, id: id });
  }

  localStorage.setItem(TODO_LS, JSON.stringify(todoObj));
}

function addTodoList(list, hasLists = false) {
  const delBtn = document.createElement('button');
  delBtn.textContent = '⛔';
  delBtn.classList.add('button--del');

  const checkBtn = document.createElement('button');
  checkBtn.textContent = '👍';
  checkBtn.classList.add('button--check');

  const li = document.createElement('li');
  li.classList.add('todo-list');

  const span = document.createElement('span');
  span.classList.add('todo-list-text');

  if (!hasLists) {
    span.textContent = todoInput.value;
    storeTodoList(todoInput.value, continueId);
    li.id = `js-li${continueId}`;
    continueId++;
  } else {
    span.textContent = list.text;
    li.id = `js-li${initialId++}`;
  }

  delBtn.addEventListener('click', () => {
    li.parentNode.removeChild(li);
    const loadTodoList = JSON.parse(localStorage.getItem(TODO_LS));
    const result = loadTodoList.filter(
      list => list.id !== parseInt(li.id.replace(/[a-z|-]/gi, ''))
    );
    localStorage.setItem(TODO_LS, JSON.stringify(result));
  });

  function onTodoUncheckClickToggle() {
    span.style = 'text-decoration: none;';
    checkBtn.addEventListener('click', onTodoCheckClickToggle);
    checkBtn.removeEventListener('click', onTodoUncheckClickToggle);
  }

  function onTodoCheckClickToggle() {
    span.style = 'text-decoration: line-through;';
    checkBtn.removeEventListener('click', onTodoCheckClickToggle);
    checkBtn.addEventListener('click', onTodoUncheckClickToggle);
  }

  checkBtn.addEventListener('click', onTodoCheckClickToggle);

  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.appendChild(span);
  todoLists.appendChild(li);

  todoInput.value = '';
  todoInput.focus();
}

// Initial function(check has list)

function showTodoLists() {
  const loadTodoList = JSON.parse(localStorage.getItem(TODO_LS));
  if (loadTodoList !== null) {
    idSort(loadTodoList);

    let hasLists = true;

    loadTodoList.forEach(list => {
      addTodoList(list, hasLists);
    });
  }
}

// Add To Do List

const onFormSubmit = e => {
  e.preventDefault();
  addTodoList();
};

// To Do Button Toggle

const onBtnCloseClickToggle = () => {
  todoContainer.classList.add('disappear');
  todoBtn.addEventListener('click', onBtnOpenClickToggle);
  todoBtn.removeEventListener('click', onBtnCloseClickToggle);
};

const onBtnOpenClickToggle = () => {
  todoContainer.classList.remove('disappear');
  todoBtn.removeEventListener('click', onBtnOpenClickToggle);
  todoBtn.addEventListener('click', onBtnCloseClickToggle);
};

todoBtn.addEventListener('click', onBtnOpenClickToggle);
todoForm.addEventListener('submit', onFormSubmit);

// Initial

if (todoContainer) {
  showTodoLists();
}
