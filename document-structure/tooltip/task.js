const toolTipsFrom = document.querySelectorAll(`.has-tooltip`);
let toolTipsFromArray = [...toolTipsFrom];


let createToolTip = function(element) {
    let y = element.getBoundingClientRect().top + 20;
    let x = element.getBoundingClientRect().left;
    let toolTip = `<div class="tooltip tooltip_active" style="top:${y}px; left:${x}px;">${element.getAttribute('title')}</div>`;
   return toolTip
}


let toolTipTrigger = function(event) {
    if (document.querySelector(`.tooltip_active`)) {
        let forDelete = document.querySelector(`.tooltip_active`);
        forDelete.remove();
    }
    let toolTip = createToolTip(this);
    event.preventDefault();
    event.target.insertAdjacentHTML(`afterEnd`, toolTip); 
    
}

let removeToolTips = function() {
    if (document.querySelector(`.tooltip_active`)) {
        let forDelete = document.querySelector(`.tooltip_active`);
        forDelete.remove();
    }
}

for (let i = 0; i < toolTipsFromArray.length; i++) {
    toolTipsFrom[i].addEventListener('click', toolTipTrigger);
}

document.addEventListener(`scroll`, removeToolTips);