const galleryImages = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        updateGallery();
    });
});

function updateGallery() {
    galleryImages.forEach((image, index) => {
        if (index === currentIndex) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}
