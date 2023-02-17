let createTask = document.getElementById("createTask");
createTask.addEventListener("click", () => {
  let arrTask = [];

  console.log("hello");
  popUP.innerHTML = ` 
    <div>      
    <label for="">Task
    <input id= "task" type="text">
</label>
<label for="">Description
    <textarea name="" id="description" cols="30" rows="10"></textarea>
</label>
<label for="">
    Date
    <input id="date" type="date">
</label>
<button id= "saveBtn">Save</button>
</form>
</div>`;
  let save = document.getElementById("saveBtn");
  save.addEventListener("click", () => {
    console.log(78);
    let task = document.getElementById("task").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    objTask = {
      task: task,
      description: description,
      date: date,
      id:Math.floor(Math.random()*1000)
    };
    arrTask.push(objTask);
    console.log(arrTask);
    localStorage.setItem("todos", JSON.stringify(arrTask));
  

      uncompletedTasks.innerHTML += `
    <li>
    <span>Task:${objTask.task}</span>
    <span>Description:${objTask.description}</span>
    <span>Date:${objTask.date}</span>
    <button data-id='${objTask.id}' class= 'edit'>Edit</button>
    </li>
    `;
   
  });
});
createTask.addEventListener("dblclick", () => {
  console.log("I was clicked twice");
  popUP.innerHTML = "";
});
let popUP = document.getElementById("popUP");
// let displaTasks = document.getElementById("displayTasks");
let uncompletedTasks = document.getElementById("uncompletedTasks");
// displaTasks.addEventListener("click", () => {
  let todos = localStorage.getItem ("todos");
  todos= JSON.parse(todos)

  console.log(todos);
 // todos=JSON.parse(todos);
 for(let i= 0; i<todos.length; i++) {

    uncompletedTasks.innerHTML += `
  <li>
  <span>Task:${todos[i].task}</span>
  <span>Description:${todos[i].description}</span>
  <span>Date:${todos[i].date}</span>
  <button data-id='${todos[i].id}' class= 'edit'>Edit</button>
  </li>
  `;
  };
  let savedTasks = JSON.parse(localStorage.getItem("todos")) || [];
 let edit = document.querySelectorAll('.edit')
 uncompletedTasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    let taskId = event.target.getAttribute("data-id");
    let taskIndex = savedTasks.findIndex((task) => task.id == taskId);

    if (taskIndex !== -1) {
      // Retrieve the task details
      let task = savedTasks[taskIndex];

      // Open the pop-up window with the task details pre-filled
      popUP.innerHTML = `
        <div id='pop'>      
          <label for="">Task
            <input id="task" type="text" value="${task.task}">
          </label>
          <label for="">Description
            <textarea name="" id="description" cols="30" rows="10">${task.description}</textarea>
          </label>
          <label for="">
            Date
            <input id="date" type="date" value="${task.date}">
          </label>
          <button id="updateBtn" data-id="${taskId}">Update</button>
        </div>`;

      // Add an event listener for the update button
      let updateBtn = document.getElementById("updateBtn");
      updateBtn.addEventListener("click", () => {
        // Retrieve the updated task details
        let updatedTask = {
          task: document.getElementById("task").value,
          description: document.getElementById("description").value,
          date: document.getElementById("date").value,
          id: taskId
        };

        // Update the task in the saved tasks array
        savedTasks[taskIndex] = updatedTask;

        // Update the task in local storage
        localStorage.setItem("todos", JSON.stringify(savedTasks));

        // Update the task in the DOM
        let taskLi = event.target.parentElement;
        taskLi.querySelector("span:nth-child(1)").textContent = `Task: ${updatedTask.task}`;
        taskLi.querySelector("span:nth-child(2)").textContent = `Description: ${updatedTask.description}`;
        taskLi.querySelector("span:nth-child(3)").textContent = `Date: ${updatedTask.date}`;

        // Close the pop-up window
        popUP.innerHTML = "";
      });
    }
  }
});


    
 
// });
