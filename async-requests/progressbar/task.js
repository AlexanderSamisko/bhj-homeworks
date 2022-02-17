const requestForm = new XMLHttpRequest();
requestForm.open(`POST`, `https://netology-slow-rest.herokuapp.com/upload.php`);

let form = document.querySelector(`#form`);
let postingForm = new FormData(form);

requestForm.send(postingForm);


let moveProgress = function() {
    const progress = document.getElementById( 'progress' );
    if (this.readyState === 1) {
        progress.value = 0.2;
    } else if (this.readyState === 2) {
        progress.value = 0.6;
    } else if (this.readyState === 3) {
        progress.value = 0.95;
    } else if (this.readyState === 4) {
        progress.value = 1;
    }
}

requestForm.addEventListener(`readystatechange`, moveProgress);
