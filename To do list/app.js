//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterSelect = document.querySelector(".filter");

//EventListener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterSelect.addEventListener('click', filter);

//functions

function addTodo(event){
    event.preventDefault();
    //Prevent formbutton refreshing
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Creating tododiv
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Creating Li
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-button');
    todoDiv.appendChild(completeButton);
    //Creating completed button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    //Creating trash button
    todoList.appendChild(todoDiv);
    //Append to list
    todoInput.value = '';
    //Reset input
}

function deleteCheck(e){
    const item = e.target;
    if (item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        todo.classList.add('delete');
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
    if (item.classList[0] === 'complete-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filter(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display ="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none"
                }
                break;
        }
    });
}
