const sliderItems = document.getElementsByClassName(`slider__item`);
let sliderItemsArray = Array.from(sliderItems);
let startingSlideNumber = 0;
const sliderDot = document.getElementsByClassName(`slider__dot`);
sliderDot[startingSlideNumber].className = `slider__dot slider__dot_active`;

function getActiveSlideNumber(i) {
    return i.classList.contains(`slider__item_active`)
}
const sliderArrowNext = document.querySelector(`div.slider__arrow_next`);
sliderArrowNext.onclick = function() {
    activeSlideNumber = sliderItemsArray.findIndex(getActiveSlideNumber);
    doDeactive(activeSlideNumber);
    activeSlideNumber = activeSlideNumber + 1;
    if (activeSlideNumber > sliderItemsArray.length - 1) {
        activeSlideNumber = 0;
    }
    doActive(activeSlideNumber);
}


const sliderArrowPrevious = document.querySelector(`div.slider__arrow_prev`);
sliderArrowPrevious.onclick = function() {
    activeSlideNumber = sliderItemsArray.findIndex(getActiveSlideNumber);
    doDeactive(activeSlideNumber);
    activeSlideNumber = activeSlideNumber - 1;
    if (activeSlideNumber < 0) {
        activeSlideNumber = sliderItemsArray.length - 1;
    }
    doActive(activeSlideNumber);
}

let sliderDotArray = Array.from(sliderDot);
for ( let k = 0; k < sliderDotArray.length; k++) {
    sliderDot.item(k).onclick = function() {
        doDeactive(activeSlideNumber);
        activeSlideNumber = k;
        doActive(activeSlideNumber);
    }
}

function doDeactive(a) {
    sliderItems[a].className = `slider__item`;
    sliderDot[a].className = `slider__dot`;
}

function doActive(j) {
    sliderItems[j].className = `slider__item slider__item_active`; 
    sliderDot[j].className = `slider__dot slider__dot_active`;
}
