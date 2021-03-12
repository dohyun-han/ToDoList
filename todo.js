const todoListContainer = document.getElementById("todoListContainer"),
    form = todoListContainer.querySelector("form");
    input = form.querySelector("input"),
    document.querySelectorAll
    todoWrap = todoListContainer.querySelector(".todoWrap")

const TODO = "todo";

let todoList = [];

function deleteTodo(event){
    const ask = confirm("삭제하시겠습니까?");
    if(ask === true){
        var cnt = 0;
        var index = -1;
        const todoWrapChild = todoWrap.querySelectorAll("li");

        const newList = todoList.filter(function(element){
            const button = event.target.parentNode;
            const value = button.previousSibling.innerText;
            index++;           
            if(element.id!=button.id||element.value!=value){
                todoWrapChild[index].querySelector(".delBtn").id = cnt;
                element.id = cnt++;
                return true;
            }
            else{
                const li = button.parentNode;
                console.log(li);
                todoWrap.removeChild(li);
                return false;
            }
        })
        todoList = newList;
        saveTodo();
    }else{
        return;
    }
    
}

function paintALine(element){
    const div = document.createElement("div"),
            divTrash = document.createElement("div"),
            button = document.createElement("button"),
            li = document.createElement("li");
        div.innerText = element.value;
        divTrash.classList.add("trash");
        button.classList.add("delBtn");
        button.id = element.id;
        button.addEventListener("click",deleteTodo);
        button.appendChild(divTrash);
        li.appendChild(div);
        li.appendChild(button);
        todoWrap.appendChild(li);
}

function paintList(){
    todoList.forEach(function(element){
       paintALine(element);
    })
}

function saveTodo(){
    localStorage.setItem(TODO,JSON.stringify(todoList));
}

function getInputValue(submit){
    submit.preventDefault();
    const value = input.value;
    input.value = '';
    const newObj = {
        id:todoList.length,
        value
    }
    todoList.push(newObj);
    paintALine(newObj);
    saveTodo();
    
}

function loadList(){
    currentTodoList = localStorage.getItem(TODO);
    if(currentTodoList!==null){
        todoList = JSON.parse(currentTodoList);
        paintList();
    }
}
function init(){
    loadList();
    form.addEventListener("submit",getInputValue);
}

init();