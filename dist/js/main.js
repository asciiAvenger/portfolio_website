let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", toggleMenuBar);
let menuBar = document.getElementById("menu-bar");

function toggleMenuBar() {
    menuBar.classList.toggle("menu-bar-active");
    menuButton.classList.toggle("menu-button-active");
}