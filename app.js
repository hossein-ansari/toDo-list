"use strict";
let input = document.querySelector(".input");
let addTask = document.querySelector(".add-task");
let ulTask = document.querySelector(".task-box");
 let toDoArray = []
function taskAdder() {
      ulTask.insertAdjacentHTML(
    'afterend',
    '<li class="li-tasks position"><div>'+input.value+'</div><div class="li-option"><i class="li-btn fa-solid fa-check "></i><i class="fa-solid fa-trash li-btn"></i></div></li>'
    );
    let newToDo = {
      id : toDoArray.length + 1,
      title : input.value,
      complete : false,
    }
    toDoArray.push(newToDo)
    localToDo(toDoArray)
}
function localToDo(todoElem) {
    localStorage.setItem('todos', JSON.stringify(todoElem))
}

addTask.addEventListener("click", taskAdder);

