// toggle responsive navigation
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click" , () =>{
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();


// clear form before unload 
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")){
        form.reset();
    }
};

// Slideshow dengan dot navigation
// Slideshow untuk Card A
document.querySelectorAll("[data-slideshow]").forEach(slideshow => {
  const slides = slideshow.querySelectorAll(".pf-slide");
  const dotsContainer = slideshow.parentElement.querySelector(".pf-dots");

  // Generate dots
  dotsContainer.innerHTML = "";
  slides.forEach(() => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-pressed", "false");
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.removeAttribute("data-active"));
    dots.forEach(dot => dot.setAttribute("aria-pressed", "false"));

    slides[i].setAttribute("data-active", "true");
    dots[i].setAttribute("aria-pressed", "true");

    index = i;
  }

  // default: slide pertama
  showSlide(0);

  // klik dot
  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => showSlide(dotIndex));
  });
});



