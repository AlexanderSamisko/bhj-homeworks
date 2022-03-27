let countDown;

const newChar = function() {
    const en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // const EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // const ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
    // const RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
    const charPull = en;
    return charPull[Math.floor(Math.random() * (charPull.length - 1))];
    
}

const render = function() {
    const newContent = `<div class="card_solo">
                            <div class="card_row">
                                <div id="game">
                                     <div class="status">
                                         <p>
                                             Правильно введённых слов: <span class="status__wins">0</span>
                                        </p>
                                        <p>
                                            Неправильно введённых слов: <span class="status__loss">0</span>
                                        </p>
                                     </div>
                                </div>
                                <div class="timer">
                                    <p> У вас есть</p>
                                    <p class="timer_text"></p>
                                    <p> секунд на ввод </p>
                                </div>
                            </div>
                            <div class="word">
                            </div>
                        </div>`



    const content = document.querySelector(`.content`);
    content.innerHTML = newContent;
}

const getCharLine = function() {
    let word = document.querySelector(`.word`);
    word.innerHTML = ``;
    let wordLength
    do {
         wordLength = Math.floor(Math.random()*10);
    } while (wordLength < 1);
    for ( let i = 0; i < wordLength; i++) {
        let char = newChar();
        let symbol = `<span class="symbol">${char}</span>`;
        word.innerHTML += symbol;
    }
    document.querySelector(`.symbol`).classList.add("symbol_current");
    timer();
}

const showVictory = function() {
    const content = document.querySelector(`.content`);
    content.innerHTML = `<div class="final"><p>Вы выйграли, бывает!</p><button class="do_start">Начать игру</button></div>`;
}

const showLoss = function() {
    const content = document.querySelector(`.content`);
    content.innerHTML = `<div class="final"><p>Вы проиграли, бывает!</p><button class="do_start">Начать игру</button></div>`;
}

const timer = function() {
    const timerPole = document.querySelector(`.timer_text`);
    let chars = document.querySelectorAll(`.symbol`);
    let charsArr = [...chars];
    timerPole.textContent = charsArr.length*2;
    countDown = setInterval(()=> {
        timerPole.textContent = timerPole.textContent - 1;
        if(timerPole.textContent == 0) {
            clearInterval(countDown);
            document.querySelector(`.status__loss`).textContent = +document.querySelector(`.status__loss`).textContent + 1;
            getCharLine();
            isItLoss();
        }
    },1000)
    
}

const isItWin = function() {
    if (document.querySelector(`.status__wins`).textContent == 10) {
        showVictory();
    } else {
        getCharLine();
    }
}

const isItLoss = function() {
    if (document.querySelector(`.status__loss`).textContent == 3) {
        clearInterval(countDown);
        showLoss();
    }
}

const isItMatch = function(evt) {
    let chars = document.querySelectorAll(`.symbol`);
    let charsArr = [...chars];
    let currentSymbolIndex = charsArr.findIndex((index) => index.classList.contains("symbol_current"));
    let charOfQuest = charsArr[currentSymbolIndex].textContent;
    if (evt.key == charOfQuest) {
        charsArr[currentSymbolIndex].classList.remove("symbol_incorrect");
        charsArr[currentSymbolIndex].classList.add("symbol_correct");
        if (currentSymbolIndex < charsArr.length - 1){
            charsArr[currentSymbolIndex].classList.remove("symbol_current");
            charsArr[currentSymbolIndex + 1].classList.add("symbol_current");
        } else if (currentSymbolIndex == charsArr.length - 1) {
            let winsCount = +document.querySelector(`.status__wins`).textContent;
            winsCount += 1;
            document.querySelector(`.status__wins`).textContent = winsCount;
            isItWin();
        }
    } else {
        charsArr[currentSymbolIndex].classList.add("symbol_incorrect");
        let lossCount = +document.querySelector(`.status__loss`).textContent;
        lossCount += 1;
        document.querySelector(`.status__loss`).textContent = lossCount;
        isItLoss();
    }
}

const renderAndStart = function() {
    document.querySelector(`.do_start`).style.display = "none";
    render();
    getCharLine();

    document.addEventListener(`keyup`, isItMatch);
   

}



document.addEventListener(`click`, (evt) => {
    if (evt.target == document.querySelector(`.do_start`)){
    renderAndStart()
    }});





