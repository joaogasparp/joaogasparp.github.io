let index = 0;

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-image");
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(--index);
});

document.querySelector(".next").addEventListener("click", () => {
  showSlide(++index);
});

showSlide(index);
