const cookieImage = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
let counter = 0;
let clickSpeed = 0;
let momentItStart = new Date();
let momentItEnd;
cookieImage.onclick = function() {
    counter += 1;
    clickerCounter.textContent = +clickerCounter.textContent + 1;
    if (counter % 2 === 0) {
        cookieImage.width = 200;
    } else {
        cookieImage.width = 300;
    }
    momentItEnd= new Date();
    clickSpeed = (1000 /(momentItEnd - momentItStart)).toFixed(2);
    clickerCounter.textContent = ` ${counter}  Кликов в секунду ${clickSpeed}`;
    momentItStart = momentItEnd;
}

