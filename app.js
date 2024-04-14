const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = ''; 
    }
});

function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'O\'chirish';
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

// Kun vaqtni ko'rsatish uchun funksiya
function addDateTime() {
    const dateTimeContainer = document.getElementById('date-time-container');
    
    const dateTime = new Date();
    const dateText = document.createElement('p');
    dateText.textContent = `Hozirgi vaqt: ${dateTime.toLocaleString()}`;
    
    dateTimeContainer.appendChild(dateText);
}

function updateDateTime() {
    const dateText = document.querySelector('#date-time-container p');
    const dateTime = new Date();
    dateText.textContent = `Hozirgi vaqt: ${dateTime.toLocaleString()}`;
}

addDateTime();


setInterval(updateDateTime, 1000);



