const menu = document.querySelector(".menu");
const hamburguesa = document.querySelector(".menu .hamburguesa");
const links = document.querySelector(".links");

let prevScrollpos = window.pageYOffset;

const showMenuButton = () => {
  menu.style.top = "25px";
  menu.style.opacity = "1";
  hamburguesa.classList.remove("whiteLetters");
};
const hideMenuButton = () => {
  menu.style.top = "-100%";
  menu.style.opacity = "0";
  links.classList.remove("show");
};

window.addEventListener("DOMContentLoaded", (event) => {
  hideMenuButton();
});

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (window.pageYOffset > 199) {
    if (prevScrollpos > currentScrollPos) {
      hideMenuButton();
    } else {
      showMenuButton();
    }
  }
  prevScrollpos = currentScrollPos;
};

hamburguesa.addEventListener("click", () => {
  console.log("click");
  links.classList.toggle("show");
  hamburguesa.classList.toggle("whiteLetters");
});
