export const callSwiper = function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 90,
    loop: true,
    grabCursor: true,
    centerSlide: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 4,
      },
    },
  }
  );
}