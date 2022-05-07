"use strict";
let projectComponent = document.querySelector(".project-component");
let projectsLi = document.querySelectorAll(".projects-li");
let projectsIcon = document.querySelector(".projects-icon");

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
