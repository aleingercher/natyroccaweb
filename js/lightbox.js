// todos los select

const fotosBroches = document.querySelectorAll(".fotosBroches > img"),
  fotosMuniecos = document.querySelectorAll(".fotosMuniecos > img"),
  fotosIlustraciones = document.querySelectorAll(".fotosIlustraciones > img"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  imgContainer = document.querySelector(".imgContainer:not(.imagen)"),
  closeIcon = previewBox.querySelector(".fa-times"),
  shadow = document.querySelector(".shadow");

document.querySelectorAll(".bio-wide div:not([class*='left'").forEach((e) => console.log(e));
console.log(imgContainer);
window.onload = () => {
  const carouselDeFotos = (section) => {
    for (let i = 0; i < section.length; i++) {
      let newIndex = i;
      let clickImgIndex;
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      section[i].onclick = (e) => {
        clickImgIndex = newIndex;

        if (i == 0) {
          prevBtn.style.display = "none";
        }

        if (i == section.length - 1) {
          nextBtn.style.display = "none";
        }

        const preview = () => {
          let selectedImageUrl = section[newIndex].src;
          previewImg.src = selectedImageUrl;
        };

        const prevBtnLogic = () => {
          newIndex--;
          if (newIndex == 0) {
            prevBtn.style.display = "none";
          }
          if (newIndex < section.length - 1) {
            nextBtn.style.display = "block";
          }

          preview();
        };

        const nextBtnLogic = () => {
          newIndex++;
          if (newIndex > 0) {
            prevBtn.style.display = "block";
          }
          if (newIndex == section.length - 1) {
            nextBtn.style.display = "none";
          }
          preview();
        };

        prevBtn.onclick = () => {
          prevBtnLogic();
        };

        nextBtn.onclick = () => {
          nextBtnLogic();
        };
        preview();

        document.addEventListener("keydown", (e) => {
          if (e.keyCode == 37 && (newIndex > 0)) {
            prevBtnLogic();
          }
          if (e.keyCode == 39 && (newIndex < section.length - 1)) {
            nextBtnLogic();
          }
        });

        previewBox.classList.add("show");
        shadow.style.display = "block";
        document.querySelector("body").style.overflow = "hidden";

        // funcion que maneja el cierre del modal
        const closePhoto = () => {
          newIndex = clickImgIndex;
          previewBox.classList.remove("show");
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
          shadow.style.display = "none";
          document.querySelector("body").style.overflow = "auto";
        };

        closeIcon.onclick = () => {
          closePhoto();
        };

        imgContainer.onclick = () => {
          console.log("click");
          closePhoto();
        };

        shadow.onclick = () => {
          closePhoto();
        };
      };
    }
  };

  carouselDeFotos(fotosBroches);
  carouselDeFotos(fotosMuniecos);
  carouselDeFotos(fotosIlustraciones);
};
