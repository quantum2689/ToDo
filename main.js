document.getElementById('add-btn').addEventListener('click', addTodo);
document.addEventListener('DOMContentLoaded', loadTodos);

function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText === '') {
        return;
    }

    const todoList = document.getElementById('todo-list');

    const listItem = createTodoItem(todoText);
    todoList.appendChild(listItem);

    input.value = '';
    saveTodos();
}

function createTodoItem(todoText) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = todoText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', () => editTodoItem(span));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
        saveTodos();
    });

    listItem.appendChild(span);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function editTodoItem(span) {
    const newTodoText = prompt('Edit your task:', span.textContent);
    if (newTodoText !== null && newTodoText.trim() !== '') {
        span.textContent = newTodoText.trim();
        saveTodos();
    }
}

function saveTodos() {
    const todoList = document.getElementById('todo-list');
    const todos = [];
    for (let item of todoList.children) {
        todos.push(item.querySelector('span').textContent);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.getElementById('todo-list');
    for (let todoText of todos) {
        const listItem = createTodoItem(todoText);
        todoList.appendChild(listItem);
    }
}


