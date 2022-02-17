const courseRequest = new XMLHttpRequest();
courseRequest.open('GET', 'https://netology-slow-rest.herokuapp.com');

let renderItem = function(CharCode,Value) {
    let item = document.createElement("div");
            item.classList.add("item");
            item.innerHTML = `<div class="item__code">
            ${CharCode}
        </div>
        <div class="item__value">
        ${Value}
        </div>
        <div class="item__currency">
            руб.
        </div>`
        return item
}

let toDoForNew = function() {
    if (this.readyState === 4) {
        let recievedCourse = JSON.parse(courseRequest.responseText);
        if(document.querySelector(`.loader_active`)){
            document.querySelector(`.loader_active`).classList.remove(`loader_active`);
        }
        let items = document.querySelector(`#items`);
        while (items.firstChild) {
            items.removeChild(items.firstChild);
          }
        let valutes = recievedCourse.response.Valute;
        let valutesKeys = Object.keys(valutes);
        for (let i = 0; i < valutesKeys.length; i++) {
            let item = renderItem(valutes[valutesKeys[i]].CharCode,valutes[valutesKeys[i]].Value)
        items.append(item);
        }
        localStorage.setItem('course', courseRequest.responseText);
    }
}

let toDoForOld = function() {
    if (localStorage.course){
        document.querySelector(`.loader_active`).classList.remove(`loader_active`);
        let items = document.querySelector(`#items`);
        let valutes = JSON.parse(localStorage.getItem(`course`)).response.Valute;
        let valutesKeys = Object.keys(valutes);
        for (let i = 0; i < valutesKeys.length; i++) {
            let item = renderItem(valutes[valutesKeys[i]].CharCode,valutes[valutesKeys[i]].Value)
        items.append(item);
        }
    }
}

courseRequest.addEventListener(`readystatechange`, toDoForNew);
toDoForOld();

courseRequest.send();
