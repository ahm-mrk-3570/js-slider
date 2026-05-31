const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const auto = true;
const timeInterval = 3000;
let slideInterval;


const nextSlide = () => {
  //Get Current image
  const current = document.querySelector('.current');
  //Delete Current class
  current.classList.remove('current');

  //Check for next slide
  if(current.nextElementSibling) {
    //Add class to the next slide
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }

  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  //Get Current image
  const current = document.querySelector('.current');
  //Delete Current class
  current.classList.remove('current');

  //Check for next slide
  if(current.previousElementSibling) {
    //Add class to the next slide
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }

  setTimeout(() => current.classList.remove('current'));
}

//Event Listeners
prev.addEventListener('click', () => {
  prevSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, timeInterval);
  }
})

next.addEventListener('click', () => {
  nextSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, timeInterval);
  }
})

//Check auto change slider
if(auto) {
  //Run nextSlide function at the interval time
  slideInterval = setInterval(nextSlide, timeInterval);
}