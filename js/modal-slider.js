const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container');
const imageView = document.querySelector('.image-view');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const imageBox = document.querySelector('.image-box');

nextBtn.addEventListener('click', (e)=> {
    console.log('next', e)
})

allImages.forEach((imagen, index) =>
	imagen.addEventListener('click', (e) => {
        console.log('e', e.target.currentSrc)
		imageView.style.display = 'block';
		imageBox.style.display = 'block';
        currentImageUrl = e.target.currentSrc
        currentImageDisplay(currentImageUrl)
	})
);



let currentImageUrl= '';

imageView.addEventListener('click', (e) => {
	e.target.style.display = 'none';
	imageBox.style.display = 'none';
});

zoomBtn.forEach((btn, index) =>
	btn.addEventListener('click', (e) => {
		imageView.style.display = 'block';
		imageBox.style.display = 'block';
        currentImageUrl = index + 1;
        currentImageDisplay(currentImageIdx)
	})
);


const currentImageDisplay= (url)=> {
    imageBox.style.background = `url(${url})`
}