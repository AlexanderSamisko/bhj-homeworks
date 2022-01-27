const mainModal = document.getElementById(`modal_main`);
mainModal.className = `modal modal_active`;
function makeCloseBtn() {
let closeBtn = document.querySelector(`div.modal_active div.modal__content div.modal__close`);
    closeBtn.onclick = function() {
    let closeModal = document.getElementsByClassName('modal modal_active');
    closeModal.item(0).className = `modal`;  
}
}
makeCloseBtn();

const succesModal = document.getElementById(`modal_success`);
let showSuccesBtn = document.querySelector(`div.modal_active div.modal__content a.show-success`);
showSuccesBtn.onclick = function() {
    mainModal.className = `modal`;
    succesModal.className = `modal modal_active`;
    makeCloseBtn();
}


let succesApproveBtn = document.querySelector(`div.modal div.modal__content a.btn_success`);
succesApproveBtn.onclick = function() {
    succesModal.className = `modal`;
}