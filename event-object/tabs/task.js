const tabs = document.querySelectorAll(`.tab`);
let tabsArray = Array.from(tabs);
const tabsContent = document.querySelectorAll(`.tab__content`);

let swapTabs = function() {
    if (document.querySelector(`.tab_active`)) {
        document.querySelector(`.tab_active`).className = 'tab';
    }

    this.className = 'tab tab_active';
}

let swapTabsContent = function() {
    if (document.querySelector(`.tab__content_active`)) {
        document.querySelector(`.tab__content_active`).className = 'tab__content';
    }
    tabsContent[tabsArray.findIndex((index)=>{return index == this})].className = 'tab__content tab__content_active';
}

for (let i = 0; i < tabsArray.length; i++) {
    tabs[i].addEventListener('click', swapTabs);
    tabs[i].addEventListener('click', swapTabsContent);
}

