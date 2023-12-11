const btnRefresh = document.querySelector(".btn-refresh");
const menu = Array.from(document.querySelectorAll(".menu"));
const menuItem = Array.from(document.querySelectorAll(".menu-item"));
const btnMenu = Array.from(document.querySelectorAll(".btn-menu"));
const btnMenuImg = Array.from(document.querySelectorAll(".btn-img"))
let activBtnMenu = btnMenu[0];
let activMenu = menu[0];
let activMenuImg = btnMenuImg[0];

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

btnMenu.forEach(elem => {
    elem.addEventListener('click', btnClick)
});

function btnClick(e) {
    console.log("чет нажала");
    const btn = e.target;
    changeBtnMenu(btn);

};

function changeMenu(index) {
    activMenu.classList.remove('select');
    activMenuImg.classList.remove('off');
    menu[index].classList.add("select");
    btnMenuImg[index].classList.add("off");
};

function changeBtnMenu(btn) {
    activBtnMenu.disabled = false;
    const indexBtn = btnMenu.indexOf(btn);
    btnMenu[btn].disabled = true;
    changeMenu(indexBtn);

}

document.addEventListener("DOMContentLoaded", function() {
    btnRefresh.addEventListener("click", function() {
        console.log("нажимаетСя");
        addMenuItems();
        })
    })
