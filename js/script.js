const hamburguesa = document.querySelector(".hamburguesa");
const hamburguesaButton = document.querySelector(".hamburguesa > p");
const links = document.querySelectorAll(".nav > ul > li");
const menu = document.querySelector(".menu"); //Menu vendria a ser todo el menu. Es el selector mas abarcativo
const nav = document.querySelector("#nav");
const todayDay = new Date().getDate(); // dia para la frase del footer

/* MENU */
window.addEventListener("DOMContentLoaded", (event) => {
  changeQuote(4);
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

/* FRASES footer */
const changeQuote = (day) => {
  const frase = document.querySelector(".footer__frase");
  const autor = document.querySelector(".footer__autor");

  switch (true) {
    case day > 20:
      frase.innerHTML = "Tejado gélido: acá y allá retozan algunos pájaros.";
      autor.innerHTML = "Natsume Sōseki";
      break;
    case day > 13:
      frase.innerHTML =
        "Viento Invernal: volviendo y revolviéndonse despierta ecos.";
      autor.innerHTML = "Natsume Sōseki";
      break;
    case day > 21:
      frase.innerHTML =
        "Sin más, de frío se encoje el vasto cielo, se limpia el agua.";
      autor.innerHTML = "Natsume Sōseki";
      break;
    default:
      frase.innerHTML =
        "También cuando te quejas del frió contra tu piel, te siento muy humana.";
      autor.innerHTML = "Natsume Sōseki";
      break;
  }
};

/* SCROLL SMOOTH */
/* const buttons = document.querySelectorAll(".button a");
 
for (const button of buttons) {
    button.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  console.log(this)
  const offsetTopp = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTopp,
    behavior: "smooth"
  });
} */
