import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const hamburger = document.querySelector(".header__hamburger");
const headerMenu = document.querySelector(".header__nav");
const menuItem = document.querySelectorAll(".header__item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

menuItem.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  headerMenu.style.transition = "transform 0.1s ease-out";
  if (window.innerWidth < 1200) {
    document.body.classList.toggle("no-scroll");
  }
});

const swiper = new Swiper(".swiper-plans", {
  spaceBetween: 32,
  initialSlide: 1,
  centeredSlides: true,
  autoHeight: true,
  breakpoints: {
    0: {
      loop: true,
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false,
    },
  },
});
const swiperClient = new Swiper(".swiper-client", {
  spaceBetween: 32,
  initialSlide: 1,
  centeredSlides: true,
  autoHeight: true,
  breakpoints: {
    0: {
      loop: true,
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  pagination: {
    el: ".swiper-client .swiper-pagination",
  },
});

AOS.init({
  duration: 700,
  offset: 50,
  once: true,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
