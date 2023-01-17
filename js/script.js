// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

///////////////////////////////////////////////////////////
// Portfolio Dropdown

const btnDropEl = document.querySelector(".btn-toggle");
const headerEl = document.querySelector(".port-toggle");

btnDropEl.addEventListener("click", function () {
  headerEl.classList.toggle("dropdown-show");
  btnDropEl.classList.toggle("btn-showmore");
  btnDropEl.classList.toggle("btn-showless");
});

///////////////////////////////////////////////////////////
// Navigation toggle

let toggle = document.querySelectorAll(".toggle-menu__item");
const toggleNavEl = document.querySelector(".toggle__input");

toggle.forEach((el) => {
  el.addEventListener("click", function () {
    toggleNavEl.checked = false;
    bodyEl.classList.toggle("oy-hidden");
  });
});

const btnNavEl = document.querySelector(".toggle__input");
const bodyEl = document.querySelector("body");
const headerNavEl = document.querySelector("nav");
const homeEl = document.querySelector(".home");

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("oy-hidden");
  headerNavEl.classList.toggle("p-fix");
  homeEl.classList.toggle("py-5");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".home-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".nav").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".nav").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-40px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionSocialEl = document.querySelector("footer");

const obsS = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".social").classList.remove("r-0");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".social").classList.add("r-0");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-120px",
  }
);
obsS.observe(sectionSocialEl);

///////////////////////////////////////////////////////////
// Scoll Spy

$(function () {
  var offScroll = false;
  $("nav").on("click", "a", function () {
    $("nav li a.active").removeClass("active");
    $(this).addClass("active");
    offScroll = true;
    setTimeout(() => {
      offScroll = false;
    }, 1000);
  });

  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();
      // Assign active class to nav links while scolling
      $("section").each(function (i) {
        if ($(this).position().top <= scrollDistance && !offScroll) {
          $("nav li a.active").removeClass("active");
          $("nav li a").eq(i).addClass("active");
        }
      });
    })
    .scroll();
});

// //////////////////////////////////////////////////////////
// Vanta Birds
VANTA.BIRDS({
  el: "#home-section",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundAlpha: 0,
  color1: 0xb59d7c,
  color2: 0xffffff,
  colorMode: "lerpGradient",
  birdSize: 0.35,
  quantity: 4.2,
});

// //////////////////////////////////////////////////////////
// Slider js
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
});
