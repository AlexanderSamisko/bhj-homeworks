const modalWindow = document.querySelector(`#subscribe-modal`);


modalWindow.classList.add("modal_active");


const closeModal = modalWindow.querySelector(`.modal__close_times`);
closeModal.addEventListener(`click`, ()=> {
    document.cookie = 'action=Close; max-age=360000000';
    modalWindow.classList.remove("modal_active");  
})

