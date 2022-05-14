"use strict";
let projectComponent = document.querySelector(".project-component");
let projectsLi = document.querySelectorAll(".projects-li");
let projectsIcon = document.querySelector(".projects-icon");
let checkBtn = document.querySelector(".fa-check");
let hamBtn = document.querySelector(".bar-menu");
let tasks = document.querySelector(".tasks");
let projects = document.querySelector(".projects");
let allComponent = document.getElementById('all-components')
let hamMenu = document.querySelector(".ham-menu")
projectComponent.addEventListener("click", (e) => {
  if (projectsIcon.classList.contains("fa-angle-down")) {
    projectsIcon.classList.remove("fa-angle-down");
    projectsIcon.classList.add("fa-angle-right");
  } else {
    projectsIcon.classList.add("fa-angle-down");
    projectsIcon.classList.remove("fa-angle-right");
  }
  projectsLi.forEach((e) => {
    e.classList.toggle("remove");
  });
});

function completeHandle() {
  if (checkBtn.classList.contains("li-btn")) {
    checkBtn.classList.remove("li-btn");
    checkBtn.classList.add("checkBtn");

  } else {
    checkBtn.classList.remove("checkBtn");
    checkBtn.classList.add("li-btn");
  }
}
checkBtn.addEventListener("click", completeHandle);
