/* carrossel */

let currentIndex = 0;

  function moveSlide(direction) {
    const carouselSlide = document.getElementById('carouselSlide');
    const totalSlides = carouselSlide.children.length;
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carouselSlide.style.transform = `translateX(${offset}vw)`;

}