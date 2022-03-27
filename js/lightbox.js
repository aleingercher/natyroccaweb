// todos los select

const fotosBroches = document.querySelectorAll(".fotosBroches > img"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".fa-times"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < fotosBroches.length; i++) {
    let newIndex = i;
    let clickImgIndex;
    fotosBroches[i].onclick = () => {
      clickImgIndex = newIndex;

      const preview = () => {
        let selectedImageUrl = fotosBroches[newIndex].src;
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
        if (newIndex < fotosBroches.length - 1) {
          nextBtn.style.display = "block";
        }

        preview();
      };

      nextBtn.onclick = () => {
        newIndex++;
        console.log(newIndex, fotosBroches.length - 1);
        if (newIndex > 0) {
          prevBtn.style.display = "block";
        }
        if (newIndex == fotosBroches.length - 1) {
          nextBtn.style.display = "none";
        }
        preview();
      };
      preview();

      previewBox.classList.add("show");
      shadow.style.display = 'block';
      document.querySelector('body').style.overflow = "hidden"

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
    };
  }
};
