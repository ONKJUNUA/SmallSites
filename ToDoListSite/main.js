const todos = [{
    title: 'Make some code',
    dueDate: '2022-12-01'},{
    title: 'Go out with dog',
    dueDate: '2021-03-02'},{
    title: 'Eat some meat',
    dueDate: '2022-05-25'},];

render();

function addToDo(){
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;
    todos.push({
        title: title,
        dueDate:dueDate
    });
    render();
}

function deleteToDo(){
    
}

function render(){
    document.getElementById('todo-list').innerHTML = '';
    todos.forEach(function (todo){
        let element = document.createElement('div');
        element.innerText=todo.title+' '+todo.dueDate;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = deleteToDo;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
        }
    )
}