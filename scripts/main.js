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
document.querySelectorAll(".slideshow").forEach(slideshow => {
  const slides = slideshow.querySelectorAll(".slide");
  const dots = slideshow.querySelectorAll(".dot");
  let index = 0;

  function showSlide(newIndex) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[newIndex].classList.add("active");
    dots[newIndex].classList.add("active");
    index = newIndex;
  }

  // aktifkan default slide pertama
  showSlide(0);

  // Event listener tiap dot
  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      showSlide(dotIndex);
    });
  });
});


