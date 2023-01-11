// ======================= Slider ====================
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 1200,
      disableOnInteraction: false,
    },
  });
