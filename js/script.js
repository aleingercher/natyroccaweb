const menu = document.querySelector(".menu");
const hamburguesa = document.querySelector(".menu .hamburguesa")
const links = document.querySelector(".links")

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if ( window.pageYOffset > 199 ){
      if(prevScrollpos > currentScrollPos) {
          menu.style.top = "-100%";
          menu.style.opacity = "0";
          links.classList.remove("show")
        } else {
            menu.style.top = "25px";
            menu.style.opacity = "1";
        }
    }
    prevScrollpos = currentScrollPos;
};

hamburguesa.addEventListener('click', ()=> {
    console.log('click');
    links.classList.toggle("show")
    hamburguesa.classList.toggle("whiteLetters")
})
