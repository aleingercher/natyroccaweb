// todos los select

const fotosBroches = document.querySelectorAll(".fotosBroches > img"),
fotosMuniecos = document.querySelectorAll(".fotosMuniecos > img"),
fotosIlustraciones = document.querySelectorAll(".fotosIlustraciones > img"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".fa-times"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  const carouselDeFotos = (section)=> {
    for (let i = 0; i < section.length; i++) {
      let newIndex = i;
      let clickImgIndex;
      section[i].onclick = (e) => {
        clickImgIndex = newIndex;
        imgWidth = section[i].width;
        imgHeight = section[i].height;
        console.log(e)
  
        const preview = () => {
          let selectedImageUrl = section[newIndex].src;
          previewImg.src = selectedImageUrl;
        };
  
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
  
        prevBtn.onclick = () => {
          newIndex--;
          console.log(newIndex);
          if (newIndex == 0) {
            prevBtn.style.display = "none";
          }
          if (newIndex < section.length - 1) {
            nextBtn.style.display = "block";
          }
  
          preview();
        };
  
        nextBtn.onclick = () => {
          newIndex++;
          console.log(newIndex, section.length - 1);
          if (newIndex > 0) {
            prevBtn.style.display = "block";
          }
          if (newIndex == section.length - 1) {
            nextBtn.style.display = "none";
          }
          preview();
        };
        preview();
  
        previewBox.classList.add("show");
        shadow.style.display = 'block';
        document.querySelector('body').style.overflow = "hidden"
  
        // funcion que maneja el cierre del modal
        const closePhoto = () => {
          newIndex = clickImgIndex;
          previewBox.classList.remove("show");
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
          shadow.style.display = 'none';
          document.querySelector('body').style.overflow = "auto"
        };
  
  
        closeIcon.onclick = () => {
          closePhoto();
        };
  
        shadow.onclick = ()=> {
          closePhoto();
        }
      };
    }
  }

  carouselDeFotos(fotosBroches)
  carouselDeFotos(fotosMuniecos)
  carouselDeFotos(fotosIlustraciones)

};
