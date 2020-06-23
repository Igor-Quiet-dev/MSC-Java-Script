const Popup = document.querySelector(".popup");
const buttonPopup = document.querySelector(".request");
const closePopup = document.querySelector(".closePopup");

const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");

buttonPopup.addEventListener("click", function () {
  Popup.style.display = "flex";
});

closePopup.addEventListener("click", function () {
  Popup.style.display = "none";
  state = "none";
});

openMenu.addEventListener("click", function () {
  menu.style.left = "0";
});

closeMenu.addEventListener("click", function () {
  menu.style.left = "-50vw";
});
