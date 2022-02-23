const editor = document.querySelector(`#editor`);

editor.value = localStorage.getItem('textArea');

const forSave = function() {
    localStorage.textArea = `${editor.value}`;
}

editor.addEventListener('keyup', forSave);

const clearBtn = document.querySelector(`#clear`);

const clearArea = function() {
    editor.value = null;
    localStorage.textArea = `${editor.value}`;
}

clearBtn.addEventListener(`click`, clearArea);
