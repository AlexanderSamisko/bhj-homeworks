const menuItems = document.getElementsByClassName('menu__link');
let menuArray = Array.from(menuItems);
let previusDateNew; // флаг для второго навигатора
let previusDate; // флаг для первого навигатора
let activeDateNew; // флаг для второго навигатора
let activeDate; // флаг для первого навигатора
for (index = 0; index < menuArray.length; index++) {
    menuItems.item(index).onclick = function() {
        let activeMenu = this.nextElementSibling; // находим ul - брата
        
        if (!activeMenu.className.includes(`menu_active`)) {  // если  ul-брат пассив 
            activeMenu.className = `menu menu_sub menu_active`; // переводим ul-брата в актив
            activeMenu.date = Date.now(); // делаем временную метку смены состояния ul-брата
            let deactiveMenu = document.querySelectorAll('ul.menu_active'); // смотрим, сколько ul-братьев активно
            let deactiveArray = Array.from(deactiveMenu); // строим из ul-братьев шеренгу
            if (deactiveArray.length < 2) {  // если в шеренге только 1 брат 
                if (activeMenu.closest(`ul.menu_main`).classList.contains(`new`)){  // у него за батю отчим
                    activeDateNew = activeMenu.date; // cчитаем что ul-брат работает на второго навигатора
                } else { // если у ul-брата родной батя
                    activeDate = activeMenu.date; // считаем что ul-брат работает на первого навигатора
                }
            } 
            if (deactiveArray.length > 1 && activeDateNew && activeMenu.closest(`ul.menu_main`).classList.contains(`new`)){ // если ul-братьев больше 1го, и у нового ul-брата и одного из старых ul-братьев за батю отчим
                 for ( i = 0; i < deactiveArray.length; i++) { 
                     if (deactiveArray[i].date == previusDateNew || deactiveArray[i].date == activeDateNew) { // смотрим какой из ul-братьев второго навигатора был раньше
                        deactiveMenu[i].className = `menu menu_sub`; // даем ul-брату выходной
                        previusDateNew = activeMenu.date; // делаем пометку, когда новый ul-брат второго навигатора зашел на смену.
                        break
                    } // и тд и тп.
                }
            } else if (deactiveArray.length > 1 && !activeDateNew && activeMenu.closest(`ul.menu_main`).classList.contains(`new`)){
                activeDateNew = activeMenu.date;
            } else if (deactiveArray.length > 1 && activeDate && !activeMenu.closest(`ul.menu_main`).classList.contains(`new`)) {
                for ( i = 0; i < deactiveArray.length; i++) { 
                    if (deactiveArray[i].date == previusDate || deactiveArray[i].date == activeDate) {
                       deactiveMenu[i].className = `menu menu_sub`;
                       previusDate = activeMenu.date;
                       break
                   }
               }
            } else if (deactiveArray.length > 1 && !activeDate && !activeMenu.closest(`ul.menu_main`).classList.contains(`new`)) {
                activeDate = activeMenu.date;
            }    
        } else if (activeMenu.className.includes(`menu_active`)) {
            activeMenu.className = `menu menu_sub`;
        }


         return false;
    }
}
