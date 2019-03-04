let body = document.body;

let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", toggleMenuBar);
let menuBar = document.getElementById("menu-bar");

function toggleMenuBar() {
    menuBar.classList.toggle("menu-bar-active");
    menuButton.classList.toggle("menu-button-active");
    body.classList.toggle("active");
}

let menuEntries = document.querySelectorAll("#menu-bar li a");
for (entry of menuEntries) {
    entry.addEventListener("click", toggleMenuBar);
}