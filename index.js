// HEADER SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// COURSE SLIDER

const courseList = document.querySelector(".course-list");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

const cards = document.querySelectorAll(".course-card");

const cardWidth = cards[0].offsetWidth + 30;

const maxSlide = cards.length - 3;

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxSlide) {
    currentIndex++;

    courseList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;

    courseList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});

// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
