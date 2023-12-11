/*Burger*/
const burger = document.getElementById("burger");
const main_header = document.querySelector(".main-header");
const menuItems = document.querySelectorAll(".anchor-link");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;


document.addEventListener("DOMContentLoaded", function() {
    burger.addEventListener("click", function() {
        body.classList.toggle("stop-scroll");
        main_header.classList.toggle("open");
        navMenu.classList.toggle("active");
    })
});

menuItems.forEach(e => {
    e.addEventListener("click", function() {
        body.classList.remove("stop-scroll");
        main_header.classList.remove("open");
        navMenu.classList.remove("active");
    })
});