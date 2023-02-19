let todos = [];
let input = document.getElementById("form");
const createTask = document.getElementById("createtask");
const todosList = document.getElementById("todosList");
let activeTodos = document.getElementById("activeTodos")
let completedTodos = document.getElementById('completedTodos')
createTask.addEventListener("click", () => {
  input.innerHTML = `
  <input id='todo'  type='text'> 
   <button id='addTask'>Add Todo</button>
   `;
  const addTask = document.getElementById("addTask");
  addTask.addEventListener("click", () => {
    let todoObj = {
      todo: document.getElementById("todo").value,
      completed: false,
      id: Math.floor(Math.random() * 100000),
    };
    todos.push(todoObj);
    let todo = (document.getElementById("todo").value = "");
    localStorage.setItem("savedTodos", JSON.stringify(todos));
    todosList.innerHTML += `
  <div id= 'list'> 
  <div id='row'>
    <input  id='check' type= 'checkbox'></input>
    <p>${todoObj.todo}</li>
    </div>
    <button id= 'delete'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
    
   </div>`;
  });
});
createTask.addEventListener("dblclick", () => {
  console.log("I was clicked twice");
  input.innerHTML = "";
});
let savedTodos = JSON.parse(localStorage.getItem("savedTodos"));
//console.log(savedTodos);
savedTodos.forEach((element) => {
  todosList.innerHTML += `
  <div id= 'list'>
    <div id= 'row'>
    <input data-id=${element.id} id='check' type= 'checkbox'></input>
    <p id='dec'>${element.todo}</li>
    </div>
    <button id= 'delete' data-id= '${element.id}'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
   </div>
    `;
});
let dec = document.getElementById('dec')
let check = document.querySelectorAll("#check");
check.forEach((element) => {
  element.addEventListener("change", () => {
    if(this.checked){
        dec.style.textDecoration = 'underline';
      }
      else{
        dec.style.textDecoration = "none";
      }
    let checkId = element.getAttribute("data-id");
    savedTodos.forEach((element) => {
      if (checkId == element.id) {
        
        if (element.completed) {
          element.completed = false;
        } else if (!element.completed) {
          element.completed = true;
        }
      }
      
    });
    localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
  });
});
let del = document.querySelectorAll("#delete");
del.forEach((element) => {
  element.addEventListener("click", () => {
    let deleteId = element.getAttribute("data-id");
    console.log(deleteId);
    savedTodos.forEach((element) => {
      if (element.id == deleteId) {
        savedTodos.splice(element, 1);
      }
      localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
      location.reload();
    });
  });
});
let all = document.getElementById("all");
all.addEventListener('click', ()=>{
  savedTodos.forEach((element) => {
    todosList.innerHTML += `
    <div id= 'list'>
      <div id= 'row'>
      <input data-id=${element.id} id='check' type= 'checkbox'></input>
      <p id='dec'>${element.todo}</li>
      </div>
      <button id= 'delete' data-id= '${element.id}'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
     </div>
      `;
  })
})
let active = document.getElementById("active");
active.addEventListener("click", () => {
  savedTodos.forEach((element) => {
    if (element.completed == false) {
      activeTodos.innerHTML += `
      Active:
      <div id= 'list'>
    <div id='row'>
    <p>${element.todo}</li>
    </div>
   </div>
    `;
    }
  });
});
active.addEventListener('dblclick', ()=>{
  activeTodos.innerHTML+=""
})
let completed = document.getElementById("completed");
completed.addEventListener("click", () => {
  savedTodos.forEach((element) => {
    if (element.completed == true) {
      completedTodos.innerHTML += 
      `
      Completed:
      <div id= 'list'>
        <div id='row'>
        <p>${element.todo}</li>
        </div>
       </div> 
        `;
    }
  });
});
completed.addEventListener("dblclick", () => {
  todosList.innerHTML = "";
});
let clearCompleted = document.getElementById('clearCompleted')
clearCompleted.addEventListener('click', ()=>{  
  const uncompleted = savedTodos.filter(function(todoObj) {
    return todoObj.completed==false
  });
  savedTodos=uncompleted
  localStorage.setItem("savedTodos", JSON.stringify(savedTodos))
  location.reload()
  })
 
