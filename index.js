let $ = document;
let heighTasks = $.querySelector(".tasks");
let heightProjects = $.querySelector(".projects");
let heightInput = $.querySelector(".task-flex");
let projectComponent = $.querySelector(".project-component");
let projectsLi = $.querySelectorAll(".projects-li");
let projectsIcon = $.querySelector(".projects-icon");

// height screen
let screenHight = window.innerHeight;
heighTasks.style.height = `${screenHight}px `;
heightProjects.style.height = `${screenHight}px`;
heightInput.style.height = `${screenHight - 135}px`;

// toggle project component

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
