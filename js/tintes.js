/**
 * Creator           : Coding's Time
 * Youtube Channel   : https://www.youtube.com/channel/UC6dnKqrImGWqMb9ty1n0Ziw
 * Github Profile    : https://github.com/codingstime
 */

 const tintes = document.querySelector("#tintes");

 // Flag que va a hacer que se ejecute la funcion una sola vez.
 let flag = true;
 
 const fireAutoSlide = () => {
   // cuando la altura de la parte de arriba de la seccion de tintes llegue a la de la parte de abajo del viewport, ejecuta la funcion
   let targetTopPosition = tintes.offsetTop;
   let scrollBottomOfViewport = window.scrollY + window.innerHeight;
   if (flag && targetTopPosition <= scrollBottomOfViewport) {
     autoSlide();
     flag = false;
   }
 };
 
 // escuchamos el scroll, hasta que se ejecuta la funcion
 document.addEventListener("scroll", () => fireAutoSlide());
 
 const autoSlide = () => {
   setInterval(() => {
     slide(getItemActiveIndex() + 1);
   }, 4000); // slide speed = 4s
 };
 
 const slide = (toIndex) => {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
 
   // check if toIndex exceeds the number of carousel items
   if (toIndex >= itemsArray.length) {
     toIndex = 0;
   }
 
   const newItemActive = itemsArray[toIndex];
 
   // start transition
   newItemActive.classList.add("carousel_item__pos_next");
   setTimeout(() => {
     newItemActive.classList.add("carousel_item__next");
     itemActive.classList.add("carousel_item__next");
   }, 20);
 
   // remove all transition class and switch active class
   newItemActive.addEventListener(
     "transitionend",
     () => {
       itemActive.className = "carousel_item";
       newItemActive.className = "carousel_item carousel_item__active";
     },
     {
       once: true,
     }
   );
   document.removeEventListener("scroll", fireAutoSlide());
 };
 
 const getItemActiveIndex = () => {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
 };
 