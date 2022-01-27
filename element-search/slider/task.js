const sliderItems = document.getElementsByClassName(`slider__item`);
let sliderItemsArray = Array.from(sliderItems);
let activeSlideNumber = 0;
const sliderDot = document.getElementsByClassName(`slider__dot`);
sliderDot[activeSlideNumber].className = `slider__dot slider__dot_active`;

function getActiveSlideNumber() {
    for (i = 0; i < sliderItemsArray.length; i++) {
        if (sliderItemsArray[i].classList.contains(`slider__item_active`)){
            activeSlideNumber = i;
        }
    }
}
const sliderArrowNext = document.querySelector(`div.slider__arrow_next`);
sliderArrowNext.onclick = function() {
    getActiveSlideNumber();
    doDeactive();
    activeSlideNumber = activeSlideNumber + 1;
    if (activeSlideNumber > sliderItemsArray.length - 1) {
        activeSlideNumber = 0;
    }
    doActive();
}


const sliderArrowPrevious = document.querySelector(`div.slider__arrow_prev`);
sliderArrowPrevious.onclick = function() {
    getActiveSlideNumber();
    doDeactive();
    activeSlideNumber = activeSlideNumber - 1;
    if (activeSlideNumber < 0) {
        activeSlideNumber = sliderItemsArray.length - 1;
    }
    doActive();
}

let sliderDotArray = Array.from(sliderDot);
for (k = 0; k < sliderDotArray.length - 1; k++) {
    sliderDot.item(k).onclick = function() {
        doDeactive();
        activeSlideNumber = k;
        doActive();
    }
}

function doDeactive() {
    sliderItems[activeSlideNumber].className = `slider__item`;
    sliderDot[activeSlideNumber].className = `slider__dot`;
}

function doActive() {
    sliderItems[activeSlideNumber].className = `slider__item slider__item_active`; 
    sliderDot[activeSlideNumber].className = `slider__dot slider__dot_active`;
}
