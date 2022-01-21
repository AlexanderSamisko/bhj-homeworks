let countWin = 0;
let countLose = 0;
const clickedForWin = document.getElementById("dead");   
const clickedForLose = document.getElementById("lost");   
for (let i = 1 ; i < 9; i++) {
    const index = document.getElementById(`hole${i}`);
    index.onclick = function() {
        if (index.classList.contains( 'hole_has-mole' )){
            countWin += 1;
            if (countWin > 9) {
                alert('Вы победили!');
                EndGame();
            };
        } else {
            countLose += 1;
            if (countLose > 4 ) {
                alert('Вы проиграли!');
                EndGame()
            };
        };
        clickedForWin.textContent = countWin;
        clickedForLose.textContent = countLose;
    }
}

function EndGame() {
    countWin = 0;
    countLose = 0;
    clickedForWin.textContent = countWin;
    clickedForLose.textContent = countLose;
}