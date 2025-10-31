import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const hamburger = document.querySelector(".header__hamburger");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 32,
  initialSlide: 1,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 1.5,
      loop: false,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false,
      loop: false,
    },
  },
});
