document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText === '') {
        return;
    }

    const todoList = document.getElementById('todo-list');

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
        todoList.removeChild(listItem);
    });

    listItem.appendChild(span);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    input.value = '';
}

function editTodoItem(span) {
    const newTodoText = prompt('Edit your task:', span.textContent);
    if (newTodoText !== null && newTodoText.trim() !== '') {
        span.textContent = newTodoText.trim();
    }
}

