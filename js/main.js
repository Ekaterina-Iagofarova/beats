//// burger-menu JS ////
let burger  = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('burger_active');
  overlay.classList.toggle('overlay_active');
  body.classList.toggle('body_active-menu');
}

burger.addEventListener('click' , toggleMenu);



// slider JS ////
const rightArrow = document.querySelectorAll('.slider__right');
const leftArrow = document.querySelectorAll('.slider__left');
const slideWidth = document.querySelector('.slider__item');
const slider = document.getElementById('sliderRoot');
const sliderList = document.querySelector('.slider__list');

console.log(sliderList);

let sliderPosition = 0;



rightArrow.forEach((arrow) => {
    arrow.addEventListener('click', () => moveToRight());
});

leftArrow.forEach((arrow) => {
    arrow.addEventListener('click', () => moveToLeft());
});

function moveToRight() {
    sliderPosition+= slideWidth.clientWidth;
   
    if (sliderPosition === sliderList.scrollWidth){

        sliderPosition = 0;
    }
    slider.style.transform = `translate(-${sliderPosition}px)`;
}

function moveToLeft() {
    if (sliderPosition === 0){

        sliderPosition = sliderList.scrollWidth - slideWidth.clientWidth;
    }

    else{

        sliderPosition -= slideWidth.clientWidth;
    }
    slider.style.transform = `translate(-${sliderPosition}px)`;
}