let todos;

const savedToDo = JSON.parse(localStorage.getItem('todos'));

if (Array.isArray(savedToDo)) {
    todos=savedToDo;
} else {
    todos = [{
        title: 'Make your first ToDo',
        dueDate: '2023-01-01',
        id: 'id0'}];
}

function createToDo(title, dueDate){
    const id = '' + new Date().getTime();
    todos.push({
        title: title,
        dueDate:dueDate,
        id: id
    });

    saveToDo();
}

function removeToDo(idToDelete){
    todos = todos.filter(function (todo) {
        if(todo.id===idToDelete){
            return false;
        } else {
            return true;
        }
    });

    saveToDo();
}

function saveToDo(){
    localStorage.setItem('todos', JSON.stringify(todos))
}

render();

function addToDo(){
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createToDo(title, dueDate);
    
    render();
}

function deleteToDo(event){
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeToDo(idToDelete);

    render();
}

function render(){
    document.getElementById('todo-list').innerHTML = '';
    todos.forEach(function (todo){
        let element = document.createElement('div');
        element.innerText=todo.title+' '+todo.dueDate;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = deleteToDo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
        }
    )
}