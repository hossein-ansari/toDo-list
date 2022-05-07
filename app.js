"use strict";
let input = document.querySelector(".input");
let addTask = document.querySelector(".add-task");
let ulTask = document.querySelector(".task-box");
let count = parseFloat(window.innerHeight / 11) 
console.log(count);
function taskAdder() {
      ulTask.insertAdjacentHTML(
    'afterend',
    '<li class="li-tasks position"><div>'+input.value+'</div><div class="li-option"><i class="li-btn fa-solid fa-check "></i><i class="fa-solid fa-trash li-btn"></i></div></li>'
    );
}
addTask.addEventListener("click", taskAdder);
