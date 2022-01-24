/* Menu vendria a ser todo el menu. Es el selector mas abarcativo */
const menu = document.querySelector(".menu");
const hamburguesa = document.querySelector(".hamburguesa");
const hamburguesaButton = document.querySelector(".hamburguesa > p");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav > ul > li");

window.addEventListener("DOMContentLoaded", (event) => {
  hideMenuButton();
});

const showMenuButton = () => {
  menu.style.top = "25px";
  menu.style.opacity = "1";
  hamburguesa.classList.remove("hideLetters");
};
const hideMenuButton = () => {
  menu.style.top = "-100%";
  menu.style.opacity = "0";
  nav.classList.remove("show");
};
console.log("links", links);

document.addEventListener("click", (e) => {
  if (!(e.target.id == 'nav' || e.target.isEqualNode(hamburguesaButton) || e.target.id == 'hamburguesa')) {
    hideMenuButton()
    nav.classList.remove("show");
  }

  //   if (!e.target.isEqualNode(navId)) {
  //       console.log('nav', navId);
  //     nav.classList.remove("show");
  //     hideMenuButton();
  //   }
});
/* para que el menu se muestre al bajar y se esconda al subir */
let prevScrollpos = window.pageYOffset;

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

/* desplegar menu al ahcer click en el boton */
hamburguesa.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburguesa.classList.toggle("hideLetters");
});
