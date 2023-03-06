let todos = [{
    title: 'Make some code',
    dueDate: '2022-12-01',
    id: 'id1'},{
    title: 'Go out with dog',
    dueDate: '2021-03-02',
    id: 'id2'},{
    title: 'Eat some meat',
    dueDate: '2022-05-25',
    id: 'id3'}];

function createToDo(title, dueDate){
    const id = '' + new Date().getTime();
    todos.push({
        title: title,
        dueDate:dueDate,
        id: id
    });
}

function removeToDo(idToDelete){
    todos = todos.filter(function (todo) {
        if(todo.id===idToDelete){
            return false;
        } else {
            return true;
        }
    });
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