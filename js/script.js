const hamburguesa = document.querySelector(".hamburguesa");
const hamburguesaButton = document.querySelector(".hamburguesa > p");
const links = document.querySelectorAll(".nav > ul > li");
const menu = document.querySelector(".menu"); //Menu vendria a ser todo el menu. Es el selector mas abarcativo
const nav = document.querySelector("#nav");


/* MENU */
window.addEventListener("DOMContentLoaded", (event) => {
  hideMenuButton();
});

const showMenuButton = () => {
  menu.style.top = "25px";
  menu.style.opacity = "1";

  if (!nav.className.includes("show")) {
    hamburguesa.classList.remove("hideLetters");
  }
};
const hideMenuButton = () => {
  menu.style.top = "-100%";
  menu.style.opacity = "0";
  nav.classList.remove("show");
};

document.addEventListener("click", (e) => {
  if (
    !(
      e.target.id == "nav" ||
      e.target.isEqualNode(hamburguesaButton) ||
      e.target.id == "hamburguesa"
    )
  ) {
    hideMenuButton();
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

  scrollFunction();
};

/* desplegar menu al hacer click en el boton */
hamburguesa.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburguesa.classList.toggle("hideLetters");
});

/* BACK TO TOP BUTTON */
//Get the button:
const mybutton = document.querySelector("#backToTopButton");

// When the user scrolls down 20px from the top of the document, show the button
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    mybutton.style.cursor = "pointer";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.cursor = "default";
  }
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
