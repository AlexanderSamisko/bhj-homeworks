const toolTipsFrom = document.querySelectorAll(`.has-tooltip`);
let toolTipsFromArray = [...toolTipsFrom];


let createToolTip = function(element) {
    let position = element.getAttribute(`data-position`);
    let x;
    let y;
    if (position == `bottom`) {
        y = element.getBoundingClientRect().top + 20;
        x = element.getBoundingClientRect().left;  
    } else if (position == `right`) {
        y = element.getBoundingClientRect().top - 5;
        x = element.getBoundingClientRect().right + 10;
    } else if (position == `left`) {
        y = element.getBoundingClientRect().top - 5;
        let toolTipProto = `<div class="tooltip tooltip_active" style="top:400px; left:400px;">${element.getAttribute('title')}</div>`;
        element.insertAdjacentHTML(`afterEnd`, toolTipProto);
        toolTipProto = document.querySelector(`.tooltip_active`);
        let toolTipLenght =  toolTipProto.getBoundingClientRect().right - toolTipProto.getBoundingClientRect().left;
        x = element.getBoundingClientRect().left - toolTipLenght - 5; 
        if (x < toolTipLenght) { // если слева места не хватает, то подсказка сверху
            y = element.getBoundingClientRect().top - 30;
            x = element.getBoundingClientRect().left;
        }
        toolTipProto.remove();
    }   else { // пусть тут будет top и те, у кого забыли указать data-position
        y = element.getBoundingClientRect().top - 30;
        x = element.getBoundingClientRect().left;
    } 
    let toolTip = `<div class="tooltip tooltip_active" style="top:${y}px; left:${x}px;">${element.getAttribute('title')}</div>`;
   return toolTip
}


let toolTipTrigger = function(event) {
    let activeToolTip = document.querySelector(`.tooltip_active`);
        if (activeToolTip) {
            if (activeToolTip.innerText == event.target.getAttribute(`title`)) {
                activeToolTip.remove();
                event.preventDefault();
                return
            } else {
            let forDelete = document.querySelector(`.tooltip_active`);
            forDelete.remove();
            }
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