import './style.css'

//TODO: get selectors 
const dateTitle = document.getElementById('todo_title')
const todoInput = document.querySelector("#todo--input");
const todoButton = document.querySelector("#todo--button");
const todoUl = document.querySelector("#todo--list");
const completedUl = document.querySelector("#completed--task")


//TODO: Add event listeners 
// add a todo task 
todoButton.addEventListener("click", addTodo)

//listen for clicks on the todo--list ie the ul
todoUl.addEventListener("click", deleteCheck)

document.addEventListener('DOMContentLoaded', getLocalStorage)

//TODO: Write functions
//function to add todo
function addTodo(event) {
  /**
   * ? Prevent page from reloading on submit
   */


  event.preventDefault()

  if (todoInput.value === "") {
    todoButton.disabled = true
  } else {
    /**
      * ? create a div element, and withing the div, add a list and 2 buttons
      */
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    //create label for checkbox, append label to div
    const label = document.createElement("label")
    label.classList.add("form-control")
    todoDiv.appendChild(label)

    //create checkbox/radiobutton, append checkbox to label
    const todoCheck = document.createElement('input')
    todoCheck.setAttribute("type", "checkbox")
    todoCheck.setAttribute("name", "checkbox")
    todoCheck.classList.add("todo--check")
    label.appendChild(todoCheck)

    //create li, append li to label
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo--item')
    //append the li to the div
    label.appendChild(newTodo)
    saveLocalStorage(todoInput.value)

    //create coompleted button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<svg class="completed--button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="22" width="22"><path class="completed--button" fill="#2a9d8f" stroke="#2a9d8f" stroke-linecap="round" stroke-linejoin="round" d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25Z"></path><path class="completed--button" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.625L6.31818 9.5C7.17375 7.04232 7.88628 5.96386 9.5 4.5"></path></svg>'
    completedBtn.classList.add('completed--button')
    todoDiv.appendChild(completedBtn);

    //create deleted button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<svg class="completed--button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0.125 0.125 13.75 13.75" height="22" width="22" stroke-width="0.75" style="background-color: #9C9CB4"><g transform="matrix(0.9,0,0,0.9,0.7000003881171075,0.6999976542148652)"><path class="delete--button" fill="#e63946" stroke="#e63946" stroke-linejoin="round" d="M9.47284 1.49418C10.1009 0.907136 11.069 0.710479 11.8162 1.13562C12.0359 1.2606 12.2423 1.40382 12.4192 1.58074C12.5962 1.75765 12.7394 1.9641 12.8644 2.18376C13.2895 2.93098 13.0928 3.89908 12.5058 4.52713C12.3514 4.69232 12.1963 4.85851 12.0404 5.02555C11.6458 5.44833 11.2462 5.87654 10.84 6.30765C10.474 6.69625 10.474 7.30369 10.84 7.69229C11.2461 8.12339 11.6458 8.55159 12.0404 8.97436C12.1963 9.14141 12.3514 9.30761 12.5058 9.47281C13.0928 10.1009 13.2895 11.069 12.8643 11.8162C12.7394 12.0358 12.5961 12.2423 12.4192 12.4192C12.2423 12.5961 12.0359 12.7393 11.8162 12.8643C11.069 13.2895 10.1009 13.0928 9.47283 12.5058C9.30765 12.3514 9.14146 12.1963 8.97442 12.0404C8.55164 11.6458 8.12343 11.2461 7.69232 10.84C7.30372 10.4739 6.69628 10.4739 6.30767 10.84C5.87659 11.2461 5.44841 11.6457 5.02565 12.0403C4.85859 12.1962 4.69238 12.3513 4.52716 12.5058C3.89911 13.0928 2.931 13.2895 2.18379 12.8643C1.96413 12.7393 1.75768 12.5961 1.58076 12.4192C1.40385 12.2423 1.26063 12.0358 1.13565 11.8162C0.710508 11.069 0.907165 10.1009 1.49421 9.4728C1.64862 9.30761 1.80373 9.14141 1.95963 8.97437C2.35421 8.55159 2.75385 8.1234 3.15996 7.69229C3.52604 7.30369 3.52604 6.69625 3.15996 6.30765C2.75388 5.87657 2.35426 5.4484 1.95971 5.02565C1.80378 4.85858 1.64864 4.69236 1.49421 4.52714C0.907165 3.89908 0.710508 2.93098 1.13565 2.18376C1.26063 1.9641 1.40385 1.75765 1.58076 1.58074C1.75768 1.40382 1.96413 1.2606 2.18379 1.13562C2.93101 0.71048 3.89911 0.907137 4.52716 1.49418C4.69236 1.64859 4.85855 1.8037 5.0256 1.9596C5.44837 2.35418 5.87657 2.75382 6.30768 3.15993C6.69628 3.52601 7.30372 3.52601 7.69232 3.15993C8.12342 2.75383 8.55162 2.35419 8.97439 1.95961C9.14144 1.80371 9.30764 1.64859 9.47284 1.49418Z"></path></g></svg>'
    deleteBtn.classList.add('delete--button')
    todoDiv.appendChild(deleteBtn);

    //append tododiv to ul 
    todoUl.appendChild(todoDiv);

    //clear todo input 
    todoInput.value = "";
  }

}
const todoList = [];


