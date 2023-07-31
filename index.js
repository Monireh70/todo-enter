let taskIDCounter = 0;
const taskList = [];

const todoListElement = document.querySelector("#todo-list");

const TASK_STATUS = Object.freeze({
  todo: "todo",
  done: "done",
});

function taskFactory(text = "", status = TASK_STATUS.todo) {
  if (typeof text !== "string") {
    return;
  }

  if (status !== TASK_STATUS.todo && status !== TASK_STATUS.done) {
    return;
  }

  const taskObject = {
    id: `tasks-uuid-${taskIDCounter}`,
    text,
    status, // status: status
  };

  taskIDCounter++;

  return taskObject;
                                                                 }

function renderTask(taskObject) {
  if (!taskObject || typeof taskObject !== "object") {
    return;
  }

  const li = document.createElement("li");
  li.classList.add("rounded-xl", "p-2", "mt-1", "flex", "justify-between");
  const p = document.createElement("p");
  p.innerHTML = taskObject.text;
  const div = document.createElement("div");
  const check = document.createElement("span");
  check.classList.add("fa", "fa-check-circle", "text-green-500");
  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("fa", "fa-minus-circle", "text-red-500");
  if (taskObject.status === TASK_STATUS.todo) {
    li.classList.add("bg-gray-100");
  } else if (taskObject.status === TASK_STATUS.done) {
    li.classList.add("bg-green-100");
    p.classList.add("line-through");
  }
  li.appendChild(p);
  div.appendChild(deleteBtn);
  div.appendChild(check);
  li.appendChild(div);
  return li;
}
function renderTasks() {
  
  todoListElement.innerHTML="";
  
  for (let i = 0; i < taskList.length; i += 1) {

    let renderedTask = renderTask(taskList[i]);
    todoListElement.appendChild(renderedTask);
    
                          }
  
                      }

function createTask(text = "") {
  
  const task = taskFactory(text);
  taskList.push(task);
    renderTasks();
  
 
}

const createTaskForm = document.querySelector("#createtoDo");

const createTaskInput = createTaskForm.querySelector("input");
const createTaskButton = createTaskForm.querySelector("button");

function createTaskHandler() {
  const value = createTaskInput.value;
  if (!value) {
    return;
  }
  createTask(value);
  createTaskInput.value = "";
}

createTaskButton.addEventListener("click", createTaskHandler);
createTaskForm.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    createTaskHandler();
    event.preventDefault();
    // Trigger the button element with a click
    
                               }
});

