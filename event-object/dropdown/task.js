const dropDownDiv = document.querySelectorAll(`div.dropdown__value`);
let dropDownDivArray = Array.from(dropDownDiv);
for (let j = 0; j < dropDownDivArray.length; j++) {
    let dropDownList = dropDownDiv[j].nextElementSibling;
    dropDownDiv[j].onclick = function() {
        if (dropDownList.classList.contains(`dropdown__list_active`)){
            dropDownList.className = `dropdown__list`;
        } else {
            dropDownList.className = `dropdown__list dropdown__list_active`;
        }
        return false
    }
    const dropDownLinks = dropDownList.querySelectorAll(`a.dropdown__link`);
    let dropDownLinksArray = Array.from(dropDownLinks);
    for (let i = 0; i < dropDownLinksArray.length; i++) {
        dropDownLinks[i].onclick = function() {
            dropDownDiv[j].textContent = dropDownLinks[i].textContent;
            dropDownList.className = `dropdown__list`;
            return false
    }
   
}
}



