"use strict";
let input = document.querySelector(".input");
let addTask = document.querySelector(".add-task");
let ulTask = document.querySelector(".task-box");
let trashBtn = document.querySelector(".fa-trash");

let li = document.querySelector(".position");

let toDoArray = [];
function taskAdder(lis) {
  if (input.value != '') {
          let newToDo = {
    id: toDoArray.length + 1,
    title: input.value,
    complete: false,
  };
  
  toDoArray.push(newToDo);
  localToDo(toDoArray);
  addgenerator(toDoArray);
  input.value = "";
  }
}
function localToDo(todoElem) {
  localStorage.setItem("todos", JSON.stringify(todoElem));
}
function addgenerator(todoElem) {
  ulTask.innerHTML = "";
  toDoArray.forEach((todoElem) => {
    ulTask.insertAdjacentHTML(
      "beforeend",
      '<li class="li-tasks position"><div>' +
        todoElem.title +
        '</div><div class="li-option"><i onclick="completeHandle(), completHandeler(' +
        todoElem.id +
        ')" class="fa-solid fa-check li-btn"></i><i onclick=" clearHandeler(' +
        todoElem.id +
        ')" class="fa-solid fa-trash li-btn"></i></div></li>'
    );
  });
}
function reUploadToDo(e) {
  let localback = JSON.parse(localStorage.getItem("todos"));
  if (localback) {
    toDoArray = localback;
  } else {
    toDoArray = [];
  }

  addgenerator(toDoArray);
}
window.addEventListener("DOMContentLoaded", reUploadToDo);
addTask.addEventListener("click", taskAdder);
//  clear btn

function clearHandeler(id) {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));
  toDoArray = localStorageTodos;

  let mainTodoIndex = toDoArray.findIndex(function (todo) {
    return todo.id === id;
  });
  toDoArray.splice(mainTodoIndex, 1);
  localToDo(toDoArray);
  addgenerator(toDoArray);
}

function completHandeler(complete) {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));
  toDoArray = localStorageTodos;

  toDoArray.forEach(function (todo) {
    if (todo.id == complete) {
      todo.complete = !todo.complete;

    }

  });
  localToDo(toDoArray);
  addgenerator(toDoArray);
}
