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

// reviews JS ////

const findBlock = alias => {
    return $('.reviews__item').filter((ndx, item) =>{
        return $(item).attr('data-related-to') === alias;
    });
};

$('.inter-avatar__link').click(e =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-show');
    const showItem = findBlock(target);
    const item = $this.closest('.inter-avatar');

    showItem.addClass('reviews__item_active').siblings().removeClass('reviews__item_active');
    item.addClass('inter-avatar_active').siblings().removeClass('inter-avatar_active');
});


// team JS ////

const openItem = item => {
    const container = item.closest('.team__item');
    const content = container.find('.team__content');
    const wrap = content.find('.team__wrap');
    const reqHeight = wrap.height();

    container.addClass('team__item_active');
    content.height(reqHeight);
}

const closeEachItem = container =>{
    const items = container.find('.team__content');
    const containerItem = container.find('.team__item');

    containerItem.removeClass('team__item_active');
    items.height(0);
}

$('.team__title').click(e =>{
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const containerElement = $this.closest('.team__item');

    if(containerElement.hasClass('team__item_active')){
        closeEachItem(container);
    }

    else{
        closeEachItem(container);
        openItem($this);
    }
});

// accordeon JS ////



// video JS ////
