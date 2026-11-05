// Carousel logic for the static landing page (Campus Life & Portal Highlights)

const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

if (track && prevBtn && nextBtn && dotsContainer) {
  const slides = Array.from(track.children);
  const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
  const AUTO_PLAY_MS = 4000;
  let currentIndex = 0;
  let timer = null;

  function goToSlide(index) {
    // wrap around at both ends
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active-slide', i === currentIndex);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active-dot', i === currentIndex);
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => goToSlide(currentIndex + 1), AUTO_PLAY_MS);
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    startAutoPlay();
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    startAutoPlay();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goToSlide(Number(dot.dataset.index));
      startAutoPlay();
    });
  });

  goToSlide(0);
  startAutoPlay();
}