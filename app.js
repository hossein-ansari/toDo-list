"use strict";
let input = document.querySelector(".input");
let addTask = document.querySelector(".add-task");
let ulTask = document.querySelector(".task-box");
let toDoArray = [];
function taskAdder(lis) {
  let newToDo = {
    id: toDoArray.length + 1,
    title: input.value,
    complete: false,
  };
  toDoArray.push(newToDo);
  localToDo(toDoArray)
  addgenerator(toDoArray)  
  input.value = "";
}
function localToDo(todoElem) {
  localStorage.setItem("todos", JSON.stringify(todoElem));
}
function addgenerator(todoElem) {
  ulTask.innerHTML = '' 
  toDoArray.forEach(todoElem => {
    
    ulTask.insertAdjacentHTML(
      "beforeend",
      '<li class="li-tasks position"><div>' +
      todoElem.title +
      '</div><div class="li-option"><i class="li-btn fa-solid fa-check "></i><i class="fa-solid fa-trash li-btn"></i></div></li>'
      );
      
    });
  }
function reUploadToDo(e) {
  let localback = JSON.parse(localStorage.getItem("todos"));
  if (localback) {
    toDoArray = localback
  }
  else{
    toDoArray = []
  }
  console.log(localback);
  addgenerator(toDoArray)
}
window.addEventListener("DOMContentLoaded", reUploadToDo);
addTask.addEventListener("click", taskAdder);
