"use strict";
// let document = document
let theme = document.querySelector(".theme");

let themeFlag = false;
function themeHandeler() {
  if (themeFlag == false) {
    themeFlag = true;
    document.documentElement.style.setProperty("--color1", "#999");
    document.documentElement.style.setProperty("--color2", "#fff");
    document.documentElement.style.setProperty("--color3", "#999");
    document.documentElement.style.setProperty("--color8", "#111");
    document.documentElement.style.setProperty("--color6", "#00505a");



  } else {
    themeFlag = false;
    document.documentElement.style.setProperty("--color1", "#282828");
    document.documentElement.style.setProperty("--color2", "#1f1f1f");
    document.documentElement.style.setProperty("--color3", "#2e2e2e");
    document.documentElement.style.setProperty("--color8", "#f6f6f6");
    document.documentElement.style.setProperty("--color6", "#00ca94");


  }
}

theme.addEventListener("click", themeHandeler);
