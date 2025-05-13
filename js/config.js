$(document).ready(function() {
  const carousel = $('#mainCarousel');
  const clockContainer = $('.clock-container');
  const totalSlides = $('.carousel-item').length;
  let slideIndex = 0;
  let slideTimer = null;

  function showSlide(index) {
    carousel.carousel(index);
  }

  function startSlidesCycle() {
    slideIndex = 0;
    clockContainer.removeClass('show');
    carousel.show();

    showSlide(slideIndex);

    slideTimer = setInterval(() => {
      slideIndex++;
      if (slideIndex < totalSlides) {
        showSlide(slideIndex);
      } else {
        clearInterval(slideTimer);
        // Após o último slide, espera 1 minuto e mostra o relógio
        setTimeout(showClock, 30000);
      }
    }, 30000);
  }

  function showClock() {
    carousel.hide();
    clockContainer.addClass('show');

    setTimeout(() => {
      clockContainer.removeClass('show');
      carousel.show();
      startSlidesCycle();
    }, 60000); // 5 minutos
  }

  // Inicializa o carousel sem auto-slide
  carousel.carousel({ interval: false, pause: false, wrap: false });

  // Inicia o ciclo
  startSlidesCycle();
});