function deleteCheck(event) {
  const item = event.target

  //delete 
  if (item.classList[0] === 'delete--button') {
    //console.log("Deleting")
    //console.log(event.target.parentElement.parentElement.parentElement.parentElement)
    const toRemove = item.parentElement.parentElement.parentElement.parentElement;

    //Animate deletion
    toRemove.classList.add('fall');
    deleteStorageTodo(toRemove)
    toRemove.addEventListener("transitionend", function () {
      toRemove.remove()
    })


  }

  else if (event.target.classList[0] === 'completed--button' || event.target.className === 'todo--check') {
    const completedTask = item.parentElement.parentElement.parentElement.querySelector(".form-control").querySelector('.todo--item').innerText

    const completedLi = document.createElement('li');
    completedLi.innerText = completedTask;
    completedLi.classList.add('completedLi')
    completedUl.appendChild(completedLi)
    completedLi.classList.toggle('completed')

    console.log(item.parentElement.parentElement.parentElement)
    const justRemove = item.parentElement.parentElement.parentElement;
    justRemove.remove()
  }
}

function saveLocalStorage(todo) {
  // check memory for local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
    // create empty list if null
    todos = [];

  } else {
    // parse the values of the localstorage to todos
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  todos.push(todo)
  localStorage.setItem("todos", JSON.stringify(todos))
}

function getLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    // create empty list if null
    todos = [];

  } else {
    // parse the values of the localstorage to todos
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  //loop over todos in the local storage
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    //create label for checkbox, append label to div
    const label = document.createElement("label")
    label.classList.add("form-control")
    todoDiv.appendChild(label)

    //create checkbox/radiobutton, append checkbox to label
    const todoCheck = document.createElement('input')
    todoCheck.setAttribute("type", "checkbox")
    todoCheck.setAttribute("name", "checkbox")
    todoCheck.classList.add("todo--check")
    label.appendChild(todoCheck)

    //create li, append li to label
    const newTodo = document.createElement("li")
    newTodo.innerText = todo
    newTodo.classList.add('todo--item')
    //append the li to the div
    label.appendChild(newTodo)


    //create coompleted button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<svg class="completed--button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="22" width="22"><path class="completed--button" fill="#2a9d8f" stroke="#2a9d8f" stroke-linecap="round" stroke-linejoin="round" d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25Z"></path><path class="completed--button" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.625L6.31818 9.5C7.17375 7.04232 7.88628 5.96386 9.5 4.5"></path></svg>'
    completedBtn.classList.add('completed--button')
    todoDiv.appendChild(completedBtn);

    //create deleted button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<svg class="completed--button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0.125 0.125 13.75 13.75" height="22" width="22" stroke-width="0.75" style="background-color: #9C9CB4"><g transform="matrix(0.9,0,0,0.9,0.7000003881171075,0.6999976542148652)"><path class="delete--button" fill="#e63946" stroke="#e63946" stroke-linejoin="round" d="M9.47284 1.49418C10.1009 0.907136 11.069 0.710479 11.8162 1.13562C12.0359 1.2606 12.2423 1.40382 12.4192 1.58074C12.5962 1.75765 12.7394 1.9641 12.8644 2.18376C13.2895 2.93098 13.0928 3.89908 12.5058 4.52713C12.3514 4.69232 12.1963 4.85851 12.0404 5.02555C11.6458 5.44833 11.2462 5.87654 10.84 6.30765C10.474 6.69625 10.474 7.30369 10.84 7.69229C11.2461 8.12339 11.6458 8.55159 12.0404 8.97436C12.1963 9.14141 12.3514 9.30761 12.5058 9.47281C13.0928 10.1009 13.2895 11.069 12.8643 11.8162C12.7394 12.0358 12.5961 12.2423 12.4192 12.4192C12.2423 12.5961 12.0359 12.7393 11.8162 12.8643C11.069 13.2895 10.1009 13.0928 9.47283 12.5058C9.30765 12.3514 9.14146 12.1963 8.97442 12.0404C8.55164 11.6458 8.12343 11.2461 7.69232 10.84C7.30372 10.4739 6.69628 10.4739 6.30767 10.84C5.87659 11.2461 5.44841 11.6457 5.02565 12.0403C4.85859 12.1962 4.69238 12.3513 4.52716 12.5058C3.89911 13.0928 2.931 13.2895 2.18379 12.8643C1.96413 12.7393 1.75768 12.5961 1.58076 12.4192C1.40385 12.2423 1.26063 12.0358 1.13565 11.8162C0.710508 11.069 0.907165 10.1009 1.49421 9.4728C1.64862 9.30761 1.80373 9.14141 1.95963 8.97437C2.35421 8.55159 2.75385 8.1234 3.15996 7.69229C3.52604 7.30369 3.52604 6.69625 3.15996 6.30765C2.75388 5.87657 2.35426 5.4484 1.95971 5.02565C1.80378 4.85858 1.64864 4.69236 1.49421 4.52714C0.907165 3.89908 0.710508 2.93098 1.13565 2.18376C1.26063 1.9641 1.40385 1.75765 1.58076 1.58074C1.75768 1.40382 1.96413 1.2606 2.18379 1.13562C2.93101 0.71048 3.89911 0.907137 4.52716 1.49418C4.69236 1.64859 4.85855 1.8037 5.0256 1.9596C5.44837 2.35418 5.87657 2.75382 6.30768 3.15993C6.69628 3.52601 7.30372 3.52601 7.69232 3.15993C8.12342 2.75383 8.55162 2.35419 8.97439 1.95961C9.14144 1.80371 9.30764 1.64859 9.47284 1.49418Z"></path></g></svg>'
    deleteBtn.classList.add('delete--button')
    todoDiv.appendChild(deleteBtn);

    //append tododiv to ul 
    todoUl.appendChild(todoDiv);
  });
}

function deleteStorageTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    // create empty list if null
    todos = [];

  } else {
    // parse the values of the localstorage to todos
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  // get index of item to be deleted
  const todoIndex = todos.indexOf(todo.innerText)
  console.log(todoIndex)

  // use spllice to delete the item from list. Splic() takes 2 arguments, first is the index, and second is the number of items to be deleted
  todos.splice(todoIndex, 1)

  //set localstorage 
  localStorage.setItem("todos", JSON.stringify(todos))

}

function setTime() {
  const currentTime = new Date()
  const actualTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
  //console.log(actualTime)
  dateTitle.innerText = actualTime
}

// Initial call to show time
setTime()

setInterval(setTime, 1000)
