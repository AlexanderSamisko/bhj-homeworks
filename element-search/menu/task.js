const menuSubs = document.getElementsByClassName('menu_sub');
let menuSubsArray = Array.from(menuSubs);
for (let i = 0; i < menuSubsArray.length; i++) {
    let liParentItem = menuSubs.item(i).closest(`li.menu__item`);
    let anchorItem = liParentItem.querySelector(`a.menu__link`);
    anchorItem.onclick = function() {
        if(anchorItem.closest(`ul.menu_main`).querySelector(`ul.menu_active`)){
            if(anchorItem.closest(`ul.menu_main`).querySelector(`ul.menu_active`) !== anchorItem.nextElementSibling){
                anchorItem.closest(`ul.menu_main`).querySelector(`ul.menu_active`).className = `menu menu_sub`;
                anchorItem.nextElementSibling.className = "menu menu_sub menu_active";
            } else anchorItem.closest(`ul.menu_main`).querySelector(`ul.menu_active`).className = `menu menu_sub`;
        } else anchorItem.nextElementSibling.className = "menu menu_sub menu_active";

        return false
   }
}
