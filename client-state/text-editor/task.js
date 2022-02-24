const editor = document.querySelector(`#editor`);

editor.value = localStorage.getItem('textArea');

editor.addEventListener('keyup', ()=> {
    localStorage.textArea = editor.value;
});

const clearBtn = document.querySelector(`#clear`);

const clearArea = function() {
    editor.value = null;
    localStorage.removeItem(`textArea`);
}

clearBtn.addEventListener(`click`, clearArea);
