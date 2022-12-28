// DOM ELEMENTS //
const header = document.querySelector(".header--actual");
const headerPlaceholder = document.querySelector(".header--placeholder");
const ctaBtns = document.querySelectorAll(".btn--cta");
const emailInput = document.querySelector(".email-input");

const sectionHero = document.querySelector(".section--hero");
const section1 = document.querySelector(".section--for-writers");
const section2 = document.querySelector(".section--visually");
const section3 = document.querySelector(".section--wear-hats");
const section4 = document.querySelector(".section--link-ideas");
const section5 = document.querySelector(".section--track");
const section6 = document.querySelector(".section--themes");
const sectionForm = document.querySelector(".section--form");

// const anchor0 = document.querySelector(".anchor--0");
const anchor0 = document.querySelector(".anchor--0");
const anchor01 = document.querySelector(".anchor--01");
const anchor1 = document.querySelector(".anchor--1");
const anchor2 = document.querySelector(".anchor--2");
const anchor3 = document.querySelector(".anchor--3");
const anchor4 = document.querySelector(".anchor--4");
const anchor5 = document.querySelector(".anchor--5");

// Slider magic
const container = document.querySelector(".container-theming");
const blackZone = document.querySelector(".black-zone");

document.querySelector(".slider").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}% `);
});

// Video autoplay

window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);

function videoScroll() {
  if (document.querySelectorAll("video[autoplay]").length > 0) {
    var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll("video[autoplay]");

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}

// SMOOTH SCROLLING //
// SMOOTH SCROLLING
// Event listeners
ctaBtns.forEach((element) => {
  element.addEventListener("click", () => {
    sectionHero.scrollIntoView({ behavior: "smooth", block: "end" });
    setTimeout(() => {
      // emailInput.focus();
    }, 1000);
  });
});

anchor0.addEventListener("click", () => {
  sectionForm.scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(() => {
    emailInput.focus();
  }, 1000);
});
anchor01.addEventListener("click", () => {
  sectionForm.scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(() => {
    emailInput.focus();
  }, 1000);
});
anchor1.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" });
});
anchor2.addEventListener("click", () => {
  section2.scrollIntoView({ behavior: "smooth" });
});
anchor3.addEventListener("click", () => {
  section3.scrollIntoView({ behavior: "smooth" });
});
anchor4.addEventListener("click", () => {
  section4.scrollIntoView({ behavior: "smooth" });
});
anchor5.addEventListener("click", () => {
  section5.scrollIntoView({ behavior: "smooth" });
});

// STICKY NAV //
// STICKY NAV

const stickyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("header-sticky");
    headerPlaceholder.classList.remove("hidden");
  } else {
    headerPlaceholder.classList.add("hidden");
    header.classList.remove("header-sticky");
  }
};

const observer = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(sectionHero);
