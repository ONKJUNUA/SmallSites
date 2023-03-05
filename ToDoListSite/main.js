let todos = ['Make some code', 'Eat lunch', 'Go out with a dog'];

render()

function addToDo(){
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos.push(title);
    render();
}

function render(){
    document.getElementById('todo-list').innerHTML = '';
    todos.forEach(function writeDoTo(todo){
        let element = document.createElement('div');
        element.innerText=todo;
        let todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
        }
    )
}