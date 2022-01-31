class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeForWord = document.querySelector('.timer_text');
    this.wordLength;
   
    this.reset();
    this.registerEvents();

    this.timer();

  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const keyListener = (evt) => {
      let charOfQuest = this.currentSymbol.textContent.toUpperCase();

      if (evt.key.toUpperCase() == charOfQuest) {
        this.success();
      } else {
        this.fail();
      }
    } 
    document.addEventListener('keyup', keyListener)

  }

  timer() {
    this.timeForWord.textContent = this.wordLength;
    let countDown = setInterval(() => {
      this.timeForWord.textContent = this.timeForWord.textContent - 1;
      if (this.timeForWord.textContent == 0) {
          clearInterval(countDown);
          this.fail();
          this.timer();
      }
      }, 1000);
  }
  
  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);
      this.wordLength = words[index].length;
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}



new Game(document.getElementById('game'))

