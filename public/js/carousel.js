// Función para mover el carrusel
let currentSlide = 0;

function moveSlide(step) {
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
currentSlide = (currentSlide + step + totalSlides) % totalSlides; // Cálculo para que el carrusel vuelva al inicio cuando llegue al final

// Desplazar el carrusel a la posición correcta
const carouselImages = document.querySelector('.carousel-images');
carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}