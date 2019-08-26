var toggleMenu = document.querySelector(".main-navigation__toggle");

var navigation = document.querySelector(".main-navigation__list");

toggleMenu.addEventListener("click", function() {
  toggleMenu.classList.toggle(".main-navigation__toggle--close");
  navigation.classList.toggle("main-navigation__list--open");
});
