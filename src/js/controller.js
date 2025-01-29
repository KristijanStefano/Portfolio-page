import { mobileNavigation } from "./mobile-navigation";
import { obs, obsS } from "./sticky-navigation";
import { spying } from "./scroll-spy";
import { dropdown, callProjects } from "./dropdown";
import { hiddenElements, observer } from "./animations"
import { callBirds } from "./birds";
import { callSwiper } from "./swiper";
import { projectsData } from "./model"

// Copyright Year
document.querySelector("#year").textContent = new Date().getFullYear();

// Scoll Spy
document.addEventListener("DOMContentLoaded", spying);

// Mobile navigation 
document.querySelector('.toggle').addEventListener('click', mobileNavigation);

// Portfolio Projects Dropdown
callProjects(projectsData());

document.querySelector(".btn-toggle").addEventListener("click", function () {
    dropdown();
    projectsData();
    callProjects(projectsData());
});

window.matchMedia('(max-width: 600px)').addEventListener('change', (e) => {
    projectsData()
    callProjects(projectsData())
});

// Sticky navigation
obs.observe(document.querySelector(".home-section"));
obsS.observe(document.querySelector("footer"));

// Animations
hiddenElements.forEach((el) => observer.observe(el));


//////////////////////// Outside Libraries ////////////////////////////////////////////
// Vanta Birds
callBirds();

// Slider js
callSwiper();
