var toogleMenu = document.querySelector(".main-navigation__toggle");
var mainNav = document.querySelector(".main-navigation__list");

toogleMenu.classList.remove(".main-navigation__toggle--no-js");

toogleMenu.addEventListener("click", function () {
  toogleMenu.classList.toggle("main-navigation__toggle--open");
  mainNav.classList.toggle("main-navigation__list--open");
});
