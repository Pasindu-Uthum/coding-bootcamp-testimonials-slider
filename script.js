const slides = document.getElementsByClassName("slide-container");

let slideIndex = 1;
slideShow(slideIndex);

function plusDivs(count) {
  slideShow((slideIndex += count));
}

function slideShow(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex - 1].style.display = "block";
}
