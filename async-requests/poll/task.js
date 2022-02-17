const questionInit = new XMLHttpRequest();
questionInit.open(`GET`, `https://netology-slow-rest.herokuapp.com/poll.php`);
let answerBlock = document.querySelector(`#poll__answers`);

let showQuestion = function() {
    if (this.readyState === 4) {
        let recievedQuestion = (JSON.parse(questionInit.responseText)).data;
        document.querySelector(`#poll__title`).innerText = `${recievedQuestion.title}`
        let answers = recievedQuestion.answers;
        for ( let i = 0; i < answers.length; i++) {
            let button = document.createElement(`button`);
            button.classList.add("poll__answer");
            button.innerText = `${answers[i]}`;
            document.querySelector(`#poll__answers`).append(button);
        }
    }
}

let thankYou = function(evt) {
    if (evt.target.classList.contains("poll__answer")) {
        alert(`Спасибо Ваш голос принят!`);
        let vote = (JSON.parse(questionInit.responseText)).id;
        let answer = (JSON.parse(questionInit.responseText)).data.answers.findIndex((index) => index == evt.target.innerText);
        const whatIsVotes = new XMLHttpRequest();
        whatIsVotes.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
        whatIsVotes.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        whatIsVotes.send( `vote=${vote}&answer=${answer}`);
        whatIsVotes.addEventListener(`readystatechange`, ()=>
        {
           if(whatIsVotes.readyState === 4) { 
               let votes = (JSON.parse(whatIsVotes.responseText)).stat;
                while (answerBlock.firstChild) {
                    answerBlock.removeChild(answerBlock.firstChild);
                }

                let votesOverall = 0;

                for (let k = 0; k < votes.length; k++) {
                    votesOverall += votes[k].votes;
                }

                for ( let i = 0; i < votes.length; i++) {
                    let voteInfo = document.createElement(`div`);
                    let percentage = (votes[i].votes * 100)/votesOverall;
                    voteInfo.innerHTML = `${votes[i].answer} : <strong>${percentage.toFixed(2)}% </strong>` 
                    answerBlock.append(voteInfo);
                }
            }
        })
    }
}

questionInit.addEventListener(`readystatechange`, showQuestion);
answerBlock.addEventListener(`click`, thankYou);


questionInit.send();
