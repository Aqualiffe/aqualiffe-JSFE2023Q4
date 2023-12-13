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

/*Slider*/
window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
    window.location.reload();
    }
});


const btnLeft = document.querySelector(".carousel-left");
const btnRight = document.querySelector(".carousel-right");
const sliders = document.querySelectorAll(".favorite");
const slidersBox = document.querySelector(".sliders");
const slideWight= document.getElementById("slider-wight");
let currentIndex = 0;
let lastIndex = sliders.length - 1;
let nextIndex = 1;
// const imageWidth = 500;
let startX =0;
let pressed = false;
const imageWidth = slideWight.scrollWidth + 20;

console.log(imageWidth);

function nextSlide() {
    nextIndex = currentIndex + 1;
    if (currentIndex == lastIndex) {
        nextIndex = 0;
    }
    const slideOffset = -imageWidth * nextIndex;
    slidersBox.style.transform = `translateX(${slideOffset}px)`;
    // sliders[currentIndex].classList.remove("slider-show");
    // sliders[nextIndex].classList.add("slider-show");
    currentIndex = nextIndex;
};

function prevSlide() {
    nextIndex = currentIndex - 1;
    if (currentIndex == 0) {
        nextIndex = lastIndex;
    }
    const slideOffset = -imageWidth * nextIndex;
    slidersBox.style.transform = `translateX(${slideOffset}px)`;
    // sliders[currentIndex].classList.remove("slider-show");
    // sliders[nextIndex].classList.add("slider-show");
    currentIndex = nextIndex;
}

// slidersBox.addEventListener('mousedown', function(e) {
// });

// slidersBox.addEventListener('mouseleave', function(e) {

// });

// window.addEventListener('mouseup', function(e) {

// });

// slidersBox.addEventListener('mousemove', function(e) {

// });

    btnRight.addEventListener("click", function() {
        nextSlide();
    });

    btnLeft.addEventListener("click", function() {
        prevSlide();
    });

setInterval(() => {
    nextSlide()
}, 3500);

