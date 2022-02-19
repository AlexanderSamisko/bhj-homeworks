let form = document.querySelector(`#form`);
form.addEventListener(`submit`, (evt)=> {
    const postingForm = new FormData(form);
    const requestForm = new XMLHttpRequest();
    requestForm.open(`POST`, `https://netology-slow-rest.herokuapp.com/upload.php`);
        requestForm.upload.onprogress = function(event) {
            const progress = document.getElementById( 'progress' );
            progress.value = event.loaded/event.total;
        }
    requestForm.send(postingForm);
    evt.preventDefault();
})
