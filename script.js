document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");

  let slideIndex = 0;

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Update active dot
    const dots = Array.from(dotsContainer.children);
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 2000); // Change slide every 2 seconds
  }

  // Create dots
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => {
      slideIndex = index;
      showSlides();
    });
    dotsContainer.appendChild(dot);
  });

  showSlides();
});
