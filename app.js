"use strict";

const menuMobEl = document.querySelector(".btn-menu");
const menuMobOpen = document.querySelector(".menu-open");
const menuMobClose = document.querySelector(".btn-close");
const menuDeskEl = document.querySelector(".menu-desktop");

window.addEventListener("resize",()=>{
    checkScreenSize();
});

menuMobEl.addEventListener("click",()=>{
    menuMobOpen.classList.remove("active");
});

menuMobClose.addEventListener("click",()=>{
    menuMobOpen.classList.add("active");
});

const checkScreenSize = ()=>{
    if(window.innerWidth < 901){
        menuMobEl.classList.remove("active");
        menuDeskEl.classList.add("active")
    } else {
        menuMobEl.classList.add("active");
        menuDeskEl.classList.remove("active");
    }   
};

checkScreenSize();

