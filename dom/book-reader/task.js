const controlFsButtons = document.querySelectorAll('div.book__control_font-size a.font-size');
let controlFsButtonsArray = Array.from(controlFsButtons);

const changeFontSize = function(evt) {
    document.querySelector('div.book__control_font-size a.font-size_active').classList.remove('font-size_active');
    this.classList.add('font-size_active');
    let size = this.getAttribute('data-size');
    if (size == 'small') {
        this.closest('#book').classList.remove('book_fs-big');
        this.closest('#book').classList.add('book_fs-small');
    } else if (size == 'big') {
        this.closest('#book').classList.remove('book_fs-small');
        this.closest('#book').classList.add('book_fs-big');
    } else {
        this.closest('#book').classList.remove('book_fs-small');
        this.closest('#book').classList.remove('book_fs-big'); 
    }
    evt.preventDefault();
}

for ( let i = 0; i < controlFsButtonsArray.length; i++){
    controlFsButtons[i].addEventListener('click', changeFontSize);
}

//  следующая панель

const controlTcButtons = document.querySelectorAll('div.book__control_color a.color');
let controlTcButtonsArray = Array.from(controlTcButtons);

const changeTextColor = function(evt) {
    document.querySelector('div.book__control_color a.color_active').classList.remove('color_active');
    this.classList.add('color_active');
    let color = this.getAttribute('data-text-color');
    if (color == 'black') {
        this.closest('#book').classList.remove('book_color-gray');
        this.closest('#book').classList.remove('book_color-whitesmoke');
        this.closest('#book').classList.add('book_color-black');
    } else if (color == 'gray') {
        this.closest('#book').classList.remove('book_color-whitesmoke');
        this.closest('#book').classList.remove('book_color-black');
        this.closest('#book').classList.add('book_color-gray');
    } else {
        this.closest('#book').classList.remove('book_color-black');
        this.closest('#book').classList.remove('book_color-gray');
        this.closest('#book').classList.add('book_color-whitesmoke');
    }
    evt.preventDefault()
}



for ( let j = 0; j < controlTcButtonsArray.length; j++){
    controlTcButtons[j].addEventListener('click', changeTextColor);
}

//следущая панель

const controlBgButtons = document.querySelectorAll('div.book__control_background a.color');
let controlBgButtonsArray = Array.from(controlBgButtons);

const changeBackGround = function(evt) {
    document.querySelector('div.book__control_background a.color_active').classList.remove('color_active');
    this.classList.add('color_active');
    let BgColor = this.getAttribute('data-bg-color');
    if (BgColor == 'black') {
        this.closest('#book').classList.remove('book_bg-gray');
        this.closest('#book').classList.remove('book_bg-whitesmoke');
        this.closest('#book').classList.add('book_bg-black');
    } else if (BgColor == 'gray') {
        this.closest('#book').classList.remove('book_bg-whitesmoke');
        this.closest('#book').classList.remove('book_bg-black');
        this.closest('#book').classList.add('book_bg-gray');
    } else {
        this.closest('#book').classList.remove('book_bg-black');
        this.closest('#book').classList.remove('book_bg-gray');
        this.closest('#book').classList.add('book_bg-whitesmoke');
    }
    evt.preventDefault()
}

for ( let k = 0; k < controlBgButtonsArray.length; k++){
    controlBgButtons[k].addEventListener('click', changeBackGround);
}