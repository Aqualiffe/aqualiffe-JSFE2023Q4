const btnRefresh = document.querySelector(".btn-refresh");
const menu = Array.from(document.querySelectorAll(".menu"));
const menuItem = Array.from(document.querySelectorAll(".menu-item"));
const btnMenu = Array.from(document.querySelectorAll(".btn-menu"));
const btnMenuImg = Array.from(document.querySelectorAll(".btn-img"))
const btnMenuName = Array.from(document.querySelectorAll(".name-category"));
const wrapBtn = document.querySelector(".menu-controls");
let activBtnMenu = btnMenu[0];
let activMenu = menu[0];
let activMenuImg = btnMenuImg[0];
let activMenuName = btnMenuName[0];

activBtnMenu.disabled = true;
activMenu.classList.add("select");
activMenuImg.classList.add("off");

function addMenuItems() {
    menuItem.forEach(function(e){
        e.classList.remove("hidden");
        btnRefresh.remove("show");
        console.log(menuItem);
    })
};

wrapBtn.addEventListener('click', el => {
    const pressedBtn = el.target.closest(".btn-menu");
    btnClick(pressedBtn);
})


function btnClick(e) {
    activBtnMenu.disabled = false;
    const indexBtn = btnMenu.indexOf(e);
    btnMenu[indexBtn].disabled = true;
    menu[indexBtn].classList.add("select");
    btnMenuImg[indexBtn].classList.add("off");
    btnMenuName[indexBtn].classList.add("off");
    activMenu.classList.remove('select');
    activMenuImg.classList.remove('off');
    activMenuName.classList.remove('off');
    console.log(indexBtn);
    activBtnMenu = btnMenu[indexBtn];
    activMenu = menu[indexBtn];
    activMenuImg = btnMenuImg[indexBtn];
    activMenuName = btnMenuName[indexBtn];
};

// function changeMenu(index) {
//     activMenu.classList.remove('select');
//     activMenuImg.classList.remove('off');
//     menu[index].classList.add("select");
//     btnMenuImg[index].classList.add("off");
// };

// function changeBtnMenu(btn) {
//     activBtnMenu.disabled = false;
//     const indexBtn = btnMenu.indexOf(btn);
//     btnMenu[btn].disabled = true;
//     changeMenu(indexBtn);
// }

document.addEventListener("DOMContentLoaded", function() {
    btnRefresh.addEventListener("click", function() {
        console.log("нажимаетСя");
        addMenuItems();
        })
    })
